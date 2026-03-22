import { FormEvent, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { articlePages, bookingUrl, phoneHref, phoneNumber, address, servicePages } from './content/site'

const trustPoints = [
  'Veteran-owned local mover serving Boston and the North Shore',
  'Call now: (978) 818-4555',
  'Licensed and insured for residential, office, and specialty moves',
  'Free in-home and phone estimates',
]

const whyChooseUs = [
  {
    title: 'Professional movers who treat your move with care',
    body: 'Our crews show up ready to work, protect your furniture, and keep the day moving without the drama people expect from a bad moving company.',
  },
  {
    title: 'Clear estimates before move day',
    body: 'Free in-home estimates and phone estimates help you understand timing, cost, and access issues before the truck arrives.',
  },
  {
    title: 'Reliable coverage across Boston and the North Shore',
    body: 'From tight Boston walk-ups to larger North Shore moves, we handle the local conditions that slow down unprepared crews.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Tell us what is moving',
    detail: 'Share the addresses, move date, building conditions, and a rough inventory so the crew can scope the job without pretending every move is the same.',
  },
  {
    step: '02',
    title: 'Choose a phone or in-home estimate',
    detail: 'For straightforward jobs, a phone estimate may be enough. For more complex moves, in-home estimating gives a more precise view of timing, cost, and access constraints.',
  },
  {
    step: '03',
    title: 'Book the move with a cleaner plan',
    detail: 'Once the scope is clear, schedule the move and keep the day focused on execution instead of improvisation.',
  },
]

const coverageAreas = ['Boston', 'Metro Boston', 'Cambridge', 'Newton', 'Brookline', 'Peabody', 'Salem', 'North Shore communities']

const faqItems = [
  {
    question: 'What kinds of moves do you handle?',
    answer:
      'Boston Moving Service handles apartment moves, house moves, office moves, commercial relocations, hot tub moves, and other specialty moving situations that need experienced crews and a realistic plan.',
  },
  {
    question: 'Do you provide estimates before the move?',
    answer:
      'Yes. Free in-home estimates are available for greater precision, and phone estimates are also offered for jobs that can be scoped clearly without a visit.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Boston, Metro Boston, Peabody, Salem, and communities across the North Shore.',
  },
  {
    question: 'Why book a consultation if there is already a quote request form?',
    answer:
      'The quote form lets you send details anytime. Booking a call is the faster option if you want to talk through the move, ask questions, and get estimate guidance directly.',
  },
]

function Header() {
  return (
    <header className="site-header">
      <div className="container topbar">
        <p>{address}</p>
        <a className="tap-call" href={phoneHref}>{phoneNumber}</a>
      </div>
      <div className="container nav-row">
        <Link to="/">
          <p className="brand-kicker">Boston Moving Service</p>
          <p className="brand-title">Veteran-owned Boston & North Shore movers</p>
        </Link>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#areas">Areas</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="primary-cta" href={phoneHref}>Call (978) 818-4555</a>
      </div>
    </header>
  )
}

function HomePage() {
  const [isDemoSubmitted, setIsDemoSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')

  const handleDemoSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const nameValue = data.get('name')
    setSubmittedName(typeof nameValue === 'string' ? nameValue.trim() : '')
    setIsDemoSubmitted(true)
    form.reset()
  }

  return (
    <>
      <section className="hero-section">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Veteran-owned movers serving Boston and the North Shore</p>
            <h1>Veteran-owned Boston movers for homes, offices, and specialty moves</h1>
            <p className="hero-copy">
              Boston Moving Service is a veteran-owned, licensed, and insured moving company with experienced crews,
              affordable rates, and straightforward service from estimate through move day.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href={phoneHref}>Call (978) 818-4555</a>
              <a className="secondary-cta" href="#booking">Book a Free Estimate</a>
            </div>
            <div className="trust-strip">
              {trustPoints.map((point) => <span key={point}>{point}</span>)}
            </div>
          </div>

          <aside className="hero-panel">
            <p className="panel-kicker">Contact</p>
            <h2>Call the veteran-owned crew and get your estimate started.</h2>
            <div className="panel-card-grid">
              <article><strong>Call Now</strong><a className="tap-call" href={phoneHref}>{phoneNumber}</a></article>
              <article><strong>Veteran-Owned</strong><span>Local, licensed, and insured moving company</span></article>
              <article><strong>Coverage</strong><span>Boston, Metro Boston, Peabody, Salem, North Shore</span></article>
              <article><strong>Estimates</strong><span>Free in-home estimates and phone estimates</span></article>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Moving Services</p>
            <h2>Moving services for homes, offices, and specialty jobs.</h2>
            <p>Apartment moves, house moves, office relocations, commercial work, and specialty moving support across Boston and the North Shore.</p>
          </div>
          <div className="service-grid">
            {servicePages.map((service) => (
              <article key={service.slug} className="service-card">
                <p className="card-eyebrow">Moving Service</p>
                <h3>{service.title}</h3>
                <p>{service.intro}</p>
                <Link className="text-link" to={`/services/${service.slug}`}>Read more</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section" id="why-us">
        <div className="container why-grid">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Why Boston Moving Service</p>
            <h2>Why customers call Boston Moving Service.</h2>
            <p>People choose us for experienced crews, practical planning, and moves that stay organized from start to finish.</p>
          </div>
          <div className="why-list">
            {whyChooseUs.map((item) => (
              <article key={item.title} className="why-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-grid">
          <div className="section-heading compact-heading">
            <p className="eyebrow">How It Works</p>
            <h2>Simple steps from estimate to move day.</h2>
            <p>Tell us about the job, choose the right estimate option, and lock in a plan that fits your move.</p>
          </div>
          <div className="process-list">
            {processSteps.map((item) => (
              <article key={item.step} className="process-card">
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section" id="areas">
        <div className="container area-grid">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Service Area</p>
            <h2>Boston, Metro Boston, and the North Shore.</h2>
            <p>We handle local and regional moves throughout Greater Boston and North Shore communities.</p>
          </div>
          <div className="area-card">
            {coverageAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>
      </section>

      <section className="section muted-section" id="inquiry">
        <div className="container final-cta-grid">
          <div>
            <p className="eyebrow">Request a Quote</p>
            <h2>Send the move details before the estimate.</h2>
            <p>
              Send the key move details now so we can review the job, understand access issues, and prepare for a useful estimate conversation.
            </p>
            <p className="note-line">Call directly at <a className="tap-call" href={phoneHref}>{phoneNumber}</a>.</p>
          </div>
          <form className="contact-card inquiry-form" onSubmit={handleDemoSubmit}>
            <div className="form-intro form-body">
              <p className="card-eyebrow">Move Request</p>
              <p className="form-intro-copy">Share the key details so we can prepare a useful estimate.</p>
            </div>
            <div className="form-grid">
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="Best phone number" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
              <label>
                <span>Move Date</span>
                <input type="text" name="moveDate" placeholder="Planned date or range" />
              </label>
              <label>
                <span>Origin</span>
                <input type="text" name="origin" placeholder="Current city / building type" />
              </label>
              <label>
                <span>Destination</span>
                <input type="text" name="destination" placeholder="New city / building type" />
              </label>
              <label>
                <span>Move Type</span>
                <select name="moveType" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Apartment Move</option>
                  <option>House Move</option>
                  <option>Office / Commercial Move</option>
                  <option>Hot Tub / Specialty Move</option>
                  <option>Need Help Choosing</option>
                </select>
              </label>
              <label>
                <span>Estimate Preference</span>
                <select name="estimateType" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Phone Estimate</option>
                  <option>In-Home Estimate</option>
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>
            <label className="full-span form-details form-body">
              <span>Inventory and Access Notes</span>
              <textarea name="details" rows={6} placeholder="Include large furniture, stairs, elevators, parking constraints, fragile items, and anything else likely to affect timing or cost." />
            </label>
            <button type="submit" className="primary-cta full-width">Send Quote Request</button>
            {isDemoSubmitted && (
              <p className="full-span note-line" role="status">
                Demo request saved locally{submittedName ? ` for ${submittedName}` : ''}. Call {phoneNumber} to confirm scheduling.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="section" id="booking">
        <div className="container final-cta-grid">
          <div>
            <p className="eyebrow">Estimate Booking</p>
            <h2>Schedule a move estimate conversation.</h2>
            <p>Use the booking calendar below to request time for a phone estimate, planning call, or next-step conversation.</p>
            <p className="note-line">Prefer direct contact. <a className="tap-call" href={phoneHref}>{phoneNumber}</a></p>
          </div>
          <div className="booking-placeholder">
            <div className="booking-shell">
              <p className="card-eyebrow">Book an Estimate</p>
              <h3>Book your free estimate</h3>
              <p>Pick a time that works for you and request a phone estimate or planning call.</p>
              <iframe src={bookingUrl} title="Book an estimate call" className="booking-frame" loading="lazy" />
              <a className="secondary-cta" href={bookingUrl} target="_blank" rel="noreferrer">Open booking in new tab</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted-section" id="faq">
        <div className="container faq-grid">
          <div className="section-heading compact-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Common moving questions.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <article key={item.question} className="faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Moving Advice</p>
            <h2>Helpful moving tips for Boston-area customers.</h2>
            <p>Read practical advice for planning your move, preparing your building, and avoiding common delays on moving day.</p>
          </div>
          <div className="service-grid">
            {articlePages.map((article) => (
              <article key={article.slug} className="service-card">
                <p className="card-eyebrow">Moving Tip</p>
                <h3>{article.title}</h3>
                <p>{article.intro}</p>
                <Link className="text-link" to={`/articles/${article.slug}`}>Read tip</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ServicePageInner() {
  const { slug } = useParams()
  const page = servicePages.find((item) => item.slug === slug)
  if (!page) return <NotFound />
  return (
    <section className="section"><div className="container prose-page"><p className="eyebrow">Moving Service</p><h1>{page.title}</h1><p className="lead">{page.intro}</p><ul>{page.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><a className="primary-cta" href={bookingUrl}>Book a Free Estimate</a></div></section>
  )
}

function ArticlePageInner() {
  const { slug } = useParams()
  const page = articlePages.find((item) => item.slug === slug)
  if (!page) return <NotFound />
  return (
    <section className="section"><div className="container prose-page"><p className="eyebrow">Moving Tip</p><h1>{page.title}</h1><p className="lead">{page.intro}</p>{page.sections.map((section) => <div key={section.heading} className="article-block"><h2>{section.heading}</h2><p>{section.body}</p></div>)}<a className="primary-cta" href={bookingUrl}>Book a Free Estimate</a></div></section>
  )
}

function NotFound() {
  return <section className="section"><div className="container prose-page"><h1>Page not found</h1></div></section>
}

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServicePageInner />} />
          <Route path="/articles/:slug" element={<ArticlePageInner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
