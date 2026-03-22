import { Link, Route, Routes, useParams } from 'react-router-dom'
import { articlePages, bookingUrl, phoneHref, phoneNumber, address, servicePages } from './content/site'

const trustPoints = [
  'Veteran owned, licensed, and insured',
  'Affordable rates across Boston and the North Shore',
  'Apartment, house, office, and specialty moves',
  'Fast, friendly, and effective moving crews',
]

const whyChooseUs = [
  {
    title: 'Professional movers with a service-first approach',
    body: 'The live brand leans on seasoned, reliable movers and a pleasant relocation experience from start to finish. This version keeps that tone, but presents it with tighter conversion structure and clearer hierarchy.',
  },
  {
    title: 'Affordable estimates with more realistic planning',
    body: 'Free in-home estimates and phone estimates are part of the current offer. The site now frames that as a conversion path with clearer decision points and better pre-qualification.',
  },
  {
    title: 'Coverage built for Boston, Metro Boston, and the North Shore',
    body: 'The brand already emphasizes Boston and North Shore reach. This version sharpens that into an explicit service-area and move-type structure that reads like an actual operator, not a generic lead form.',
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
      'The current brand focus is Boston, Metro Boston, Peabody, Salem, and the North Shore. This site keeps that service geography intact and makes it easier to scan.',
  },
  {
    question: 'Why book a consultation if there is already a quote request form?',
    answer:
      'Some leads are better handled asynchronously. Others move faster with a direct estimate conversation. The site supports both, which is what competent operations tend to do.',
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
          <p className="brand-title">Boston & North Shore best moving company</p>
        </Link>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#areas">Areas</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="primary-cta" href="#booking">Book an Estimate Call</a>
      </div>
    </header>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Veteran owned movers serving Boston and the North Shore</p>
            <h1>Fast, friendly, effective moving for Boston-area homes and businesses</h1>
            <p className="hero-copy">
              Boston Moving Service is a licensed and insured professional moving company with seasoned movers,
              affordable rates, and a straightforward goal: make the relocation experience easier from start to finish.
              This build keeps the core live-site positioning, then tightens the structure around conversion.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href="#booking">Book an Estimate Call</a>
              <a className="secondary-cta" href="#services">Explore Moving Services</a>
            </div>
            <div className="trust-strip">
              {trustPoints.map((point) => <span key={point}>{point}</span>)}
            </div>
          </div>

          <aside className="hero-panel">
            <p className="panel-kicker">Contact</p>
            <h2>Book a move with people who do this for a living.</h2>
            <div className="panel-card-grid">
              <article><strong>Call Now</strong><span>{phoneNumber}</span></article>
              <article><strong>Coverage</strong><span>Boston, Metro Boston, Peabody, Salem, North Shore</span></article>
              <article><strong>Estimates</strong><span>Free in-home estimates and phone estimates</span></article>
              <article><strong>Move Types</strong><span>Residential, office, commercial, hot tub, hoisting</span></article>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Moving Services</p>
            <h2>Structured around the services already present in the live brand.</h2>
            <p>Apartment moves, house moves, office relocations, commercial work, specialty moves, and estimate-first conversion paths.</p>
          </div>
          <div className="service-grid">
            {servicePages.map((service) => (
              <article key={service.slug} className="service-card">
                <p className="card-eyebrow">Service Page</p>
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
            <h2>Current brand cues, rebuilt into a stronger prospect flow.</h2>
            <p>The inspiration site has the right raw ingredients. This version makes the pitch easier to trust and easier to act on.</p>
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
            <h2>A cleaner estimate-to-booking path.</h2>
            <p>The live site mentions free in-home estimates and phone estimates. Here that offer is organized into a more usable flow.</p>
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
            <p>Based on the live site positioning, with the coverage made more visible and more believable in the sales flow.</p>
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
              The current website leans on calling for estimates. This version adds a stronger intake layer so the company
              can qualify the job before the conversation and still preserve the direct-call path.
            </p>
            <p className="note-line">Call directly at <a className="tap-call" href={phoneHref}>{phoneNumber}</a>.</p>
          </div>
          <form className="contact-card inquiry-form" action="mailto:info@bmoving.com" method="post" encType="text/plain">
            <div className="form-intro form-body">
              <p className="card-eyebrow">Move Request</p>
              <p className="form-intro-copy">Enough detail for a useful estimate. Not an essay. Just the parts that matter.</p>
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
          </form>
        </div>
      </section>

      <section className="section" id="booking">
        <div className="container final-cta-grid">
          <div>
            <p className="eyebrow">Estimate Booking</p>
            <h2>Schedule a move estimate conversation.</h2>
            <p>Use the booking option below to request time for a phone estimate, planning call, or next-step conversation.</p>
            <p className="note-line">Prefer direct contact. <a className="tap-call" href={phoneHref}>{phoneNumber}</a></p>
          </div>
          <div className="booking-placeholder">
            <div className="booking-shell">
              <p className="card-eyebrow">Book an Estimate</p>
              <h3>Open the estimate calendar</h3>
              <p>The #booking anchor and embedded calendar flow remain intact, with a direct fallback link if needed.</p>
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
            <h2>Common questions, answered without the usual moving-company nonsense.</h2>
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
            <h2>Useful content modeled after the live site’s blog footprint.</h2>
            <p>The current site already uses educational moving content. This version keeps that intent but rewrites it into cleaner, more trustworthy pages.</p>
          </div>
          <div className="service-grid">
            {articlePages.map((article) => (
              <article key={article.slug} className="service-card">
                <p className="card-eyebrow">Article</p>
                <h3>{article.title}</h3>
                <p>{article.intro}</p>
                <Link className="text-link" to={`/articles/${article.slug}`}>Read article</Link>
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
    <section className="section"><div className="container prose-page"><p className="eyebrow">Service Page</p><h1>{page.title}</h1><p className="lead">{page.intro}</p><ul>{page.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><a className="primary-cta" href={bookingUrl}>Book an Estimate Call</a></div></section>
  )
}

function ArticlePageInner() {
  const { slug } = useParams()
  const page = articlePages.find((item) => item.slug === slug)
  if (!page) return <NotFound />
  return (
    <section className="section"><div className="container prose-page"><p className="eyebrow">Article</p><h1>{page.title}</h1><p className="lead">{page.intro}</p>{page.sections.map((section) => <div key={section.heading} className="article-block"><h2>{section.heading}</h2><p>{section.body}</p></div>)}<a className="primary-cta" href={bookingUrl}>Book an Estimate Call</a></div></section>
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
