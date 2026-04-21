import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page-bg">
      <div className="wrapper">

        {/* ── TOP LEFT: Blue headline card ── */}
        <div className="card card-blue top-left">
          <h2>We automatically generate reports for each of your customers</h2>
        </div>

        {/* ── TOP RIGHT: Intercom card + Activation funnel ── */}
        <div className="card card-white top-right company-activation-card">
          {/* Left: Company details */}
          <div className="company-block">
            <div className="company-header">
              <div className="intercom-icon">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="white">
                  <rect x="2" y="10" width="3" height="8" rx="1"/>
                  <rect x="6.5" y="7" width="3" height="11" rx="1"/>
                  <rect x="11" y="4" width="3" height="14" rx="1"/>
                  <rect x="15.5" y="2" width="3" height="16" rx="1"/>
                </svg>
              </div>
              <div>
                <div className="co-name">Intercom</div>
                <div className="co-joined">● Joined 9 Feb 2023</div>
              </div>
            </div>
            <div className="metrics">
              <div className="metric-row"><span className="lightning">⚡</span> Total seats <span className="metric-val">50</span></div>
              <div className="metric-row"><span className="lightning">⚡</span> Active seats <span className="metric-val">22</span></div>
              <div className="metric-row"><span className="lightning">⚡</span> Active last 7 days <span className="metric-val">True</span></div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider-v" />

          {/* Right: Activation */}
          <div className="activation-block">
            <div className="act-label">Company activation</div>
            <div className="act-pct">40%</div>
            <div className="funnel-rows">
              {[
                { label: 'Signed up', pct: 100, color: '#facc15' },
                { label: 'Setup',     pct: 80,  color: '#6366f1' },
                { label: 'Aha moment',pct: 60,  color: '#8b5cf6' },
                { label: 'Activated', pct: 40,  color: '#3b82f6' },
                { label: 'Active',    pct: 80,  color: '#6366f1' },
              ].map(row => (
                <div className="funnel-row" key={row.label}>
                  <div className="funnel-dot" style={{ background: row.color }} />
                  <span className="funnel-name">{row.label}</span>
                  <div className="funnel-bar-bg">
                    <div className="funnel-bar-fill" style={{ width: `${row.pct}%`, background: '#6366f1' }} />
                  </div>
                  <span className="funnel-pct">{row.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MIDDLE LEFT: Celebrate milestones (purple) ── */}
        <div className="card card-purple mid-left">
          <h3>Celebrate milestones</h3>
          <p>Instant alerts and weekly digests to keep your team aligned and celebrate wins</p>

          {/* Slack card */}
          <div className="slack-card">
            <div className="slack-header">
              <div className="slack-app-info">
                <div className="slack-j-icon">J</div>
                <span className="slack-app-name">June</span>
                <span className="slack-app-tag">APP</span>
                <span className="slack-time">10:36 AM</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
                <path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/>
              </svg>
            </div>

            <div className="slack-event-badge">🏆 Qualified signup</div>

            <div className="slack-user-row">
              <div className="slack-avatar">E</div>
              <span className="slack-uname">Eoghan McCabe</span>
              <span className="slack-email">eoghan@intercom.io</span>
            </div>

            <div className="slack-fields">
              <div className="sf-col">
                <div className="sf-label">Company name:</div>
                <div className="sf-val">Intercom</div>
              </div>
              <div className="sf-col">
                <div className="sf-label">Location:</div>
                <div className="sf-val">Dublin, Ireland</div>
              </div>
              <div className="sf-col">
                <div className="sf-label">Role:</div>
                <div className="sf-val">CTO &amp; Co-Founder</div>
              </div>
              <div className="sf-col">
                <div className="sf-label">Company website:</div>
                <div className="sf-link">Intercom.io</div>
              </div>
              <div className="sf-col">
                <div className="sf-label">Company size:</div>
                <div className="sf-val">800</div>
              </div>
              <div className="sf-col">
                <div className="sf-label">LinkedIn:</div>
                <div className="sf-link">View profile</div>
              </div>
              <div className="sf-col">
                <div className="sf-label">Funding amount:</div>
                <div className="sf-val">33M</div>
              </div>
              <div className="sf-col">
                <div className="sf-label">Crunchbase:</div>
                <div className="sf-link">View company</div>
              </div>
            </div>
          </div>

          {/* "Also done for you" */}
          <div className="also-done">
            <span className="also-done-text">Also done for you</span>
            <svg className="curly-arrow" width="44" height="32" viewBox="0 0 44 32" fill="none">
              <path d="M2 6 C12 2, 34 10, 40 26" stroke="#a78bfa" strokeWidth="2" fill="none"/>
              <path d="M34 24 L40 26 L36 20" stroke="#a78bfa" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
            <div className="done-badges">
              <span className="done-badge green">⚡ Last seen <span className="badge-inner">today</span></span>
              <span className="done-badge green" style={{marginTop: 6}}>⚡ Activated <span className="badge-inner">true</span></span>
            </div>
          </div>
        </div>

        {/* ── MIDDLE RIGHT: Automatic enrichment (yellow) ── */}
        <div className="card card-yellow mid-right">
          <div>
            <h3>Automatic enrichment</h3>
            <p>Automatically enrich your customers profiles and their users powered by GPT</p>
          </div>

          <div className="enriched-with-ai">✦ Enriched with AI</div>

          <div className="enrich-grid">
            {[
              { icon: '🌐', key: 'Website',   val: 'intercom.io',    link: true },
              { icon: '📍', key: 'Location',  val: 'Dublin, Ireland', link: false },
              { icon: '👥', key: 'Employees', val: '800',             link: false },
              { icon: '🐦', key: 'Twitter',   val: '@intercom',       link: true },
              { icon: '💰', key: 'Funding',   val: '$241M',           link: false },
              { icon: '✓',  key: 'Qualified', val: 'true',            link: false, green: true },
            ].map(f => (
              <div className="enrich-item" key={f.key}>
                <div className="enrich-top">
                  <span className={`enrich-icon ${f.green ? 'icon-green' : ''}`}>{f.icon}</span>
                  <span className="enrich-key">{f.key}</span>
                </div>
                <div className={f.link ? 'enrich-val-link' : 'enrich-val'}>{f.val}</div>
              </div>
            ))}
          </div>

          {/* Brand logos bottom-right corner */}
          <div className="enrich-logos">
            <div className="enrich-logo purple-bg">
              <svg width="13" height="13" viewBox="0 0 20 20" fill="#7c3aed">
                <rect x="2" y="10" width="3" height="8" rx="1"/>
                <rect x="6.5" y="7" width="3" height="11" rx="1"/>
                <rect x="11" y="4" width="3" height="14" rx="1"/>
                <rect x="15.5" y="2" width="3" height="16" rx="1"/>
              </svg>
            </div>
            <div className="enrich-logo dark-bg">
              <svg width="13" height="13" viewBox="0 0 20 20" fill="white">
                <rect x="2" y="10" width="3" height="8" rx="1"/>
                <rect x="6.5" y="7" width="3" height="11" rx="1"/>
                <rect x="11" y="4" width="3" height="14" rx="1"/>
                <rect x="15.5" y="2" width="3" height="16" rx="1"/>
              </svg>
            </div>
          </div>
        </div>

        {/* ── BOTTOM LEFT: empty (mirror of original screenshot) ── */}
        {/* In the original image the bottom-left is part of the purple card extending down */}

        {/* ── BOTTOM RIGHT: CRM integration (green) ── */}
        <div className="card card-green bottom-right">
          <h3>Integrated with your CRM</h3>
          <p>Connect June to your CRM and sync product usage data with your CS and sales teams</p>

          <div className="crm-table">
            <div className="crm-table-top">
              <span className="crm-title">CRM</span>
              <div className="crm-logos-row">
                {/* Attio */}
                <div className="crm-logo-wrap gray-bg">
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#6366f1" strokeWidth="1.5"/>
                    <circle cx="10" cy="10" r="3.5" fill="#6366f1" opacity="0.35"/>
                    <circle cx="10" cy="10" r="1.8" fill="#6366f1"/>
                  </svg>
                </div>
                {/* HubSpot */}
                <div className="crm-logo-wrap orange-bg">
                  <svg width="15" height="15" viewBox="0 0 20 20">
                    <circle cx="10" cy="6.5" r="2.8" fill="#ff7a59"/>
                    <circle cx="10" cy="6.5" r="1.3" fill="#fff"/>
                    <line x1="10" y1="9.3" x2="10" y2="16" stroke="#ff7a59" strokeWidth="2"/>
                    <line x1="7" y1="13" x2="10" y2="10.5" stroke="#ff7a59" strokeWidth="1.8"/>
                    <line x1="13" y1="13" x2="10" y2="10.5" stroke="#ff7a59" strokeWidth="1.8"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="crm-col-headers">
              <span>Company</span>
              <span>🪑 Active seats</span>
            </div>

            <div className="crm-divider" />

            <div className="crm-row">
              <div className="crm-company-cell">
                <div className="crm-dot dark" />
                <span>Intercom</span>
              </div>
              <div className="crm-seats">
                22 <span className="delta-pos">(+3)</span>
              </div>
            </div>

            <div className="crm-row">
              <div className="crm-company-cell">
                <div className="crm-dot red" />
                <span>Amie</span>
              </div>
              <div className="crm-seats">
                20 <span className="delta-neg">(-2)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
