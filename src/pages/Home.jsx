import { Link } from 'react-router-dom'
import { company, aboutUs, sectors, certification } from '../content.js'
import { IMG } from '../img.js'
import { SectionHead, Gauge, CtaBand, Arrow, useReveal, usePageTitle } from '../components/ui.jsx'
import { VisionMission, EnvGrid, Steps, ServiceCards, TeamCards } from '../components/sections.jsx'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="hero-meta mono">
            <span>{company.docTitle}</span>
            <span className="dot" aria-hidden="true" />
            <span>NTN: {company.ntn}</span>
          </p>
          <p className="hero-meta hero-meta-sub mono">
            <span>SAP Ariba ID (ANID): {company.aribaId}</span>
          </p>
          <h1 id="hero-title">
            <span className="h1-company">{company.name}</span>
            <span className="h1-line">
              Surface Preparation <em>&amp;</em> Industrial Coating
            </span>
          </h1>
          <blockquote className="hero-quote">
            <p>“{company.tagline}”</p>
          </blockquote>
          <div className="hero-actions">
            <Link className="btn btn-signal" to="/services">
              Explore services
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Request a quote
            </Link>
          </div>
        </div>
        <figure className="hero-figure">
          <div className="hero-photo">
            <img
              src={IMG.heroShip}
              alt="Two site personnel in safety helmets and hi-vis vests looking at a ship's hull in dry dock"
              width="765"
              height="283"
              fetchPriority="high"
            />
            <span className="corner tl" aria-hidden="true" />
            <span className="corner tr" aria-hidden="true" />
            <span className="corner bl" aria-hidden="true" />
            <span className="corner br" aria-hidden="true" />
          </div>
          <figcaption className="mono">Marine &amp; Industrial Coating Solutions</figcaption>
        </figure>
      </div>
      <div className="wrap">
        <ul className="hero-tags" aria-label="Service areas">
          {company.heroTags.map((t, i) => (
            <li key={t} style={{ '--i': i }}>
              <span className="mono tag-no">{String(i + 1).padStart(2, '0')}</span>
              {t}
            </li>
          ))}
        </ul>
      </div>
      <Gauge />
    </section>
  )
}

function Intro() {
  return (
    <section className="section intro" aria-labelledby="intro-title">
      <div className="wrap">
        <SectionHead index="01" kicker="About Us" title="Preparation, application, inspection — done to specification." id="intro-title" />
        <div className="overview-grid">
          <p className="lead reveal">{aboutUs}</p>
          <div className="reveal">
            <p className="mono sectors-h">We deliver for</p>
            <ul className="sectors">
              {sectors.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <Link className="text-link" to="/about">
              More about the company <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesBlock() {
  return (
    <section className="section services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="head-row">
          <SectionHead index="03" kicker="What we do" title="Core Services" id="services-title" />
          <Link className="text-link reveal" to="/services">
            All service details <Arrow />
          </Link>
        </div>
        <ServiceCards />
      </div>
    </section>
  )
}

function Credentials() {
  const items = [
    ['Level III', 'FROSIO certified surface treatment inspector on the team'],
    ['16 yrs', 'Paint & coating inspection experience of our Technical Advisor'],
    ['Sa 1 – Sa 3', 'Blast-cleaning grades to ISO 8501-1 / SSPC / NACE equivalents'],
    ['05', 'Core services — blasting, painting, inspection, coating & tank cleaning'],
  ]
  return (
    <section className="creds" aria-label="Credentials">
      <div className="wrap">
        <ul className="creds-grid">
          {items.map(([big, small], i) => (
            <li key={big} className="reveal" style={{ '--d': `${i * 70}ms` }}>
              <span className="creds-big">{big}</span>
              <span className="creds-small">{small}</span>
            </li>
          ))}
        </ul>
        <p className="creds-note mono reveal">
          {certification.title} · Cert. No. {certification.number} · valid to {certification.expires}
        </p>
      </div>
    </section>
  )
}

function TeamBlock() {
  return (
    <section className="section team-teaser" aria-labelledby="team-title">
      <div className="wrap">
        <div className="head-row">
          <SectionHead index="06" kicker="Leadership" title="Meet the Team" id="team-title" />
          <Link className="text-link reveal" to="/team">
            Full team profiles <Arrow />
          </Link>
        </div>
        <TeamCards compact />
      </div>
    </section>
  )
}

export default function Home() {
  usePageTitle()
  useReveal()
  return (
    <>
      <Hero />
      <Intro />
      <VisionMission index="02" />
      <ServicesBlock />
      <Credentials />
      <EnvGrid index="04" />
      <Steps index="05" link />
      <TeamBlock />
      <CtaBand />
    </>
  )
}
