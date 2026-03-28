const problems = [
  'Re-typing the same prompt from memory every time',
  'No record of what worked best last week',
  'Switching AI tools and losing all context',
  'No sense of whether you\'re actually improving',
  'One generic persona for every kind of task',
]

const solutions = [
  'Your prompt library is one click away, by role',
  'Every session rated and logged — searchable forever',
  'Works with any AI — ChatGPT, Claude, Gemini, all of them',
  'XP and levels show you the progress you\'re making',
  'The right role means the right mindset before you even prompt',
]

export function ProblemSolution() {
  return (
    <section>
      <div className="section-inner">
        <span className="tag">THE REAL PROBLEM</span>
        <h2 className="section-heading">
          You're not bad at prompting.<br />
          <span className="mg">You just have no system.</span>
        </h2>

        <div className="ps-grid">
          <div className="glass ps-col reveal">
            <span className="pslbl bad">WITHOUT A SYSTEM</span>
            {problems.map((item) => (
              <div className="ps-item" key={item}><span>❌</span>{item}</div>
            ))}
          </div>
          <div className="glass ps-col reveal">
            <span className="pslbl good">WITH ROLEKEEPER</span>
            {solutions.map((item) => (
              <div className="ps-item" key={item}><span>✅</span>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
