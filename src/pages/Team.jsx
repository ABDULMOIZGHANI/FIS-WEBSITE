import { team, certification } from '../content.js'
import { IMG } from '../img.js'
import { PageHero, SectionHead, CtaBand, Initials, useReveal, usePageTitle } from '../components/ui.jsx'

function Profile({ p, index }) {
  return (
    <article id={p.id} className="profile">
      <div className="profile-head reveal">
        <Initials name={p.name} photo={p.photo && IMG[p.photo]} />
        <div>
          <p className="mono team-role">{p.role}</p>
          <h2>{p.name}</h2>
          {p.credential && <p className="team-cred">{p.credential}</p>}
          <p className="profile-sum">{p.summary}</p>
          <div className="team-links">
            <a href={`tel:${p.tel}`}>Call {p.phone}</a>
            {p.whatsapp && (
              <a href={`https://wa.me/${p.whatsapp}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            )}
          </div>
        </div>
        <span className="profile-index mono" aria-hidden="true">
          {index}
        </span>
      </div>

      {p.experience && (
        <div className="profile-body">
          <section className="profile-block reveal" aria-label={`${p.name} — experience`}>
            <h3 className="mono">Experience</h3>
            <ul className="dash-list">
              {p.experience.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </section>

          <section className="profile-block reveal" aria-label={`${p.name} — naval coating scope`}>
            <h3 className="mono">Process inspection, surface preparation & coating</h3>
            <p className="profile-sub">{p.navalScope.title}</p>
            <ul className="chip-list">
              {p.navalScope.items.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </section>

          <section className="profile-block reveal" aria-label={`${p.name} — certification`}>
            <h3 className="mono">Certification</h3>
            <p className="profile-cert">
              {certification.title}
              <br />
              <span className="mono">
                Cert. No. {certification.number} · first issued {certification.firstIssued} · valid {certification.validFrom} – {certification.expires}
              </span>
            </p>
          </section>

          <section className="profile-block reveal" aria-label={`${p.name} — qualifications`}>
            <h3 className="mono">Qualifications</h3>
            <ul className="qual-list">
              {p.qualifications.map(([deg, inst, yr]) => (
                <li key={deg}>
                  <span className="qual-yr mono">{yr}</span>
                  <span>
                    <strong>{deg}</strong>
                    <br />
                    {inst}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="profile-block reveal" aria-label={`${p.name} — courses`}>
            <h3 className="mono">Certificates & courses</h3>
            <ul className="dash-list">
              {p.courses.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="profile-sub">Languages: {p.languages}</p>
          </section>
        </div>
      )}
    </article>
  )
}

export default function Team() {
  usePageTitle('Our Team')
  useReveal()
  return (
    <>
      <PageHero
        crumb="Team"
        kicker="Leadership"
        title="Our Team"
        intro="The people responsible for your project — from enquiry and coordination to certified coating inspection."
        image={IMG.heroShip}
      />
      <section className="section" aria-labelledby="team-list-title">
        <div className="wrap">
          <SectionHead index="01" kicker="Key personnel" title="Leadership & technical team" id="team-list-title" />
          <div className="profiles">
            {team.map((p, i) => (
              <Profile key={p.id} p={p} index={String(i + 1).padStart(2, '0')} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Talk to the team about your project" />
    </>
  )
}
