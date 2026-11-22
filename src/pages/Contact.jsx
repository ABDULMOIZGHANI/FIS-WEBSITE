import { useState } from 'react'
import { contact, services, team } from '../content.js'
import { IMG } from '../img.js'
import { PageHero, SectionHead, useReveal, usePageTitle } from '../components/ui.jsx'

function EnquiryForm() {
  const [f, setF] = useState({ name: '', company: '', phone: '', service: services[0].title, location: '', message: '' })
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const subject = `Project enquiry — ${f.service}`
    const body = [
      `Name: ${f.name}`,
      f.company && `Company: ${f.company}`,
      f.phone && `Phone: ${f.phone}`,
      `Service: ${f.service}`,
      f.location && `Site / location: ${f.location}`,
      '',
      f.message,
    ]
      .filter((l) => l !== false && l !== undefined)
      .join('\n')
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="enquiry reveal" onSubmit={submit}>
      <div className="field">
        <label htmlFor="f-name">Your name *</label>
        <input id="f-name" required autoComplete="name" value={f.name} onChange={set('name')} />
      </div>
      <div className="field">
        <label htmlFor="f-company">Company</label>
        <input id="f-company" autoComplete="organization" value={f.company} onChange={set('company')} />
      </div>
      <div className="field">
        <label htmlFor="f-phone">Phone</label>
        <input id="f-phone" type="tel" autoComplete="tel" value={f.phone} onChange={set('phone')} />
      </div>
      <div className="field">
        <label htmlFor="f-service">Service required</label>
        <select id="f-service" value={f.service} onChange={set('service')}>
          {services.map((s) => (
            <option key={s.no}>{s.title}</option>
          ))}
        </select>
      </div>
      <div className="field field-full">
        <label htmlFor="f-loc">Site / location</label>
        <input id="f-loc" value={f.location} onChange={set('location')} />
      </div>
      <div className="field field-full">
        <label htmlFor="f-msg">Work scope & details *</label>
        <textarea id="f-msg" required rows={5} value={f.message} onChange={set('message')} />
      </div>
      <div className="field-full form-foot">
        <button type="submit" className="btn btn-signal">
          Send enquiry by email
        </button>
        <p className="form-note">This opens your email app with the details filled in, addressed to {contact.email}.</p>
      </div>
    </form>
  )
}

export default function Contact() {
  usePageTitle('Contact')
  useReveal()
  const tech = team.find((t) => t.whatsapp)
  return (
    <>
      <PageHero crumb="Contact" kicker="Get in touch" title="Contact Information" intro={contact.intro} image={IMG.hull} />

      <section className="section contact" aria-labelledby="contact-title">
        <div className="wrap">
          <SectionHead index="01" kicker="Direct lines" title="Reach the right person" id="contact-title" />
          <div className="contact-grid">
            <a className="contact-email reveal" href={`mailto:${contact.email}`}>
              <span className="mono">Email</span>
              <span className="email-addr">{contact.email}</span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
            {contact.people.map((p) => (
              <a key={p.name} className="person reveal" href={`tel:${p.tel}`}>
                <span className="mono">{p.role}</span>
                <span className="person-name">{p.name}</span>
                <span className="person-phone">{p.phone}</span>
              </a>
            ))}
          </div>
          {tech && (
            <p className="wa-line reveal">
              Prefer WhatsApp?{' '}
              <a href={`https://wa.me/${tech.whatsapp}`} target="_blank" rel="noopener noreferrer">
                Message {tech.name}, {tech.role}
              </a>
            </p>
          )}
        </div>
      </section>

      <section className="section enquiry-section" aria-labelledby="form-title">
        <div className="wrap enquiry-grid">
          <SectionHead index="02" kicker="Project enquiry" title="Tell us about the work" id="form-title">
            <p className="head-intro">
              Share the work scope, coating specification and site details. Activities are carried out in accordance with the applicable project specification,
              approved procedures and client requirements.
            </p>
          </SectionHead>
          <EnquiryForm />
        </div>
      </section>
    </>
  )
}
