import { aboutUs, overview, keyStages, sectors, quality } from '../content.js'
import { IMG } from '../img.js'
import { PageHero, SectionHead, CtaBand, useReveal, usePageTitle } from '../components/ui.jsx'
import { VisionMission, EnvGrid } from '../components/sections.jsx'

export default function About() {
  usePageTitle('About Us')
  useReveal()
  return (
    <>
      <PageHero
        crumb="About"
        kicker="About Us"
        title="Company Overview"
        intro="M/S Facilities & Industrial Services — surface preparation and industrial coating services for marine and industrial applications."
        image={IMG.refinery}
      />

      <section className="section" aria-labelledby="ov-title">
        <div className="wrap">
          <SectionHead index="01" kicker="Who we are" title="A focused coating services provider" id="ov-title" />
          <div className="overview-grid">
            <p className="lead reveal">{aboutUs}</p>
            <div className="overview-body reveal">
              {overview.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <ol className="stages reveal" aria-label="Key stages of coating work">
            {keyStages.map((s, i) => (
              <li key={s}>
                <span className="mono stage-no">Stage {i + 1}</span>
                <span className="stage-title">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <VisionMission index="02" />

      <section className="section sectors-band" aria-labelledby="sec-title">
        <div className="wrap sectors-band-inner">
          <SectionHead index="03" kicker="Who we serve" title="Solutions for ships, plants & heavy industry" id="sec-title" />
          <ul className="sector-tiles">
            {sectors.map((s, i) => (
              <li key={s} className="reveal" style={{ '--d': `${i * 60}ms` }}>
                <span className="mono">0{i + 1}</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EnvGrid index="04" />

      <section className="section quality" aria-labelledby="quality-title">
        <div className="wrap quality-grid">
          <div>
            <SectionHead index="05" kicker="Standards on site" title="Quality, Safety & Coordination" id="quality-title" />
            <ul className="checks">
              {quality.map((q) => (
                <li key={q} className="reveal">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
                  </svg>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="quality-figure reveal">
            <img src={IMG.inspection} alt="Inspector taking a coating measurement on a painted steel surface with a handheld gauge" loading="lazy" />
            <img src={IMG.refineryDusk} alt="" loading="lazy" className="quality-inset" />
          </figure>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
