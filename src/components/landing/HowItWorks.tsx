const steps = [
  {
    num: 1,
    title: 'MISSION',
    desc: 'Write what you need. Add context, links, or examples — whatever makes the task clear.',
  },
  {
    num: 2,
    title: 'ROLE',
    desc: 'Pick who handles it. Each role brings its own identity and a library of prompts built for that perspective.',
  },
  {
    num: 3,
    title: 'QUEST',
    desc: 'Choose a template, fill the blanks, copy the assembled prompt. Works with any AI you already use.',
  },
  {
    num: 4,
    title: 'LOG',
    desc: 'Paste the output, rate it, add notes. Earn XP. Your sessions build into a searchable record of what works.',
  },
]

export function HowItWorks() {
  return (
    <section id="how">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <span className="tag">HOW IT WORKS</span>
        <h2 className="section-heading">
          Four steps.<br />
          <span className="mg">Same structure, every session.</span>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Consistency is the skill. The structure makes it automatic.
        </p>

        <div className="steps">
          {steps.map((step) => (
            <div className="step reveal" key={step.num}>
              <div className="step-n">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
