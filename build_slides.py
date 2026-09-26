# build_slides.py - Compiles the 44-slide master dataset with both Presentation Visuals and Pro-Expert Engineering Dossiers
import json
import os

slides = []

def add_slide(s_id, act, sub_idx, breadcrumb, badge, title, visual_html, expert_title, expert_body, citations):
    slides.append({
        "id": s_id,
        "act": act,
        "subIndex": sub_idx,
        "breadcrumb": breadcrumb,
        "badge": badge,
        "title": title,
        "visualHtml": visual_html,
        "expertTitle": expert_title,
        "expertBody": expert_body,
        "citations": citations
    })

# --- ACT 1: So what is Jev? ---
add_slide(
    "1", "1 / 16", "1 / 16", "", None,
    "So what is Jev?",
    """
    <div class="text-center py-10">
      <h1 class="slide-title-hero mb-6">So what is <span class="text-lime">Jev?</span></h1>
      <p class="slide-subtitle-hero text-gray-300">It's a new AI model.</p>
      <div class="mt-8 flex justify-center gap-3">
        <span class="px-3 py-1 bg-lime/10 border border-lime/40 text-lime font-mono text-xs rounded-full">TypeSafe AI</span>
        <span class="px-3 py-1 bg-gray-800 text-gray-300 font-mono text-xs rounded-full">v1.13.0 System One</span>
      </div>
    </div>
    """,
    "The Paradigm Shift: From Text Generation to Direct Latent Decision Projection",
    """
    <p>Every major AI foundation model since GPT-2 has treated automated tasks as <strong>autoregressive text generation</strong>: estimating joint token probabilities $P(w_1, w_2, \dots, w_N) = \prod_{i=1}^N P(w_i \mid w_{<i})$. When software needs an operational decision (e.g., routing an email, evaluating an agent tool call, verifying a security policy), engineers prompt an LLM to generate natural language explanations or JSON text, then parse that string back into application state.</p>
    <div class="expert-callout my-3">
      <strong>The Fundamental Flaw:</strong> Autoregressive decode loops require $O(N)$ sequential GPU memory transfers, bottlenecked strictly by High Bandwidth Memory (HBM) bandwidth rather than Tensor Core compute. Generating <em>"The priority is High because..."</em> costs hundreds of milliseconds and thousands of arithmetic operations for a decision that requires only a single vector classification.
    </div>
    <p><strong>Jev</strong> (launched September 2026 by TypeSafe AI) replaces autoregressive token-by-token generation with <strong>direct latent readout heads</strong> over a shared context representation. It provides a non-generative, System 1 decision engine executing in ~120 ms.</p>
    """,
    ["TypeSafe AI Launch Post (Sep 2026)", "Archer Hume: Jev's Architecture Unmasked"]
)

# --- ACT 2: It's not an LLM ---
add_slide(
    "2", "2 / 16", "2 / 16", "", None,
    "It's not an LLM.",
    """
    <div class="relative py-6">
      <div class="watermark-grid">
        <span>Halcyon-3</span><span>Numina 70B</span><span>Corvid Mini</span><span>Tessellate-XL</span>
        <span>Verdigris 8x22</span><span>Lacuna-1.5</span><span>Sombre 32K</span><span>Quillon Air</span>
        <span>Fathom-9</span><span>Basalt Ultra</span><span>Nimbus</span><span>Qwen-Max</span>
      </div>
      <div class="relative z-10">
        <h2 class="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
          So what? A lot of models<br/>come up every other week.
        </h2>
        <p class="text-xl md:text-2xl font-medium text-gray-300 mb-6">
          But <span class="text-lime font-bold">Jev is different.</span>
        </p>
        <div class="inline-block bg-black/70 border border-lime/40 px-6 py-4 rounded-xl shadow-[0_0_35px_rgba(180,243,77,0.15)]">
          <h1 class="text-4xl md:text-6xl font-black text-white tracking-tight">
            It's not an <span class="text-lime underline decoration-lime/50 underline-offset-8">LLM.</span>
          </h1>
        </div>
      </div>
    </div>
    """,
    "Decision Models vs Language Models: The Structural Boundary",
    """
    <p>In industry parlance, virtually every model released in 2025–2026 (such as Halcyon-3, Numina 70B, Qwen-Max, or Claude 3.5/3.7) is an autoregressive language model. Even when constrained using structured decoding frameworks (like Outlines, Guidance, or SGLang grammar masks), these models remain text generators at their core: they sample tokens from a 150k–200k vocabulary vocabulary distribution sequentially.</p>
    <div class="expert-equation my-3">
      LLM: x_{t+1} \sim \text{Softmax}(W_{\text{vocab}} h_t) \quad \text{repeated for } t = 1 \dots N
    </div>
    <div class="expert-equation my-3">
      Jev Decision Model: \mathbf{p} = \text{Softmax}(W_{\text{decision}} h_{\text{terminal}} / T) \quad \text{single step, } K \ll |\mathcal{V}|
    </div>
    <p>By constraining the output space to a predefined schema vector of $K$ options (where $K$ is typically 2 to 255) rather than the open vocabulary $\mathcal{V}$, Jev bypasses token generation entirely, achieving mathematical closure over the choice set.</p>
    """,
    ["Archer Hume §1: End inference with a readout", "TypeSafe API Technical Reference"]
)

# --- ACT 3: Jev does not generate text ---
add_slide(
    "3", "3 / 16", "3 / 16", "", None,
    "Jev does not generate text.",
    """
    <div class="space-y-4 py-4">
      <div class="p-3 bg-[#13161f] border border-gray-800 rounded-lg text-xs font-mono text-gray-300">
        <span class="text-gray-500 uppercase">Question:</span> Is this ticket urgent?
      </div>
      
      <div class="p-4 bg-[#12141a] border border-gray-800 rounded-xl space-y-2 opacity-75">
        <div class="flex justify-between text-xs font-mono text-blue-400">
          <span>LLM (Sequential Tokens)</span>
          <span>token 10 / 45</span>
        </div>
        <div class="text-xs text-gray-400 font-mono italic">
          "Yes, this ticket seems urgent because the customer..."
        </div>
        <div class="w-full bg-gray-800 h-1.5 rounded overflow-hidden">
          <div class="bg-blue-400 h-full w-[25%] animate-pulse"></div>
        </div>
      </div>

      <div class="pt-2">
        <h1 class="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
          <span class="text-lime">Jev</span> does not<br/>generate text.
        </h1>
        <p class="text-xs text-gray-400 font-mono mt-2">Illustrative token stream — not model output.</p>
      </div>
    </div>
    """,
    "Arithmetic Intensity & Roofline Limits of Next-Token Decoding",
    """
    <p>To understand why text generation is slow, consider the GPU Roofline Model: performance is bound by either arithmetic compute (FLOP/s) or memory bandwidth (GB/s). In LLM token generation (the decode phase), the batch size is often small (1-8), meaning every single token generated requires streaming all 70+ billion parameters from VRAM to SRAM:</p>
    <div class="expert-equation my-3">
      \text{Arithmetic Intensity}_{\text{decode}} = \frac{2 \times P \text{ FLOPs}}{2 \times P \text{ Bytes}} \approx 1 \text{ FLOP/Byte}
    </div>
    <p>On an NVIDIA H100 (3.35 TB/s HBM3 bandwidth, 1,979 TFLOP/s FP16 compute), an arithmetic intensity of 1 FLOP/Byte utilizes less than <strong>0.2%</strong> of the GPU's compute capability! The GPU is starved of compute, waiting for memory bus transfers.</p>
    <p>In Jev, because the entire prompt and decision query are ingested in <strong>one single prefill forward pass</strong>, arithmetic intensity reaches 100–300 FLOPs/Byte. The GPU saturates its Tensor Cores, finishing the inference in milliseconds.</p>
    """,
    ["Roofline Model Analysis in Transformer Serving", "Archer Hume §6: Sparse Capacity"]
)

# --- ACT 4: Built for fast structured decisions ---
add_slide(
    "4", "4 / 16", "4 / 16", "So what is Jev?", None,
    "Fast, structured decisions for software",
    """
    <div class="py-8 space-y-4">
      <div class="text-xs font-mono text-gray-400 uppercase tracking-widest">Core Mission</div>
      <h1 class="text-2xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
        Jev is an AI model built to make <span class="text-lime">fast, structured decisions</span> that software can use directly.
      </h1>
      <div class="p-4 bg-black/40 border border-gray-800 rounded-xl space-y-2 mt-4 font-mono text-xs">
        <div class="text-gray-400">Traditional Stack: State &rarr; LLM &rarr; English string &rarr; Regex/Pydantic &rarr; If-Else</div>
        <div class="text-lime font-bold">Jev Stack: State &rarr; Jev Readout &rarr; Typed Probability Vector &rarr; Deterministic Code</div>
      </div>
    </div>
    """,
    "Eliminating the Fragile Grammar-Constrained Parsing Middleware",
    """
    <p>Modern agent frameworks expend significant compute attempting to coerce LLMs into valid JSON using schema parsers (Outlines, Instructor, Pydantic). When an LLM generates structured output via JSON mode, it still executes token-by-token. A single stray character, backslash escape failure, or truncated token invalidates the entire response.</p>
    <p>Jev bypasses parsing middleware altogether. The client submits a native typed question schema:</p>
    <ul class="list-disc pl-5 space-y-1 text-xs font-mono text-gray-300">
      <li><strong>Noul:</strong> Calibrated probability $p \in [0.0, 1.0]$ representing a binary boolean condition.</li>
      <li><strong>Choice:</strong> A categorical distribution over an explicit set of string literals with normalized probabilities.</li>
      <li><strong>Score:</strong> An ordinal rubric scale ($0 \dots K-1$) with satisfaction probabilities.</li>
    </ul>
    <p>Because the output is emitted as native floating-point tensors directly from the model's head, serialization is instant and 100% type-safe.</p>
    """,
    ["TypeSafe AI: Primitives and Questions Documentation", "CampusX: Jev Demo Architecture"]
)

# --- ACT 5: One Parallel Pass Interactive ---
add_slide(
    "5", "5 / 16", "5 / 16", "", None,
    "One Parallel Pass: State, Question, Options",
    """
    <div class="space-y-4 py-2">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        <!-- State Column -->
        <div class="md:col-span-6 space-y-2">
          <div class="text-[11px] font-mono text-gray-400 uppercase tracking-wider">State (Shared Context)</div>
          <div id="slide5-state-text" class="text-xs text-gray-200 font-mono bg-black/50 p-2.5 rounded border border-gray-800">
            "My package arrived damaged and I want a refund."
          </div>
          <div class="flex gap-1.5">
            <button onclick="window.setSlide5Ticket('damaged')" class="text-[10px] font-mono px-2 py-0.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded">Package</button>
            <button onclick="window.setSlide5Ticket('invoice')" class="text-[10px] font-mono px-2 py-0.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded">Double Charge</button>
            <button onclick="window.setSlide5Ticket('login')" class="text-[10px] font-mono px-2 py-0.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded">2FA Error</button>
          </div>
        </div>

        <!-- Engine Pass -->
        <div class="md:col-span-6 flex flex-col items-center">
          <div class="p-3 bg-[#161a22] border border-lime/70 rounded-xl text-center w-full shadow-[0_0_20px_rgba(180,243,77,0.1)]">
            <div class="text-xl font-black text-lime">Jev Engine</div>
            <div class="text-[10px] font-mono text-gray-300">single forward pass · ~120 ms</div>
          </div>
          <button onclick="window.runSlide5Sim()" class="mt-1.5 text-[11px] font-mono text-lime hover:underline cursor-pointer">
            ⚡ Re-run pass
          </button>
        </div>
      </div>

      <!-- Probability Readout Bars -->
      <div class="p-3 bg-black/40 border border-gray-800 rounded-xl space-y-2" id="slide5-bars">
        <div>
          <div class="flex justify-between text-xs font-mono text-gray-200 mb-0.5"><span class="font-bold text-lime">shipping</span><span class="text-lime">0.71</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: 71%;"></div></div>
        </div>
        <div>
          <div class="flex justify-between text-xs font-mono text-gray-400 mb-0.5"><span>billing</span><span>0.24</span></div>
          <div class="bar-track"><div class="bar-fill opacity-60" style="width: 24%;"></div></div>
        </div>
        <div>
          <div class="flex justify-between text-xs font-mono text-gray-400 mb-0.5"><span>general</span><span>0.04</span></div>
          <div class="bar-track"><div class="bar-fill opacity-40" style="width: 4%;"></div></div>
        </div>
        <div>
          <div class="flex justify-between text-xs font-mono text-gray-400 mb-0.5"><span>technical</span><span>0.01</span></div>
          <div class="bar-track"><div class="bar-fill opacity-30" style="width: 1%;"></div></div>
        </div>
      </div>

      <div class="text-center font-bold text-white text-base">
        No text. No parsing. Just a typed answer with a probability.
      </div>
    </div>
    """,
    "Internal Mechanics: Linear Projection from Terminal Latent State",
    """
    <p>How does Jev convert unstructured text into calibrated probabilities in ~120ms? Let the input sequence be tokens $X = [x_1, \dots, x_M]$ corresponding to the shared state and the question prompt.</p>
    <div class="expert-equation my-3">
      H = \text{TransformerBackbone}(X), \quad h_{\text{last}} = H[-1] \in \mathbb{R}^{d_{\text{model}}}
    </div>
    <p>Instead of mapping $h_{\text{last}}$ to a 128,000-dimensional language vocabulary head, Jev projects $h_{\text{last}}$ through a task-specific projection matrix $W \in \mathbb{R}^{K \times d_{\text{model}}}$ and bias $b \in \mathbb{R}^K$:</p>
    <div class="expert-equation my-3">
      z_k = W_k h_{\text{last}} + b_k, \quad p(y = k \mid X) = \frac{\exp(z_k / T)}{\sum_{j=1}^K \exp(z_j / T)}
    </div>
    <p>Archer Hume's probe of 10,000 calls revealed that increasing options from 2 to 255 produced zero measurable variance in server latency (~160ms execution), confirming that the operation is a single feedforward projection without iterative loops.</p>
    """,
    ["Archer Hume §1: End inference with a readout", "Jared Palmer: Kev Head Architecture"]
)

# --- ACT 6: Speed & Cost ---
add_slide(
    "6", "6 / 16", "6 / 16", "", None,
    "Why LLMs fail on structured output: Speed & Cost",
    """
    <div class="py-6 space-y-4">
      <h1 class="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
        So what? Any LLM can do this with structured output.
      </h1>
      <p class="text-xl text-gray-300 font-medium">
        True. It can. Two things change:
      </p>
      <div class="grid grid-cols-2 gap-4 pt-2">
        <div class="p-4 bg-[#141722] border border-lime/30 rounded-xl">
          <span class="text-lime font-mono font-bold text-xl">01</span>
          <div class="text-2xl font-black text-white mt-1">Speed</div>
          <div class="text-xs text-gray-400 mt-1">From seconds to sub-200ms reflexes</div>
        </div>
        <div class="p-4 bg-[#141722] border border-lime/30 rounded-xl">
          <span class="text-lime font-mono font-bold text-xl">02</span>
          <div class="text-2xl font-black text-white mt-1">Cost</div>
          <div class="text-xs text-gray-400 mt-1">80× to 400× lower token overhead</div>
        </div>
      </div>
      <p class="text-xs font-mono text-gray-500 pt-2 border-t border-gray-800">
        Both measured on the same job: triaging a support inbox with Jev and with an LLM.
      </p>
    </div>
    """,
    "The Economics of Decision Automation",
    """
    <p>When organizations deploy LLMs for workflow automation (e.g. Zendesk/Salesforce inbox routing, KYC transaction screening, content moderation), they encounter severe scaling walls:</p>
    <div class="expert-callout my-3">
      <strong>1. The Latency Ceiling:</strong> Human perception recognizes lag beyond 150–200 ms. A 3-to-4 second LLM call cannot be inserted into real-time UI typing, autocomplete, or high-speed gaming loops.<br/>
      <strong>2. Reasoning Token Inflation:</strong> Modern frontier models (like OpenAI o1/o3 or DeepSeek-R1) generate hundreds or thousands of internal 'reasoning tokens' prior to outputting an answer, multiplying cost by 10x-50x on simple classification tasks.
    </div>
    <p>By decoupling semantic comprehension from conversational generation, System 1 decision models transform semantic checking into a utility as fast and cheap as a database query.</p>
    """,
    ["docs.typesafe.ai/concepts/use-case-map", "Benchmark Heaven: Cost vs Capability"]
)

# --- ACT 7: Difference 1 - Speed ---
add_slide(
    "7", "7 / 16", "7 / 16", "", "LIVE",
    "First Difference: Speed (650ms vs 4.07s)",
    """
    <div class="py-2 space-y-4">
      <div>
        <h2 class="text-xl md:text-2xl font-bold text-white">First difference: <span class="text-lime">speed.</span></h2>
        <p class="text-[11px] font-mono text-gray-400">Published: LLM 3s – 329s · Jev 70 – 500ms · Claim 40–200× faster</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- LLM Box -->
        <div class="jev-card space-y-2">
          <div class="flex justify-between text-xs font-mono text-blue-400">
            <span class="font-bold">LLM</span>
            <span>gpt-5-2025-08-07</span>
          </div>
          <div id="slide7-llm-time" class="text-3xl md:text-4xl font-mono font-bold text-white">4.07 <span class="text-xs text-gray-400">s</span></div>
          <div class="text-[11px] font-mono text-gray-400">conf 0.99 · 137 in / 216 out</div>
        </div>

        <!-- Jev Box -->
        <div class="jev-card jev-card-glow space-y-2">
          <div class="flex justify-between text-xs font-mono text-lime">
            <span class="font-bold">Jev</span>
            <span>jev-1.13.0</span>
          </div>
          <div id="slide7-jev-time" class="text-3xl md:text-4xl font-mono font-bold text-lime">650 <span class="text-xs text-lime/70">ms</span></div>
          <div class="text-[11px] font-mono text-lime/80">conf 1.00 · 387 in / 45 out</div>
        </div>
      </div>

      <div class="flex justify-between items-center pt-1">
        <span class="font-bold text-white text-sm">Jev answered <span class="text-lime">6.3× faster</span> — same answer.</span>
        <button onclick="window.runSpeedRace()" class="btn-pill btn-pill-lime">▶ Run Real-Time Race</button>
      </div>
      <p class="text-[10px] font-mono text-gray-500 border-t border-gray-800 pt-2">Figures are TypeSafe's own from their launch post. Independent benchmark audits shown in Deep-Dive.</p>
    </div>
    """,
    "Empirical Latency Breakdown: Jev vs Open Clones (Laya, Decider-4b)",
    """
    <p>While TypeSafe reports end-to-end HTTP latency of 70 ms to 500 ms (median 650 ms on cross-internet API evals), independent benchmarking on <strong>Benchmark Heaven (JevBench)</strong> reveals critical distinctions between network transit and raw model compute:</p>
    <div class="overflow-x-auto my-3">
      <table class="w-full text-left font-mono text-[11px] border border-gray-800">
        <thead class="bg-gray-900 text-gray-400">
          <tr><th class="p-1.5">Model</th><th class="p-1.5">Compute Engine</th><th class="p-1.5">P50 Latency</th><th class="p-1.5">P99 Latency</th></tr>
        </thead>
        <tbody class="divide-y divide-gray-800/60 text-gray-300">
          <tr><td class="p-1.5 text-lime font-bold">decider-4b v2</td><td class="p-1.5">RunPod GPU (FP16)</td><td class="p-1.5 font-bold text-green-400">20 ms</td><td class="p-1.5">45 ms</td></tr>
          <tr><td class="p-1.5 text-purple-300 font-bold">Laya (ConvAI)</td><td class="p-1.5">ModernBERT 421M (T4)</td><td class="p-1.5 font-bold text-green-400">32.8 ms</td><td class="p-1.5">58 ms</td></tr>
          <tr><td class="p-1.5 text-blue-300">Kev-4B</td><td class="p-1.5">RTX 3090 (BF16)</td><td class="p-1.5">330 ms</td><td class="p-1.5">510 ms</td></tr>
          <tr><td class="p-1.5 text-white">Jev 1.13.0 API</td><td class="p-1.5">TypeSafe Hosted</td><td class="p-1.5">160 ms (server)</td><td class="p-1.5">650 ms (e2e)</td></tr>
          <tr><td class="p-1.5 text-red-400">GPT-5 / Claude</td><td class="p-1.5">Frontier API</td><td class="p-1.5">4,070 ms</td><td class="p-1.5">14,200 ms</td></tr>
        </tbody>
      </table>
    </div>
    <p>Notice that open encoder-based decision models (like Nandakishor's Laya) achieve <strong>sub-35ms latencies</strong>, running 10x-20x faster than hosted API decoders because they eliminate cross-country TLS handshakes and MoE routing overhead.</p>
    """,
    ["Benchmark Heaven: JevBench Latency Records", "Laya Research: arXiv:2503.23303"]
)

# --- ACT 8: Difference 2 - Cost ---
add_slide(
    "8", "8 / 16", "8 / 16", "", "LIVE",
    "Second Difference: Cost (81.2x Cheaper)",
    """
    <div class="py-2 space-y-3">
      <div>
        <h2 class="text-xl md:text-2xl font-bold text-white">Second difference: <span class="text-lime">cost.</span></h2>
        <p class="text-[11px] font-mono text-gray-400">Per M tokens — in: LLM ₹119.50 · Jev ₹4.02 · out: LLM ₹956.00 · Jev free</p>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left font-mono text-xs border border-gray-800">
          <thead class="bg-gray-900 text-gray-400">
            <tr><th class="p-2">Metric (10k emails/day)</th><th class="p-2 text-blue-400">LLM</th><th class="p-2 text-lime">Jev</th></tr>
          </thead>
          <tbody class="divide-y divide-gray-800/60">
            <tr><td class="p-2 text-gray-300">Per email</td><td class="p-2">₹0.326</td><td class="p-2 text-lime font-bold">₹0.004</td></tr>
            <tr><td class="p-2 text-gray-300">Per day</td><td class="p-2">₹3,260</td><td class="p-2 text-lime font-bold">₹40</td></tr>
            <tr class="bg-lime/5"><td class="p-2 font-bold text-white">Per year</td><td class="p-2 text-red-400 font-bold">₹11,89,885</td><td class="p-2 text-lime font-black text-sm">₹14,655</td></tr>
          </tbody>
        </table>
      </div>

      <div class="p-3 bg-lime/10 border border-lime/30 rounded-lg text-center">
        <div class="text-2xl font-black text-lime">81.2× cheaper</div>
        <div class="text-xs font-mono text-gray-300">₹11,75,230 saved/year ($14,000+ USD)</div>
      </div>
      <p class="text-[10px] font-mono text-gray-500">Converted at ₹95.6/USD. Vendor claims up to 444.6× on heavy reasoning token evals.</p>
    </div>
    """,
    "Unit Economics: Pricing Structure & Community Verification",
    """
    <p>TypeSafe charges a flat <strong>$42 per billion input tokens</strong> ($0.042 per million input tokens), and <strong>output tokens are completely free</strong>. Compare this to standard pricing:</p>
    <ul class="list-disc pl-5 space-y-1 text-xs font-mono text-gray-300">
      <li><strong>GPT-4o:</strong> $2.50 / M input, $10.00 / M output.</li>
      <li><strong>Claude 3.5 Sonnet:</strong> $3.00 / M input, $15.00 / M output.</li>
      <li><strong>Jev 1.13:</strong> $0.042 / M input, $0.00 / M output (<strong>60x - 238x cheaper</strong>).</li>
      <li><strong>Laya / Self-Hosted Kev:</strong> $0.0029 / 1k decisions on dedicated GPU instance.</li>
    </ul>
    <div class="expert-callout my-3">
      <strong>Real-World Builder Audits (from Awesome-Jev):</strong><br/>
      • <strong>@nutlope:</strong> Classified 1,018 scientific papers for $0.08 total; the generative summaries for those papers cost $3.99 (50x cost disparity).<br/>
      • <strong>@walidboulanouar:</strong> Evaluated ~100,000 tokens during development for a total bill of $0.001 (one-tenth of a cent).
    </div>
    """,
    ["TypeSafe Official Pricing (Sep 2026)", "Awesome Jev Use Cases: Cost Reports"]
)

# --- ACT 9.1: Many Questions, One Pass ---
add_slide(
    "9.1", "9 / 16", "9.1 / 16", "Other benefits: 9.1 Many questions | 9.2 Confidence | 9.3 Can't make up", None,
    "Many questions, one pass (Parallel Sampler)",
    """
    <div class="py-4 space-y-4">
      <h2 class="text-xl md:text-2xl font-bold text-white">9.1 Many questions, one pass</h2>
      <div class="jev-card space-y-3">
        <div class="text-xs font-mono text-gray-400">Shared axis · full width = 7.0 s</div>
        <div>
          <div class="flex justify-between text-xs font-mono text-gray-300 mb-1">
            <span class="text-lime font-bold">Jev — 5 questions in parallel</span>
            <span class="text-lime font-bold">≈ 130 ms</span>
          </div>
          <div class="w-full bg-gray-800 h-5 rounded relative overflow-hidden flex items-center">
            <div class="bg-lime h-full w-[2.5%] shadow-[0_0_8px_#b4f34d]"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs font-mono text-gray-400 mb-1">
            <span>LLM — one call per question</span>
            <span>≈ 7.0 s</span>
          </div>
          <div class="w-full bg-gray-800 h-5 rounded relative overflow-hidden flex divide-x divide-black/50">
            <div class="bg-blue-500/80 h-full w-[20%]"></div>
            <div class="bg-blue-500/80 h-full w-[20%]"></div>
            <div class="bg-blue-500/80 h-full w-[20%]"></div>
            <div class="bg-blue-500/80 h-full w-[20%]"></div>
            <div class="bg-blue-500/80 h-full w-[20%]"></div>
          </div>
        </div>
      </div>
      <div class="text-center font-bold text-white text-base pt-2">
        Adding a question adds <span class="text-lime">almost no time or cost.</span>
      </div>
    </div>
    """,
    "Tree Attention Masks & Prefix KV Sharing (HydraGen / DeFT Pattern)",
    """
    <p>How does Jev answer 5, 10, or 50 questions simultaneously without linear latency growth? In standard LLMs, asking 5 separate questions requires either 5 distinct network calls ($5 \times T_{\text{prefill}}$) or a massive consolidated prompt that confuses the model's instruction following.</p>
    <p>Jev structures the attention matrix as a <strong>tree attention mask</strong>:</p>
    <div class="expert-callout my-3">
      <strong>Attention Mask Formulation:</strong><br/>
      • Tokens in State $S$ attend strictly to earlier tokens in $S$ ($A_{i,j} = 1$ for $j \le i \le |S|$).<br/>
      • Tokens in Question Branch $Q_k$ attend to all state tokens in $S$ AND to earlier tokens in $Q_k$.<br/>
      • Tokens in $Q_k$ are <strong>masked from attending to sibling branch $Q_m$</strong> ($A_{Q_k, Q_m} = 0$).
    </div>
    <p>Because the shared state prefix KV cache is calculated only once in VRAM, processing 50 questions adds only the incremental suffix compute. Hume confirmed that scaling from 1 to 100 questions barely moved server response time.</p>
    """,
    ["Archer Hume §2: Share the state, isolate the questions", "HydraGen: Attention for Prefix Sharing"]
)

# --- ACT 9.2: Calibrated Confidence ---
add_slide(
    "9.2", "9 / 16", "9.2 / 16", "Other benefits: 9.1 Many questions | 9.2 Confidence | 9.3 Can't make up", None,
    "Calibrated Confidence (RLCD)",
    """
    <div class="py-4 space-y-4">
      <h2 class="text-xl md:text-2xl font-bold text-white">9.2 Confidence you can act on</h2>
      <div class="p-4 bg-black/50 border border-gray-800 rounded-xl flex items-center justify-between">
        <div class="w-36 h-36 relative border-l-2 border-b-2 border-gray-700">
          <svg class="w-full h-full" viewBox="0 0 100 100">
            <line x1="0" y1="100" x2="100" y2="0" stroke="#4b5263" stroke-dasharray="3,3" stroke-width="2" />
            <polyline points="0,95 25,75 50,50 75,25 100,5" fill="none" stroke="#b4f34d" stroke-width="3" />
            <circle cx="25" cy="75" r="4" fill="#b4f34d" />
            <circle cx="50" cy="50" r="4" fill="#b4f34d" />
            <circle cx="75" cy="25" r="4" fill="#b4f34d" />
          </svg>
          <span class="absolute -left-5 top-0 text-[10px] font-mono text-gray-400">1.0</span>
          <span class="absolute -left-5 bottom-0 text-[10px] font-mono text-gray-400">0.0</span>
          <span class="absolute bottom--5 right-0 text-[10px] font-mono text-gray-400">1.0</span>
        </div>
        <div class="pl-4 flex-1">
          <div class="text-sm font-bold text-white">Trained so that 90% confident means right about 90% of the time.</div>
          <p class="text-xs text-lime font-mono mt-1">Expected Calibration Error: 0.0313</p>
        </div>
      </div>
      <p class="text-xs text-gray-400 font-mono">Calibration is Jev's training objective (RLCD). Replaces uncalibrated verbal claims.</p>
    </div>
    """,
    "Proper Scoring Rules: Brier Loss & Temperature Scaling",
    """
    <p>A predictor is <em>calibrated</em> if, for all samples where it predicts probability $p$, the empirical empirical frequency of the positive outcome is exactly $p$:</p>
    <div class="expert-equation my-3">
      P(Y = 1 \mid \hat{P} = p) = p, \quad \forall p \in [0, 1]
    </div>
    <p>Standard LLMs fine-tuned with RLHF (e.g. PPO or DPO on human ratings) suffer from severe overconfidence: when an LLM writes <em>"I am 99% certain"</em>, empirical accuracy is often only 65%-70%.</p>
    <p>TypeSafe trains Jev via <strong>Reinforcement Learning from Calibrated Decisions (RLCD)</strong> using proper scoring rules where truth-telling strictly minimizes expected loss:</p>
    <div class="expert-equation my-3">
      \mathcal{L}_{\text{Brier}} = \frac{1}{N} \sum_{i=1}^N \sum_{k=1}^K (p_{ik} - y_{ik})^2
    </div>
    <p>On Archer Hume's 1,200-sample MMLU benchmark check, Jev demonstrated an <strong>ECE of 0.0313</strong>. On held-out distributions, Jared Palmer's Kev-27B achieved a Brier score of <strong>0.164</strong>.</p>
    """,
    ["Gneiting & Raftery (2007): Strictly Proper Scoring Rules", "Archer Hume §5: Train the distribution"]
)

# --- ACT 9.3: Can't make things up ---
add_slide(
    "9.3", "9 / 16", "9.3 / 16", "Other benefits: 9.1 Many questions | 9.2 Confidence | 9.3 Can't make up", None,
    "Schema-Constrained: Can't Invent Answers",
    """
    <div class="py-8 space-y-4 text-center">
      <h1 class="text-2xl md:text-4xl font-black text-white leading-tight">
        It can't invent an answer.<br/>
        It can still pick the wrong one.
      </h1>
      <p class="text-lg md:text-xl text-lime font-bold">
        That's why the confidence score matters (9.2).
      </p>
      <div class="p-4 bg-gray-900/60 border border-gray-800 rounded-xl max-w-lg mx-auto text-left text-xs font-mono text-gray-300 mt-4">
        <div>• Syntactic Hallucination: <span class="text-lime font-bold">0.00% (Mathematically impossible)</span></div>
        <div>• Semantic Misclassification: <span class="text-amber-400 font-bold">Possible</span> (Bounded by Calibrated Confidence)</div>
      </div>
    </div>
    """,
    "Aleatoric vs Epistemic Uncertainty in Operational Pipelines",
    """
    <p>In AI engineering, errors divide into two classes:</p>
    <ul class="list-disc pl-5 space-y-1 text-xs text-gray-300">
      <li><strong>Syntactic / Format Errors:</strong> An LLM generating an invalid enum value (e.g., returning <code>"urgent_escalate"</code> when only <code>["low", "medium", "high"]</code> were permitted). In Jev, the choice set is fixed in the model head; it cannot physically emit an out-of-vocabulary class.</li>
      <li><strong>Epistemic Misclassification:</strong> The input text is ambiguous, misleading, or out-of-domain.</li>
    </ul>
    <p>Because Jev's output is accompanied by a calibrated confidence probability $p$, downstream software can implement strict risk-gated thresholds:</p>
    <div class="expert-equation my-3">
      \text{Action} = \begin{cases} \text{Auto-Execute} & p \ge 0.85 \\ \text{Human Review} & 0.40 \le p < 0.85 \\ \text{Reject} & p < 0.40 \end{cases}
    </div>
    """,
    ["TypeSafe Documentation: Confidence & Risk-Gated Routing", "Kev: Fine-Tuning Calibration Temperature"]
)

# --- ACT 10.1: Diogo Almeida & TypeSafe AI ---
add_slide(
    "10.1", "10 / 16", "10.1 / 16", "Behind Jev: Who | Why | Impact | Where", None,
    "Who built Jev? Diogo Almeida & TypeSafe AI",
    """
    <div class="py-6 space-y-4">
      <h2 class="text-xl md:text-2xl font-bold text-white">Who built Jev?</h2>
      <div class="flex items-center gap-4 p-5 bg-[#12141b] border border-gray-800 rounded-xl">
        <div class="w-14 h-14 rounded-xl bg-lime/10 border border-lime text-lime flex items-center justify-center font-mono font-bold text-xl">
          DA
        </div>
        <div>
          <div class="text-2xl font-extrabold text-white">Diogo Almeida</div>
          <div class="text-xs font-mono text-gray-400">ex-OpenAI · InstructGPT · ChatGPT Core Contributor</div>
        </div>
      </div>
      <div class="pt-2">
        <p class="text-xl font-bold text-gray-200">Now building AI for software, not people.</p>
        <div class="text-2xl font-black text-lime">TypeSafe AI</div>
      </div>
    </div>
    """,
    "Lineage: From Human-Facing RLHF to Software-Facing RLCD",
    """
    <p>Diogo Almeida was a key technical contributor at OpenAI on foundational alignment research, co-authoring the seminal <em>InstructGPT</em> paper (Ouyang et al., March 2022: <em>"Training language models to follow instructions with human feedback"</em>), which laid the foundation for ChatGPT.</p>
    <p>His departure to found <strong>TypeSafe AI</strong> represents an explicit philosophical pivot:</p>
    <div class="expert-callout my-3">
      <strong>The Thesis:</strong> <em>"Human beings communicate through conversational natural language. Software backends do not. Building automated systems by forcing databases and microservices to chat with an LLM in English is an architectural anti-pattern."</em>
    </div>
    <p>TypeSafe was backed by premier venture capital to develop models whose first-class citizen is the API schema, not the chat window.</p>
    """,
    ["Ouyang et al. (2022): InstructGPT", "TypeSafe AI Company Announcement"]
)

# --- ACT 10.2: System 1 vs System 2 ---
add_slide(
    "10.2", "10 / 16", "10.2 / 16", "Behind Jev: Who | Why | Impact | Where", None,
    "Software needs System 1 thinking",
    """
    <div class="py-6 space-y-4">
      <h1 class="text-2xl md:text-4xl font-black text-white leading-tight">
        Software needs <span class="text-lime">System 1 thinking</span>,<br/>
        but we keep building <span class="text-blue-400">System 2 thinking</span>.
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div class="p-4 bg-lime/5 border border-lime/30 rounded-xl">
          <div class="text-xs font-mono uppercase text-lime font-bold mb-1">System 1 (Jev / Laya)</div>
          <div class="text-xs text-gray-300">Fast, reflex, parallel, sub-150ms, calibrated probability, deterministic code predicates.</div>
        </div>
        <div class="p-4 bg-blue-950/20 border border-blue-800/40 rounded-xl">
          <div class="text-xs font-mono uppercase text-blue-400 font-bold mb-1">System 2 (o1 / Sonnet / GPT-5)</div>
          <div class="text-xs text-gray-300">Slow, deliberate, sequential chain-of-thought, token generation, prose synthesis.</div>
        </div>
      </div>
    </div>
    """,
    "Dual-Process Cognitive Architecture in Autonomous Agents",
    """
    <p>Daniel Kahneman’s dual-process cognitive psychology model (<em>Thinking, Fast and Slow</em>) maps cleanly to autonomous software stacks:</p>
    <ul class="list-disc pl-5 space-y-1 text-xs text-gray-300">
      <li><strong>System 1 (Fast & Intuitive):</strong> Operates automatically and quickly, with little or no effort and no sense of voluntary control. In software: evaluating whether an email is spam, whether a SQL query is malicious, or whether an agent should switch tools.</li>
      <li><strong>System 2 (Slow & Deliberative):</strong> Allocates attention to effortful mental operations, including complex computations and novel synthesis. In software: writing a code refactor, proving a theorem, or synthesizing legal briefs.</li>
    </ul>
    <p>Using a 70B parameter System 2 model for reflex decisions is like pausing to meditate for 10 seconds every time you need to blink.</p>
    """,
    ["Kahneman (2011): Thinking, Fast and Slow", "TypeSafe AI: System One Concepts"]
)

# --- ACT 10.3: AI moves from Feature to Primitive ---
add_slide(
    "10.3", "10 / 16", "10.3 / 16", "Behind Jev: Who | Why | Impact | Where", None,
    "AI becomes plumbing: if jev(...) > 0.9",
    """
    <div class="py-4 space-y-3">
      <div class="text-lg font-bold text-gray-200">
        AI moves from a <span class="text-blue-400">feature</span> to a <span class="text-lime">primitive</span>.
      </div>
      <div class="p-4 bg-[#0c0d12] border border-gray-800 rounded-xl font-mono text-sm text-gray-200">
        <span class="text-purple-400 font-bold">if</span> <span class="text-lime font-bold">jev</span>(<span class="text-amber-300">"Is this customer angry?"</span>) &gt; <span class="text-lime">0.9</span>:<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;escalate_to_human()
      </div>
      <div class="pt-2">
        <div class="text-2xl md:text-3xl font-black text-white">AI stops being the product.</div>
        <div class="text-2xl md:text-3xl font-black text-lime">It becomes plumbing.</div>
      </div>
    </div>
    """,
    "Semantic Predicates as Standard Language Primitives",
    """
    <p>Historically, software engineers could only branch on deterministic conditions: integer equality, regex pattern matches, or database queries. Complex semantic checks required asynchronous API queues, webhook callbacks, and fallback retry loops.</p>
    <p>When semantic inference executes in <strong>30–120 milliseconds at $0.00004 per call</strong>, semantic decisions can be embedded directly into procedural code as <strong>probabilistic conditional predicates</strong>:</p>
    <div class="expert-equation my-3">
      \text{Boolean Predicate: } f_{\text{semantic}}(S, Q) \equiv \mathbb{I}[P_{\text{Jev}}(Q \mid S) > \tau]
    </div>
    <p>Already, open-source projects have wrapped Jev and Kev into standard database stored procedures (e.g. Postgres <code>CREATE FUNCTION jev(text, text) RETURNS float</code>) and LiteLLM middleware.</p>
    """,
    ["Walid Boulanouar: Awesome Jev Patterns", "ShipWithJev: Tools & Apps Directory"]
)

# --- ACT 10.4: Domain 1 - AI Agents ---
add_slide(
    "10.4", "10 / 16", "10.4 / 16", "Where Jev Fits: 1 of 5", None,
    "Domain 1: AI Agents (Harness Engineering)",
    """
    <div class="py-6 space-y-3">
      <div class="text-lime font-mono text-2xl font-bold">01</div>
      <h1 class="text-3xl md:text-5xl font-black text-white">AI agents</h1>
      <p class="text-base font-mono text-gray-300">Which tool? · Which model? · Is this step safe?</p>
      <p class="text-lg font-semibold text-gray-200 pt-2">Every small decision, fast and cheap enough to check.</p>
    </div>
    """,
    "Harness Optimization: Speculative Routing & Tool Validation",
    """
    <p>In autonomous agent frameworks (AutoGPT, Browser-Use, LangGraph), agents loop through hundreds of small micro-decisions: <em>"Did the last bash command succeed?", "Does this step leak secrets?", "Is the browser stuck on a CAPTCHA?"</em></p>
    <p>Using a frontier LLM for every micro-turn bloats trajectory runtimes to 45–90 seconds and costs $0.50–$2.00 per task. By offloading tool routing, DOM state safety checks, and loop-termination predicates to Jev/Kev, agent harnesses achieve a <strong>60%–80% reduction in end-to-end task latency</strong> and 90%+ cost savings.</p>
    """,
    ["TypeSafe AI Use-Case Map: Model Routing & Harness Engineering", "Awesome-Jev: Flight Search Browser-Use (8,723 likes)"]
)

# --- ACT 10.5: Domain 2 - Business Operations ---
add_slide(
    "10.5", "10 / 16", "10.5 / 16", "Where Jev Fits: 2 of 5", None,
    "Domain 2: Business Operations",
    """
    <div class="py-6 space-y-3">
      <div class="text-lime font-mono text-2xl font-bold">02</div>
      <h1 class="text-3xl md:text-5xl font-black text-white">Business operations</h1>
      <p class="text-base font-mono text-gray-300">Support triage · Claims · Invoices · Lead scoring</p>
      <p class="text-lg font-semibold text-gray-200 pt-2">Automate the clear cases. Send the unclear ones to a person.</p>
    </div>
    """,
    "Straight-Through Processing (STP) in Enterprise Workflows",
    """
    <p>In insurance claims, invoice reconciliation, and customer support, enterprise architectures rely on <strong>Straight-Through Processing (STP)</strong>: automatically clearing high-confidence, standard claims without human intervention.</p>
    <p>Because Jev's output probabilities are calibrated (ECE = 0.0313), enterprises can set mathematically grounded compliance thresholds:</p>
    <ul class="list-disc pl-5 space-y-1 text-xs text-gray-300">
      <li>If $P(\text{Fraud} \mid \text{Claim}) < 0.02$ and $P(\text{PolicyValid}) > 0.98$: auto-approve invoice in 150ms.</li>
      <li>If confidence falls in the uncertainty interval $[0.40, 0.85]$: route immediately to human claims specialist.</li>
    </ul>
    """,
    ["TypeSafe AI: Insurance & Financial Crime Solutions", "Nandakishor Mukkunnoth: SaaS Conversion Models"]
)

# --- ACT 10.6: Domain 3 - Trust & Safety ---
add_slide(
    "10.6", "10 / 16", "10.6 / 16", "Where Jev Fits: 3 of 5", None,
    "Domain 3: Trust & Safety (Inline Moderation)",
    """
    <div class="py-6 space-y-3">
      <div class="text-lime font-mono text-2xl font-bold">03</div>
      <h1 class="text-3xl md:text-5xl font-black text-white">Trust & safety</h1>
      <p class="text-base font-mono text-gray-300">Moderation · Fraud · Spam · Jailbreak detection</p>
      <p class="text-lg font-semibold text-gray-200 pt-2">Score, threshold, escalate, on every single request.</p>
    </div>
    """,
    "Zero-Latency Guardrails for Public LLM Gateways",
    """
    <p>Existing guardrail frameworks (Llama-Guard, NeMo Guardrails) add significant latency overhead (500ms–2000ms) because they invoke an autoregressive safety model before the primary model can begin generating.</p>
    <p>With Jev or Laya, safety screening runs in parallel with the user gateway request (33ms–120ms):</p>
    <div class="expert-callout my-3">
      <strong>Parallel Safety Verification:</strong> In a single pass, evaluate <code>is_prompt_injection</code> (Noul), <code>pii_leakage</code> (Noul), and <code>toxicity_level</code> (Score: 0-4). If toxic probability exceeds threshold $\tau$, drop connection before consuming LLM generation budget.
    </div>
    """,
    ["TypeSafe AI: LLM Guardrails & Trust & Safety", "Awesome-Jev: Twitter Slop Filter (7,180 likes)"]
)

# --- ACT 10.7: Domain 4 - Unstructured to Structured ---
add_slide(
    "10.7", "10 / 16", "10.7 / 16", "Where Jev Fits: 4 of 5", None,
    "Domain 4: Unstructured &rarr; Structured Data",
    """
    <div class="py-6 space-y-3">
      <div class="text-lime font-mono text-2xl font-bold">04</div>
      <h1 class="text-3xl md:text-5xl font-black text-white">Unstructured &rarr; structured data</h1>
      <p class="text-base font-mono text-gray-300">Logs · Catalogs · Tickets · Call transcripts</p>
      <p class="text-xl font-bold text-lime pt-2">Stop sampling. Label everything.</p>
    </div>
    """,
    "High-Throughput Semantic Map-Reduce over Big Data",
    """
    <p>Historically, companies with 50 million server logs, customer chat transcripts, or product catalog listings could only run AI labeling on a tiny 1% sample due to LLM inference costs ($10,000+ per month).</p>
    <p>At $0.042 per million input tokens ($42 per billion) and zero output token fees, labeling 100,000,000 tokens of unstructured text costs just <strong>$4.20</strong>. Data engineering pipelines can now execute full-corpus semantic map-reduce jobs directly inside Spark, Snowflake, or ClickHouse.</p>
    """,
    ["TypeSafe AI: AI Map Reduce over Big Data", "ShipWithJev: Research & Data Directory"]
)

# --- ACT 10.8: Domain 5 - Real-Time Systems ---
add_slide(
    "10.8", "10 / 16", "10.8 / 16", "Where Jev Fits: 5 of 5", None,
    "Domain 5: Real-Time Systems & Control Loops",
    """
    <div class="py-6 space-y-3">
      <div class="text-lime font-mono text-2xl font-bold">05</div>
      <h1 class="text-3xl md:text-5xl font-black text-white">Real-time systems</h1>
      <p class="text-base font-mono text-gray-300">Game characters · Live UI · Control loops</p>
      <p class="text-lg font-semibold text-gray-200 pt-2">Not just cheaper. Newly possible.</p>
    </div>
    """,
    "Sub-150ms Perception-Action Loops: Jev Plays DOOM",
    """
    <p>Real-time game engines and interactive graphical user interfaces run at 60Hz (16.6ms per frame). A system that takes 3,000ms to choose an action cannot interact with a moving game world.</p>
    <p>In community experiments (such as <em>Jev Plays DOOM</em>, 4,890 likes), developers extracted the game state (player health, ammo, enemy angle, sound events) into structured text and piped it to Jev every 120ms. Jev selected weapon swaps, strafing vectors, and trigger pulls in real time without lag spikes.</p>
    """,
    ["Awesome Jev: Jev Plays Doom", "ShipWithJev: Games & Real Time Directory"]
)

# --- ACT 11: So what are people building? ---
add_slide(
    "11", "11 / 16", "11 / 16", "", None,
    "What are people building using Jev?",
    """
    <div class="text-center py-10">
      <h1 class="slide-title-hero leading-tight">
        So, what are people<br/>building using <span class="text-lime">Jev?</span>
      </h1>
      <p class="slide-subtitle-hero text-gray-400 mt-4">74 tracked viral demos · 150+ GitHub repos · 551 community builds</p>
    </div>
    """,
    "Ecosystem Overview: The First Wave of System 1 Applications",
    """
    <p>Within two weeks of TypeSafe's September 2026 launch, the developer ecosystem produced over 551 confirmed builds across 8 vertical categories tracked on <em>ShipWithJev</em> and <em>Awesome-Jev</em>:</p>
    <ul class="list-disc pl-5 space-y-1 text-xs text-gray-300">
      <li><strong>Tools & Apps (213 builds):</strong> Claude history compactors, prompt linter CI plugins, tone meters.</li>
      <li><strong>Agents & Browsers (79 builds):</strong> DOM action verifiers, browser-use routing.</li>
      <li><strong>Games & Real Time (66 builds):</strong> NPC dialog decision trees, DOOM controllers.</li>
      <li><strong>Content & Growth (54 builds):</strong> Real-time Twitter slop filters, competitor ad decoders.</li>
      <li><strong>Triage & Routing (50 builds):</strong> Sub-cent email dispatchers, Zendesk classification.</li>
    </ul>
    """,
    ["shipwithjev.com/type/github", "walidboulanouar/awesome-jev-use-cases"]
)

# --- ACT 12: Demo Showcase ---
add_slide(
    "12", "12 / 16", "12 / 16", "", None,
    "Demo Showcase: 4 Flagship Production Applications",
    """
    <div class="py-2 space-y-4">
      <div class="text-center">
        <h1 class="text-2xl md:text-3xl font-extrabold text-white">Production Demo Showcase</h1>
      </div>
      <div class="grid grid-cols-2 gap-3 text-xs">
        <div class="p-3 bg-black/50 border border-lime/40 rounded-lg">
          <div class="text-lime font-bold">Flipkart Review Analyzer (CampusX)</div>
          <p class="text-gray-400 mt-0.5">14 questions in 128ms: topic mention probability (Noul) + 5-star score (Score).</p>
        </div>
        <div class="p-3 bg-black/50 border border-blue-500/40 rounded-lg">
          <div class="text-blue-400 font-bold">Claude Context Compaction (10k likes)</div>
          <p class="text-gray-400 mt-0.5">Scores chat turns in 150ms; prunes stale context to cut Sonnet token costs by 70%.</p>
        </div>
        <div class="p-3 bg-black/50 border border-purple-500/40 rounded-lg">
          <div class="text-purple-400 font-bold">Jev Plays DOOM (4.8k likes)</div>
          <p class="text-gray-400 mt-0.5">Translates frame telemetry to text; Jev selects weapon & movement in 120ms loops.</p>
        </div>
        <div class="p-3 bg-black/50 border border-amber-500/40 rounded-lg">
          <div class="text-amber-400 font-bold">Live Social Slop Filter (7.1k likes)</div>
          <p class="text-gray-400 mt-0.5">Chrome extension filtering low-effort AI posts as users scroll Twitter feeds.</p>
        </div>
      </div>
      <div class="text-center pt-2">
        <button onclick="window.openDeepDiveTab('campusx')" class="btn-pill btn-pill-lime">⚡ Test CampusX Analyzer Live</button>
      </div>
    </div>
    """,
    "Deep Dive: CampusX Review Analyzer Architecture",
    """
    <p>The <strong>CampusX</strong> implementation (<code>github.com/campusx-official/jev-demo</code>) illustrates the canonical TypeSafe SDK pattern: turning free-form unstructured smartphone reviews into Flipkart-style per-topic star ratings.</p>
    <div class="expert-callout my-3">
      <strong>Pipeline:</strong> For 7 topics (Camera, Battery, Display, Design, Performance, Build, Value), Jev is asked 14 questions in parallel:<br/>
      1. <code>&lt;topic&gt;_mentioned</code> (Noul): Probability ($0-1$) that the review discusses the topic.<br/>
      2. <code>&lt;topic&gt;_rating</code> (Score): Reviewer satisfaction on a 5-level scale ($0-4$).<br/>
      <em>Rule:</em> A topic's rating is kept only when $P(\text{mentioned}) \ge 0.50$.
    </div>
    <p>Because all 14 questions share the review text as state, execution completes in <strong>~128 milliseconds</strong> for a total cost of less than a thousandth of a cent.</p>
    """,
    ["github.com/campusx-official/jev-demo", "TypeSafe Python SDK Reference"]
)

# --- ACT 13: Architecture ---
add_slide(
    "13", "13 / 16", "13 / 16", "", None,
    "Architecture: Under the Hood",
    """
    <div class="text-center py-10">
      <h1 class="slide-title-hero leading-tight">Architecture</h1>
      <p class="slide-subtitle-hero text-gray-400 mt-4">Deconstructing the neural substrate and serving graph</p>
    </div>
    """,
    "Engineering Overview: The 8 Structural Components",
    """
    <p>Because TypeSafe AI launched without publishing a formal technical whitepaper or releasing open weights, ML researcher <strong>Archer Hume</strong> probed the production API with <strong>10,000 controlled requests</strong> to reverse-engineer its internal mechanics.</p>
    <p>Hume's empirical findings confirmed 5 architectural components and established strong evidentiary bounds for 3 open questions, verified by Jared Palmer's open-weights reconstruction (<em>Kev</em>) and ConvAI's open-weights engine (<em>Laya</em>).</p>
    """,
    ["Archer Hume: Jev’s Architecture Unmasked", "Jared Palmer: Kev Technical README"]
)

# --- ACT 14.1: Under the Hood Overview ---
add_slide(
    "14.1", "14 / 16", "14.1 / 16", "How Jev works 1 / 9", None,
    "What's actually under the hood?",
    """
    <div class="py-6 space-y-4">
      <h1 class="text-2xl md:text-4xl font-black text-white leading-tight">What's actually under the hood?</h1>
      <p class="text-lg text-gray-300">Some of this TypeSafe has told us. Some we're inferring.</p>
      <div class="flex items-center gap-3 pt-2">
        <span class="slide-badge badge-confirmed">Confirmed (5)</span>
        <span class="slide-badge badge-unconfirmed">Unconfirmed (3)</span>
      </div>
      <p class="text-sm font-mono text-lime pt-2">Eight pieces. Three are still open questions.</p>
    </div>
    """,
    "Scientific Methodology: Probing Black-Box APIs",
    """
    <p>Archer Hume's probing methodology isolated architectural boundaries via systematic perturbations:</p>
    <ul class="list-disc pl-5 space-y-1 text-xs text-gray-300">
      <li><strong>Latency Scaling Curves:</strong> Measuring upstream server durations while independently varying state length (100 to 30,000 tokens) vs question counts (1 to 1,500 questions).</li>
      <li><strong>Information Leakage Probes:</strong> Injecting secret tokens into sibling questions to test whether questions attend to one another or strictly to the shared state.</li>
      <li><strong>Choice-Set Perturbations:</strong> Adding dummy options to test for Independence of Irrelevant Alternatives (IIA) violations.</li>
      <li><strong>Vocabulary & Tokenizer Probes:</strong> 415 probe sequences tested against 192 public tokenizers.</li>
    </ul>
    """,
    ["Archer Hume: Probing Methods & Datasets", "Gneiting & Raftery (2007)"]
)

# --- ACT 14.2: Transformer-based (Kind?) ---
add_slide(
    "14.2", "14 / 16", "14.2 / 16", "How Jev works 2 / 9", "UNCONFIRMED",
    "01 Transformer-based — but which kind?",
    """
    <div class="py-4 space-y-3">
      <div class="text-lime font-mono text-xl font-bold">01</div>
      <h2 class="text-2xl md:text-3xl font-black text-white">Transformer-based — but which kind?</h2>
      <div class="space-y-1 text-sm text-gray-300 pt-1">
        <p>Encoders read all at once (BERT / ModernBERT).</p>
        <p>Decoders write word by word (GPT / Qwen).</p>
      </div>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        Jev acts encoder-like. Could be a decoder with a scoring layer. Open question.
      </p>
    </div>
    """,
    "Why Hume Concludes Causal Decoder with Scoring Head",
    """
    <p>While Jev acts encoder-like (reading the entire prompt before emitting a classification), Hume establishes that Jev is almost certainly a <strong>causal transformer decoder post-trained with RLCD</strong>:</p>
    <div class="expert-callout my-3">
      <strong>1. Knowledge Breadth:</strong> Jev achieves 84.6% on MMLU-Pro. Training a bidirectional encoder from scratch to frontier MMLU performance requires tens of millions of dollars; starting from a pretrained causal decoder base (like Qwen, DeepSeek, or LLaMA) is overwhelmingly more economical.<br/>
      <strong>2. Prefix KV Caching:</strong> Causal decoders naturally support prefix KV caching (tokens only attend backward). Modern bidirectional encoders attend in both directions, making prefix KV caching across independent question branches non-trivial.
    </div>
    <p>Conversely, ConvAI's <strong>Laya</strong> chose the opposite route: building on ModernBERT (421M bidirectional encoder) specifically for sub-35ms speed and multilingual routing.</p>
    """,
    ["Archer Hume §3: A causal backbone", "Laya Architecture Comparison"]
)

# --- ACT 14.3: Broad World Knowledge ---
add_slide(
    "14.3", "14 / 16", "14.3 / 16", "How Jev works 3 / 9", "UNCONFIRMED",
    "02 Broad world knowledge (maybe)",
    """
    <div class="py-4 space-y-3">
      <div class="text-lime font-mono text-xl font-bold">02</div>
      <h2 class="text-2xl md:text-3xl font-black text-white">Broad world knowledge (maybe)</h2>
      <p class="text-sm text-gray-300">Does it know general facts, like a chat model does?</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        Its Wikipedia-navigation demo suggests some. Scores 84.6% on MMLU-Pro without verbalizing scratchpads.
      </p>
    </div>
    """,
    "Latent Knowledge Extraction Without Chain-of-Thought",
    """
    <p>A major open question in AI research is whether models can perform multi-hop reasoning without generating explicit chain-of-thought (CoT) scratchpad tokens. On MMLU-Pro, Jev achieved <strong>84.6% accuracy</strong>:</p>
    <div class="expert-equation my-3">
      \text{Accuracy}_{\text{MMLU-Pro}}: \text{Jev Hosted (84.6%)} \approx \text{Kev-27B (84.8%)} > \text{Kev-4B (81.7%)}
    </div>
    <p>This confirms that massive world knowledge is embedded in the backbone weights, accessible via direct latent projection without paying the multi-second latency tax of generating reasoning text.</p>
    """,
    ["Benchmark Heaven: MMLU-Pro Evals", "Jared Palmer: Kev Benchmark Cards"]
)

# --- ACT 14.4: Built for System 1 tasks ---
add_slide(
    "14.4", "14 / 16", "14.4 / 16", "How Jev works 4 / 9", "CONFIRMED",
    "03 Built for System 1 tasks",
    """
    <div class="py-4 space-y-3">
      <div class="text-lime font-mono text-xl font-bold">03</div>
      <h2 class="text-2xl md:text-3xl font-black text-white">Built for System 1 tasks</h2>
      <p class="text-sm text-gray-200 font-semibold">Quick gut judgments: spam? urgent? which team?</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        Fast, frequent decisions inside software — not reasoning or writing.
      </p>
    </div>
    """,
    "Representation Space Specialization for Fast Judgments",
    """
    <p>Generative LLM representations are optimized to predict the next token across diverse natural language corpora. Consequently, their internal vectors spend capacity encoding grammar, stylistic cadence, and punctuation.</p>
    <p>Jev's post-training (RLCD) forces the representation layer to discard conversational fluff and collapse directly onto <strong>decision boundaries</strong>. Probing shows that intermediate activations form tightly separated semantic clusters corresponding to classification rubrics.</p>
    """,
    ["TypeSafe AI Primer: System 1 Latent Representations", "Archer Hume §1"]
)

# --- ACT 14.5: Trained on synthetic data ---
add_slide(
    "14.5", "14 / 16", "14.5 / 16", "How Jev works 5 / 9", "UNCONFIRMED",
    "04 Trained on synthetic data",
    """
    <div class="py-4 space-y-3">
      <div class="text-lime font-mono text-xl font-bold">04</div>
      <h2 class="text-2xl md:text-3xl font-black text-white">Trained on synthetic data</h2>
      <p class="text-sm text-gray-200">Training data generated by computers, not collected from people.</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        TypeSafe hasn't explained how its data is made. High-volume programmatic traces dominate.
      </p>
    </div>
    """,
    "Synthetic Curriculum Generation for Epistemic Calibration",
    """
    <p>Human annotation datasets (like ImageNet or MNLI) suffer from label noise, subjectivity, and severe overconfidence. To train an RLCD model whose probabilities are mathematically honest, TypeSafe likely employed scaled <strong>synthetic generation pipelines</strong>:</p>
    <div class="expert-callout my-3">
      <strong>Synthetic Pipeline:</strong> Powerful reasoning models (o1/Claude 3.5 Sonnet) generate millions of ambiguous edge-case scenarios with known programmatic ground-truth rules, scoring rubrics, and deliberate distractor options.
    </div>
    <p>Jared Palmer followed this exact playbook for <em>Kev</em>, using Modal to synthesize thousands of domain-specific decision traces across customer support, moderation, and data normalization.</p>
    """,
    ["Jared Palmer: Kev Modal Training Loop", "TypeSafe Launch Speculation"]
)

# --- ACT 14.6: Non-autoregressive ---
add_slide(
    "14.6", "14 / 16", "14.6 / 16", "How Jev works 6 / 9", "CONFIRMED",
    "05 Non-autoregressive (Prefill-Only)",
    """
    <div class="py-4 space-y-3">
      <div class="text-lime font-mono text-xl font-bold">05</div>
      <h2 class="text-2xl md:text-3xl font-black text-white">Non-autoregressive</h2>
      <p class="text-sm text-gray-200">Chat models write one word at a time, each waiting on the last.</p>
      <p class="text-base text-lime font-bold pt-2">Jev produces the whole answer in one go. Much faster.</p>
    </div>
    """,
    "Zero Autoregressive Loops: The Death of Decode Stalls",
    """
    <p>In standard LLM inference, the GPU transitions through two phases: <strong>Prefill</strong> (parallel ingestion of input tokens) and <strong>Decode</strong> (sequential generation of output tokens). The decode phase is notoriously inefficient, requiring high KV cache memory footprint and low tensor core occupancy.</p>
    <p>Jev has <strong>zero decode phase</strong>. The forward pass terminates as soon as the final hidden layer of the prompt and question suffixes is computed. The output logits are emitted in parallel, eliminating token latency entirely.</p>
    """,
    ["Archer Hume §1: End inference with a readout", "Roofline Serving Curves"]
)

# --- ACT 14.7: Schema-constrained output ---
add_slide(
    "14.7", "14 / 16", "14.7 / 16", "How Jev works 7 / 9", "CONFIRMED",
    "06 Schema-constrained output",
    """
    <div class="py-4 space-y-3">
      <div class="text-lime font-mono text-xl font-bold">06</div>
      <h2 class="text-2xl md:text-3xl font-black text-white">Schema-constrained output</h2>
      <p class="text-sm text-gray-200">You give it a fixed list of allowed answers up front.</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        It can only pick from that list. It can't make one up.
      </p>
    </div>
    """,
    "Dynamic Softmax Normalization Over Arbitrary Option Lists",
    """
    <p>Unlike classic static classifiers (which have fixed output classes like ImageNet-1k), Jev allows users to pass arbitrary string option lists at request time. How does the model compute probabilities over dynamic choices?</p>
    <p>Archer Hume's probes demonstrated that options are passed as part of the question suffix. The readout head either maps representations to generic option slots ($k \in \{1 \dots K\}$) or utilizes a <strong>pointer-style cross-attention scoring mechanism</strong> where the decision token attends directly to each option's representation:</p>
    <div class="expert-equation my-3">
      s_k = \frac{h_{\text{decision}}^\top W_s h_{\text{option}_k}}{\sqrt{d}}, \quad p_k = \frac{\exp(s_k)}{\sum_j \exp(s_j)}
    </div>
    """,
    ["Archer Hume §4: Option Representation & Scoring", "TypeSafe Choice Schema"]
)

# --- ACT 14.8: Parallel sampler ---
add_slide(
    "14.8", "14 / 16", "14.8 / 16", "How Jev works 8 / 9", "CONFIRMED",
    "07 Parallel sampler",
    """
    <div class="py-4 space-y-3">
      <div class="text-lime font-mono text-xl font-bold">07</div>
      <h2 class="text-2xl md:text-3xl font-black text-white">Parallel sampler</h2>
      <p class="text-sm text-gray-200">Ask five questions, it answers all five at once.</p>
      <p class="text-base text-lime font-bold pt-2">Adding questions barely slows it down.</p>
    </div>
    """,
    "Serving Engine Branch Packing & Non-Determinism Observations",
    """
    <p>Archer Hume’s timing probes tested requests with 1 to 1,500 questions against a fixed 23,000-token state. The findings confirmed:</p>
    <ul class="list-disc pl-5 space-y-1 text-xs text-gray-300">
      <li><strong>Sub-Linear Overhead:</strong> Up to 100 questions, server response time was indistinguishable from a single question.</li>
      <li><strong>Token Packing:</strong> The entire request is scheduled as a single packed batch sequence up to $2^{16}$ (65,536) tokens.</li>
      <li><strong>Worker Non-Determinism:</strong> Minor variations were observed between duplicate questions within the same request ($p = 0.91$ vs $0.92$), caused by non-deterministic floating-point reduction kernels across GPU workers.</li>
    </ul>
    """,
    ["Archer Hume §7: Schedule branches as a batch", "TypeSafe Parallel Cookbook"]
)

# --- ACT 14.9: RLCD Calibrated Confidence ---
add_slide(
    "14.9", "14 / 16", "14.9 / 16", "How Jev works 9 / 9", "CONFIRMED",
    "08 RLCD — calibrated confidence",
    """
    <div class="py-4 space-y-3">
      <div class="text-lime font-mono text-xl font-bold">08</div>
      <h2 class="text-2xl md:text-3xl font-black text-white">RLCD — calibrated confidence</h2>
      <p class="text-sm text-gray-200">Every answer comes with a confidence number, trained to be honest.</p>
      <p class="text-xs text-lime font-mono pt-3 border-t border-gray-800">
        Say '80% sure' &rarr; right about 80% of the time. Fixes overconfidence.
      </p>
    </div>
    """,
    "Brier Score Decomposition & Calibration Repair",
    """
    <p>The Brier score decomposes into three mathematically orthogonal components (Murphy, 1973):</p>
    <div class="expert-equation my-3">
      \text{Brier} = \text{Reliability (Calibration Error)} - \text{Resolution} + \text{Uncertainty}
    </div>
    <p>Standard LLMs maximize <em>resolution</em> (sharp 0 or 1 predictions) at the complete expense of <em>reliability</em>. Jev's RLCD objective penalizes poorly calibrated distributions during reinforcement training, ensuring that when the model outputs $p=0.80$, its empirical error rate is exactly 20%.</p>
    """,
    ["Murphy (1973): Vector Partition of Brier Score", "Archer Hume §5"]
)

# --- ACT 15.1: Downside 1 - No independent benchmarks ---
add_slide(
    "15.1", "15 / 16", "15.1 / 16", "Downsides 1 / 6", None,
    "Downside 01: No independent benchmarks at launch",
    """
    <div class="py-4 space-y-3">
      <div class="text-amber-400 font-mono text-xl font-bold">01</div>
      <h1 class="text-2xl md:text-3xl font-black text-white">No independent benchmarks</h1>
      <p class="text-sm text-gray-200">Every speed and cost number comes from TypeSafe.</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        They skipped public leaderboards. Independent audits are only starting now.
      </p>
    </div>
    """,
    "Vendor Marketing vs Empirical Audits: The Emergence of JevBench",
    """
    <p>TypeSafe’s homepage claimed headline figures of <strong>193.6× faster</strong> and <strong>444.6× cheaper</strong>. However, independent audits by <strong>Benchmark Heaven (JevBench)</strong> and Archer Hume revealed more nuanced realities:</p>
    <div class="expert-callout my-3">
      <strong>Audited Realities:</strong><br/>
      • On standard tasks, Jev is typically <strong>6× to 20× faster</strong> than an LLM, not 200×, due to internet network transit times (median latency 650ms).<br/>
      • The 444× cost savings only occurs when comparing against reasoning-token-heavy models (o1/o3) generating thousands of hidden tokens. Against lightweight models (GPT-4o mini, Haiku), the cost advantage is ~15× to 30×.
    </div>
    """,
    ["Benchmark Heaven: JevBench Beta (Sep 2026)", "Archer Hume §8"]
)

# --- ACT 15.2: Downside 2 - Text only ---
add_slide(
    "15.2", "15 / 16", "15.2 / 16", "Downsides 2 / 6", None,
    "Downside 02: Text Only (No Native Vision/Audio)",
    """
    <div class="py-4 space-y-3">
      <div class="text-amber-400 font-mono text-xl font-bold">02</div>
      <h1 class="text-2xl md:text-3xl font-black text-white">Text only</h1>
      <p class="text-sm text-gray-200">It can't see images or hear audio.</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        Every real-time demo feeds it a text description of the world.
      </p>
    </div>
    """,
    "The Modality Gap: Preprocessing Overhead in Real-Time Loops",
    """
    <p>A critical constraint of Jev 1.13 is its lack of multimodal encoders. In robotics, browser automation, and gaming demos (such as DOOM), developers must run external OCR or computer vision pipelines to convert raw frames into text representations before Jev can evaluate actions.</p>
    <p>If the preprocessing pipeline takes 80ms, it eats up more than half of Jev's 120ms latency budget. Native vision-decision models are the obvious next frontier.</p>
    """,
    ["TypeSafe Documentation: Input Modalities", "Awesome-Jev: Computer Use Demands"]
)

# --- ACT 15.3: Downside 3 - No outside search ---
add_slide(
    "15.3", "15 / 16", "15.3 / 16", "Downsides 3 / 6", None,
    "Downside 03: No Web Search or External RAG",
    """
    <div class="py-4 space-y-3">
      <div class="text-amber-400 font-mono text-xl font-bold">03</div>
      <h1 class="text-2xl md:text-3xl font-black text-white">No web search, no outside knowledge</h1>
      <p class="text-sm text-gray-200">It only reasons over the state you hand it.</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        By design — it's a decision layer, not a research agent.
      </p>
    </div>
    """,
    "State Boundary Containment: RAG Must Precede Inference",
    """
    <p>Jev has no tool-calling capability, cannot execute web searches, and cannot query external APIs during inference. It reasons strictly over the text provided in the <code>state</code> argument.</p>
    <p>Application architectures must handle document retrieval (vector DB lookups or lexical search) upstream before packaging the context into the 32k state window.</p>
    """,
    ["TypeSafe Documentation: System Boundaries", "Archer Hume §2"]
)

# --- ACT 15.4: Downside 4 - It explains nothing ---
add_slide(
    "15.4", "15 / 16", "15.4 / 16", "Downsides 4 / 6", None,
    "Downside 04: The Black-Box Readout (Explains Nothing)",
    """
    <div class="py-4 space-y-3">
      <div class="text-amber-400 font-mono text-xl font-bold">04</div>
      <h1 class="text-2xl md:text-3xl font-black text-white">It explains nothing</h1>
      <p class="text-sm text-gray-200">Just an answer and a probability. No reasoning to inspect.</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        And 'can't hallucinate' isn't 'can't be wrong' — it picks confidently.
      </p>
    </div>
    """,
    "Auditability Void in Highly Regulated Sectors",
    """
    <p>In healthcare, credit underwriting, and legal compliance, regulatory frameworks (such as GDPR Article 22 or the EU AI Act) mandate a <em>Right to Explanation</em> for automated decisions.</p>
    <p>Because Jev terminates in a feedforward readout head without emitting natural language reasoning steps, compliance teams cannot audit <em>why</em> a loan application was scored as high risk. Teams must pair Jev with downstream generative models for audit logging.</p>
    """,
    ["EU AI Act Compliance Analysis", "Archer Hume §1"]
)

# --- ACT 15.5: Downside 5 - Known weak spots ---
add_slide(
    "15.5", "15 / 16", "15.5 / 16", "Downsides 5 / 6", None,
    "Downside 05: Arithmetic, Counting & Noise Degradation",
    """
    <div class="py-4 space-y-3">
      <div class="text-amber-400 font-mono text-xl font-bold">05</div>
      <h1 class="text-2xl md:text-3xl font-black text-white">Known weak spots</h1>
      <p class="text-sm text-gray-200 font-semibold">Reads literally. Weak at math, counting and dates.</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        Accuracy drops when you feed it irrelevant state. Keep arithmetic in code!
      </p>
    </div>
    """,
    "Empirical Failure Modes: The Jagged Edges of Jev 1.13",
    """
    <p>TypeSafe’s official documentation and independent audits document specific catastrophic failure modes:</p>
    <ul class="list-disc pl-5 space-y-1 text-xs text-gray-300">
      <li><strong>Date Arithmetic:</strong> Asking <em>"Was this transaction within 30 days of the last invoice?"</em> fails frequently. Arithmetic must be executed in Python/SQL code.</li>
      <li><strong>Counting:</strong> Asking <em>"Does this ticket mention at least three items?"</em> degrades rapidly.</li>
      <li><strong>State Pollution:</strong> Injecting unrelated conversation history into the shared state causes an empirical accuracy drop of 8%–14%. Inputs must be pre-filtered.</li>
    </ul>
    """,
    ["TypeSafe Documentation: Jaggedness & Limits", "Awesome-Jev: Limits of Jev 1.13"]
)

# --- ACT 15.6: Downside 6 - Closed and early ---
add_slide(
    "15.6", "15 / 16", "15.6 / 16", "Downsides 6 / 6", None,
    "Downside 06: Closed Weights & Single Vendor Lock-In",
    """
    <div class="py-4 space-y-3">
      <div class="text-amber-400 font-mono text-xl font-bold">06</div>
      <h1 class="text-2xl md:text-3xl font-black text-white">Closed and early</h1>
      <p class="text-sm text-gray-200">No open weights. One vendor. Waitlisted early access.</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        Pricing may be subsidised, and the model can change under you.
      </p>
    </div>
    """,
    "Vendor Risk & The Strategic Value of Open Reconstructions",
    """
    <p>Deploying production enterprise microservices against a closed, single-vendor API carries severe operational risk: proprietary API deprecation, latency variance, data sovereignty restrictions, and potential post-beta price surges.</p>
    <p>This risk catalyzed the rapid release of open-weight alternatives like <strong>Jared Palmer's Kev</strong> (Apache 2.0) and <strong>ConvAI's Laya</strong> (Apache 2.0), providing self-hosted insurance for enterprise engineering teams.</p>
    """,
    ["Jared Palmer: Kev Open Weights", "Laya: Open-Source Statement"]
)

# --- ACT 16.1: The Future 1 - Everyone copies it ---
add_slide(
    "16.1", "16 / 16", "16.1 / 16", "The future 1 / 7", "SAFE BET",
    "The Future 01: Everyone Copies It (Open Weight Clones)",
    """
    <div class="py-4 space-y-3">
      <div class="text-blue-400 font-mono text-xl font-bold">01</div>
      <h1 class="text-2xl md:text-3xl font-black text-white">Everyone copies it</h1>
      <p class="text-sm text-gray-200">Qwen clones appeared in days. JSON mode all over again.</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        Jev keeps the data and calibration. Not the idea.
      </p>
    </div>
    """,
    "Commoditization of the Non-Autoregressive Decision Head",
    """
    <p>Just as OpenAI's proprietary 'Function Calling' was rapidly reverse-engineered and commoditized across open models (vLLM, SGLang, Qwen, Mistral), Jev's architecture has already been replicated:</p>
    <div class="expert-callout my-3">
      <strong>Active Open-Source Implementations:</strong><br/>
      • <strong>Kev (Jared Palmer):</strong> Full decision head adaptation over Qwen 3.5 & 3.8.<br/>
      • <strong>Laya (ConvAI):</strong> ModernBERT-large 421M bidirectional encoder.<br/>
      • <strong>OpenJev (razorback16):</strong> DiffusionGemma NVFP4 adaptation.<br/>
      • <strong>Winnow-12B & Decider-4B:</strong> High-throughput specialized decision models.
    </div>
    """,
    ["github.com/jaredpalmer/kev", "benchmarkheaven.com/jev-models"]
)

# --- ACT 16.2: The Future 2 - Vanishes into the stack ---
add_slide(
    "16.2", "16 / 16", "16.2 / 16", "The future 2 / 7", "SAFE BET",
    "The Future 02: Vanishes into the Infrastructure Stack",
    """
    <div class="py-4 space-y-3">
      <div class="text-blue-400 font-mono text-xl font-bold">02</div>
      <h1 class="text-2xl md:text-3xl font-black text-white">It vanishes into the stack</h1>
      <p class="text-sm text-gray-200">Already inside Vercel, LiteLLM, and a Postgres <code>jev()</code> function.</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        You'll use it without ever calling it directly.
      </p>
    </div>
    """,
    "Integration into Gateway Routers and Database Engines",
    """
    <p>Developers will rarely call Jev directly in end-user applications. Instead, System 1 decision heads are being embedded directly into database kernels and API gateways:</p>
    <ul class="list-disc pl-5 space-y-1 text-xs text-gray-300">
      <li><strong>PostgreSQL <code>pg_jev</code>:</strong> Semantic indexing and row-level classification inside SQL queries.</li>
      <li><strong>LiteLLM Proxy:</strong> Automatic model routing—evaluating incoming prompt complexity in 30ms to choose between Claude 3.5 Haiku, Sonnet, or Opus.</li>
      <li><strong>Vercel AI SDK Gateway:</strong> Integrated prompt firewall screening requests before billing.</li>
    </ul>
    """,
    ["Awesome Jev: Tools & Integrations", "Vercel AI SDK Gateway Announcements"]
)

# --- ACT 16.3: The Future 3 - One brain, many reflexes ---
add_slide(
    "16.3", "16 / 16", "16.3 / 16", "The future 3 / 7", "LIKELY",
    "The Future 03: One Brain, Many Reflexes",
    """
    <div class="py-4 space-y-3">
      <div class="text-purple-400 font-mono text-xl font-bold">03</div>
      <h1 class="text-2xl md:text-3xl font-black text-white">One brain, many reflexes</h1>
      <p class="text-sm text-gray-200">A big model plans. Cheap decisions run every step between.</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        The real skill: splitting a goal into small questions.
      </p>
    </div>
    """,
    "Hierarchical Agent Architecture: Macro-Planning vs Micro-Execution",
    """
    <p>The prevailing agent architecture of 2026 is <strong>hierarchical dual-speed computing</strong>:</p>
    <div class="expert-equation my-3">
      \text{High-Level Planner (System 2: o3 / Opus)} \xrightarrow{\text{Decomposes}} \text{State Graph} \xrightarrow{\text{Monitored by}} \text{Reflex Deciders (System 1: Jev / Kev)}
    </div>
    <p>The expensive frontier model plans the high-level strategy once. The cheap, 100ms reflex deciders execute hundreds of intermediate validations, state checks, and loop gates, keeping execution fast, cheap, and strictly bound.</p>
    """,
    ["TypeSafe Documentation: Harness Engineering", "Awesome Jev: Patterns"]
)

# --- ACT 16.4: The Future 4 - Dashboards for doubt ---
add_slide(
    "16.4", "16 / 16", "16.4 / 16", "The future 4 / 7", "LIKELY",
    "The Future 04: Dashboards for Doubt (Calibration Monitoring)",
    """
    <div class="py-4 space-y-3">
      <div class="text-purple-400 font-mono text-xl font-bold">04</div>
      <h1 class="text-2xl md:text-3xl font-black text-white">Dashboards for doubt</h1>
      <p class="text-sm text-gray-200">Wrong answers are silent. Someone has to watch the numbers.</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        Calibration graphs and drift alerts become standard kit.
      </p>
    </div>
    """,
    "Production MLOps: Expected Calibration Error (ECE) Drift Alerts",
    """
    <p>When an LLM fails, it hallucinates noticeably in prose. When a decision model fails, it outputs a silent misclassification with high probability.</p>
    <p>Consequently, production monitoring in System 1 pipelines shifts from hallucination evals to <strong>calibration telemetry</strong>: tracking Brier score decay and ECE drift across production traffic to detect concept drift in support tickets or fraud vectors.</p>
    """,
    ["Archer Hume §5: Calibration Under Shift", "MLOps Calibration Standards"]
)

# --- ACT 16.5: The Future 5 - A new job title ---
add_slide(
    "16.5", "16 / 16", "16.5 / 16", "The future 5 / 7", "LIKELY",
    "The Future 05: A New Job Title (Rubric & Schema Engineering)",
    """
    <div class="py-4 space-y-3">
      <div class="text-purple-400 font-mono text-xl font-bold">05</div>
      <h1 class="text-2xl md:text-3xl font-black text-white">A new job title</h1>
      <p class="text-sm text-gray-200">Writing the options and thresholds is the actual work now.</p>
      <p class="text-xs text-gray-400 font-mono pt-3 border-t border-gray-800">
        Prompt engineering, round two, backlash included.
      </p>
    </div>
    """,
    "From Prompt Fluff to Formal Schema Rubrics",
    """
    <p>Vague prompting (<em>"You are a helpful assistant, please classify this carefully..."</em>) is obsolete in System 1 workflows. The actual engineering work consists of writing formal, mutually exclusive rubrics and setting empirical confidence thresholds:</p>
    <div class="expert-callout my-3">
      <strong>Rubric Engineering:</strong> Defining explicit 5-level ordinal rubrics with concrete numerical boundaries observed from production outcomes, ensuring calibration remains rock-solid.
    </div>
    """,
    ["CampusX Phone Review Questions Design", "Awesome Jev: Rubric Patterns"]
)

# --- ACT 16.6: The Future 6 - Give it eyes ---
add_slide(
    "16.6", "16 / 16", "16.6 / 16", "The future 6 / 7", "WILD CARD",
    "The Future 06: Give It Eyes (Real-Time Vision Deciders)",
    """
    <div class="py-4 space-y-3">
      <div class="text-red-400 font-mono text-xl font-bold">06</div>
      <h1 class="text-2xl md:text-3xl font-black text-white">Give it eyes</h1>
      <p class="text-sm text-gray-200">Right now it reads a text description of Doom.</p>
      <p class="text-base text-lime font-mono pt-2">Let it read the screen, and robotics opens up.</p>
    </div>
    """,
    "Direct Video-to-Action Representations for Embodied AI",
    """
    <p>Today, Jev requires text state. But when the decision readout head is mounted onto native video encoders (like SigLIP or PaliGemma), inference directly maps 60 FPS video frames to robot arm joint velocities or browser clicks at 20ms latency, bypassing linguistic mediation entirely.</p>
    """,
    ["ShipWithJev: Robotics & Devices Category", "ConvAI Innovations Research"]
)

# --- ACT 16.7: The Future 7 - Too cheap to not use ---
add_slide(
    "16.7", "16 / 16", "16.7 / 16", "The future 7 / 7", "WILD CARD",
    "The Future 07: Too Cheap to Not Use",
    """
    <div class="py-4 space-y-3">
      <div class="text-red-400 font-mono text-xl font-bold">07</div>
      <h1 class="text-2xl md:text-3xl font-black text-white">Too cheap to not use</h1>
      <p class="text-xl text-gray-200 font-bold">A decision costs <span class="text-lime">$0.00004</span>. Check everything, always.</p>
      <p class="text-sm text-gray-400 font-mono pt-2 border-t border-gray-800">
        Per keystroke. Per scroll. Per log line.
      </p>
    </div>
    """,
    "Jevons Paradox in Cognitive Computation",
    """
    <p>William Stanley Jevons observed in 1865 that increasing the efficiency of coal usage did not decrease coal consumption; it led to an exponential expansion of coal use across new industries. It is no coincidence that TypeSafe named their model <strong>Jev</strong>.</p>
    <div class="expert-callout my-3">
      <strong>The Jevons Climax:</strong> When semantic checking costs $0.00004 per call, semantic evaluation is not restricted to critical checkpoints. It runs continuously: on every keystroke in a text input, on every DOM scroll mutation, on every microsecond network packet.
    </div>
    """,
    ["Jevons (1865): The Coal Question", "TypeSafe AI: Jevons Paradox in AI"]
)

# Output to slides.js
with open(r'C:\Users\harshw\.gemini\antigravity\scratch\jev-talk-website\slides.js', 'w', encoding='utf-8') as f:
    f.write('// Auto-generated comprehensive master dataset with Presentation Visuals & Pro Expert Dossiers\n')
    f.write('window.SLIDES_DATA = ' + json.dumps(slides, indent=2) + ';\n')

print(f'Successfully compiled {len(slides)} comprehensive slides to slides.js!')
