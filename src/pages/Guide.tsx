import { Helmet } from 'react-helmet-async'

export default function Guide() {
  return (
    <>
      <Helmet>
        <title>Guide — RoleKeeper</title>
      </Helmet>
      <div className="guide-page">
        <span className="legal-tag">GETTING STARTED</span>
        <h1 className="legal-title">How to Use RoleKeeper</h1>
        <p className="legal-updated">Your complete guide to structuring AI sessions</p>

        <div className="highlight-box">
          <p>
            RoleKeeper helps you write better AI prompts by combining a clear task description,
            a specialized role, and a proven quest template into one structured prompt you can
            copy to any AI tool.
          </p>
        </div>

        <div className="guide-step">
          <div className="guide-step-num">STEP 1</div>
          <h3>Describe Your Mission</h3>
          <p>
            Start by writing what you need to accomplish. Be specific — add context, links,
            or examples. The clearer your task, the better your results.
          </p>
        </div>

        <div className="guide-step">
          <div className="guide-step-num">STEP 2</div>
          <h3>Choose Your Role</h3>
          <p>
            Select an AI persona that fits the task. Each role has its own identity, description,
            and library of quest templates. Engineer for code, Writer for content, Analyst for data.
          </p>
        </div>

        <div className="guide-step">
          <div className="guide-step-num">STEP 3</div>
          <h3>Select a Quest Template</h3>
          <p>
            Pick a prompt template from your role's library. RoleKeeper assembles the final prompt
            by combining your task, role context, and template. Copy it to any AI tool.
          </p>
        </div>

        <div className="guide-step">
          <div className="guide-step-num">STEP 4</div>
          <h3>Log Your Results</h3>
          <p>
            Paste the AI output, rate the quality (1-5 stars), add notes. Every logged session
            earns XP and builds a searchable history of what works.
          </p>
        </div>

        <div className="guide-faq">
          <h2>Frequently Asked Questions</h2>

          <div className="guide-faq-item">
            <p className="guide-faq-q">Do I need an account?</p>
            <p className="guide-faq-a">
              No. The free tier works entirely in your browser with no account needed.
              Create an account only if you want cloud sync across devices.
            </p>
          </div>

          <div className="guide-faq-item">
            <p className="guide-faq-q">Does RoleKeeper work with ChatGPT, Claude, and other AI tools?</p>
            <p className="guide-faq-a">
              Yes. RoleKeeper assembles your prompt — you copy it to whatever AI tool you prefer.
              It works with all of them.
            </p>
          </div>

          <div className="guide-faq-item">
            <p className="guide-faq-q">What is XP?</p>
            <p className="guide-faq-a">
              XP (experience points) tracks your activity. Every logged session earns 3-5 XP.
              As you level up, you unlock titles. It's a way to see your progress over time.
            </p>
          </div>

          <div className="guide-faq-item">
            <p className="guide-faq-q">Can I create my own roles?</p>
            <p className="guide-faq-a">
              Absolutely. Go to the Codex tab and create custom roles with your own name,
              description, and quest templates. You can also install starter packs.
            </p>
          </div>

          <div className="guide-faq-item">
            <p className="guide-faq-q">What's the difference between Single and Session mode?</p>
            <p className="guide-faq-a">
              Single mode logs one quest at a time (3 XP). Session mode lets you chain multiple
              prompts together without resetting your role and quest context (3-5 XP per prompt).
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="https://rolekeeper.quest" className="btn-primary" target="_blank" rel="noopener noreferrer">
            Open RoleKeeper — Free
          </a>
        </div>
      </div>
    </>
  )
}
