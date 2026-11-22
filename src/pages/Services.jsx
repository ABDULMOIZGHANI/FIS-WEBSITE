import { services, prepMethods, applicationMethods, surfaceStandards, coatingBrands } from '../content.js'
import { IMG } from '../img.js'
import { PageHero, SectionHead, CtaBand, useReveal, usePageTitle } from '../components/ui.jsx'
import { EnvGrid } from '../components/sections.jsx'

export default function Services() {
  usePageTitle('Services')
  useReveal()
  return (
    <>
      <PageHero
        crumb="Services"
        kicker="What we do"
        title="Core Services"
        intro="Abrasive blasting, painting activity, coating inspection and quality control — for marine and industrial applications."
        image={IMG.blasting}
      />

      <section className="section" aria-label="Service details">
        <div className="wrap">
          <ol className="svc-detail-list">
            {services.map((s, i) => (
              <li key={s.no} id={`service-${s.no}`} className={`svc-detail reveal${i % 2 ? ' is-flip' : ''}`}>
                <div className="svc-detail-img">
                  <img src={IMG[s.img]} alt="" loading="lazy" />
                  <span className="svc-detail-no" aria-hidden="true">
                    {s.no}
                  </span>
                </div>
                <div className="svc-detail-copy">
                  <p className="mono service-label">{s.label}</p>
                  <h2>
                    <span className="sr-only">{s.no}. </span>
                    {s.title}
                  </h2>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section methods" aria-labelledby="methods-title">
        <div className="wrap">
          <SectionHead index="01" kicker="Methods" title="Preparation & application methods" id="methods-title" />
          <div className="methods-grid">
            <div className="method-col reveal">
              <h3>Surface preparation</h3>
              <ul>
                {prepMethods.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <div className="method-col reveal" style={{ '--d': '80ms' }}>
              <h3>Paint application</h3>
              <ul>
                {applicationMethods.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <div className="method-col reveal" style={{ '--d': '160ms' }}>
              <h3>Coating systems</h3>
              <p className="method-note">
                Our Technical Advisor has applied and inspected protective coatings from these manufacturers to their technical data sheets:
              </p>
              <ul className="brand-list">
                {coatingBrands.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section standards" aria-labelledby="std-title">
        <div className="wrap">
          <SectionHead index="02" kicker="Cleanliness grades" title="Surface preparation standards" id="std-title">
            <p className="head-intro">
              The required cleanliness grade and surface profile are determined by the project specification. Inspection of cleaning is carried out to{' '}
              {surfaceStandards.title}.
            </p>
          </SectionHead>
          <div className="table-wrap reveal">
            <table className="std-table">
              <caption className="sr-only">Surface cleanliness grades and equivalents</caption>
              <thead>
                <tr>
                  <th scope="col">Grade</th>
                  <th scope="col">Description</th>
                  <th scope="col">Equivalent</th>
                </tr>
              </thead>
              <tbody>
                {surfaceStandards.grades.map(([g, d, e]) => (
                  <tr key={g}>
                    <th scope="row">{g}</th>
                    <td>{d}</td>
                    <td className="mono">{e || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="std-note reveal">{surfaceStandards.rust}.</p>
        </div>
      </section>

      <EnvGrid index="03" />
      <CtaBand />
    </>
  )
}
