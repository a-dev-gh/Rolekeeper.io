import { useState, useEffect, useCallback } from 'react'

export function Simulation() {
  const [activeStep, setActiveStep] = useState(1)
  const [typedText, setTypedText] = useState('')
  const [savedState, setSavedState] = useState(false)
  const [showXP, setShowXP] = useState(false)

  const fullText = 'Write a blog post about AI productivity tools for 2026'

  const resetSim = useCallback(() => {
    setActiveStep(1)
    setTypedText('')
    setSavedState(false)
    setShowXP(false)
  }, [])

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (activeStep === 1) {
      let i = 0
      const typeInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1))
          i++
        } else {
          clearInterval(typeInterval)
          timeout = setTimeout(() => setActiveStep(2), 1200)
        }
      }, 40)
      return () => { clearInterval(typeInterval); clearTimeout(timeout) }
    }

    if (activeStep === 2) {
      timeout = setTimeout(() => setActiveStep(3), 2500)
      return () => clearTimeout(timeout)
    }

    if (activeStep === 3) {
      timeout = setTimeout(() => setActiveStep(4), 3000)
      return () => clearTimeout(timeout)
    }

    if (activeStep === 4) {
      timeout = setTimeout(() => {
        setSavedState(true)
        setTimeout(() => {
          setShowXP(true)
          setTimeout(() => resetSim(), 3000)
        }, 800)
      }, 2500)
      return () => clearTimeout(timeout)
    }
  }, [activeStep, resetSim])

  const pillClass = (step: number) => {
    if (step === activeStep) return 'sp act'
    if (step < activeStep) return 'sp done'
    return 'sp'
  }

  return (
    <div className="sim-wrap" style={{ width: '100%', maxWidth: 900, margin: '0 auto', position: 'relative' }}>
      <div className="sim-aura" />
      <div className="sim-frame">
        {/* Chrome bar */}
        <div className="sim-chrome">
          <div className="sdots">
            <div className="sd sd-r" />
            <div className="sd sd-y" />
            <div className="sd sd-g" />
          </div>
          <div className="surl">rolekeeper.quest</div>
          <div className="s-tag">LIVE DEMO</div>
        </div>

        {/* App nav */}
        <div className="sim-anav">
          <div className="sn on">QUEST</div>
          <div className="sn">CODEX</div>
          <div className="sn">GUILD</div>
          <div className="sn">SETTINGS</div>
        </div>

        {/* Step pills */}
        <div className="sim-pills">
          <div className={pillClass(1)}>ENTER YOUR QUEST</div>
          <div className={pillClass(2)}>SELECT</div>
          <div className={pillClass(3)}>SELECT YOUR QUEST</div>
          <div className={pillClass(4)}>LOG YOUR RESULTS</div>
        </div>

        {/* Step content */}
        <div className="sim-body">
          {/* Step 1: Enter Your Quest — matches current app UI */}
          {activeStep === 1 && (
            <div className="sc show">
              <div className="sim-step-header">
                <div className="sim-step-icon">ℹ</div>
                <div>
                  <div className="sim-step-tag">ENTER YOUR QUEST / TASK</div>
                  <div className="sim-step-title">What is your mission? Describe your task clearly.</div>
                </div>
              </div>

              {/* Single / Session toggle */}
              <div className="sim-mode-toggle">
                <div className="sim-mode-option">
                  <span className="sim-mode-ico">✕</span>
                  <div className="sim-mode-nm">SINGLE</div>
                  <div className="sim-mode-desc">Log one quest — 3 XP</div>
                </div>
                <div className="sim-mode-option sim-mode-active">
                  <span className="sim-mode-ico">⚡</span>
                  <div className="sim-mode-nm">SESSION</div>
                  <div className="sim-mode-desc">Chain prompts — 3-5 XP each</div>
                </div>
              </div>

              {/* Task input */}
              <div className="sim-textarea">
                {typedText || <span style={{ color: 'var(--t3)' }}>Describe your task or mission... What do you need to achieve?</span>}
                {typedText && <span className="cursor" />}
              </div>

              {/* Block buttons */}
              <div className="sim-blocks">
                <div className="sim-block-btn">+ 🔗 REFERENCE</div>
                <div className="sim-block-btn">+ 🖼 IMAGE</div>
                <div className="sim-block-btn">+ 📋 EXAMPLE</div>
                <div className="sim-block-btn">+ 💻 CODE</div>
                <div className="sim-block-btn">+ 🎯 CONTEXT</div>
              </div>

              {/* Next button */}
              <div className="sim-next-btn">SELECT ROLE →</div>
            </div>
          )}

          {/* Step 2: Select Role */}
          {activeStep === 2 && (
            <div className="sc show">
              <div className="slbl">SELECT YOUR ROLE</div>
              <div className="s-roles">
                <div className="s-role">
                  <span className="s-role-ico">🤖</span>
                  <div className="s-role-nm">ENGINEER</div>
                </div>
                <div className="s-role sel">
                  <span className="s-role-ico">✍️</span>
                  <div className="s-role-nm">WRITER</div>
                </div>
                <div className="s-role">
                  <span className="s-role-ico">📊</span>
                  <div className="s-role-nm">ANALYST</div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Select Quest */}
          {activeStep === 3 && (
            <div className="sc show">
              <div className="slbl">SELECT YOUR QUEST / PROMPT</div>
              <div className="s3-selected">
                <span className="s3-qname">✦ BLOG POST DRAFT</span>
                <span className="s3-expand">[+] PREVIEW ▼</span>
              </div>
              <div className="s3-cols">
                <div>
                  <div className="s3-col-label">YOUR QUEST / TASK</div>
                  <div className="s3-col-val">Write a blog post about AI productivity tools for 2026...</div>
                </div>
                <div>
                  <div className="s3-col-label">ROLE</div>
                  <div className="s3-col-val">✍️ Writer</div>
                </div>
              </div>
              <div className="s3-divider">BASE TEMPLATE — READ ONLY</div>
              <div className="s3-template">
                Write a [blog post] about [topic]. The tone should be [professional but engaging]. Include [3 key sections] with [examples and data]...
              </div>
              <div className="s3-assembled">
                <div className="s3-assembled-text">
                  ROLE: Writer<br />
                  TASK: Write a blog post about AI productivity...<br /><br />
                  Write a [blog post] about [topic]...
                </div>
                <div className="s3-copy">[ COPY ]</div>
              </div>
            </div>
          )}

          {/* Step 4: Log Results — matches current app UI */}
          {activeStep === 4 && (
            <div className="sc show">
              <div className="slbl">LOG YOUR RESULTS</div>

              <div className="s4-section-lbl">YOUR PROMPT INPUT (AUTO-FILLED FROM STEP 3)</div>
              <div className="s4-prompt-box">
                ROLE: Writer<br />
                TASK: Write a blog post about AI productivity tools for 2026
              </div>

              <div className="s4-section-lbl">AI OUTPUT / RESULT</div>
              <div className="s4-output">Paste your AI output here...</div>

              <div className="s4-section-lbl">AI-GENERATED ATTACHMENTS</div>
              <div className="s4-attachments">
                <div className="s4-att-btn">+ 💻 CODE</div>
                <div className="s4-att-btn">+ 🖼 IMAGE</div>
                <div className="s4-att-btn">+ 📁 FILE</div>
                <div className="s4-att-btn">+ 🔗 REFERENCE</div>
              </div>

              <div className="s4-rating-row">
                <span className="s4-rating-lbl">RATING:</span>
                <span className="s4-stars">★★★★★</span>
              </div>

              <div className="sim-xp-indicator">⚡ +3 XP this prompt</div>

              {/* Session action buttons */}
              <div className="sim-session-actions">
                <div className="sim-continue-btn">
                  {savedState ? '✓ SESSION SAVED' : '⚡ CONTINUE SESSION →'}
                </div>
                <div className={`sim-save-session-btn${savedState ? ' saved' : ''}`}>
                  {savedState ? '✓ SAVED — +3 XP' : 'SAVE SESSION — +3 XP'}
                </div>
              </div>

              <div className="sim-bottom-actions">
                <div className="sim-back-btn">← BACK</div>
                <div className="sim-new-quest-btn">NEW QUEST ×</div>
              </div>

              {showXP && (
                <div className="xp-pop-wrap">
                  <div className="xp-pop">+3 XP</div>
                  <div className="xp-level" style={{ top: 30 }}>LEVEL 4 — QUEST ARCHITECT</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
