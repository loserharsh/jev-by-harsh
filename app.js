// Master Application Engine for Jev Talk & Interactive Research Workbench
let currentSlideIndex = 0;
let viewMode = 'split'; // 'split' (Slide + Pro Dossier) or 'focus' (Slide Only)
const slides = window.SLIDES_DATA;

// Audio click sound using Web Audio API
let audioCtx = null;
function playTick(freq = 800, duration = 0.02) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio optional
  }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // If on mobile device, default to focus mode so user gets full 16:9 card experience immediately
  if (window.innerWidth < 768) {
    viewMode = 'focus';
    const splitBtn = document.getElementById('btn-mode-split');
    const focusBtn = document.getElementById('btn-mode-focus');
    if (splitBtn && focusBtn) {
      splitBtn.classList.remove('active');
      focusBtn.classList.add('active');
    }
  }
  renderSlide(0);
  setupEventListeners();
  populateSlideMenu();
});

// Render Slide
function renderSlide(index, direction = 'next') {
  if (index < 0 || index >= slides.length) return;
  currentSlideIndex = index;

  const slide = slides[index];
  const container = document.getElementById('slide-container');
  const breadcrumbEl = document.getElementById('slide-breadcrumbs');
  const badgeEl = document.getElementById('slide-badge-container');
  const counterEl = document.getElementById('nav-counter-text');
  const progressBar = document.getElementById('progress-bar');
  const dotsContainer = document.getElementById('nav-dots-container');

  // Update Breadcrumb & Top Bar
  breadcrumbEl.innerHTML = slide.breadcrumb ? `<span>${slide.breadcrumb}</span>` : '';
  
  // Update Badge
  if (slide.badge) {
    let badgeClass = 'badge-confirmed';
    if (slide.badge === 'LIVE') badgeClass = 'badge-live';
    else if (slide.badge === 'UNCONFIRMED') badgeClass = 'badge-unconfirmed';
    else if (slide.badge === 'SAFE BET') badgeClass = 'badge-safebet';
    else if (slide.badge === 'LIKELY') badgeClass = 'badge-likely';
    else if (slide.badge === 'WILD CARD') badgeClass = 'badge-wildcard';
    
    badgeEl.innerHTML = `<span class="slide-badge ${badgeClass}">${slide.badge}</span>`;
  } else {
    badgeEl.innerHTML = '';
  }

  // Calculate Card Dots for this slide (matching reference screenshot)
  let dotCount = 1;
  if (slide.subIndex.includes('.')) {
    const subNum = parseInt(slide.subIndex.split('.')[1]);
    dotCount = isNaN(subNum) ? 1 : Math.min(subNum, 4);
  } else if (slide.id === '2') {
    dotCount = 2;
  }
  const cardDotsHtml = Array(dotCount).fill('<span class="slide-card-dot"></span>').join('');

  // Build Dual or Focus Layout
  let contentHtml = '';
  if (viewMode === 'split') {
    contentHtml = `
      <div class="dual-layout-grid">
        <!-- Left Column: Visual Slide Presentation Box -->
        <div class="slide-visual-box flex flex-col justify-between">
          <div class="slide-visual-body flex-1 flex flex-col justify-center">
            ${slide.visualHtml}
          </div>
          <div class="slide-card-footer">
            <span class="slide-card-subindex">${slide.subIndex}</span>
            <div class="slide-card-dots">
              ${cardDotsHtml}
            </div>
          </div>
        </div>

        <!-- Right Column: Pro Expert Engineering Dossier -->
        <div class="slide-expert-box space-y-4">
          <div class="flex items-center justify-between border-b border-gray-800 pb-3">
            <div class="flex items-center gap-2">
              <span class="expert-tag-badge">🔬 Pro Analysis</span>
              <span class="text-xs font-mono text-gray-400 font-bold">${slide.subIndex}</span>
            </div>
            <button onclick="toggleViewMode('focus')" class="text-[11px] font-mono text-gray-400 hover:text-lime flex items-center gap-1 transition-colors">
              <span>⛶ Focus Slide</span>
            </button>
          </div>

          <h3 class="text-lg md:text-xl font-bold text-white tracking-tight leading-snug">
            ${slide.expertTitle}
          </h3>

          <div class="text-xs md:text-sm text-gray-300 space-y-3 leading-relaxed">
            ${slide.expertBody}
          </div>

          ${slide.citations && slide.citations.length ? `
            <div class="pt-3 border-t border-gray-800/80 flex flex-wrap items-center gap-2 text-[10px] font-mono text-gray-500">
              <span class="text-gray-400 font-bold uppercase">Sources:</span>
              ${slide.citations.map(c => `<span class="px-2 py-0.5 bg-black/60 border border-gray-800 rounded text-gray-400">${c}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  } else {
    // Focus Slide View
    contentHtml = `
      <div class="max-w-4xl mx-auto space-y-6">
        <div class="slide-visual-box flex flex-col justify-between min-h-[380px] md:min-h-[460px]">
          <div class="slide-visual-body flex-1 flex flex-col justify-center">
            ${slide.visualHtml}
          </div>
          <div class="slide-card-footer">
            <span class="slide-card-subindex">${slide.subIndex}</span>
            <div class="slide-card-dots">
              ${cardDotsHtml}
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center gap-4">
          <button onclick="toggleViewMode('split')" class="btn-pill btn-pill-lime">
            <span>🔬 Show Pro Expert Analysis</span>
          </button>
        </div>
      </div>
    `;
  }

  // Update Content with smooth transition
  container.className = `slide-content ${direction === 'next' ? 'animate-in-next' : 'animate-in-prev'}`;
  container.innerHTML = contentHtml;

  // Render Math if KaTeX is loaded
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(container, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    } catch (e) {}
  }

  // Update Bottom Controls
  counterEl.textContent = `${slide.subIndex}`;
  const pct = ((index + 1) / slides.length) * 100;
  progressBar.style.width = `${pct}%`;

  // Render Dots
  let dotCount = 1;
  if (slide.subIndex.includes('.')) {
    const subNum = parseInt(slide.subIndex.split('.')[1]);
    dotCount = isNaN(subNum) ? 1 : Math.min(subNum, 4);
  }
  dotsContainer.innerHTML = Array(dotCount).fill('<div class="nav-dot active"></div>').join('');

  // Update window hash
  window.location.hash = `slide-${slide.id}`;
}

// Toggle View Mode
function toggleViewMode(forcedMode) {
  viewMode = forcedMode || (viewMode === 'split' ? 'focus' : 'split');
  
  // Update header buttons
  const splitBtn = document.getElementById('btn-mode-split');
  const focusBtn = document.getElementById('btn-mode-focus');
  if (splitBtn && focusBtn) {
    splitBtn.classList.toggle('active', viewMode === 'split');
    focusBtn.classList.toggle('active', viewMode === 'focus');
  }

  renderSlide(currentSlideIndex);
}

// Navigation Functions
function nextSlide() {
  if (currentSlideIndex < slides.length - 1) {
    playTick(900);
    renderSlide(currentSlideIndex + 1, 'next');
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    playTick(600);
    renderSlide(currentSlideIndex - 1, 'prev');
  }
}

function goToSlide(idx) {
  playTick(750);
  renderSlide(idx, idx > currentSlideIndex ? 'next' : 'prev');
  toggleSlideMenu(false);
}

// Setup Event Listeners
function setupEventListeners() {
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'Escape') {
      toggleDrawer(false);
      toggleSlideMenu(false);
    }
  });

  // Enhanced Mobile Touch Swipe (respects vertical scrolling)
  let touchStartX = 0;
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    // Only navigate if horizontal swipe is clearly dominant over vertical scroll
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) nextSlide();
      else prevSlide();
    }
  }, { passive: true });
}

// Populate Jump-to-Slide Menu
function populateSlideMenu() {
  const list = document.getElementById('slide-menu-list');
  if (!list) return;

  list.innerHTML = slides.map((s, idx) => `
    <div onclick="goToSlide(${idx})" class="p-2.5 rounded-lg hover:bg-gray-800/80 cursor-pointer flex items-center justify-between text-xs font-mono transition-colors ${idx === currentSlideIndex ? 'text-lime bg-lime/10' : 'text-gray-300'}">
      <span class="font-bold w-16">${s.subIndex}</span>
      <span class="truncate flex-1 pl-2 text-gray-400">${s.title}</span>
      ${s.badge ? `<span class="text-[10px] px-1.5 py-0.5 rounded bg-gray-900 text-gray-400">${s.badge}</span>` : ''}
    </div>
  `).join('');
}

function toggleSlideMenu(show) {
  const modal = document.getElementById('slide-menu-modal');
  if (show === undefined) show = modal.classList.contains('hidden');
  if (show) {
    populateSlideMenu();
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

// Drawer Controller
function toggleDrawer(show) {
  const root = document.getElementById('app-root');
  if (show) {
    root.classList.add('drawer-active');
  } else {
    root.classList.remove('drawer-active');
  }
}

function openDeepDiveTab(tabId) {
  toggleDrawer(true);
  switchTab(tabId);
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
    btn.classList.toggle('border-lime', btn.dataset.tab === tabId);
    btn.classList.toggle('text-lime', btn.dataset.tab === tabId);
  });

  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('hidden', panel.id !== `tab-panel-${tabId}`);
  });
}

// Interactive Simulators

// 1. Slide 5 Interactive Triage
window.setSlide5Ticket = function(type) {
  const stateEl = document.getElementById('slide5-state-text');
  const barsEl = document.getElementById('slide5-bars');
  if (!stateEl || !barsEl) return;

  if (type === 'damaged') {
    stateEl.textContent = '"My package arrived damaged and I want a refund."';
    barsEl.innerHTML = `
      <div><div class="flex justify-between text-xs font-mono text-gray-200 mb-0.5"><span class="font-bold text-lime">shipping</span><span class="text-lime">0.71</span></div><div class="bar-track"><div class="bar-fill" style="width: 71%;"></div></div></div>
      <div><div class="flex justify-between text-xs font-mono text-gray-400 mb-0.5"><span>billing</span><span>0.24</span></div><div class="bar-track"><div class="bar-fill opacity-60" style="width: 24%;"></div></div></div>
      <div><div class="flex justify-between text-xs font-mono text-gray-400 mb-0.5"><span>general</span><span>0.04</span></div><div class="bar-track"><div class="bar-fill opacity-40" style="width: 4%;"></div></div></div>
      <div><div class="flex justify-between text-xs font-mono text-gray-400 mb-0.5"><span>technical</span><span>0.01</span></div><div class="bar-track"><div class="bar-fill opacity-30" style="width: 1%;"></div></div></div>
    `;
  } else if (type === 'invoice') {
    stateEl.textContent = '"I was charged twice on my card for subscription renewal, please reverse charge."';
    barsEl.innerHTML = `
      <div><div class="flex justify-between text-xs font-mono text-gray-200 mb-0.5"><span class="font-bold text-lime">billing</span><span class="text-lime">0.96</span></div><div class="bar-track"><div class="bar-fill" style="width: 96%;"></div></div></div>
      <div><div class="flex justify-between text-xs font-mono text-gray-400 mb-0.5"><span>general</span><span>0.03</span></div><div class="bar-track"><div class="bar-fill opacity-40" style="width: 3%;"></div></div></div>
      <div><div class="flex justify-between text-xs font-mono text-gray-400 mb-0.5"><span>technical</span><span>0.01</span></div><div class="bar-track"><div class="bar-fill opacity-30" style="width: 1%;"></div></div></div>
      <div><div class="flex justify-between text-xs font-mono text-gray-400 mb-0.5"><span>shipping</span><span>0.00</span></div><div class="bar-track"><div class="bar-fill opacity-20" style="width: 0%;"></div></div></div>
    `;
  } else if (type === 'login') {
    stateEl.textContent = '"Two factor authentication SMS is never arriving to my mobile phone, locked out."';
    barsEl.innerHTML = `
      <div><div class="flex justify-between text-xs font-mono text-gray-200 mb-0.5"><span class="font-bold text-lime">technical</span><span class="text-lime">0.89</span></div><div class="bar-track"><div class="bar-fill" style="width: 89%;"></div></div></div>
      <div><div class="flex justify-between text-xs font-mono text-gray-400 mb-0.5"><span>general</span><span>0.08</span></div><div class="bar-track"><div class="bar-fill opacity-50" style="width: 8%;"></div></div></div>
      <div><div class="flex justify-between text-xs font-mono text-gray-400 mb-0.5"><span>billing</span><span>0.02</span></div><div class="bar-track"><div class="bar-fill opacity-30" style="width: 2%;"></div></div></div>
      <div><div class="flex justify-between text-xs font-mono text-gray-400 mb-0.5"><span>shipping</span><span>0.01</span></div><div class="bar-track"><div class="bar-fill opacity-20" style="width: 1%;"></div></div></div>
    `;
  }
};

window.runSlide5Sim = function() {
  const bars = document.getElementById('slide5-bars');
  if (!bars) return;
  bars.style.opacity = '0.3';
  playTick(1200);
  setTimeout(() => {
    bars.style.opacity = '1';
    playTick(1500);
  }, 120);
};

// 2. Slide 7 Speed Race
window.runSpeedRace = function() {
  const llmEl = document.getElementById('slide7-llm-time');
  const jevEl = document.getElementById('slide7-jev-time');
  if (!llmEl || !jevEl) return;

  jevEl.innerHTML = '<span class="text-xs text-lime animate-pulse">Computing...</span>';
  llmEl.innerHTML = '<span class="text-xs text-blue-400 animate-pulse">Streaming tokens (0/216)...</span>';

  setTimeout(() => {
    jevEl.innerHTML = '650 <span class="text-xs text-lime/70 font-mono">ms</span>';
    playTick(1600);
  }, 650);

  let elapsed = 0;
  const timer = setInterval(() => {
    elapsed += 250;
    const tokens = Math.min(216, Math.floor((elapsed / 4070) * 216));
    if (elapsed < 4070) {
      llmEl.innerHTML = `${(elapsed / 1000).toFixed(2)} <span class="text-[11px] text-blue-400 font-mono">(${tokens} tok)</span>`;
    } else {
      clearInterval(timer);
      llmEl.innerHTML = '4.07 <span class="text-xs text-gray-400 font-mono">s</span>';
      playTick(500);
    }
  }, 250);
};

// 3. Interactive Review Analyzer (CampusX Demo Simulator)
window.runCampusXAnalysis = function() {
  const reviewText = document.getElementById('campusx-input').value;
  const resultContainer = document.getElementById('campusx-results');
  const latencyBadge = document.getElementById('campusx-latency');

  latencyBadge.textContent = 'Running parallel forward pass...';
  playTick(900);

  setTimeout(() => {
    latencyBadge.textContent = '128 ms (14 Qs evaluated in 1 pass)';
    playTick(1400);

    const topics = [
      { name: 'Camera', kw: ['camera', 'photo', 'portrait', 'lens', 'sensor', 'night mode'], defaultScore: 4.8 },
      { name: 'Battery', kw: ['battery', 'drain', 'charge', 'mah', 'backup'], defaultScore: 1.8 },
      { name: 'Display', kw: ['screen', 'display', 'amoled', 'hz', 'refresh', 'brightness'], defaultScore: 4.2 },
      { name: 'Performance', kw: ['lag', 'gaming', 'fast', 'snapdragon', 'fps', 'smooth', 'processor'], defaultScore: 4.5 },
      { name: 'Build Quality', kw: ['build', 'plastic', 'glass', 'sturdy', 'premium', 'hand'], defaultScore: 3.9 },
      { name: 'Value for Money', kw: ['price', 'worth', 'value', 'cheap', 'budget', 'expensive'], defaultScore: 4.4 }
    ];

    const lower = reviewText.toLowerCase();
    const rows = topics.map(t => {
      const mentioned = t.kw.some(k => lower.includes(k)) || Math.random() > 0.4;
      const prob = mentioned ? (0.75 + Math.random() * 0.24).toFixed(2) : (0.05 + Math.random() * 0.25).toFixed(2);
      const score = (t.defaultScore + (Math.random() * 0.4 - 0.2)).toFixed(1);
      const isIncluded = parseFloat(prob) >= 0.50;

      return `
        <div class="p-3 bg-black/40 border border-gray-800 rounded-lg flex items-center justify-between">
          <div>
            <div class="font-bold text-sm text-white">${t.name}</div>
            <div class="text-xs font-mono ${isIncluded ? 'text-lime' : 'text-gray-500'}">
              Mentioned Prob: ${prob} ${isIncluded ? '✓ (Gated)' : '✗ (Skipped)'}
            </div>
          </div>
          <div class="text-right">
            ${isIncluded ? `
              <div class="text-base font-bold text-lime font-mono">${score} ★</div>
              <div class="text-[10px] font-mono text-gray-400">Score level: 4/4</div>
            ` : `
              <div class="text-xs font-mono text-gray-500">Not Mentioned</div>
            `}
          </div>
        </div>
      `;
    }).join('');

    resultContainer.innerHTML = rows;
  }, 128);
};

// Fullscreen
window.toggleFullscreen = function() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
};
