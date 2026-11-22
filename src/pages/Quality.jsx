import { quality, qcInstruments, qaDuties, certification, equipment } from '../content.js'
import { IMG } from '../img.js'
import { PageHero, SectionHead, CtaBand, useReveal, usePageTitle } from '../components/ui.jsx'
import { Steps } from '../components/sections.jsx'

export default function Quality() {
  usePageTitle('Quality & Inspection')
  useReveal()
  return (
    <>
      <PageHero
        crumb="Quality & Inspection"
        kicker="Coating inspection & quality control"
        title="Quality & Inspection"
        intro="Coating inspection support and quality checks during the work process, with observations and measurements recorded as required by the approved inspection plan."
        image={IMG.inspection}
      />

      <Steps index="01" />

      <section className="section cert" aria-labelledby="cert-title">
        <div className="wrap cert-grid">
          <SectionHead index="02" kicker="Certified inspection" title="FROSIO Level III inspector on the team" id="cert-title">
            <p className="head-intro">
              Our Technical Advisor, {certification.holder}, holds the {certification.title}. {certification.note}
            </p>
          </SectionHead>
          <dl className="cert-card reveal">
            <div className="cert-card-top">
              <span className="cert-body">{certification.body}</span>
              <span className="mono">Certificate No. {certification.number}</span>
            </div>
            <div>
              <dt className="mono">Certification</dt>
              <dd>Certified Surface Treatment Inspector — Level III</dd>
            </div>
            <div>
              <dt className="mono">Issued to</dt>
              <dd>{certification.holder}</dd>
            </div>
            <div className="cert-dates">
              <div>
                <dt className="mono">First issued</dt>
                <dd>{certification.firstIssued}</dd>
              </div>
              <div>
                <dt className="mono">Valid from</dt>
                <dd>{certification.validFrom}</dd>
              </div>
              <div>
                <dt className="mono">Expires</dt>
                <dd>{certification.expires}</dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      <section className="section instruments" aria-labelledby="inst-title">
        <div className="wrap">
          <SectionHead index="03" kicker="Measured, not assumed" title="QC instruments & equipment" id="inst-title" />
          <ul className="inst-grid">
            {qcInstruments.map((q, i) => (
              <li key={q} className="reveal" style={{ '--d': `${(i % 4) * 50}ms` }}>
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                {q}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section equipment" aria-labelledby="equip-title">
        <div className="wrap">
          <SectionHead index="04" kicker="On site with us" title="Our equipment" id="equip-title">
            <p className="head-intro">Blasting equipment and inspection instruments used on our projects.</p>
          </SectionHead>
          {equipment.map((g) => (
            <div key={g.group} className="equip-group">
              <h3 className="mono equip-group-title">{g.group}</h3>
              <ul className="equip-grid">
                {g.items.map((e, i) => (
                  <li key={e.title} className="equip-card reveal" style={{ '--d': `${(i % 3) * 60}ms` }}>
                    <div className={`equip-photo${e.fit ? ` is-${e.fit}` : ''}`}>
                      <img src={IMG[e.img]} alt={e.title} loading="lazy" />
                    </div>
                    <div className="equip-body">
                      <h4>{e.title}</h4>
                      <p>{e.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section duties" aria-labelledby="duties-title">
        <div className="wrap duties-grid">
          <SectionHead index="05" kicker="QA / QC responsibilities" title="How inspection is managed" id="duties-title" />
          <ol className="duty-list">
            {qaDuties.map((d) => (
              <li key={d} className="reveal">
                {d}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section quality" aria-labelledby="quality-title">
        <div className="wrap quality-grid">
          <div>
            <SectionHead index="06" kicker="Standards on site" title="Quality, Safety & Coordination" id="quality-title" />
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
            <img src={IMG.painting} alt="Painter in protective coveralls and respirator spray-painting a steel hull" loading="lazy" />
            <img src={IMG.tanks} alt="" loading="lazy" className="quality-inset" />
          </figure>
        </div>
      </section>

      <CtaBand title="Need coating inspection support?" />
    </>
  )
}
