import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { company, contact } from '../content.js'
import { Mark } from './ui.jsx'

const NAV = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/quality', 'Quality & Inspection'],
  ['/team', 'Team'],
  ['/contact', 'Contact'],
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`topbar${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="wrap topbar-inner">
        <Link className="brand" to="/">
          <Mark className="brand-mark" />
          <span className="brand-text">
            <span className="brand-name">Facilities &amp; Industrial Services</span>
            <span className="brand-sub">M/S · {company.line}</span>
          </span>
        </Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((o) => !o)}>
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="menu-icon" aria-hidden="true" />
        </button>
        <nav id="site-nav" className="nav" aria-label="Primary">
          <ul>
            {NAV.map(([to, label]) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link className="btn btn-signal nav-cta" to="/contact">
            Project enquiry
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Mark className="footer-mark" />
            <div>
              <p className="footer-name">{company.name}</p>
              <p className="footer-line">{company.line}</p>
              <p className="footer-tag">“{company.tagline}”</p>
            </div>
          </div>
          <nav aria-label="Footer">
            <p className="mono footer-h">Pages</p>
            <ul className="footer-links">
              {NAV.map(([to, label]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mono footer-h">Contact</p>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              {contact.people.map((p) => (
                <li key={p.name}>
                  <a href={`tel:${p.tel}`}>
                    {p.role} {p.name} · {p.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="footer-scope" aria-label="Scope">
            {company.footerScope.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="mono footer-ntn">NTN: {company.ntn}</p>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
