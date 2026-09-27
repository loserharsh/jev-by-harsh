// Auto-generated comprehensive master dataset with Presentation Visuals & Pro Expert Dossiers
window.SLIDES_DATA = [
  {
    "id": "1",
    "act": "1 / 16",
    "subIndex": "1 / 16",
    "breadcrumb": "",
    "badge": null,
    "title": "So what is Jev?",
    "visualHtml": "\n<div class=\"text-center py-8 md:py-14 flex flex-col items-center justify-center my-auto\">\n  <h1 class=\"slide-title-hero mb-4 md:mb-6\">So what is <span class=\"text-lime\">Jev</span>?</h1>\n  <p class=\"slide-subtitle-hero\">It's a new AI model.</p>\n</div>\n",
    "expertTitle": "The Paradigm Shift: From Text Generation to Direct Latent Decision Projection",
    "expertBody": "\n    <p>Every major AI foundation model since GPT-2 has treated automated tasks as <strong>autoregressive text generation</strong>: estimating joint token probabilities $P(w_1, w_2, \\dots, w_N) = \\prod_{i=1}^N P(w_i \\mid w_{<i})$. When software needs an operational decision (e.g., routing an email, evaluating an agent tool call, verifying a security policy), engineers prompt an LLM to generate natural language explanations or JSON text, then parse that string back into application state.</p>\n    <div class=\"expert-callout my-3\">\n      <strong>The Fundamental Flaw:</strong> Autoregressive decode loops require $O(N)$ sequential GPU memory transfers, bottlenecked strictly by High Bandwidth Memory (HBM) bandwidth rather than Tensor Core compute. Generating <em>\"The priority is High because...\"</em> costs hundreds of milliseconds and thousands of arithmetic operations for a decision that requires only a single vector classification.\n    </div>\n    <p><strong>Jev</strong> (launched September 2026 by TypeSafe AI) replaces autoregressive token-by-token generation with <strong>direct latent readout heads</strong> over a shared context representation. It provides a non-generative, System 1 decision engine executing in ~120 ms.</p>",
    "citations": [
      "TypeSafe AI Launch Post (Sep 2026)",
      "Archer Hume: Jev's Architecture Unmasked"
    ]
  },
  {
    "id": "2",
    "act": "2 / 16",
    "subIndex": "2 / 16",
    "breadcrumb": "",
    "badge": null,
    "title": "It's not an LLM.",
    "visualHtml": "\n<div class=\"relative py-4 md:py-8 space-y-4 md:space-y-6\">\n  <div class=\"watermark-grid\">\n    <span>Halcyon-3</span><span>Numina 70B</span><span>Corvid Mini</span><span>Tessellate-XL</span>\n    <span>Verdigris 8x22</span><span>Lacuna-1.5</span><span>Sombre 32K</span><span>Quillon Air</span>\n    <span>Fathom-9</span><span>Basalt Ultra</span><span>Nimbus</span><span>Qwen-Max</span>\n  </div>\n  <div class=\"relative z-10 space-y-3 md:space-y-4\">\n    <h2 class=\"text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight\">\n      So what? A lot of models<br/>come up every other week.\n    </h2>\n    <p class=\"text-lg md:text-2xl font-bold text-white\">\n      But Jev is different.\n    </p>\n    <div class=\"pt-2\">\n      <h1 class=\"text-3xl md:text-6xl font-black text-white tracking-tight\">\n        It's <span class=\"text-lime font-black\">not</span> an LLM.\n      </h1>\n    </div>\n  </div>\n</div>\n",
    "expertTitle": "Decision Models vs Language Models: The Structural Boundary",
    "expertBody": "\n    <p>In industry parlance, virtually every model released in 2025\u20132026 (such as Halcyon-3, Numina 70B, Qwen-Max, or Claude 3.5/3.7) is an autoregressive language model. Even when constrained using structured decoding frameworks (like Outlines, Guidance, or SGLang grammar masks), these models remain text generators at their core: they sample tokens from a 150k\u2013200k vocabulary vocabulary distribution sequentially.</p>\n    <div class=\"expert-equation my-3\">\n      LLM: x_{t+1} \\sim \\text{Softmax}(W_{\\text{vocab}} h_t) \\quad \\text{repeated for } t = 1 \\dots N\n    </div>\n    <div class=\"expert-equation my-3\">\n      Jev Decision Model: \\mathbf{p} = \\text{Softmax}(W_{\\text{decision}} h_{\\text{terminal}} / T) \\quad \\text{single step, } K \\ll |\\mathcal{V}|\n    </div>\n    <p>By constraining the output space to a predefined schema vector of $K$ options (where $K$ is typically 2 to 255) rather than the open vocabulary $\\mathcal{V}$, Jev bypasses token generation entirely, achieving mathematical closure over the choice set.</p>",
    "citations": [
      "Archer Hume \u00a71: End inference with a readout",
      "TypeSafe API Technical Reference"
    ]
  },
  {
    "id": "3",
    "act": "3 / 16",
    "subIndex": "3 / 16",
    "breadcrumb": "",
    "badge": null,
    "title": "Jev does not generate text.",
    "visualHtml": "\n<div class=\"space-y-4 py-2 relative\">\n  <div class=\"p-3 bg-[#13161f] border border-gray-800/80 rounded-lg text-xs font-mono text-gray-300\">\n    <span class=\"text-gray-500 uppercase tracking-wider text-[10px] block mb-1\">Question</span>\n    Is this ticket urgent?\n  </div>\n  \n  <div class=\"p-4 bg-[#11131a] border border-gray-800/80 rounded-xl space-y-2 opacity-85\">\n    <div class=\"flex justify-between items-center text-xs font-mono\">\n      <div class=\"flex items-center gap-2\">\n        <span class=\"px-2 py-0.5 rounded bg-blue-950/80 text-blue-400 border border-blue-800/50 font-bold text-[10px]\">LLM</span>\n        <span class=\"text-gray-400 text-[11px]\">one token at a time</span>\n      </div>\n      <span class=\"text-gray-500 text-[11px]\">token 10 / 45</span>\n    </div>\n    <div class=\"text-[10px] font-mono text-gray-500 uppercase pt-1\">Answer</div>\n    <div class=\"text-xs text-gray-400 font-mono italic\">\n      \"Yes, this ticket seems urgent because the customer ...\"\n    </div>\n    <div class=\"w-full bg-gray-800 h-1.5 rounded overflow-hidden mt-2\">\n      <div class=\"bg-blue-400 h-full w-[25%] animate-pulse\"></div>\n    </div>\n  </div>\n\n  <div class=\"pt-3\">\n    <h1 class=\"text-3xl md:text-5xl font-black text-white leading-tight tracking-tight\">\n      <span class=\"text-lime\">Jev</span> does not<br/>generate text.\n    </h1>\n    <p class=\"text-[11px] text-gray-400 font-mono mt-2\">Illustrative token stream \u2014 not model output.</p>\n  </div>\n</div>\n",
    "expertTitle": "Arithmetic Intensity & Roofline Limits of Next-Token Decoding",
    "expertBody": "\n    <p>To understand why text generation is slow, consider the GPU Roofline Model: performance is bound by either arithmetic compute (FLOP/s) or memory bandwidth (GB/s). In LLM token generation (the decode phase), the batch size is often small (1-8), meaning every single token generated requires streaming all 70+ billion parameters from VRAM to SRAM:</p>\n    <div class=\"expert-equation my-3\">\n      \\text{Arithmetic Intensity}_{\\text{decode}} = \\frac{2 \\times P \\text{ FLOPs}}{2 \\times P \\text{ Bytes}} \\approx 1 \\text{ FLOP/Byte}\n    </div>\n    <p>On an NVIDIA H100 (3.35 TB/s HBM3 bandwidth, 1,979 TFLOP/s FP16 compute), an arithmetic intensity of 1 FLOP/Byte utilizes less than <strong>0.2%</strong> of the GPU's compute capability! The GPU is starved of compute, waiting for memory bus transfers.</p>\n    <p>In Jev, because the entire prompt and decision query are ingested in <strong>one single prefill forward pass</strong>, arithmetic intensity reaches 100\u2013300 FLOPs/Byte. The GPU saturates its Tensor Cores, finishing the inference in milliseconds.</p>",
    "citations": [
      "Roofline Model Analysis in Transformer Serving",
      "Archer Hume \u00a76: Sparse Capacity"
    ]
  },
  {
    "id": "4",
    "act": "4 / 16",
    "subIndex": "4 / 16",
    "breadcrumb": "So what is Jev?",
    "badge": null,
    "title": "Fast, structured decisions for software",
    "visualHtml": "\n    <div class=\"py-8 space-y-4\">\n      <div class=\"text-xs font-mono text-gray-400 uppercase tracking-widest\">Core Mission</div>\n      <h1 class=\"text-2xl md:text-4xl font-extrabold text-white leading-tight tracking-tight\">\n        Jev is an AI model built to make <span class=\"text-lime\">fast, structured decisions</span> that software can use directly.\n      </h1>\n      <div class=\"p-4 bg-black/40 border border-gray-800 rounded-xl space-y-2 mt-4 font-mono text-xs\">\n        <div class=\"text-gray-400\">Traditional Stack: State &rarr; LLM &rarr; English string &rarr; Regex/Pydantic &rarr; If-Else</div>\n        <div class=\"text-lime font-bold\">Jev Stack: State &rarr; Jev Readout &rarr; Typed Probability Vector &rarr; Deterministic Code</div>\n      </div>\n    </div>",
    "expertTitle": "Eliminating the Fragile Grammar-Constrained Parsing Middleware",
    "expertBody": "\n    <p>Modern agent frameworks expend significant compute attempting to coerce LLMs into valid JSON using schema parsers (Outlines, Instructor, Pydantic). When an LLM generates structured output via JSON mode, it still executes token-by-token. A single stray character, backslash escape failure, or truncated token invalidates the entire response.</p>\n    <p>Jev bypasses parsing middleware altogether. The client submits a native typed question schema:</p>\n    <ul class=\"list-disc pl-5 space-y-1 text-xs font-mono text-gray-300\">\n      <li><strong>Noul:</strong> Calibrated probability $p \\in [0.0, 1.0]$ representing a binary boolean condition.</li>\n      <li><strong>Choice:</strong> A categorical distribution over an explicit set of string literals with normalized probabilities.</li>\n      <li><strong>Score:</strong> An ordinal rubric scale ($0 \\dots K-1$) with satisfaction probabilities.</li>\n    </ul>\n    <p>Because the output is emitted as native floating-point tensors directly from the model's head, serialization is instant and 100% type-safe.</p>",
    "citations": [
      "TypeSafe AI: Primitives and Questions Documentation",
      "CampusX: Jev Demo Architecture"
    ]
  },
  {
    "id": "5",
    "act": "5 / 16",
    "subIndex": "5 / 16",
    "breadcrumb": "",
    "badge": null,
    "title": "One Parallel Pass: State, Question, Options",
    "visualHtml": "\n    <div class=\"space-y-4 py-2\">\n      <div class=\"grid grid-cols-1 md:grid-cols-12 gap-3 items-center\">\n        <!-- State Column -->\n        <div class=\"md:col-span-6 space-y-2\">\n          <div class=\"text-[11px] font-mono text-gray-400 uppercase tracking-wider\">State (Shared Context)</div>\n          <div id=\"slide5-state-text\" class=\"text-xs text-gray-200 font-mono bg-black/50 p-2.5 rounded border border-gray-800\">\n            \"My package arrived damaged and I want a refund.\"\n          </div>\n          <div class=\"flex gap-1.5\">\n            <button onclick=\"window.setSlide5Ticket('damaged')\" class=\"text-[10px] font-mono px-2 py-0.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded\">Package</button>\n            <button onclick=\"window.setSlide5Ticket('invoice')\" class=\"text-[10px] font-mono px-2 py-0.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded\">Double Charge</button>\n            <button onclick=\"window.setSlide5Ticket('login')\" class=\"text-[10px] font-mono px-2 py-0.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded\">2FA Error</button>\n          </div>\n        </div>\n\n        <!-- Engine Pass -->\n        <div class=\"md:col-span-6 flex flex-col items-center\">\n          <div class=\"p-3 bg-[#161a22] border border-lime/70 rounded-xl text-center w-full shadow-[0_0_20px_rgba(180,243,77,0.1)]\">\n            <div class=\"text-xl font-black text-lime\">Jev Engine</div>\n            <div class=\"text-[10px] font-mono text-gray-300\">single forward pass \u00b7 ~120 ms</div>\n          </div>\n          <button onclick=\"window.runSlide5Sim()\" class=\"mt-1.5 text-[11px] font-mono text-lime hover:underline cursor-pointer\">\n            \u26a1 Re-run pass\n          </button>\n        </div>\n      </div>\n\n      <!-- Probability Readout Bars -->\n      <div class=\"p-3 bg-black/40 border border-gray-800 rounded-xl space-y-2\" id=\"slide5-bars\">\n        <div>\n          <div class=\"flex justify-between text-xs font-mono text-gray-200 mb-0.5\"><span class=\"font-bold text-lime\">shipping</span><span class=\"text-lime\">0.71</span></div>\n          <div class=\"bar-track\"><div class=\"bar-fill\" style=\"width: 71%;\"></div></div>\n        </div>\n        <div>\n          <div class=\"flex justify-between text-xs font-mono text-gray-400 mb-0.5\"><span>billing</span><span>0.24</span></div>\n          <div class=\"bar-track\"><div class=\"bar-fill opacity-60\" style=\"width: 24%;\"></div></div>\n        </div>\n        <div>\n          <div class=\"flex justify-between text-xs font-mono text-gray-400 mb-0.5\"><span>general</span><span>0.04</span></div>\n          <div class=\"bar-track\"><div class=\"bar-fill opacity-40\" style=\"width: 4%;\"></div></div>\n        </div>\n        <div>\n          <div class=\"flex justify-between text-xs font-mono text-gray-400 mb-0.5\"><span>technical</span><span>0.01</span></div>\n          <div class=\"bar-track\"><div class=\"bar-fill opacity-30\" style=\"width: 1%;\"></div></div>\n        </div>\n      </div>\n\n      <div class=\"text-center font-bold text-white text-base\">\n        No text. No parsing. Just a typed answer with a probability.\n      </div>\n    </div>",
    "expertTitle": "Internal Mechanics: Linear Projection from Terminal Latent State",
    "expertBody": "\n    <p>How does Jev convert unstructured text into calibrated probabilities in ~120ms? Let the input sequence be tokens $X = [x_1, \\dots, x_M]$ corresponding to the shared state and the question prompt.</p>\n    <div class=\"expert-equation my-3\">\n      H = \\text{TransformerBackbone}(X), \\quad h_{\\text{last}} = H[-1] \\in \\mathbb{R}^{d_{\\text{model}}}\n    </div>\n    <p>Instead of mapping $h_{\\text{last}}$ to a 128,000-dimensional language vocabulary head, Jev projects $h_{\\text{last}}$ through a task-specific projection matrix $W \\in \\mathbb{R}^{K \\times d_{\\text{model}}}$ and bias $b \\in \\mathbb{R}^K$:</p>\n    <div class=\"expert-equation my-3\">\n      z_k = W_k h_{\\text{last}} + b_k, \\quad p(y = k \\mid X) = \\frac{\\exp(z_k / T)}{\\sum_{j=1}^K \\exp(z_j / T)}\n    </div>\n    <p>Archer Hume's probe of 10,000 calls revealed that increasing options from 2 to 255 produced zero measurable variance in server latency (~160ms execution), confirming that the operation is a single feedforward projection without iterative loops.</p>",
    "citations": [
      "Archer Hume \u00a71: End inference with a readout",
      "Jared Palmer: Kev Head Architecture"
    ]
  },
  {
    "id": "6",
    "act": "6 / 16",
    "subIndex": "6 / 16",
    "breadcrumb": "",
    "badge": null,
    "title": "Why LLMs fail on structured output: Speed & Cost",
    "visualHtml": "\n    <div class=\"py-6 space-y-4\">\n      <h1 class=\"text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight\">\n        So what? Any LLM can do this with structured output.\n      </h1>\n      <p class=\"text-xl text-gray-300 font-medium\">\n        True. It can. Two things change:\n      </p>\n      <div class=\"grid grid-cols-2 gap-4 pt-2\">\n        <div class=\"p-4 bg-[#141722] border border-lime/30 rounded-xl\">\n          <span class=\"text-lime font-mono font-bold text-xl\">01</span>\n          <div class=\"text-2xl font-black text-white mt-1\">Speed</div>\n          <div class=\"text-xs text-gray-400 mt-1\">From seconds to sub-200ms reflexes</div>\n        </div>\n        <div class=\"p-4 bg-[#141722] border border-lime/30 rounded-xl\">\n          <span class=\"text-lime font-mono font-bold text-xl\">02</span>\n          <div class=\"text-2xl font-black text-white mt-1\">Cost</div>\n          <div class=\"text-xs text-gray-400 mt-1\">80\u00d7 to 400\u00d7 lower token overhead</div>\n        </div>\n      </div>\n      <p class=\"text-xs font-mono text-gray-500 pt-2 border-t border-gray-800\">\n        Both measured on the same job: triaging a support inbox with Jev and with an LLM.\n      </p>\n    </div>",
    "expertTitle": "The Economics of Decision Automation",
    "expertBody": "\n    <p>When organizations deploy LLMs for workflow automation (e.g. Zendesk/Salesforce inbox routing, KYC transaction screening, content moderation), they encounter severe scaling walls:</p>\n    <div class=\"expert-callout my-3\">\n      <strong>1. The Latency Ceiling:</strong> Human perception recognizes lag beyond 150\u2013200 ms. A 3-to-4 second LLM call cannot be inserted into real-time UI typing, autocomplete, or high-speed gaming loops.<br/>\n      <strong>2. Reasoning Token Inflation:</strong> Modern frontier models (like OpenAI o1/o3 or DeepSeek-R1) generate hundreds or thousands of internal 'reasoning tokens' prior to outputting an answer, multiplying cost by 10x-50x on simple classification tasks.\n    </div>\n    <p>By decoupling semantic comprehension from conversational generation, System 1 decision models transform semantic checking into a utility as fast and cheap as a database query.</p>",
    "citations": [
      "docs.typesafe.ai/concepts/use-case-map",
      "Benchmark Heaven: Cost vs Capability"
    ]
  },
  {
    "id": "7",
    "act": "7 / 16",
    "subIndex": "7 / 16",
    "breadcrumb": "",
    "badge": "LIVE",
    "title": "First Difference: Speed (650ms vs 4.07s)",
    "visualHtml": "\n    <div class=\"py-2 space-y-4\">\n      <div>\n        <h2 class=\"text-xl md:text-2xl font-bold text-white\">First difference: <span class=\"text-lime\">speed.</span></h2>\n        <p class=\"text-[11px] font-mono text-gray-400\">Published: LLM 3s \u2013 329s \u00b7 Jev 70 \u2013 500ms \u00b7 Claim 40\u2013200\u00d7 faster</p>\n      </div>\n\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n        <!-- LLM Box -->\n        <div class=\"jev-card space-y-2\">\n          <div class=\"flex justify-between text-xs font-mono text-blue-400\">\n            <span class=\"font-bold\">LLM</span>\n            <span>gpt-5-2025-08-07</span>\n          </div>\n          <div id=\"slide7-llm-time\" class=\"text-3xl md:text-4xl font-mono font-bold text-white\">4.07 <span class=\"text-xs text-gray-400\">s</span></div>\n          <div class=\"text-[11px] font-mono text-gray-400\">conf 0.99 \u00b7 137 in / 216 out</div>\n        </div>\n\n        <!-- Jev Box -->\n        <div class=\"jev-card jev-card-glow space-y-2\">\n          <div class=\"flex justify-between text-xs font-mono text-lime\">\n            <span class=\"font-bold\">Jev</span>\n            <span>jev-1.13.0</span>\n          </div>\n          <div id=\"slide7-jev-time\" class=\"text-3xl md:text-4xl font-mono font-bold text-lime\">650 <span class=\"text-xs text-lime/70\">ms</span></div>\n          <div class=\"text-[11px] font-mono text-lime/80\">conf 1.00 \u00b7 387 in / 45 out</div>\n        </div>\n      </div>\n\n      <div class=\"flex justify-between items-center pt-1\">\n        <span class=\"font-bold text-white text-sm\">Jev answered <span class=\"text-lime\">6.3\u00d7 faster</span> \u2014 same answer.</span>\n        <button onclick=\"window.runSpeedRace()\" class=\"btn-pill btn-pill-lime\">\u25b6 Run Real-Time Race</button>\n      </div>\n      <p class=\"text-[10px] font-mono text-gray-500 border-t border-gray-800 pt-2\">Figures are TypeSafe's own from their launch post. Independent benchmark audits shown in Deep-Dive.</p>\n    </div>",
    "expertTitle": "Empirical Latency Breakdown: Jev vs Open Clones (Laya, Decider-4b)",
    "expertBody": "\n    <p>While TypeSafe reports end-to-end HTTP latency of 70 ms to 500 ms (median 650 ms on cross-internet API evals), independent benchmarking on <strong>Benchmark Heaven (JevBench)</strong> reveals critical distinctions between network transit and raw model compute:</p>\n    <div class=\"overflow-x-auto my-3\">\n      <table class=\"w-full text-left font-mono text-[11px] border border-gray-800\">\n        <thead class=\"bg-gray-900 text-gray-400\">\n          <tr><th class=\"p-1.5\">Model</th><th class=\"p-1.5\">Compute Engine</th><th class=\"p-1.5\">P50 Latency</th><th class=\"p-1.5\">P99 Latency</th></tr>\n        </thead>\n        <tbody class=\"divide-y divide-gray-800/60 text-gray-300\">\n          <tr><td class=\"p-1.5 text-lime font-bold\">decider-4b v2</td><td class=\"p-1.5\">RunPod GPU (FP16)</td><td class=\"p-1.5 font-bold text-green-400\">20 ms</td><td class=\"p-1.5\">45 ms</td></tr>\n          <tr><td class=\"p-1.5 text-purple-300 font-bold\">Laya (ConvAI)</td><td class=\"p-1.5\">ModernBERT 421M (T4)</td><td class=\"p-1.5 font-bold text-green-400\">32.8 ms</td><td class=\"p-1.5\">58 ms</td></tr>\n          <tr><td class=\"p-1.5 text-blue-300\">Kev-4B</td><td class=\"p-1.5\">RTX 3090 (BF16)</td><td class=\"p-1.5\">330 ms</td><td class=\"p-1.5\">510 ms</td></tr>\n          <tr><td class=\"p-1.5 text-white\">Jev 1.13.0 API</td><td class=\"p-1.5\">TypeSafe Hosted</td><td class=\"p-1.5\">160 ms (server)</td><td class=\"p-1.5\">650 ms (e2e)</td></tr>\n          <tr><td class=\"p-1.5 text-red-400\">GPT-5 / Claude</td><td class=\"p-1.5\">Frontier API</td><td class=\"p-1.5\">4,070 ms</td><td class=\"p-1.5\">14,200 ms</td></tr>\n        </tbody>\n      </table>\n    </div>\n    <p>Notice that open encoder-based decision models (like Nandakishor's Laya) achieve <strong>sub-35ms latencies</strong>, running 10x-20x faster than hosted API decoders because they eliminate cross-country TLS handshakes and MoE routing overhead.</p>",
    "citations": [
      "Benchmark Heaven: JevBench Latency Records",
      "Laya Research: arXiv:2503.23303"
    ]
  },
  {
    "id": "8",
    "act": "8 / 16",
    "subIndex": "8 / 16",
    "breadcrumb": "",
    "badge": "LIVE",
    "title": "Second Difference: Cost (81.2x Cheaper)",
    "visualHtml": "\n    <div class=\"py-2 space-y-3\">\n      <div>\n        <h2 class=\"text-xl md:text-2xl font-bold text-white\">Second difference: <span class=\"text-lime\">cost.</span></h2>\n        <p class=\"text-[11px] font-mono text-gray-400\">Per M tokens \u2014 in: LLM \u20b9119.50 \u00b7 Jev \u20b94.02 \u00b7 out: LLM \u20b9956.00 \u00b7 Jev free</p>\n      </div>\n\n      <div class=\"overflow-x-auto\">\n        <table class=\"w-full text-left font-mono text-xs border border-gray-800\">\n          <thead class=\"bg-gray-900 text-gray-400\">\n            <tr><th class=\"p-2\">Metric (10k emails/day)</th><th class=\"p-2 text-blue-400\">LLM</th><th class=\"p-2 text-lime\">Jev</th></tr>\n          </thead>\n          <tbody class=\"divide-y divide-gray-800/60\">\n            <tr><td class=\"p-2 text-gray-300\">Per email</td><td class=\"p-2\">\u20b90.326</td><td class=\"p-2 text-lime font-bold\">\u20b90.004</td></tr>\n            <tr><td class=\"p-2 text-gray-300\">Per day</td><td class=\"p-2\">\u20b93,260</td><td class=\"p-2 text-lime font-bold\">\u20b940</td></tr>\n            <tr class=\"bg-lime/5\"><td class=\"p-2 font-bold text-white\">Per year</td><td class=\"p-2 text-red-400 font-bold\">\u20b911,89,885</td><td class=\"p-2 text-lime font-black text-sm\">\u20b914,655</td></tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"p-3 bg-lime/10 border border-lime/30 rounded-lg text-center\">\n        <div class=\"text-2xl font-black text-lime\">81.2\u00d7 cheaper</div>\n        <div class=\"text-xs font-mono text-gray-300\">\u20b911,75,230 saved/year ($14,000+ USD)</div>\n      </div>\n      <p class=\"text-[10px] font-mono text-gray-500\">Converted at \u20b995.6/USD. Vendor claims up to 444.6\u00d7 on heavy reasoning token evals.</p>\n    </div>",
    "expertTitle": "Unit Economics: Pricing Structure & Community Verification",
    "expertBody": "\n    <p>TypeSafe charges a flat <strong>$42 per billion input tokens</strong> ($0.042 per million input tokens), and <strong>output tokens are completely free</strong>. Compare this to standard pricing:</p>\n    <ul class=\"list-disc pl-5 space-y-1 text-xs font-mono text-gray-300\">\n      <li><strong>GPT-4o:</strong> $2.50 / M input, $10.00 / M output.</li>\n      <li><strong>Claude 3.5 Sonnet:</strong> $3.00 / M input, $15.00 / M output.</li>\n      <li><strong>Jev 1.13:</strong> $0.042 / M input, $0.00 / M output (<strong>60x - 238x cheaper</strong>).</li>\n      <li><strong>Laya / Self-Hosted Kev:</strong> $0.0029 / 1k decisions on dedicated GPU instance.</li>\n    </ul>\n    <div class=\"expert-callout my-3\">\n      <strong>Real-World Builder Audits (from Awesome-Jev):</strong><br/>\n      \u2022 <strong>@nutlope:</strong> Classified 1,018 scientific papers for $0.08 total; the generative summaries for those papers cost $3.99 (50x cost disparity).<br/>\n      \u2022 <strong>@walidboulanouar:</strong> Evaluated ~100,000 tokens during development for a total bill of $0.001 (one-tenth of a cent).\n    </div>",
    "citations": [
      "TypeSafe Official Pricing (Sep 2026)",
      "Awesome Jev Use Cases: Cost Reports"
    ]
  },
  {
    "id": "9.1",
    "act": "9 / 16",
    "subIndex": "9.1 / 16",
    "breadcrumb": "Other benefits: 9.1 Many questions | 9.2 Confidence | 9.3 Can't make up",
    "badge": null,
    "title": "Many questions, one pass (Parallel Sampler)",
    "visualHtml": "\n    <div class=\"py-4 space-y-4\">\n      <h2 class=\"text-xl md:text-2xl font-bold text-white\">9.1 Many questions, one pass</h2>\n      <div class=\"jev-card space-y-3\">\n        <div class=\"text-xs font-mono text-gray-400\">Shared axis \u00b7 full width = 7.0 s</div>\n        <div>\n          <div class=\"flex justify-between text-xs font-mono text-gray-300 mb-1\">\n            <span class=\"text-lime font-bold\">Jev \u2014 5 questions in parallel</span>\n            <span class=\"text-lime font-bold\">\u2248 130 ms</span>\n          </div>\n          <div class=\"w-full bg-gray-800 h-5 rounded relative overflow-hidden flex items-center\">\n            <div class=\"bg-lime h-full w-[2.5%] shadow-[0_0_8px_#b4f34d]\"></div>\n          </div>\n        </div>\n        <div>\n          <div class=\"flex justify-between text-xs font-mono text-gray-400 mb-1\">\n            <span>LLM \u2014 one call per question</span>\n            <span>\u2248 7.0 s</span>\n          </div>\n          <div class=\"w-full bg-gray-800 h-5 rounded relative overflow-hidden flex divide-x divide-black/50\">\n            <div class=\"bg-blue-500/80 h-full w-[20%]\"></div>\n            <div class=\"bg-blue-500/80 h-full w-[20%]\"></div>\n            <div class=\"bg-blue-500/80 h-full w-[20%]\"></div>\n            <div class=\"bg-blue-500/80 h-full w-[20%]\"></div>\n            <div class=\"bg-blue-500/80 h-full w-[20%]\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"text-center font-bold text-white text-base pt-2\">\n        Adding a question adds <span class=\"text-lime\">almost no time or cost.</span>\n      </div>\n    </div>",
    "expertTitle": "Tree Attention Masks & Prefix KV Sharing (HydraGen / DeFT Pattern)",
    "expertBody": "\n    <p>How does Jev answer 5, 10, or 50 questions simultaneously without linear latency growth? In standard LLMs, asking 5 separate questions requires either 5 distinct network calls ($5 \\times T_{\\text{prefill}}$) or a massive consolidated prompt that confuses the model's instruction following.</p>\n    <p>Jev structures the attention matrix as a <strong>tree attention mask</strong>:</p>\n    <div class=\"expert-callout my-3\">\n      <strong>Attention Mask Formulation:</strong><br/>\n      \u2022 Tokens in State $S$ attend strictly to earlier tokens in $S$ ($A_{i,j} = 1$ for $j \\le i \\le |S|$).<br/>\n      \u2022 Tokens in Question Branch $Q_k$ attend to all state tokens in $S$ AND to earlier tokens in $Q_k$.<br/>\n      \u2022 Tokens in $Q_k$ are <strong>masked from attending to sibling branch $Q_m$</strong> ($A_{Q_k, Q_m} = 0$).\n    </div>\n    <p>Because the shared state prefix KV cache is calculated only once in VRAM, processing 50 questions adds only the incremental suffix compute. Hume confirmed that scaling from 1 to 100 questions barely moved server response time.</p>",
    "citations": [
      "Archer Hume \u00a72: Share the state, isolate the questions",
      "HydraGen: Attention for Prefix Sharing"
    ]
  },
  {
    "id": "9.2",
    "act": "9 / 16",
    "subIndex": "9.2 / 16",
    "breadcrumb": "Other benefits: 9.1 Many questions | 9.2 Confidence | 9.3 Can't make up",
    "badge": null,
    "title": "Calibrated Confidence (RLCD)",
    "visualHtml": "\n    <div class=\"py-4 space-y-4\">\n      <h2 class=\"text-xl md:text-2xl font-bold text-white\">9.2 Confidence you can act on</h2>\n      <div class=\"p-4 bg-black/50 border border-gray-800 rounded-xl flex items-center justify-between\">\n        <div class=\"w-36 h-36 relative border-l-2 border-b-2 border-gray-700\">\n          <svg class=\"w-full h-full\" viewBox=\"0 0 100 100\">\n            <line x1=\"0\" y1=\"100\" x2=\"100\" y2=\"0\" stroke=\"#4b5263\" stroke-dasharray=\"3,3\" stroke-width=\"2\" />\n            <polyline points=\"0,95 25,75 50,50 75,25 100,5\" fill=\"none\" stroke=\"#b4f34d\" stroke-width=\"3\" />\n            <circle cx=\"25\" cy=\"75\" r=\"4\" fill=\"#b4f34d\" />\n            <circle cx=\"50\" cy=\"50\" r=\"4\" fill=\"#b4f34d\" />\n            <circle cx=\"75\" cy=\"25\" r=\"4\" fill=\"#b4f34d\" />\n          </svg>\n          <span class=\"absolute -left-5 top-0 text-[10px] font-mono text-gray-400\">1.0</span>\n          <span class=\"absolute -left-5 bottom-0 text-[10px] font-mono text-gray-400\">0.0</span>\n          <span class=\"absolute bottom--5 right-0 text-[10px] font-mono text-gray-400\">1.0</span>\n        </div>\n        <div class=\"pl-4 flex-1\">\n          <div class=\"text-sm font-bold text-white\">Trained so that 90% confident means right about 90% of the time.</div>\n          <p class=\"text-xs text-lime font-mono mt-1\">Expected Calibration Error: 0.0313</p>\n        </div>\n      </div>\n      <p class=\"text-xs text-gray-400 font-mono\">Calibration is Jev's training objective (RLCD). Replaces uncalibrated verbal claims.</p>\n    </div>",
    "expertTitle": "Proper Scoring Rules: Brier Loss & Temperature Scaling",
    "expertBody": "\n    <p>A predictor is <em>calibrated</em> if, for all samples where it predicts probability $p$, the empirical empirical frequency of the positive outcome is exactly $p$:</p>\n    <div class=\"expert-equation my-3\">\n      P(Y = 1 \\mid \\hat{P} = p) = p, \\quad \\forall p \\in [0, 1]\n    </div>\n    <p>Standard LLMs fine-tuned with RLHF (e.g. PPO or DPO on human ratings) suffer from severe overconfidence: when an LLM writes <em>\"I am 99% certain\"</em>, empirical accuracy is often only 65%-70%.</p>\n    <p>TypeSafe trains Jev via <strong>Reinforcement Learning from Calibrated Decisions (RLCD)</strong> using proper scoring rules where truth-telling strictly minimizes expected loss:</p>\n    <div class=\"expert-equation my-3\">\n      \\mathcal{L}_{\\text{Brier}} = \\frac{1}{N} \\sum_{i=1}^N \\sum_{k=1}^K (p_{ik} - y_{ik})^2\n    </div>\n    <p>On Archer Hume's 1,200-sample MMLU benchmark check, Jev demonstrated an <strong>ECE of 0.0313</strong>. On held-out distributions, Jared Palmer's Kev-27B achieved a Brier score of <strong>0.164</strong>.</p>",
    "citations": [
      "Gneiting & Raftery (2007): Strictly Proper Scoring Rules",
      "Archer Hume \u00a75: Train the distribution"
    ]
  },
  {
    "id": "9.3",
    "act": "9 / 16",
    "subIndex": "9.3 / 16",
    "breadcrumb": "Other benefits: 9.1 Many questions | 9.2 Confidence | 9.3 Can't make up",
    "badge": null,
    "title": "Schema-Constrained: Can't Invent Answers",
    "visualHtml": "\n    <div class=\"py-8 space-y-4 text-center\">\n      <h1 class=\"text-2xl md:text-4xl font-black text-white leading-tight\">\n        It can't invent an answer.<br/>\n        It can still pick the wrong one.\n      </h1>\n      <p class=\"text-lg md:text-xl text-lime font-bold\">\n        That's why the confidence score matters (9.2).\n      </p>\n      <div class=\"p-4 bg-gray-900/60 border border-gray-800 rounded-xl max-w-lg mx-auto text-left text-xs font-mono text-gray-300 mt-4\">\n        <div>\u2022 Syntactic Hallucination: <span class=\"text-lime font-bold\">0.00% (Mathematically impossible)</span></div>\n        <div>\u2022 Semantic Misclassification: <span class=\"text-amber-400 font-bold\">Possible</span> (Bounded by Calibrated Confidence)</div>\n      </div>\n    </div>",
    "expertTitle": "Aleatoric vs Epistemic Uncertainty in Operational Pipelines",
    "expertBody": "\n    <p>In AI engineering, errors divide into two classes:</p>\n    <ul class=\"list-disc pl-5 space-y-1 text-xs text-gray-300\">\n      <li><strong>Syntactic / Format Errors:</strong> An LLM generating an invalid enum value (e.g., returning <code>\"urgent_escalate\"</code> when only <code>[\"low\", \"medium\", \"high\"]</code> were permitted). In Jev, the choice set is fixed in the model head; it cannot physically emit an out-of-vocabulary class.</li>\n      <li><strong>Epistemic Misclassification:</strong> The input text is ambiguous, misleading, or out-of-domain.</li>\n    </ul>\n    <p>Because Jev's output is accompanied by a calibrated confidence probability $p$, downstream software can implement strict risk-gated thresholds:</p>\n    <div class=\"expert-equation my-3\">\n      \\text{Action} = \\begin{cases} \\text{Auto-Execute} & p \\ge 0.85 \\\\ \\text{Human Review} & 0.40 \\le p < 0.85 \\\\ \\text{Reject} & p < 0.40 \\end{cases}\n    </div>",
    "citations": [
      "TypeSafe Documentation: Confidence & Risk-Gated Routing",
      "Kev: Fine-Tuning Calibration Temperature"
    ]
  },
  {
    "id": "10.1",
    "act": "10 / 16",
    "subIndex": "10.1 / 16",
    "breadcrumb": "Behind Jev: Who | Why | Impact | Where",
    "badge": null,
    "title": "Who built Jev? Diogo Almeida & TypeSafe AI",
    "visualHtml": "\n    <div class=\"py-6 space-y-4\">\n      <h2 class=\"text-xl md:text-2xl font-bold text-white\">Who built Jev?</h2>\n      <div class=\"flex items-center gap-4 p-5 bg-[#12141b] border border-gray-800 rounded-xl\">\n        <div class=\"w-14 h-14 rounded-xl bg-lime/10 border border-lime text-lime flex items-center justify-center font-mono font-bold text-xl\">\n          DA\n        </div>\n        <div>\n          <div class=\"text-2xl font-extrabold text-white\">Diogo Almeida</div>\n          <div class=\"text-xs font-mono text-gray-400\">ex-OpenAI \u00b7 InstructGPT \u00b7 ChatGPT Core Contributor</div>\n        </div>\n      </div>\n      <div class=\"pt-2\">\n        <p class=\"text-xl font-bold text-gray-200\">Now building AI for software, not people.</p>\n        <div class=\"text-2xl font-black text-lime\">TypeSafe AI</div>\n      </div>\n    </div>",
    "expertTitle": "Lineage: From Human-Facing RLHF to Software-Facing RLCD",
    "expertBody": "\n    <p>Diogo Almeida was a key technical contributor at OpenAI on foundational alignment research, co-authoring the seminal <em>InstructGPT</em> paper (Ouyang et al., March 2022: <em>\"Training language models to follow instructions with human feedback\"</em>), which laid the foundation for ChatGPT.</p>\n    <p>His departure to found <strong>TypeSafe AI</strong> represents an explicit philosophical pivot:</p>\n    <div class=\"expert-callout my-3\">\n      <strong>The Thesis:</strong> <em>\"Human beings communicate through conversational natural language. Software backends do not. Building automated systems by forcing databases and microservices to chat with an LLM in English is an architectural anti-pattern.\"</em>\n    </div>\n    <p>TypeSafe was backed by premier venture capital to develop models whose first-class citizen is the API schema, not the chat window.</p>",
    "citations": [
      "Ouyang et al. (2022): InstructGPT",
      "TypeSafe AI Company Announcement"
    ]
  },
  {
    "id": "10.2",
    "act": "10 / 16",
    "subIndex": "10.2 / 16",
    "breadcrumb": "Behind Jev: Who | Why | Impact | Where",
    "badge": null,
    "title": "Software needs System 1 thinking",
    "visualHtml": "\n    <div class=\"py-6 space-y-4\">\n      <h1 class=\"text-2xl md:text-4xl font-black text-white leading-tight\">\n        Software needs <span class=\"text-lime\">System 1 thinking</span>,<br/>\n        but we keep building <span class=\"text-blue-400\">System 2 thinking</span>.\n      </h1>\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 pt-2\">\n        <div class=\"p-4 bg-lime/5 border border-lime/30 rounded-xl\">\n          <div class=\"text-xs font-mono uppercase text-lime font-bold mb-1\">System 1 (Jev / Laya)</div>\n          <div class=\"text-xs text-gray-300\">Fast, reflex, parallel, sub-150ms, calibrated probability, deterministic code predicates.</div>\n        </div>\n        <div class=\"p-4 bg-blue-950/20 border border-blue-800/40 rounded-xl\">\n          <div class=\"text-xs font-mono uppercase text-blue-400 font-bold mb-1\">System 2 (o1 / Sonnet / GPT-5)</div>\n          <div class=\"text-xs text-gray-300\">Slow, deliberate, sequential chain-of-thought, token generation, prose synthesis.</div>\n        </div>\n      </div>\n    </div>",
    "expertTitle": "Dual-Process Cognitive Architecture in Autonomous Agents",
    "expertBody": "\n    <p>Daniel Kahneman\u2019s dual-process cognitive psychology model (<em>Thinking, Fast and Slow</em>) maps cleanly to autonomous software stacks:</p>\n    <ul class=\"list-disc pl-5 space-y-1 text-xs text-gray-300\">\n      <li><strong>System 1 (Fast & Intuitive):</strong> Operates automatically and quickly, with little or no effort and no sense of voluntary control. In software: evaluating whether an email is spam, whether a SQL query is malicious, or whether an agent should switch tools.</li>\n      <li><strong>System 2 (Slow & Deliberative):</strong> Allocates attention to effortful mental operations, including complex computations and novel synthesis. In software: writing a code refactor, proving a theorem, or synthesizing legal briefs.</li>\n    </ul>\n    <p>Using a 70B parameter System 2 model for reflex decisions is like pausing to meditate for 10 seconds every time you need to blink.</p>",
    "citations": [
      "Kahneman (2011): Thinking, Fast and Slow",
      "TypeSafe AI: System One Concepts"
    ]
  },
  {
    "id": "10.3",
    "act": "10 / 16",
    "subIndex": "10.3 / 16",
    "breadcrumb": "Behind Jev: Who | Why | Impact | Where",
    "badge": null,
    "title": "AI becomes plumbing: if jev(...) > 0.9",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-lg font-bold text-gray-200\">\n        AI moves from a <span class=\"text-blue-400\">feature</span> to a <span class=\"text-lime\">primitive</span>.\n      </div>\n      <div class=\"p-4 bg-[#0c0d12] border border-gray-800 rounded-xl font-mono text-sm text-gray-200\">\n        <span class=\"text-purple-400 font-bold\">if</span> <span class=\"text-lime font-bold\">jev</span>(<span class=\"text-amber-300\">\"Is this customer angry?\"</span>) &gt; <span class=\"text-lime\">0.9</span>:<br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;escalate_to_human()\n      </div>\n      <div class=\"pt-2\">\n        <div class=\"text-2xl md:text-3xl font-black text-white\">AI stops being the product.</div>\n        <div class=\"text-2xl md:text-3xl font-black text-lime\">It becomes plumbing.</div>\n      </div>\n    </div>",
    "expertTitle": "Semantic Predicates as Standard Language Primitives",
    "expertBody": "\n    <p>Historically, software engineers could only branch on deterministic conditions: integer equality, regex pattern matches, or database queries. Complex semantic checks required asynchronous API queues, webhook callbacks, and fallback retry loops.</p>\n    <p>When semantic inference executes in <strong>30\u2013120 milliseconds at $0.00004 per call</strong>, semantic decisions can be embedded directly into procedural code as <strong>probabilistic conditional predicates</strong>:</p>\n    <div class=\"expert-equation my-3\">\n      \\text{Boolean Predicate: } f_{\\text{semantic}}(S, Q) \\equiv \\mathbb{I}[P_{\\text{Jev}}(Q \\mid S) > \\tau]\n    </div>\n    <p>Already, open-source projects have wrapped Jev and Kev into standard database stored procedures (e.g. Postgres <code>CREATE FUNCTION jev(text, text) RETURNS float</code>) and LiteLLM middleware.</p>",
    "citations": [
      "Walid Boulanouar: Awesome Jev Patterns",
      "ShipWithJev: Tools & Apps Directory"
    ]
  },
  {
    "id": "10.4",
    "act": "10 / 16",
    "subIndex": "10.4 / 16",
    "breadcrumb": "Where Jev Fits: 1 of 5",
    "badge": null,
    "title": "Domain 1: AI Agents (Harness Engineering)",
    "visualHtml": "\n    <div class=\"py-6 space-y-3\">\n      <div class=\"text-lime font-mono text-2xl font-bold\">01</div>\n      <h1 class=\"text-3xl md:text-5xl font-black text-white\">AI agents</h1>\n      <p class=\"text-base font-mono text-gray-300\">Which tool? \u00b7 Which model? \u00b7 Is this step safe?</p>\n      <p class=\"text-lg font-semibold text-gray-200 pt-2\">Every small decision, fast and cheap enough to check.</p>\n    </div>",
    "expertTitle": "Harness Optimization: Speculative Routing & Tool Validation",
    "expertBody": "\n    <p>In autonomous agent frameworks (AutoGPT, Browser-Use, LangGraph), agents loop through hundreds of small micro-decisions: <em>\"Did the last bash command succeed?\", \"Does this step leak secrets?\", \"Is the browser stuck on a CAPTCHA?\"</em></p>\n    <p>Using a frontier LLM for every micro-turn bloats trajectory runtimes to 45\u201390 seconds and costs $0.50\u2013$2.00 per task. By offloading tool routing, DOM state safety checks, and loop-termination predicates to Jev/Kev, agent harnesses achieve a <strong>60%\u201380% reduction in end-to-end task latency</strong> and 90%+ cost savings.</p>",
    "citations": [
      "TypeSafe AI Use-Case Map: Model Routing & Harness Engineering",
      "Awesome-Jev: Flight Search Browser-Use (8,723 likes)"
    ]
  },
  {
    "id": "10.5",
    "act": "10 / 16",
    "subIndex": "10.5 / 16",
    "breadcrumb": "Where Jev Fits: 2 of 5",
    "badge": null,
    "title": "Domain 2: Business Operations",
    "visualHtml": "\n    <div class=\"py-6 space-y-3\">\n      <div class=\"text-lime font-mono text-2xl font-bold\">02</div>\n      <h1 class=\"text-3xl md:text-5xl font-black text-white\">Business operations</h1>\n      <p class=\"text-base font-mono text-gray-300\">Support triage \u00b7 Claims \u00b7 Invoices \u00b7 Lead scoring</p>\n      <p class=\"text-lg font-semibold text-gray-200 pt-2\">Automate the clear cases. Send the unclear ones to a person.</p>\n    </div>",
    "expertTitle": "Straight-Through Processing (STP) in Enterprise Workflows",
    "expertBody": "\n    <p>In insurance claims, invoice reconciliation, and customer support, enterprise architectures rely on <strong>Straight-Through Processing (STP)</strong>: automatically clearing high-confidence, standard claims without human intervention.</p>\n    <p>Because Jev's output probabilities are calibrated (ECE = 0.0313), enterprises can set mathematically grounded compliance thresholds:</p>\n    <ul class=\"list-disc pl-5 space-y-1 text-xs text-gray-300\">\n      <li>If $P(\\text{Fraud} \\mid \\text{Claim}) < 0.02$ and $P(\\text{PolicyValid}) > 0.98$: auto-approve invoice in 150ms.</li>\n      <li>If confidence falls in the uncertainty interval $[0.40, 0.85]$: route immediately to human claims specialist.</li>\n    </ul>",
    "citations": [
      "TypeSafe AI: Insurance & Financial Crime Solutions",
      "Nandakishor Mukkunnoth: SaaS Conversion Models"
    ]
  },
  {
    "id": "10.6",
    "act": "10 / 16",
    "subIndex": "10.6 / 16",
    "breadcrumb": "Where Jev Fits: 3 of 5",
    "badge": null,
    "title": "Domain 3: Trust & Safety (Inline Moderation)",
    "visualHtml": "\n    <div class=\"py-6 space-y-3\">\n      <div class=\"text-lime font-mono text-2xl font-bold\">03</div>\n      <h1 class=\"text-3xl md:text-5xl font-black text-white\">Trust & safety</h1>\n      <p class=\"text-base font-mono text-gray-300\">Moderation \u00b7 Fraud \u00b7 Spam \u00b7 Jailbreak detection</p>\n      <p class=\"text-lg font-semibold text-gray-200 pt-2\">Score, threshold, escalate, on every single request.</p>\n    </div>",
    "expertTitle": "Zero-Latency Guardrails for Public LLM Gateways",
    "expertBody": "\n    <p>Existing guardrail frameworks (Llama-Guard, NeMo Guardrails) add significant latency overhead (500ms\u20132000ms) because they invoke an autoregressive safety model before the primary model can begin generating.</p>\n    <p>With Jev or Laya, safety screening runs in parallel with the user gateway request (33ms\u2013120ms):</p>\n    <div class=\"expert-callout my-3\">\n      <strong>Parallel Safety Verification:</strong> In a single pass, evaluate <code>is_prompt_injection</code> (Noul), <code>pii_leakage</code> (Noul), and <code>toxicity_level</code> (Score: 0-4). If toxic probability exceeds threshold $\\tau$, drop connection before consuming LLM generation budget.\n    </div>",
    "citations": [
      "TypeSafe AI: LLM Guardrails & Trust & Safety",
      "Awesome-Jev: Twitter Slop Filter (7,180 likes)"
    ]
  },
  {
    "id": "10.7",
    "act": "10 / 16",
    "subIndex": "10.7 / 16",
    "breadcrumb": "Where Jev Fits: 4 of 5",
    "badge": null,
    "title": "Domain 4: Unstructured &rarr; Structured Data",
    "visualHtml": "\n    <div class=\"py-6 space-y-3\">\n      <div class=\"text-lime font-mono text-2xl font-bold\">04</div>\n      <h1 class=\"text-3xl md:text-5xl font-black text-white\">Unstructured &rarr; structured data</h1>\n      <p class=\"text-base font-mono text-gray-300\">Logs \u00b7 Catalogs \u00b7 Tickets \u00b7 Call transcripts</p>\n      <p class=\"text-xl font-bold text-lime pt-2\">Stop sampling. Label everything.</p>\n    </div>",
    "expertTitle": "High-Throughput Semantic Map-Reduce over Big Data",
    "expertBody": "\n    <p>Historically, companies with 50 million server logs, customer chat transcripts, or product catalog listings could only run AI labeling on a tiny 1% sample due to LLM inference costs ($10,000+ per month).</p>\n    <p>At $0.042 per million input tokens ($42 per billion) and zero output token fees, labeling 100,000,000 tokens of unstructured text costs just <strong>$4.20</strong>. Data engineering pipelines can now execute full-corpus semantic map-reduce jobs directly inside Spark, Snowflake, or ClickHouse.</p>",
    "citations": [
      "TypeSafe AI: AI Map Reduce over Big Data",
      "ShipWithJev: Research & Data Directory"
    ]
  },
  {
    "id": "10.8",
    "act": "10 / 16",
    "subIndex": "10.8 / 16",
    "breadcrumb": "Where Jev Fits: 5 of 5",
    "badge": null,
    "title": "Domain 5: Real-Time Systems & Control Loops",
    "visualHtml": "\n    <div class=\"py-6 space-y-3\">\n      <div class=\"text-lime font-mono text-2xl font-bold\">05</div>\n      <h1 class=\"text-3xl md:text-5xl font-black text-white\">Real-time systems</h1>\n      <p class=\"text-base font-mono text-gray-300\">Game characters \u00b7 Live UI \u00b7 Control loops</p>\n      <p class=\"text-lg font-semibold text-gray-200 pt-2\">Not just cheaper. Newly possible.</p>\n    </div>",
    "expertTitle": "Sub-150ms Perception-Action Loops: Jev Plays DOOM",
    "expertBody": "\n    <p>Real-time game engines and interactive graphical user interfaces run at 60Hz (16.6ms per frame). A system that takes 3,000ms to choose an action cannot interact with a moving game world.</p>\n    <p>In community experiments (such as <em>Jev Plays DOOM</em>, 4,890 likes), developers extracted the game state (player health, ammo, enemy angle, sound events) into structured text and piped it to Jev every 120ms. Jev selected weapon swaps, strafing vectors, and trigger pulls in real time without lag spikes.</p>",
    "citations": [
      "Awesome Jev: Jev Plays Doom",
      "ShipWithJev: Games & Real Time Directory"
    ]
  },
  {
    "id": "11",
    "act": "11 / 16",
    "subIndex": "11 / 16",
    "breadcrumb": "",
    "badge": null,
    "title": "What are people building using Jev?",
    "visualHtml": "\n    <div class=\"text-center py-10\">\n      <h1 class=\"slide-title-hero leading-tight\">\n        So, what are people<br/>building using <span class=\"text-lime\">Jev?</span>\n      </h1>\n      <p class=\"slide-subtitle-hero text-gray-400 mt-4\">74 tracked viral demos \u00b7 150+ GitHub repos \u00b7 551 community builds</p>\n    </div>",
    "expertTitle": "Ecosystem Overview: The First Wave of System 1 Applications",
    "expertBody": "\n    <p>Within two weeks of TypeSafe's September 2026 launch, the developer ecosystem produced over 551 confirmed builds across 8 vertical categories tracked on <em>ShipWithJev</em> and <em>Awesome-Jev</em>:</p>\n    <ul class=\"list-disc pl-5 space-y-1 text-xs text-gray-300\">\n      <li><strong>Tools & Apps (213 builds):</strong> Claude history compactors, prompt linter CI plugins, tone meters.</li>\n      <li><strong>Agents & Browsers (79 builds):</strong> DOM action verifiers, browser-use routing.</li>\n      <li><strong>Games & Real Time (66 builds):</strong> NPC dialog decision trees, DOOM controllers.</li>\n      <li><strong>Content & Growth (54 builds):</strong> Real-time Twitter slop filters, competitor ad decoders.</li>\n      <li><strong>Triage & Routing (50 builds):</strong> Sub-cent email dispatchers, Zendesk classification.</li>\n    </ul>",
    "citations": [
      "shipwithjev.com/type/github",
      "walidboulanouar/awesome-jev-use-cases"
    ]
  },
  {
    "id": "12",
    "act": "12 / 16",
    "subIndex": "12 / 16",
    "breadcrumb": "",
    "badge": null,
    "title": "Demo Showcase: 4 Flagship Production Applications",
    "visualHtml": "\n    <div class=\"py-2 space-y-4\">\n      <div class=\"text-center\">\n        <h1 class=\"text-2xl md:text-3xl font-extrabold text-white\">Production Demo Showcase</h1>\n      </div>\n      <div class=\"grid grid-cols-2 gap-3 text-xs\">\n        <div class=\"p-3 bg-black/50 border border-lime/40 rounded-lg\">\n          <div class=\"text-lime font-bold\">Flipkart Review Analyzer (CampusX)</div>\n          <p class=\"text-gray-400 mt-0.5\">14 questions in 128ms: topic mention probability (Noul) + 5-star score (Score).</p>\n        </div>\n        <div class=\"p-3 bg-black/50 border border-blue-500/40 rounded-lg\">\n          <div class=\"text-blue-400 font-bold\">Claude Context Compaction (10k likes)</div>\n          <p class=\"text-gray-400 mt-0.5\">Scores chat turns in 150ms; prunes stale context to cut Sonnet token costs by 70%.</p>\n        </div>\n        <div class=\"p-3 bg-black/50 border border-purple-500/40 rounded-lg\">\n          <div class=\"text-purple-400 font-bold\">Jev Plays DOOM (4.8k likes)</div>\n          <p class=\"text-gray-400 mt-0.5\">Translates frame telemetry to text; Jev selects weapon & movement in 120ms loops.</p>\n        </div>\n        <div class=\"p-3 bg-black/50 border border-amber-500/40 rounded-lg\">\n          <div class=\"text-amber-400 font-bold\">Live Social Slop Filter (7.1k likes)</div>\n          <p class=\"text-gray-400 mt-0.5\">Chrome extension filtering low-effort AI posts as users scroll Twitter feeds.</p>\n        </div>\n      </div>\n      <div class=\"text-center pt-2\">\n        <button onclick=\"window.openDeepDiveTab('campusx')\" class=\"btn-pill btn-pill-lime\">\u26a1 Test CampusX Analyzer Live</button>\n      </div>\n    </div>",
    "expertTitle": "Deep Dive: CampusX Review Analyzer Architecture",
    "expertBody": "\n    <p>The <strong>CampusX</strong> implementation (<code>github.com/campusx-official/jev-demo</code>) illustrates the canonical TypeSafe SDK pattern: turning free-form unstructured smartphone reviews into Flipkart-style per-topic star ratings.</p>\n    <div class=\"expert-callout my-3\">\n      <strong>Pipeline:</strong> For 7 topics (Camera, Battery, Display, Design, Performance, Build, Value), Jev is asked 14 questions in parallel:<br/>\n      1. <code>&lt;topic&gt;_mentioned</code> (Noul): Probability ($0-1$) that the review discusses the topic.<br/>\n      2. <code>&lt;topic&gt;_rating</code> (Score): Reviewer satisfaction on a 5-level scale ($0-4$).<br/>\n      <em>Rule:</em> A topic's rating is kept only when $P(\\text{mentioned}) \\ge 0.50$.\n    </div>\n    <p>Because all 14 questions share the review text as state, execution completes in <strong>~128 milliseconds</strong> for a total cost of less than a thousandth of a cent.</p>",
    "citations": [
      "github.com/campusx-official/jev-demo",
      "TypeSafe Python SDK Reference"
    ]
  },
  {
    "id": "13",
    "act": "13 / 16",
    "subIndex": "13 / 16",
    "breadcrumb": "",
    "badge": null,
    "title": "Architecture: Under the Hood",
    "visualHtml": "\n    <div class=\"text-center py-10\">\n      <h1 class=\"slide-title-hero leading-tight\">Architecture</h1>\n      <p class=\"slide-subtitle-hero text-gray-400 mt-4\">Deconstructing the neural substrate and serving graph</p>\n    </div>",
    "expertTitle": "Engineering Overview: The 8 Structural Components",
    "expertBody": "\n    <p>Because TypeSafe AI launched without publishing a formal technical whitepaper or releasing open weights, ML researcher <strong>Archer Hume</strong> probed the production API with <strong>10,000 controlled requests</strong> to reverse-engineer its internal mechanics.</p>\n    <p>Hume's empirical findings confirmed 5 architectural components and established strong evidentiary bounds for 3 open questions, verified by Jared Palmer's open-weights reconstruction (<em>Kev</em>) and ConvAI's open-weights engine (<em>Laya</em>).</p>",
    "citations": [
      "Archer Hume: Jev\u2019s Architecture Unmasked",
      "Jared Palmer: Kev Technical README"
    ]
  },
  {
    "id": "14.1",
    "act": "14 / 16",
    "subIndex": "14.1 / 16",
    "breadcrumb": "How Jev works 1 / 9",
    "badge": null,
    "title": "What's actually under the hood?",
    "visualHtml": "\n    <div class=\"py-6 space-y-4\">\n      <h1 class=\"text-2xl md:text-4xl font-black text-white leading-tight\">What's actually under the hood?</h1>\n      <p class=\"text-lg text-gray-300\">Some of this TypeSafe has told us. Some we're inferring.</p>\n      <div class=\"flex items-center gap-3 pt-2\">\n        <span class=\"slide-badge badge-confirmed\">Confirmed (5)</span>\n        <span class=\"slide-badge badge-unconfirmed\">Unconfirmed (3)</span>\n      </div>\n      <p class=\"text-sm font-mono text-lime pt-2\">Eight pieces. Three are still open questions.</p>\n    </div>",
    "expertTitle": "Scientific Methodology: Probing Black-Box APIs",
    "expertBody": "\n    <p>Archer Hume's probing methodology isolated architectural boundaries via systematic perturbations:</p>\n    <ul class=\"list-disc pl-5 space-y-1 text-xs text-gray-300\">\n      <li><strong>Latency Scaling Curves:</strong> Measuring upstream server durations while independently varying state length (100 to 30,000 tokens) vs question counts (1 to 1,500 questions).</li>\n      <li><strong>Information Leakage Probes:</strong> Injecting secret tokens into sibling questions to test whether questions attend to one another or strictly to the shared state.</li>\n      <li><strong>Choice-Set Perturbations:</strong> Adding dummy options to test for Independence of Irrelevant Alternatives (IIA) violations.</li>\n      <li><strong>Vocabulary & Tokenizer Probes:</strong> 415 probe sequences tested against 192 public tokenizers.</li>\n    </ul>",
    "citations": [
      "Archer Hume: Probing Methods & Datasets",
      "Gneiting & Raftery (2007)"
    ]
  },
  {
    "id": "14.2",
    "act": "14 / 16",
    "subIndex": "14.2 / 16",
    "breadcrumb": "How Jev works 2 / 9",
    "badge": "UNCONFIRMED",
    "title": "01 Transformer-based \u2014 but which kind?",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-lime font-mono text-xl font-bold\">01</div>\n      <h2 class=\"text-2xl md:text-3xl font-black text-white\">Transformer-based \u2014 but which kind?</h2>\n      <div class=\"space-y-1 text-sm text-gray-300 pt-1\">\n        <p>Encoders read all at once (BERT / ModernBERT).</p>\n        <p>Decoders write word by word (GPT / Qwen).</p>\n      </div>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        Jev acts encoder-like. Could be a decoder with a scoring layer. Open question.\n      </p>\n    </div>",
    "expertTitle": "Why Hume Concludes Causal Decoder with Scoring Head",
    "expertBody": "\n    <p>While Jev acts encoder-like (reading the entire prompt before emitting a classification), Hume establishes that Jev is almost certainly a <strong>causal transformer decoder post-trained with RLCD</strong>:</p>\n    <div class=\"expert-callout my-3\">\n      <strong>1. Knowledge Breadth:</strong> Jev achieves 84.6% on MMLU-Pro. Training a bidirectional encoder from scratch to frontier MMLU performance requires tens of millions of dollars; starting from a pretrained causal decoder base (like Qwen, DeepSeek, or LLaMA) is overwhelmingly more economical.<br/>\n      <strong>2. Prefix KV Caching:</strong> Causal decoders naturally support prefix KV caching (tokens only attend backward). Modern bidirectional encoders attend in both directions, making prefix KV caching across independent question branches non-trivial.\n    </div>\n    <p>Conversely, ConvAI's <strong>Laya</strong> chose the opposite route: building on ModernBERT (421M bidirectional encoder) specifically for sub-35ms speed and multilingual routing.</p>",
    "citations": [
      "Archer Hume \u00a73: A causal backbone",
      "Laya Architecture Comparison"
    ]
  },
  {
    "id": "14.3",
    "act": "14 / 16",
    "subIndex": "14.3 / 16",
    "breadcrumb": "How Jev works 3 / 9",
    "badge": "UNCONFIRMED",
    "title": "02 Broad world knowledge (maybe)",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-lime font-mono text-xl font-bold\">02</div>\n      <h2 class=\"text-2xl md:text-3xl font-black text-white\">Broad world knowledge (maybe)</h2>\n      <p class=\"text-sm text-gray-300\">Does it know general facts, like a chat model does?</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        Its Wikipedia-navigation demo suggests some. Scores 84.6% on MMLU-Pro without verbalizing scratchpads.\n      </p>\n    </div>",
    "expertTitle": "Latent Knowledge Extraction Without Chain-of-Thought",
    "expertBody": "\n    <p>A major open question in AI research is whether models can perform multi-hop reasoning without generating explicit chain-of-thought (CoT) scratchpad tokens. On MMLU-Pro, Jev achieved <strong>84.6% accuracy</strong>:</p>\n    <div class=\"expert-equation my-3\">\n      \\text{Accuracy}_{\\text{MMLU-Pro}}: \\text{Jev Hosted (84.6%)} \\approx \\text{Kev-27B (84.8%)} > \\text{Kev-4B (81.7%)}\n    </div>\n    <p>This confirms that massive world knowledge is embedded in the backbone weights, accessible via direct latent projection without paying the multi-second latency tax of generating reasoning text.</p>",
    "citations": [
      "Benchmark Heaven: MMLU-Pro Evals",
      "Jared Palmer: Kev Benchmark Cards"
    ]
  },
  {
    "id": "14.4",
    "act": "14 / 16",
    "subIndex": "14.4 / 16",
    "breadcrumb": "How Jev works 4 / 9",
    "badge": "CONFIRMED",
    "title": "03 Built for System 1 tasks",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-lime font-mono text-xl font-bold\">03</div>\n      <h2 class=\"text-2xl md:text-3xl font-black text-white\">Built for System 1 tasks</h2>\n      <p class=\"text-sm text-gray-200 font-semibold\">Quick gut judgments: spam? urgent? which team?</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        Fast, frequent decisions inside software \u2014 not reasoning or writing.\n      </p>\n    </div>",
    "expertTitle": "Representation Space Specialization for Fast Judgments",
    "expertBody": "\n    <p>Generative LLM representations are optimized to predict the next token across diverse natural language corpora. Consequently, their internal vectors spend capacity encoding grammar, stylistic cadence, and punctuation.</p>\n    <p>Jev's post-training (RLCD) forces the representation layer to discard conversational fluff and collapse directly onto <strong>decision boundaries</strong>. Probing shows that intermediate activations form tightly separated semantic clusters corresponding to classification rubrics.</p>",
    "citations": [
      "TypeSafe AI Primer: System 1 Latent Representations",
      "Archer Hume \u00a71"
    ]
  },
  {
    "id": "14.5",
    "act": "14 / 16",
    "subIndex": "14.5 / 16",
    "breadcrumb": "How Jev works 5 / 9",
    "badge": "UNCONFIRMED",
    "title": "04 Trained on synthetic data",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-lime font-mono text-xl font-bold\">04</div>\n      <h2 class=\"text-2xl md:text-3xl font-black text-white\">Trained on synthetic data</h2>\n      <p class=\"text-sm text-gray-200\">Training data generated by computers, not collected from people.</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        TypeSafe hasn't explained how its data is made. High-volume programmatic traces dominate.\n      </p>\n    </div>",
    "expertTitle": "Synthetic Curriculum Generation for Epistemic Calibration",
    "expertBody": "\n    <p>Human annotation datasets (like ImageNet or MNLI) suffer from label noise, subjectivity, and severe overconfidence. To train an RLCD model whose probabilities are mathematically honest, TypeSafe likely employed scaled <strong>synthetic generation pipelines</strong>:</p>\n    <div class=\"expert-callout my-3\">\n      <strong>Synthetic Pipeline:</strong> Powerful reasoning models (o1/Claude 3.5 Sonnet) generate millions of ambiguous edge-case scenarios with known programmatic ground-truth rules, scoring rubrics, and deliberate distractor options.\n    </div>\n    <p>Jared Palmer followed this exact playbook for <em>Kev</em>, using Modal to synthesize thousands of domain-specific decision traces across customer support, moderation, and data normalization.</p>",
    "citations": [
      "Jared Palmer: Kev Modal Training Loop",
      "TypeSafe Launch Speculation"
    ]
  },
  {
    "id": "14.6",
    "act": "14 / 16",
    "subIndex": "14.6 / 16",
    "breadcrumb": "How Jev works 6 / 9",
    "badge": "CONFIRMED",
    "title": "05 Non-autoregressive (Prefill-Only)",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-lime font-mono text-xl font-bold\">05</div>\n      <h2 class=\"text-2xl md:text-3xl font-black text-white\">Non-autoregressive</h2>\n      <p class=\"text-sm text-gray-200\">Chat models write one word at a time, each waiting on the last.</p>\n      <p class=\"text-base text-lime font-bold pt-2\">Jev produces the whole answer in one go. Much faster.</p>\n    </div>",
    "expertTitle": "Zero Autoregressive Loops: The Death of Decode Stalls",
    "expertBody": "\n    <p>In standard LLM inference, the GPU transitions through two phases: <strong>Prefill</strong> (parallel ingestion of input tokens) and <strong>Decode</strong> (sequential generation of output tokens). The decode phase is notoriously inefficient, requiring high KV cache memory footprint and low tensor core occupancy.</p>\n    <p>Jev has <strong>zero decode phase</strong>. The forward pass terminates as soon as the final hidden layer of the prompt and question suffixes is computed. The output logits are emitted in parallel, eliminating token latency entirely.</p>",
    "citations": [
      "Archer Hume \u00a71: End inference with a readout",
      "Roofline Serving Curves"
    ]
  },
  {
    "id": "14.7",
    "act": "14 / 16",
    "subIndex": "14.7 / 16",
    "breadcrumb": "How Jev works 7 / 9",
    "badge": "CONFIRMED",
    "title": "06 Schema-constrained output",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-lime font-mono text-xl font-bold\">06</div>\n      <h2 class=\"text-2xl md:text-3xl font-black text-white\">Schema-constrained output</h2>\n      <p class=\"text-sm text-gray-200\">You give it a fixed list of allowed answers up front.</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        It can only pick from that list. It can't make one up.\n      </p>\n    </div>",
    "expertTitle": "Dynamic Softmax Normalization Over Arbitrary Option Lists",
    "expertBody": "\n    <p>Unlike classic static classifiers (which have fixed output classes like ImageNet-1k), Jev allows users to pass arbitrary string option lists at request time. How does the model compute probabilities over dynamic choices?</p>\n    <p>Archer Hume's probes demonstrated that options are passed as part of the question suffix. The readout head either maps representations to generic option slots ($k \\in \\{1 \\dots K\\}$) or utilizes a <strong>pointer-style cross-attention scoring mechanism</strong> where the decision token attends directly to each option's representation:</p>\n    <div class=\"expert-equation my-3\">\n      s_k = \\frac{h_{\\text{decision}}^\\top W_s h_{\\text{option}_k}}{\\sqrt{d}}, \\quad p_k = \\frac{\\exp(s_k)}{\\sum_j \\exp(s_j)}\n    </div>",
    "citations": [
      "Archer Hume \u00a74: Option Representation & Scoring",
      "TypeSafe Choice Schema"
    ]
  },
  {
    "id": "14.8",
    "act": "14 / 16",
    "subIndex": "14.8 / 16",
    "breadcrumb": "How Jev works 8 / 9",
    "badge": "CONFIRMED",
    "title": "07 Parallel sampler",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-lime font-mono text-xl font-bold\">07</div>\n      <h2 class=\"text-2xl md:text-3xl font-black text-white\">Parallel sampler</h2>\n      <p class=\"text-sm text-gray-200\">Ask five questions, it answers all five at once.</p>\n      <p class=\"text-base text-lime font-bold pt-2\">Adding questions barely slows it down.</p>\n    </div>",
    "expertTitle": "Serving Engine Branch Packing & Non-Determinism Observations",
    "expertBody": "\n    <p>Archer Hume\u2019s timing probes tested requests with 1 to 1,500 questions against a fixed 23,000-token state. The findings confirmed:</p>\n    <ul class=\"list-disc pl-5 space-y-1 text-xs text-gray-300\">\n      <li><strong>Sub-Linear Overhead:</strong> Up to 100 questions, server response time was indistinguishable from a single question.</li>\n      <li><strong>Token Packing:</strong> The entire request is scheduled as a single packed batch sequence up to $2^{16}$ (65,536) tokens.</li>\n      <li><strong>Worker Non-Determinism:</strong> Minor variations were observed between duplicate questions within the same request ($p = 0.91$ vs $0.92$), caused by non-deterministic floating-point reduction kernels across GPU workers.</li>\n    </ul>",
    "citations": [
      "Archer Hume \u00a77: Schedule branches as a batch",
      "TypeSafe Parallel Cookbook"
    ]
  },
  {
    "id": "14.9",
    "act": "14 / 16",
    "subIndex": "14.9 / 16",
    "breadcrumb": "How Jev works 9 / 9",
    "badge": "CONFIRMED",
    "title": "08 RLCD \u2014 calibrated confidence",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-lime font-mono text-xl font-bold\">08</div>\n      <h2 class=\"text-2xl md:text-3xl font-black text-white\">RLCD \u2014 calibrated confidence</h2>\n      <p class=\"text-sm text-gray-200\">Every answer comes with a confidence number, trained to be honest.</p>\n      <p class=\"text-xs text-lime font-mono pt-3 border-t border-gray-800\">\n        Say '80% sure' &rarr; right about 80% of the time. Fixes overconfidence.\n      </p>\n    </div>",
    "expertTitle": "Brier Score Decomposition & Calibration Repair",
    "expertBody": "\n    <p>The Brier score decomposes into three mathematically orthogonal components (Murphy, 1973):</p>\n    <div class=\"expert-equation my-3\">\n      \\text{Brier} = \\text{Reliability (Calibration Error)} - \\text{Resolution} + \\text{Uncertainty}\n    </div>\n    <p>Standard LLMs maximize <em>resolution</em> (sharp 0 or 1 predictions) at the complete expense of <em>reliability</em>. Jev's RLCD objective penalizes poorly calibrated distributions during reinforcement training, ensuring that when the model outputs $p=0.80$, its empirical error rate is exactly 20%.</p>",
    "citations": [
      "Murphy (1973): Vector Partition of Brier Score",
      "Archer Hume \u00a75"
    ]
  },
  {
    "id": "15.1",
    "act": "15 / 16",
    "subIndex": "15.1 / 16",
    "breadcrumb": "Downsides 1 / 6",
    "badge": null,
    "title": "Downside 01: No independent benchmarks at launch",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-amber-400 font-mono text-xl font-bold\">01</div>\n      <h1 class=\"text-2xl md:text-3xl font-black text-white\">No independent benchmarks</h1>\n      <p class=\"text-sm text-gray-200\">Every speed and cost number comes from TypeSafe.</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        They skipped public leaderboards. Independent audits are only starting now.\n      </p>\n    </div>",
    "expertTitle": "Vendor Marketing vs Empirical Audits: The Emergence of JevBench",
    "expertBody": "\n    <p>TypeSafe\u2019s homepage claimed headline figures of <strong>193.6\u00d7 faster</strong> and <strong>444.6\u00d7 cheaper</strong>. However, independent audits by <strong>Benchmark Heaven (JevBench)</strong> and Archer Hume revealed more nuanced realities:</p>\n    <div class=\"expert-callout my-3\">\n      <strong>Audited Realities:</strong><br/>\n      \u2022 On standard tasks, Jev is typically <strong>6\u00d7 to 20\u00d7 faster</strong> than an LLM, not 200\u00d7, due to internet network transit times (median latency 650ms).<br/>\n      \u2022 The 444\u00d7 cost savings only occurs when comparing against reasoning-token-heavy models (o1/o3) generating thousands of hidden tokens. Against lightweight models (GPT-4o mini, Haiku), the cost advantage is ~15\u00d7 to 30\u00d7.\n    </div>",
    "citations": [
      "Benchmark Heaven: JevBench Beta (Sep 2026)",
      "Archer Hume \u00a78"
    ]
  },
  {
    "id": "15.2",
    "act": "15 / 16",
    "subIndex": "15.2 / 16",
    "breadcrumb": "Downsides 2 / 6",
    "badge": null,
    "title": "Downside 02: Text Only (No Native Vision/Audio)",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-amber-400 font-mono text-xl font-bold\">02</div>\n      <h1 class=\"text-2xl md:text-3xl font-black text-white\">Text only</h1>\n      <p class=\"text-sm text-gray-200\">It can't see images or hear audio.</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        Every real-time demo feeds it a text description of the world.\n      </p>\n    </div>",
    "expertTitle": "The Modality Gap: Preprocessing Overhead in Real-Time Loops",
    "expertBody": "\n    <p>A critical constraint of Jev 1.13 is its lack of multimodal encoders. In robotics, browser automation, and gaming demos (such as DOOM), developers must run external OCR or computer vision pipelines to convert raw frames into text representations before Jev can evaluate actions.</p>\n    <p>If the preprocessing pipeline takes 80ms, it eats up more than half of Jev's 120ms latency budget. Native vision-decision models are the obvious next frontier.</p>",
    "citations": [
      "TypeSafe Documentation: Input Modalities",
      "Awesome-Jev: Computer Use Demands"
    ]
  },
  {
    "id": "15.3",
    "act": "15 / 16",
    "subIndex": "15.3 / 16",
    "breadcrumb": "Downsides 3 / 6",
    "badge": null,
    "title": "Downside 03: No Web Search or External RAG",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-amber-400 font-mono text-xl font-bold\">03</div>\n      <h1 class=\"text-2xl md:text-3xl font-black text-white\">No web search, no outside knowledge</h1>\n      <p class=\"text-sm text-gray-200\">It only reasons over the state you hand it.</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        By design \u2014 it's a decision layer, not a research agent.\n      </p>\n    </div>",
    "expertTitle": "State Boundary Containment: RAG Must Precede Inference",
    "expertBody": "\n    <p>Jev has no tool-calling capability, cannot execute web searches, and cannot query external APIs during inference. It reasons strictly over the text provided in the <code>state</code> argument.</p>\n    <p>Application architectures must handle document retrieval (vector DB lookups or lexical search) upstream before packaging the context into the 32k state window.</p>",
    "citations": [
      "TypeSafe Documentation: System Boundaries",
      "Archer Hume \u00a72"
    ]
  },
  {
    "id": "15.4",
    "act": "15 / 16",
    "subIndex": "15.4 / 16",
    "breadcrumb": "Downsides 4 / 6",
    "badge": null,
    "title": "Downside 04: The Black-Box Readout (Explains Nothing)",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-amber-400 font-mono text-xl font-bold\">04</div>\n      <h1 class=\"text-2xl md:text-3xl font-black text-white\">It explains nothing</h1>\n      <p class=\"text-sm text-gray-200\">Just an answer and a probability. No reasoning to inspect.</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        And 'can't hallucinate' isn't 'can't be wrong' \u2014 it picks confidently.\n      </p>\n    </div>",
    "expertTitle": "Auditability Void in Highly Regulated Sectors",
    "expertBody": "\n    <p>In healthcare, credit underwriting, and legal compliance, regulatory frameworks (such as GDPR Article 22 or the EU AI Act) mandate a <em>Right to Explanation</em> for automated decisions.</p>\n    <p>Because Jev terminates in a feedforward readout head without emitting natural language reasoning steps, compliance teams cannot audit <em>why</em> a loan application was scored as high risk. Teams must pair Jev with downstream generative models for audit logging.</p>",
    "citations": [
      "EU AI Act Compliance Analysis",
      "Archer Hume \u00a71"
    ]
  },
  {
    "id": "15.5",
    "act": "15 / 16",
    "subIndex": "15.5 / 16",
    "breadcrumb": "Downsides 5 / 6",
    "badge": null,
    "title": "Downside 05: Arithmetic, Counting & Noise Degradation",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-amber-400 font-mono text-xl font-bold\">05</div>\n      <h1 class=\"text-2xl md:text-3xl font-black text-white\">Known weak spots</h1>\n      <p class=\"text-sm text-gray-200 font-semibold\">Reads literally. Weak at math, counting and dates.</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        Accuracy drops when you feed it irrelevant state. Keep arithmetic in code!\n      </p>\n    </div>",
    "expertTitle": "Empirical Failure Modes: The Jagged Edges of Jev 1.13",
    "expertBody": "\n    <p>TypeSafe\u2019s official documentation and independent audits document specific catastrophic failure modes:</p>\n    <ul class=\"list-disc pl-5 space-y-1 text-xs text-gray-300\">\n      <li><strong>Date Arithmetic:</strong> Asking <em>\"Was this transaction within 30 days of the last invoice?\"</em> fails frequently. Arithmetic must be executed in Python/SQL code.</li>\n      <li><strong>Counting:</strong> Asking <em>\"Does this ticket mention at least three items?\"</em> degrades rapidly.</li>\n      <li><strong>State Pollution:</strong> Injecting unrelated conversation history into the shared state causes an empirical accuracy drop of 8%\u201314%. Inputs must be pre-filtered.</li>\n    </ul>",
    "citations": [
      "TypeSafe Documentation: Jaggedness & Limits",
      "Awesome-Jev: Limits of Jev 1.13"
    ]
  },
  {
    "id": "15.6",
    "act": "15 / 16",
    "subIndex": "15.6 / 16",
    "breadcrumb": "Downsides 6 / 6",
    "badge": null,
    "title": "Downside 06: Closed Weights & Single Vendor Lock-In",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-amber-400 font-mono text-xl font-bold\">06</div>\n      <h1 class=\"text-2xl md:text-3xl font-black text-white\">Closed and early</h1>\n      <p class=\"text-sm text-gray-200\">No open weights. One vendor. Waitlisted early access.</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        Pricing may be subsidised, and the model can change under you.\n      </p>\n    </div>",
    "expertTitle": "Vendor Risk & The Strategic Value of Open Reconstructions",
    "expertBody": "\n    <p>Deploying production enterprise microservices against a closed, single-vendor API carries severe operational risk: proprietary API deprecation, latency variance, data sovereignty restrictions, and potential post-beta price surges.</p>\n    <p>This risk catalyzed the rapid release of open-weight alternatives like <strong>Jared Palmer's Kev</strong> (Apache 2.0) and <strong>ConvAI's Laya</strong> (Apache 2.0), providing self-hosted insurance for enterprise engineering teams.</p>",
    "citations": [
      "Jared Palmer: Kev Open Weights",
      "Laya: Open-Source Statement"
    ]
  },
  {
    "id": "16.1",
    "act": "16 / 16",
    "subIndex": "16.1 / 16",
    "breadcrumb": "The future 1 / 7",
    "badge": "SAFE BET",
    "title": "The Future 01: Everyone Copies It (Open Weight Clones)",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-blue-400 font-mono text-xl font-bold\">01</div>\n      <h1 class=\"text-2xl md:text-3xl font-black text-white\">Everyone copies it</h1>\n      <p class=\"text-sm text-gray-200\">Qwen clones appeared in days. JSON mode all over again.</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        Jev keeps the data and calibration. Not the idea.\n      </p>\n    </div>",
    "expertTitle": "Commoditization of the Non-Autoregressive Decision Head",
    "expertBody": "\n    <p>Just as OpenAI's proprietary 'Function Calling' was rapidly reverse-engineered and commoditized across open models (vLLM, SGLang, Qwen, Mistral), Jev's architecture has already been replicated:</p>\n    <div class=\"expert-callout my-3\">\n      <strong>Active Open-Source Implementations:</strong><br/>\n      \u2022 <strong>Kev (Jared Palmer):</strong> Full decision head adaptation over Qwen 3.5 & 3.8.<br/>\n      \u2022 <strong>Laya (ConvAI):</strong> ModernBERT-large 421M bidirectional encoder.<br/>\n      \u2022 <strong>OpenJev (razorback16):</strong> DiffusionGemma NVFP4 adaptation.<br/>\n      \u2022 <strong>Winnow-12B & Decider-4B:</strong> High-throughput specialized decision models.\n    </div>",
    "citations": [
      "github.com/jaredpalmer/kev",
      "benchmarkheaven.com/jev-models"
    ]
  },
  {
    "id": "16.2",
    "act": "16 / 16",
    "subIndex": "16.2 / 16",
    "breadcrumb": "The future 2 / 7",
    "badge": "SAFE BET",
    "title": "The Future 02: Vanishes into the Infrastructure Stack",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-blue-400 font-mono text-xl font-bold\">02</div>\n      <h1 class=\"text-2xl md:text-3xl font-black text-white\">It vanishes into the stack</h1>\n      <p class=\"text-sm text-gray-200\">Already inside Vercel, LiteLLM, and a Postgres <code>jev()</code> function.</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        You'll use it without ever calling it directly.\n      </p>\n    </div>",
    "expertTitle": "Integration into Gateway Routers and Database Engines",
    "expertBody": "\n    <p>Developers will rarely call Jev directly in end-user applications. Instead, System 1 decision heads are being embedded directly into database kernels and API gateways:</p>\n    <ul class=\"list-disc pl-5 space-y-1 text-xs text-gray-300\">\n      <li><strong>PostgreSQL <code>pg_jev</code>:</strong> Semantic indexing and row-level classification inside SQL queries.</li>\n      <li><strong>LiteLLM Proxy:</strong> Automatic model routing\u2014evaluating incoming prompt complexity in 30ms to choose between Claude 3.5 Haiku, Sonnet, or Opus.</li>\n      <li><strong>Vercel AI SDK Gateway:</strong> Integrated prompt firewall screening requests before billing.</li>\n    </ul>",
    "citations": [
      "Awesome Jev: Tools & Integrations",
      "Vercel AI SDK Gateway Announcements"
    ]
  },
  {
    "id": "16.3",
    "act": "16 / 16",
    "subIndex": "16.3 / 16",
    "breadcrumb": "The future 3 / 7",
    "badge": "LIKELY",
    "title": "The Future 03: One Brain, Many Reflexes",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-purple-400 font-mono text-xl font-bold\">03</div>\n      <h1 class=\"text-2xl md:text-3xl font-black text-white\">One brain, many reflexes</h1>\n      <p class=\"text-sm text-gray-200\">A big model plans. Cheap decisions run every step between.</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        The real skill: splitting a goal into small questions.\n      </p>\n    </div>",
    "expertTitle": "Hierarchical Agent Architecture: Macro-Planning vs Micro-Execution",
    "expertBody": "\n    <p>The prevailing agent architecture of 2026 is <strong>hierarchical dual-speed computing</strong>:</p>\n    <div class=\"expert-equation my-3\">\n      \\text{High-Level Planner (System 2: o3 / Opus)} \\xrightarrow{\\text{Decomposes}} \\text{State Graph} \\xrightarrow{\\text{Monitored by}} \\text{Reflex Deciders (System 1: Jev / Kev)}\n    </div>\n    <p>The expensive frontier model plans the high-level strategy once. The cheap, 100ms reflex deciders execute hundreds of intermediate validations, state checks, and loop gates, keeping execution fast, cheap, and strictly bound.</p>",
    "citations": [
      "TypeSafe Documentation: Harness Engineering",
      "Awesome Jev: Patterns"
    ]
  },
  {
    "id": "16.4",
    "act": "16 / 16",
    "subIndex": "16.4 / 16",
    "breadcrumb": "The future 4 / 7",
    "badge": "LIKELY",
    "title": "The Future 04: Dashboards for Doubt (Calibration Monitoring)",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-purple-400 font-mono text-xl font-bold\">04</div>\n      <h1 class=\"text-2xl md:text-3xl font-black text-white\">Dashboards for doubt</h1>\n      <p class=\"text-sm text-gray-200\">Wrong answers are silent. Someone has to watch the numbers.</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        Calibration graphs and drift alerts become standard kit.\n      </p>\n    </div>",
    "expertTitle": "Production MLOps: Expected Calibration Error (ECE) Drift Alerts",
    "expertBody": "\n    <p>When an LLM fails, it hallucinates noticeably in prose. When a decision model fails, it outputs a silent misclassification with high probability.</p>\n    <p>Consequently, production monitoring in System 1 pipelines shifts from hallucination evals to <strong>calibration telemetry</strong>: tracking Brier score decay and ECE drift across production traffic to detect concept drift in support tickets or fraud vectors.</p>",
    "citations": [
      "Archer Hume \u00a75: Calibration Under Shift",
      "MLOps Calibration Standards"
    ]
  },
  {
    "id": "16.5",
    "act": "16 / 16",
    "subIndex": "16.5 / 16",
    "breadcrumb": "The future 5 / 7",
    "badge": "LIKELY",
    "title": "The Future 05: A New Job Title (Rubric & Schema Engineering)",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-purple-400 font-mono text-xl font-bold\">05</div>\n      <h1 class=\"text-2xl md:text-3xl font-black text-white\">A new job title</h1>\n      <p class=\"text-sm text-gray-200\">Writing the options and thresholds is the actual work now.</p>\n      <p class=\"text-xs text-gray-400 font-mono pt-3 border-t border-gray-800\">\n        Prompt engineering, round two, backlash included.\n      </p>\n    </div>",
    "expertTitle": "From Prompt Fluff to Formal Schema Rubrics",
    "expertBody": "\n    <p>Vague prompting (<em>\"You are a helpful assistant, please classify this carefully...\"</em>) is obsolete in System 1 workflows. The actual engineering work consists of writing formal, mutually exclusive rubrics and setting empirical confidence thresholds:</p>\n    <div class=\"expert-callout my-3\">\n      <strong>Rubric Engineering:</strong> Defining explicit 5-level ordinal rubrics with concrete numerical boundaries observed from production outcomes, ensuring calibration remains rock-solid.\n    </div>",
    "citations": [
      "CampusX Phone Review Questions Design",
      "Awesome Jev: Rubric Patterns"
    ]
  },
  {
    "id": "16.6",
    "act": "16 / 16",
    "subIndex": "16.6 / 16",
    "breadcrumb": "The future 6 / 7",
    "badge": "WILD CARD",
    "title": "The Future 06: Give It Eyes (Real-Time Vision Deciders)",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-red-400 font-mono text-xl font-bold\">06</div>\n      <h1 class=\"text-2xl md:text-3xl font-black text-white\">Give it eyes</h1>\n      <p class=\"text-sm text-gray-200\">Right now it reads a text description of Doom.</p>\n      <p class=\"text-base text-lime font-mono pt-2\">Let it read the screen, and robotics opens up.</p>\n    </div>",
    "expertTitle": "Direct Video-to-Action Representations for Embodied AI",
    "expertBody": "\n    <p>Today, Jev requires text state. But when the decision readout head is mounted onto native video encoders (like SigLIP or PaliGemma), inference directly maps 60 FPS video frames to robot arm joint velocities or browser clicks at 20ms latency, bypassing linguistic mediation entirely.</p>",
    "citations": [
      "ShipWithJev: Robotics & Devices Category",
      "ConvAI Innovations Research"
    ]
  },
  {
    "id": "16.7",
    "act": "16 / 16",
    "subIndex": "16.7 / 16",
    "breadcrumb": "The future 7 / 7",
    "badge": "WILD CARD",
    "title": "The Future 07: Too Cheap to Not Use",
    "visualHtml": "\n    <div class=\"py-4 space-y-3\">\n      <div class=\"text-red-400 font-mono text-xl font-bold\">07</div>\n      <h1 class=\"text-2xl md:text-3xl font-black text-white\">Too cheap to not use</h1>\n      <p class=\"text-xl text-gray-200 font-bold\">A decision costs <span class=\"text-lime\">$0.00004</span>. Check everything, always.</p>\n      <p class=\"text-sm text-gray-400 font-mono pt-2 border-t border-gray-800\">\n        Per keystroke. Per scroll. Per log line.\n      </p>\n    </div>",
    "expertTitle": "Jevons Paradox in Cognitive Computation",
    "expertBody": "\n    <p>William Stanley Jevons observed in 1865 that increasing the efficiency of coal usage did not decrease coal consumption; it led to an exponential expansion of coal use across new industries. It is no coincidence that TypeSafe named their model <strong>Jev</strong>.</p>\n    <div class=\"expert-callout my-3\">\n      <strong>The Jevons Climax:</strong> When semantic checking costs $0.00004 per call, semantic evaluation is not restricted to critical checkpoints. It runs continuously: on every keystroke in a text input, on every DOM scroll mutation, on every microsecond network packet.\n    </div>",
    "citations": [
      "Jevons (1865): The Coal Question",
      "TypeSafe AI: Jevons Paradox in AI"
    ]
  }
];
