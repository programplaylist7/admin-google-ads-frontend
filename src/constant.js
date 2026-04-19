export const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --purple: #8b5cf6;
    --purple-light: #a78bfa;
    --purple-dark: #6d28d9;
    --pink: #ec4899;
    --cyan: #06b6d4;
    --emerald: #10b981;
    --amber: #f59e0b;
    --bg: #070710;
    --surface: rgba(255,255,255,0.04);
    --surface-hover: rgba(255,255,255,0.07);
    --border: rgba(255,255,255,0.08);
    --border-strong: rgba(255,255,255,0.14);
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --text-muted: #475569;
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.4); border-radius: 999px; }

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(24px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity:0; } to { opacity:1; }
  }
  @keyframes expandDown {
    from { opacity:0; max-height:0; transform:scaleY(0.95); transform-origin:top; }
    to   { opacity:1; max-height:4000px; transform:scaleY(1); transform-origin:top; }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  @keyframes float1 {
    0%,100% { transform: translateY(0) translateX(0); }
    33%      { transform: translateY(-40px) translateX(20px); }
    66%      { transform: translateY(20px) translateX(-15px); }
  }
  @keyframes float2 {
    0%,100% { transform: translateY(0) translateX(0); }
    50%      { transform: translateY(-60px) translateX(-30px); }
  }
  @keyframes float3 {
    0%,100% { transform: translateY(0) scale(1); }
    50%      { transform: translateY(30px) scale(1.08); }
  }
  @keyframes gridScroll {
    from { background-position: 0 0; }
    to   { background-position: 40px 40px; }
  }
  @keyframes pulse {
    0%,100% { opacity:1; box-shadow:0 0 8px 2px rgba(16,185,129,0.5); }
    50%      { opacity:0.6; box-shadow:0 0 20px 6px rgba(16,185,129,0.8); }
  }
  @keyframes glow {
    0%,100% { box-shadow: 0 0 20px rgba(139,92,246,0.3); }
    50%      { box-shadow: 0 0 40px rgba(139,92,246,0.6); }
  }

  .hp-page {
    min-height: 100vh;
    background: var(--bg);
    font-family: 'Outfit', sans-serif;
    color: var(--text-primary);
    position: relative;
    overflow-x: hidden;
  }

  /* Scrolling grid background */
  .hp-bg-grid {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background-image:
      linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px);
    background-size: 40px 40px;
    animation: gridScroll 6s linear infinite;
  }

  /* Floating orbs */
  .hp-orb { position: fixed; border-radius: 50%; pointer-events: none; z-index: 0; filter: blur(80px); }
  .hp-orb-1 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%);
    top: -150px; left: -100px;
    animation: float1 18s ease-in-out infinite;
  }
  .hp-orb-2 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(236,72,153,0.14), transparent 70%);
    bottom: -100px; right: -80px;
    animation: float2 22s ease-in-out infinite;
  }
  .hp-orb-3 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%);
    top: 40%; left: 60%;
    animation: float3 15s ease-in-out infinite;
  }

  .hp-content {
    position: relative; z-index: 1;
    max-width: 900px; margin: 0 auto;
    padding: 2rem 1.25rem 5rem;
  }

  /* Navbar */
  .hp-nav {
    position: sticky; top: 0; z-index: 100;
    backdrop-filter: blur(20px);
    background: rgba(7,7,16,0.75);
    border-bottom: 1px solid var(--border);
    padding: 0 1.25rem;
    animation: fadeIn 0.4s ease both;
  }
  .hp-nav-inner {
    max-width: 900px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
    height: 60px;
  }
  .hp-nav-logo { display: flex; align-items: center; gap: 10px; }
  .hp-nav-icon {
    width: 32px; height: 32px; border-radius: 9px;
    background: linear-gradient(135deg, var(--purple), var(--pink));
    display: flex; align-items: center; justify-content: center;
    font-size: 15px;
  }
  .hp-nav-title {
    font-size: 16px; font-weight: 700;
    background: linear-gradient(90deg, #e2e8f0, var(--purple-light));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hp-nav-right { display: flex; align-items: center; gap: 10px; }
  .hp-live {
    display: flex; align-items: center; gap: 6px;
    font-size: 12px; font-weight: 500; color: var(--emerald);
    background: rgba(16,185,129,0.1);
    border: 1px solid rgba(16,185,129,0.2);
    padding: 5px 12px; border-radius: 999px;
  }
  .hp-live-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--emerald);
    animation: pulse 2s ease infinite;
  }
  .hp-logout-btn {
    display: flex; align-items: center; gap: 7px;
    font-family: 'Outfit', sans-serif;
    font-size: 13px; font-weight: 600;
    padding: 8px 16px; border-radius: 10px; cursor: pointer;
    border: 1px solid rgba(239,68,68,0.35);
    background: rgba(239,68,68,0.1); color: #f87171;
    transition: all 0.2s;
  }
  .hp-logout-btn:hover {
    background: rgba(239,68,68,0.22);
    border-color: rgba(239,68,68,0.55);
    box-shadow: 0 0 20px rgba(239,68,68,0.2);
    transform: translateY(-1px);
  }
  .hp-logout-btn:active { transform: scale(0.97); }

  /* Header */
  .hp-header { margin: 2.5rem 0 2rem; animation: fadeUp 0.5s ease both; }
  .hp-eyebrow {
    font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--purple-light); margin-bottom: 8px;
  }
  .hp-title {
    font-size: clamp(28px, 5vw, 40px); font-weight: 800; line-height: 1.1;
    background: linear-gradient(135deg, #f1f5f9 0%, var(--purple-light) 50%, var(--pink) 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hp-subtitle { font-size: 14px; color: var(--text-muted); margin-top: 8px; }

  /* Stats */
  .hp-stats {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
    margin-bottom: 2.5rem;
  }
  @media(max-width:500px) { .hp-stats { grid-template-columns: 1fr; } }
  .hp-stat {
    border-radius: 16px; padding: 18px 20px;
    border: 1px solid var(--border);
    position: relative; overflow: hidden;
    animation: fadeUp 0.5s ease both;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .hp-stat:hover { transform: translateY(-3px); }
  .hp-stat::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.04), transparent);
    pointer-events: none;
  }
  .hp-stat-purple { background: rgba(139,92,246,0.1); }
  .hp-stat-purple:hover { box-shadow: 0 8px 30px rgba(139,92,246,0.2); }
  .hp-stat-pink   { background: rgba(236,72,153,0.1); }
  .hp-stat-pink:hover   { box-shadow: 0 8px 30px rgba(236,72,153,0.2); }
  .hp-stat-cyan   { background: rgba(6,182,212,0.1); }
  .hp-stat-cyan:hover   { box-shadow: 0 8px 30px rgba(6,182,212,0.2); }
  .hp-stat-emoji { font-size: 22px; margin-bottom: 10px; display: block; }
  .hp-stat-label { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted); }
  .hp-stat-val   { font-size: 30px; font-weight: 800; color: var(--text-primary); line-height: 1; margin: 4px 0; }

  /* User card */
  .hp-user-card {
    border-radius: 20px; margin-bottom: 1.25rem;
    border: 1px solid var(--border);
    background: rgba(15,15,28,0.9);
    backdrop-filter: blur(16px);
    overflow: hidden;
    animation: fadeUp 0.5s ease both;
    transition: border-color 0.25s, box-shadow 0.25s;
  }
  .hp-user-card:hover {
    border-color: rgba(139,92,246,0.3);
    box-shadow: 0 4px 40px rgba(139,92,246,0.07);
  }
  .hp-card-stripe { height: 3px; width: 100%; }
  .stripe-purple  { background: linear-gradient(90deg, var(--purple), var(--pink)); }
  .stripe-pink    { background: linear-gradient(90deg, var(--pink), var(--amber)); }
  .stripe-cyan    { background: linear-gradient(90deg, var(--cyan), var(--emerald)); }
  .stripe-amber   { background: linear-gradient(90deg, var(--amber), var(--pink)); }
  .stripe-emerald { background: linear-gradient(90deg, var(--emerald), var(--cyan)); }

  .hp-user-header {
    display: flex; align-items: center; gap: 14px;
    padding: 18px 20px; cursor: pointer;
    transition: background 0.2s;
  }
  .hp-user-header:hover { background: rgba(255,255,255,0.02); }
  .hp-avatar {
    width: 46px; height: 46px; border-radius: 13px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; font-weight: 800;
  }
  .av-purple  { background: linear-gradient(135deg,#6d28d9,#a78bfa); color:#fff; }
  .av-pink    { background: linear-gradient(135deg,#be185d,#f472b6); color:#fff; }
  .av-cyan    { background: linear-gradient(135deg,#0e7490,#22d3ee); color:#fff; }
  .av-amber   { background: linear-gradient(135deg,#b45309,#fbbf24); color:#fff; }
  .av-emerald { background: linear-gradient(135deg,#065f46,#34d399); color:#fff; }

  .hp-user-info { flex: 1; min-width: 0; }
  .hp-user-name {
    font-size: 15px; font-weight: 700; color: var(--text-primary);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .hp-user-email { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
  .hp-user-chips { display: flex; gap: 6px; margin-top: 8px; flex-wrap: wrap; }
  .hp-chip {
    font-size: 11px; font-weight: 500; padding: 3px 9px; border-radius: 999px;
    letter-spacing: 0.02em;
  }
  .chip-q { background:rgba(139,92,246,0.15); color:#c4b5fd; border:1px solid rgba(139,92,246,0.2); }
  .chip-g { background:rgba(6,182,212,0.12); color:#67e8f9; border:1px solid rgba(6,182,212,0.2); }
  .chip-d { background:rgba(255,255,255,0.05); color:var(--text-muted); border:1px solid var(--border); }

  .hp-user-right { margin-left: auto; }
  .hp-caret {
    width: 28px; height: 28px; border-radius: 8px;
    background: rgba(255,255,255,0.05);
    border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    color: var(--text-muted); font-size: 12px;
    transition: transform 0.3s, background 0.2s;
  }
  .hp-caret.open {
    transform: rotate(180deg);
    background: rgba(139,92,246,0.15);
    border-color: rgba(139,92,246,0.3);
    color: var(--purple-light);
  }

  /* Generations */
  .hp-gens {
    padding: 0 20px 18px;
    animation: expandDown 0.35s cubic-bezier(0.16,1,0.3,1) both;
    overflow: hidden;
  }
  .hp-gens-divider { height: 1px; background: var(--border); margin-bottom: 14px; }
  .hp-gen-card {
    border-radius: 14px; margin-bottom: 10px;
    border: 1px solid var(--border);
    background: rgba(255,255,255,0.025);
    overflow: hidden;
    transition: border-color 0.2s;
  }
  .hp-gen-card:hover { border-color: rgba(255,255,255,0.1); }
  .hp-gen-head {
    display: flex; align-items: flex-start; justify-content: space-between;
    gap: 12px; padding: 13px 15px;
  }
  .hp-gen-product { font-size: 14px; font-weight: 700; color: var(--text-primary); margin-bottom: 7px; }
  .hp-gen-tags { display: flex; gap: 5px; flex-wrap: wrap; }
  .gtag { font-size: 11px; font-weight: 500; padding: 3px 8px; border-radius: 6px; }
  .gtag-a { background:rgba(236,72,153,0.12); color:#f9a8d4; }
  .gtag-m { background:rgba(139,92,246,0.12); color:#c4b5fd; }
  .gtag-t { background:rgba(6,182,212,0.12); color:#67e8f9; }
  .hp-gen-date {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px; color: var(--text-muted); margin-top: 6px;
  }
  .hp-view-btn {
    flex-shrink: 0; align-self: flex-start;
    font-family: 'Outfit', sans-serif;
    font-size: 12px; font-weight: 600;
    padding: 7px 13px; border-radius: 9px; cursor: pointer;
    border: 1px solid rgba(139,92,246,0.3);
    background: rgba(139,92,246,0.1); color: var(--purple-light);
    transition: all 0.2s; white-space: nowrap;
  }
  .hp-view-btn:hover {
    background: rgba(139,92,246,0.22);
    box-shadow: 0 0 18px rgba(139,92,246,0.3);
    transform: translateY(-1px);
  }
  .hp-view-btn.open {
    background: rgba(139,92,246,0.25); color: #ddd6fe;
    border-color: rgba(139,92,246,0.5);
    animation: glow 2.5s ease infinite;
  }

  /* Ads */
  .hp-ads {
    padding: 0 15px 14px;
    animation: expandDown 0.3s cubic-bezier(0.16,1,0.3,1) both;
    overflow: hidden;
  }
  .hp-ad-card {
    border-radius: 10px; padding: 12px 14px; margin-bottom: 8px;
    background: rgba(0,0,0,0.35);
    border: 1px solid rgba(255,255,255,0.05);
  }
  .hp-ad-label {
    font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
    text-transform: uppercase; margin-bottom: 7px;
  }
  .hp-ad-label.hl   { color: var(--purple-light); }
  .hp-ad-label.desc { color: var(--cyan); margin-top: 10px; }
  .hp-ad-list { list-style: none; display: flex; flex-direction: column; gap: 5px; }
  .hp-ad-list li {
    font-size: 13px; color: #cbd5e1;
    padding: 6px 10px; border-radius: 7px;
    background: rgba(255,255,255,0.04);
    border-left: 2px solid rgba(139,92,246,0.5);
    transition: background 0.15s;
  }
  .hp-ad-list li:hover { background: rgba(255,255,255,0.07); }
  .hp-ad-list.desc li { border-left-color: rgba(6,182,212,0.5); }

  /* Loading */
  .hp-loading {
    min-height: 100vh; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    background: var(--bg); gap: 16px;
  }
  .hp-spinner {
    width: 38px; height: 38px; border-radius: 50%;
    border: 3px solid rgba(139,92,246,0.2);
    border-top-color: var(--purple-light);
    animation: spin 0.75s linear infinite;
  }
  .hp-loading-text { font-size: 13px; color: var(--text-muted); letter-spacing: 0.08em; }

  /* Responsive */
  @media(max-width:600px) {
    .hp-nav-title { display: none; }
    .hp-logout-btn span { display: none; }
    .chip-d { display: none; }
    .hp-gen-head { flex-direction: column; }
    .hp-view-btn { width: 100%; text-align: center; }
  }
`;