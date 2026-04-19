// src/pages/HomePage.jsx

import { useEffect, useState } from "react";
import api from "../api";
import toast from "react-hot-toast";
import { STYLES } from "../constant";

/* ─────────────────────────────────────────
   STYLES
───────────────────────────────────────── */

const STRIPES = [
  "stripe-purple",
  "stripe-pink",
  "stripe-cyan",
  "stripe-amber",
  "stripe-emerald",
];
const AVATARS = ["av-purple", "av-pink", "av-cyan", "av-amber", "av-emerald"];

const initials = (name = "") =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

/* ────────────────────────────────────────── */
const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openUsers, setOpenUsers] = useState({});
  const [openAds, setOpenAds] = useState({});

  const fetchData = async () => {
    const toastId = toast.loading("loading...");
    try {
      const res = await api.get("/admin/users");
      setUsers(res.data);
    } catch {
      toast.error("Failed to load data");
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await api.post("/admin/logout");
      toast.success("Logged out 👋");
      window.location.href = "/login";
    } catch {
      toast.error("Logout failed");
    }
  };

  const toggleUser = (id) => setOpenUsers((p) => ({ ...p, [id]: !p[id] }));
  const toggleAds = (id) => setOpenAds((p) => ({ ...p, [id]: !p[id] }));

  const totalGens = users.reduce((s, u) => s + (u.generations?.length || 0), 0);
  const totalAds = users.reduce(
    (s, u) =>
      s +
      (u.generations?.reduce((g, gen) => g + (gen.ads?.ads?.length || 0), 0) ||
        0),
    0,
  );

  /* Loading Screen */
  if (loading) {
    return (
      <>
        <style>{STYLES}</style>
        <div className="hp-loading">
          <div className="hp-spinner" />
          <p className="hp-loading-text">Loading admin panel…</p>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{STYLES}</style>
      <div className="hp-page">
        {/* Animated background layers */}
        <div className="hp-bg-grid" />
        <div className="hp-orb hp-orb-1" />
        <div className="hp-orb hp-orb-2" />
        <div className="hp-orb hp-orb-3" />

        {/* ── Sticky Navbar ── */}
        <nav className="hp-nav">
          <div className="hp-nav-inner">
            <div className="hp-nav-logo">
              <div className="hp-nav-icon">⚡</div>
              <span className="hp-nav-title">AdminPanel</span>
            </div>
            <div className="hp-nav-right">
              <div className="hp-live">
                <span className="hp-live-dot" />
                Live
              </div>
              <button className="hp-logout-btn" onClick={handleLogout}>
                🚪 <span>Logout</span>
              </button>
            </div>
          </div>
        </nav>

        {/* ── Content ── */}
        <div className="hp-content">
          {/* Header */}
          <div className="hp-header">
            <p className="hp-eyebrow">Control Center</p>
            <h1 className="hp-title">Admin Panel 🔥</h1>
            <p className="hp-subtitle">
              {users.length} users · {totalGens} generations · {totalAds} ads
            </p>
          </div>

          {/* Stats */}
          <div className="hp-stats">
            <div
              className="hp-stat hp-stat-purple"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="hp-stat-emoji">👥</span>
              <p className="hp-stat-label">Users</p>
              <p className="hp-stat-val">{users.length}</p>
            </div>
            <div
              className="hp-stat hp-stat-pink"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="hp-stat-emoji">⚡</span>
              <p className="hp-stat-label">Generations</p>
              <p className="hp-stat-val">{totalGens}</p>
            </div>
            <div
              className="hp-stat hp-stat-cyan"
              style={{ animationDelay: "0.15s" }}
            >
              <span className="hp-stat-emoji">🎯</span>
              <p className="hp-stat-label">Total Ads</p>
              <p className="hp-stat-val">{totalAds}</p>
            </div>
          </div>

          {/* Users list */}
          {users.map((user, uIdx) => {
            const isOpen = !!openUsers[user._id];
            const stripeCls = STRIPES[uIdx % STRIPES.length];
            const avatarCls = AVATARS[uIdx % AVATARS.length];

            return (
              <div
                key={user._id}
                className="hp-user-card"
                style={{ animationDelay: `${0.1 + uIdx * 0.07}s` }}
              >
                {/* Colorful top stripe */}
                <div className={`hp-card-stripe ${stripeCls}`} />

                {/* Clickable user row */}
                <div
                  className="hp-user-header"
                  onClick={() => toggleUser(user._id)}
                >
                  <div className={`hp-avatar ${avatarCls}`}>
                    {initials(user.name)}
                  </div>
                  <div className="hp-user-info">
                    <p className="hp-user-name">{user.name}</p>
                    <p className="hp-user-email">{user.email}</p>
                    <div className="hp-user-chips">
                      <span className="hp-chip chip-q">
                        ✦ Quota {user.quota}
                      </span>
                      <span className="hp-chip chip-g">
                        {user.generations?.length || 0} gens
                      </span>
                      <span className="hp-chip chip-d">
                        {new Date(user.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="hp-user-right">
                    <span className={`hp-caret ${isOpen ? "open" : ""}`}>
                      ▾
                    </span>
                  </div>
                </div>

                {/* Generations accordion */}
                {isOpen && (
                  <div className="hp-gens">
                    <div className="hp-gens-divider" />
                    {!user.generations?.length ? (
                      <p
                        style={{
                          fontSize: 13,
                          color: "var(--text-muted)",
                          padding: "6px 0",
                        }}
                      >
                        No generations yet.
                      </p>
                    ) : (
                      user.generations.map((gen) => {
                        const adsOpen = !!openAds[gen._id];
                        return (
                          <div key={gen._id} className="hp-gen-card">
                            <div className="hp-gen-head">
                              <div style={{ flex: 1 }}>
                                <p className="hp-gen-product">{gen.product}</p>
                                <div className="hp-gen-tags">
                                  <span className="gtag gtag-a">
                                    {gen.audience}
                                  </span>
                                  <span className="gtag gtag-m">
                                    {gen.model}
                                  </span>
                                  <span className="gtag gtag-t">
                                    {gen.tone}
                                  </span>
                                </div>
                                <p className="hp-gen-date">
                                  {new Date(gen.createdAt).toLocaleString()}
                                </p>
                              </div>
                              <button
                                className={`hp-view-btn ${adsOpen ? "open" : ""}`}
                                onClick={() => toggleAds(gen._id)}
                              >
                                {adsOpen ? "Hide Ads ✕" : "View Ads →"}
                              </button>
                            </div>

                            {/* Ads panel */}
                            {adsOpen && (
                              <div className="hp-ads">
                                {gen.ads?.ads?.map((ad, i) => (
                                  <div key={i} className="hp-ad-card">
                                    <p className="hp-ad-label hl">Headlines</p>
                                    <ul className="hp-ad-list">
                                      {ad.headlines.map((h, j) => (
                                        <li key={j}>{h}</li>
                                      ))}
                                    </ul>
                                    <p className="hp-ad-label desc">
                                      Descriptions
                                    </p>
                                    <ul className="hp-ad-list desc">
                                      {ad.descriptions.map((d, j) => (
                                        <li key={j}>{d}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
