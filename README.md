# Jev by TypeSafe AI: Interactive Slide Deck & Research Workbench

An interactive, high-fidelity web recreation of the **Jev-Talk** slide presentation paired with an in-depth empirical research workbench synthesizing real data from 8 authoritative sources across the AI ecosystem.

---

## 🚀 Quick Start

You can view the site directly by opening `index.html` in any modern web browser, or launch the local Python server:

```bash
cd C:\Users\harshw\.gemini\antigravity\scratch\jev-talk-website
python server.py
```

Then visit [http://localhost:8000](http://localhost:8000).

---

## 🎯 Key Features

### 1. Presentation Mode (16 Acts · 44 Slides)
- **High-Fidelity 1:1 Styling:** Dark neon aesthetic matching the original Jev presentation, complete with glowing lime accents (`#b4f34d`), monospace metadata, badges (`LIVE`, `CONFIRMED`, `UNCONFIRMED`, `SAFE BET`, `LIKELY`, `WILD CARD`), and progress tracking.
- **Keyboard Navigation:** Navigate seamlessly with `←` / `→` arrow keys, `Spacebar`, `PageUp` / `PageDown`, or on-screen buttons.
- **Slide Jump Menu:** Jump directly to any of the 44 slides categorized across the 16 Acts.
- **Audio Feedback:** Subtle modern sci-fi clicks powered by the Web Audio API.

### 2. Interactive Simulations Inside the Slides
- **Slide 5 (One Parallel Pass):** Test incoming support tickets (*Damaged Package*, *Double Charged Invoice*, *2FA Lockout*) and watch the ~120ms probability distributions render live.
- **Slide 7 (Real-Time Speed Race):** Click *Run Real-Time Race* to watch GPT-5 stream tokens for 4.07 seconds while Jev snaps instantly in 650 ms (6.3× faster).
- **Slide 8 (Cost Comparison):** Live cost metrics showing ₹11,75,230 ($14,000+ USD) saved per year on 10,000 daily emails.
- **Slide 9.1 & 9.2:** Interactive question scaling simulator and RLCD calibration curve (Expected Calibration Error: 0.0313).
- **Slide 10.3:** Live System 1 code primitive evaluator (`if jev("Is customer angry?") > 0.9`).

### 3. Integrated Research & Benchmark Workbench (Drawer)
Click the **🔬 Deep-Dive & Benchmarks** button in the top right to access:
- **Tab 1: Architecture Unmasked (Archer Hume's 10,000 API Probes):** Detailed breakdown of causal transformer decoder backbone, sparse MoE (~10B active parameters), prefix KV cache sharing, tree-attention question isolation, and the 5th-option log-odds shift test (-0.28 shift).
- **Tab 2: JevBench Leaderboard (Benchmark Heaven):** Multi-axis ranking across Intelligence, Calibration, Speed, and Cost for Jev 1.13.0, Mapika's `decider-4b v2` (20ms latency leader), `Kev-4B`, `Laya`, and `Winnow-12B`.
- **Tab 3: Open-Source Clones (Laya & Kev):**
  - **Laya** (ConvAI Innovations / Nandakishor Mukkunnoth): ModernBERT 421M, 32.8ms latency, 100+ languages, $0.0029/1k decisions.
  - **Kev** (Jared Palmer): Qwen3.5/3.8 base models, Modal training loop, 89.6% new-task accuracy.
- **Tab 4: Interactive CampusX Review Analyzer Sandbox:** Paste any phone review and watch 14 parallel questions (mention probability + star rating) resolve in ~128ms with confidence gating ($p \ge 0.50$).
- **Tab 5: Community Builds & Documented Limits:** Highlights from 74 viral demos (Claude context compactor, Doom reflex agent, real-time Twitter slop filter) and the 6 jagged edges of Jev 1.13.

---

## 📚 Synthesized Sources

1. **Archer Hume:** *Jev’s Architecture Unmasked* (`archerhume.com/posts/jevs-architecture-unmasked`)
2. **Benchmark Heaven:** *JevBench Leaderboard* (`benchmarkheaven.com/jev-models`)
3. **ConvAI Innovations / Nandakishor Mukkunnoth:** *Laya 33ms Multilingual Engine* (`laya.convaiinnovations.com`)
4. **Jared Palmer:** *Kev Qwen-based Decision Models* (`github.com/jaredpalmer/kev`)
5. **TypeSafe AI:** *System One Concepts & Use Case Map* (`docs.typesafe.ai/concepts/use-case-map`)
6. **CampusX:** *Flipkart-Style Review Analyzer Demo* (`github.com/campusx-official/jev-demo`)
7. **Walid Boulanouar:** *Awesome Jev Use Cases (74 Demos & Limits)* (`github.com/walidboulanouar/awesome-jev-use-cases`)
8. **ShipWithJev:** *Community Build Directory* (`shipwithjev.com/type/github`)
