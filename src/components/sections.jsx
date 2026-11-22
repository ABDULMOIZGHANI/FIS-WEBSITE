import { Link } from 'react-router-dom'
import { vision, mission, values, environments, methodology, services, team } from '../content.js'
import { IMG } from '../img.js'
import { SectionHead, Arrow, Initials } from './ui.jsx'

export function VisionMission({ index = '02' }) {
  return (
    <section className="section vm" aria-labelledby="vm-title">
      <div className="wrap">
        <SectionHead index={index} kicker="What drives us" title="Vision & Mission" id="vm-title" />
        <div className="vm-grid">
          <article className="vm-card reveal">
            <p className="mono vm-label">Our vision</p>
            <p className="vm-text">{vision}</p>
          </article>
          <article className="vm-card vm-card-dark reveal" style={{ '--d': '90ms' }}>
            <p className="mono vm-label">Our mission</p>
            <p className="vm-text">{mission}</p>
          </article>
        </div>
        <ul className="values">
          {values.map((v, i) => (
            <li key={v.title} className="reveal" style={{ '--d': `${i * 70}ms` }}>
              <span className="mono value-no">{String(i + 1).padStart(2, '0')}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function EnvGrid({ index = '03' }) {
  return (
    <section className="section environments" aria-labelledby="env-title">
      <div className="wrap">
        <SectionHead index={index} kicker="Where we work" title="Marine & Industrial Work Environments" id="env-title" />
        <ul className="env-grid">
          {environments.map((e, i) => (
            <li key={e.title} className="env reveal" style={{ '--d': `${i * 90}ms` }}>
              <img src={IMG[e.img]} alt="" loading="lazy" />
              <div className="env-label">
                <span className="mono">0{i + 1}</span>
                <h3>{e.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Steps({ index = '04', link = false }) {
  return (
    <section className="section methodology" aria-labelledby="method-title">
      <div className="wrap">
        <SectionHead index={index} kicker="How we work" title="Work Methodology" id="method-title" />
        <ol className="steps">
          {methodology.map((m, i) => (
            <li key={m.title} className="step reveal" style={{ '--d': `${i * 70}ms` }}>
              <span className="step-no" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3>
                  <span className="sr-only">Step {i + 1}: </span>
                  {m.title}
                </h3>
                <p>{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
        {link && (
          <Link className="text-link text-link-inv" to="/quality">
            Quality &amp; inspection in detail <Arrow />
          </Link>
        )}
      </div>
    </section>
  )
}

export function ServiceCards() {
  return (
    <ul className="svc-cards">
      {services.map((s, i) => (
        <li key={s.no} className="reveal" style={{ '--d': `${i * 70}ms` }}>
          <Link className="svc-card" to={`/services#service-${s.no}`}>
            <div className="svc-card-img">
              <img src={IMG[s.img]} alt="" loading="lazy" />
            </div>
            <div className="svc-card-body">
              <span className="mono svc-card-no">{s.no}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="svc-card-more">
                View service <Arrow />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function TeamCards({ compact = false }) {
  return (
    <ul className={`team-cards${compact ? ' is-compact' : ''}`}>
      {team.map((p, i) => (
        <li key={p.id} className="team-card reveal" style={{ '--d': `${i * 90}ms` }}>
          <Initials name={p.name} photo={p.photo && IMG[p.photo]} />
          <div className="team-card-body">
            <p className="mono team-role">{p.role}</p>
            <h3>{p.name}</h3>
            {p.credential && <p className="team-cred">{p.credential}</p>}
            <p className="team-sum">{p.summary}</p>
            <div className="team-links">
              <a href={`tel:${p.tel}`}>{p.phone}</a>
              {compact ? (
                <Link to={`/team#${p.id}`}>
                  Profile <Arrow />
                </Link>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
