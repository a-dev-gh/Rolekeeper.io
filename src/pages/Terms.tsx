import { Helmet } from 'react-helmet-async'

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — RoleKeeper</title>
        <meta name="description" content="RoleKeeper Terms of Service — simple, honest, plain language." />
      </Helmet>

      <div className="legal-page">
        <span className="legal-tag">LEGAL</span>
        <h1 className="legal-title">Terms of Service</h1>
        <div className="legal-updated">Last updated: March 2026 · RoleKeeper — rolekeeper.io</div>

        <div className="highlight-box">
          <p><strong>The short version:</strong> Use RoleKeeper to do good work. Don't abuse it. Your data is yours. We're one person building this — be reasonable and so will we.</p>
        </div>

        <h2>Acceptance of terms</h2>
        <p>By using RoleKeeper (the website at rolekeeper.io, the app at rolekeeper.quest, or any related service), you agree to these terms. If you don't agree, please don't use the service.</p>
        <p>We may update these terms as the product grows. We'll always note the date of the last update at the top of this page.</p>

        <h2>The service</h2>
        <p>RoleKeeper is a personal AI session workspace. It helps you organize roles, prompts, and session logs. The free tier runs in your browser — no account needed, no data sent to our servers. Cloud sync requires an account.</p>

        <h2>Your data</h2>
        <p>In the free tier, all your data lives in your browser's local storage. <strong>It belongs entirely to you.</strong> We have no access to it, cannot recover it if lost, and cannot delete it on your behalf. Use the Export feature in Settings to back it up regularly.</p>
        <p>With an account, data you choose to sync is stored on our servers. Your local data always remains yours to export and delete.</p>

        <h2>Acceptable use</h2>
        <p>You agree not to use RoleKeeper to:</p>
        <ul>
          <li>Generate content that is illegal, harmful, abusive, or violates others' rights</li>
          <li>Attempt to reverse-engineer, scrape, or exploit the service</li>
          <li>Impersonate others or misrepresent your identity</li>
          <li>Violate any applicable laws or regulations</li>
        </ul>

        <h2>Accounts</h2>
        <ul>
          <li><strong>Account creation</strong> — provide a valid email address and accept the Terms and Privacy Policy. You are responsible for keeping your login credentials secure.</li>
          <li><strong>Subscription billing</strong> — Pro is a monthly subscription billed on the same date each month.</li>
          <li><strong>Cancellation</strong> — cancel anytime. You retain Pro access until the end of your billing period.</li>
          <li><strong>Data on cancellation</strong> — synced data remains accessible locally via export for 30 days, then is deleted from our servers.</li>
          <li><strong>Account deletion</strong> — delete your account anytime from Settings. All data permanently removed within 30 days.</li>
        </ul>

        <h2>Intellectual property</h2>
        <p>The RoleKeeper name, logo, design, and code are the property of Adrian (the developer). The content you create — your roles, prompts, and logs — is entirely yours. We claim no ownership over it.</p>

        <h2>Disclaimer of warranties</h2>
        <p>RoleKeeper is provided <strong>"as is"</strong> without any warranties. We do our best but cannot guarantee the service will be error-free or uninterrupted. <strong>Always export your backup regularly.</strong></p>

        <h2>Limitation of liability</h2>
        <p>To the maximum extent permitted by law, RoleKeeper and its developer shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>

        <h2>Contact</h2>
        <p>Questions about these terms? Email us at <a href="mailto:support@rolekeeper.io">support@rolekeeper.io</a>. We're a one-person team and we read every message.</p>
      </div>
    </>
  )
}
