import { Helmet } from 'react-helmet-async'

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — RoleKeeper</title>
        <meta name="description" content="RoleKeeper Privacy Policy — what we collect, what we don't, and how your data is handled." />
      </Helmet>

      <div className="legal-page">
        <span className="legal-tag">LEGAL</span>
        <h1 className="legal-title">Privacy Policy</h1>
        <div className="legal-updated">Last updated: March 2026 · RoleKeeper — rolekeeper.io</div>

        <div className="highlight-box">
          <p><strong>The short version:</strong> RoleKeeper stores your data in your browser by default. Cloud sync is opt-in with an account. We don't sell anything. We don't track you beyond basic analytics.</p>
        </div>

        <h2>Who we are</h2>
        <p>RoleKeeper is an independent project built by Adrian, a web developer based in Santo Domingo, Dominican Republic. You can reach us at <a href="mailto:support@rolekeeper.io">support@rolekeeper.io</a>.</p>

        <h2>What data we collect</h2>
        <p><strong>Free tier (local mode):</strong> Nothing leaves your device. All your roles, quests, logs, XP, and profile data are stored in your browser's <code>localStorage</code>. We have no access to this data.</p>
        <p><strong>Accounts (cloud sync):</strong> When you create an account, we store your email, username, and the data you choose to sync (roles, quests, logs, profile) on our servers via Supabase. Passwords are stored as secure hashes — we never see or store plain text passwords.</p>
        <p><strong>Analytics:</strong> We use basic, privacy-respecting analytics (Cloudflare Web Analytics) to understand traffic. This does not track individuals, does not use cookies, and does not collect personal information.</p>
        <p><strong>Email contact:</strong> If you email us at support@rolekeeper.io, we receive and store that email in our inbox. We use it only to respond to you.</p>

        <h2>What we don't collect</h2>
        <ul>
          <li>We don't use advertising trackers or third-party marketing pixels</li>
          <li>We don't sell your data to anyone, ever</li>
          <li>We don't store your prompts or AI outputs on any server (unless you opt into cloud sync)</li>
          <li>We don't require an account — the free local tier works without one</li>
        </ul>

        <h2>Cookies</h2>
        <p>We use one item in <code>localStorage</code> to remember your theme preference (<code>rk_t</code>). This is not a tracking cookie — it's a preference saved locally in your browser that never leaves your device.</p>

        <h2>Third-party services</h2>
        <ul>
          <li><strong>Supabase</strong> — handles authentication and cloud data storage for accounts. <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase Privacy Policy</a></li>
          <li><strong>Cloudflare</strong> — hosts our site and provides basic analytics. <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare Privacy Policy</a></li>
          <li><strong>Google Fonts</strong> — loads typography. Google may log font requests. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
        </ul>

        <h2>Your rights</h2>
        <p><strong>Local data:</strong> You have complete control. Export it using Backup, delete it using Factory Reset in Settings, or clear your browser storage. No request to us is needed.</p>
        <p><strong>Cloud data:</strong> You can delete your account and all associated data from your Settings page. Deletion is permanent and processed within 30 days. You can also email <a href="mailto:support@rolekeeper.io">support@rolekeeper.io</a> to request deletion.</p>

        <h2>Children</h2>
        <p>RoleKeeper is not directed at children under 13. We do not knowingly collect any information from children.</p>

        <h2>Changes to this policy</h2>
        <p>If we make significant changes, we'll update the date at the top of this page and note the changes clearly. Continued use of the app after changes means you accept the updated policy.</p>

        <h2>Contact</h2>
        <p>Questions, concerns, or feedback about this policy — email us directly at <a href="mailto:support@rolekeeper.io">support@rolekeeper.io</a>. We're a one-person team and we read every email.</p>
      </div>
    </>
  )
}
