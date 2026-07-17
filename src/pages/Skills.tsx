import SEO from '../lib/SEO'
import Reveal from '../components/Reveal'
import SkillBar from '../components/SkillBar'
import data from '../data/portfolio.json'

export default function Skills() {
  return (
    <>
      <SEO
        title="Skills"
        description="Technical skills across machine learning, computer vision, full-stack development, and tooling."
      />

      <section className="mx-auto max-w-5xl px-5 py-24">
        <Reveal>
          <p className="eyebrow">Technical skills</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
            What I bring to a team.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Proficiency here is measured in years of hands-on use and shipped projects — not
            arbitrary percentages.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {data.skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.05}>
              <div className="glass h-full rounded-2xl p-6">
                <h2 className="font-display text-lg font-semibold text-ink">{group.category}</h2>
                <div className="mt-2 divide-y divide-line/60">
                  {group.items.map((item) => (
                    <SkillBar key={item.name} name={item.name} level={item.level} years={item.years} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
