import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { contact } from '../content.js'
import logo from '../assets/img/fis-logo.webp'

export function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-in)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} — M/S Facilities & Industrial Services`
      : 'M/S Facilities & Industrial Services — Surface Preparation & Industrial Coating'
  }, [title])
}

// Official FIS logo, extracted from the company letterhead PDF.
export function Mark({ className = '' }) {
  return <img className={`logo ${className}`} src={logo} alt="" width="240" height="229" />
}

export function SectionHead({ index, kicker, title, children, id, className = '' }) {
  return (
    <header className={`section-head reveal ${className}`}>
      <p className="kicker">
        {index && <span className="kicker-no">{index}</span>}
        <span className="kicker-rule" aria-hidden="true" />
        {kicker}
      </p>
      <h2 id={id}>{title}</h2>
      {children}
    </header>
  )
}

export function PageHero({ kicker, title, intro, image, crumb }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="wrap page-hero-inner">
        <div className="page-hero-copy">
          <nav className="crumbs mono" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{crumb}</span>
          </nav>
          <p className="kicker kicker-inv">
            <span className="kicker-rule" aria-hidden="true" />
            {kicker}
          </p>
          <h1 id="page-title">{title}</h1>
          {intro && <p className="page-hero-intro">{intro}</p>}
        </div>
        {image && (
          <div className="page-hero-img" aria-hidden="true">
            <img src={image} alt="" />
            <span className="corner tl" />
            <span className="corner br" />
          </div>
        )}
      </div>
      <Gauge />
    </section>
  )
}

export function Gauge() {
  return (
    <div className="gauge" aria-hidden="true">
      {Array.from({ length: 160 }).map((_, i) => (
        <span key={i} className={i % 10 === 0 ? 'major' : i % 5 === 0 ? 'mid' : ''} />
      ))}
    </div>
  )
}

export function CtaBand({ title = 'Planning blasting, painting or coating inspection work?', text = contact.intro }) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="wrap cta-inner">
        <div>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link className="btn btn-signal" to="/contact">
            Send a project enquiry
          </Link>
          <a className="btn btn-ghost" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
      </div>
    </section>
  )
}

export function Arrow() {
  return (
    <svg className="arrow-ico" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function Initials({ name, photo }) {
  if (photo) {
    return (
      <div className="initials has-photo">
        <img src={photo} alt={`Portrait of ${name}`} width="206" height="256" loading="lazy" />
      </div>
    )
  }
  const ini = name
    .split(' ')
    .map((p) => p[0])
    .join('')
  return (
    <div className="initials" aria-hidden="true">
      <span>{ini}</span>
    </div>
  )
}
