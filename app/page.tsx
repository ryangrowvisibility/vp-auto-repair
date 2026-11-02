import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(916) 204-6237";
const TEL = "tel:+19162046237";
const ADDRESS = "1502 Silica Ave, Sacramento, CA 95815";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=VP%20Auto%20Repair&query_place_id=ChIJ4U6Yq_DZmoARzG37NFG-TBk";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=1502%20Silica%20Ave%2C%20Sacramento%2C%20CA%2095815";

const services = [
  {
    icon: "gauge",
    title: "Engine diagnostics & repair",
    text: "Check-engine lights, rough running, misfires and the problems other shops let drag on. We find the cause, explain it in plain words, and quote you before any work starts.",
    featured: true,
  },
  {
    icon: "disc",
    title: "Brake service",
    text: "Pads, rotors, calipers and brake lines. We inspect, show you what we found, and give an upfront quote. Customers tell us the final bill matched it.",
  },
  {
    icon: "cog",
    title: "Transmission repair",
    text: "Slipping, hard shifts, leaks and warning lights. Honest diagnosis first, so you know whether it needs a repair, a service or nothing at all.",
  },
  {
    icon: "battery",
    title: "Electrical repair",
    text: "Batteries, alternators, starters, wiring faults, lights and headlights. We can source parts like headlight assemblies at a fair price and install them the same visit.",
  },
  {
    icon: "wrench",
    title: "Scheduled maintenance",
    text: "Oil changes, tune-ups and the factory-recommended services that keep a car running reliably. A small bill now beats a big one later.",
  },
  {
    icon: "car",
    title: "Second opinions",
    text: "Got a scary estimate somewhere else? Bring it in. More than one customer says we fixed the problem for far less than the other guys wanted.",
  },
];

const reviews = [
  { name: "Katie R.", job: "Third repair with VP", text: "This was the third time Vladimir has helped us. Once again he fixed the problem for way less than the other guys wanted. He keeps it simple so you understand, he is honest, and he saves the old parts to show you." },
  { name: "Renee G.", job: "Daughter's car", text: "We thought we would have to replace our daughter's whole car, but they fixed it and got her back on the road. Highly recommend them for any auto repair." },
  { name: "Aron E.", job: "Headlights", text: "Outstanding customer service from start to finish. Friendly, knowledgeable staff who answered all my questions. The headlights I bought through them were great quality at a very reasonable price." },
  { name: "Marcia L.", job: "Multiple repairs", text: "He fixed a lot of stuff on my car. Very knowledgeable, good prices, and gets it done quick. The best mechanic in Sacramento, period." },
  { name: "Brooke W.", job: "General repair", text: "Repairs were done in a timely fashion and the cost was reasonable compared to other shops I have been to. I highly recommend VP." },
  { name: "Marissa F.", job: "Repair options", text: "Best mechanic. Understood my situation and gave me the best options." },
];

const reasons = [
  { icon: "tag", title: "Quotes that match the bill", text: "You hear the price before we start, and that is the price you pay." },
  { icon: "check", title: "No upselling", text: "We fix what is broken and tell you what can wait." },
  { icon: "search", title: "You see the old parts", text: "We save the parts we replace and walk you through them." },
  { icon: "user", title: "Same owner since 2006", text: "Vladimir runs the shop himself and knows his regulars by car." },
];

const steps = [
  { title: "Call or stop by", text: `Ring ${PHONE} or drive in Monday to Saturday from 8 a.m. Early arrivals usually leave the same day.` },
  { title: "Honest diagnosis", text: "We find the actual problem and explain it in plain language, no jargon." },
  { title: "Upfront quote", text: "You approve the price before any work. No surprises on the final bill." },
  { title: "Fixed and explained", text: "Pick up your car, see the old parts, and get back on the road." },
];

const faqs = [
  { q: "Do you give estimates before starting work?", a: "Yes. We diagnose the problem, explain it, and give you a quote first. Customers regularly mention that the final price matched the quote, with no upselling." },
  { q: "What are your hours?", a: "Monday through Saturday, 8 a.m. to 5 p.m. We are closed on Sundays. Coming in early in the day gives us the best chance of having your car back the same day." },
  { q: "Where are you located?", a: `${ADDRESS}, Sacramento. Customers come from across Sacramento, North Highlands and nearby.` },
  { q: "What kinds of cars do you work on?", a: "Everyday cars, trucks and SUVs, domestic and import. Recent customers brought in everything from a Hyundai to a teenager's first car. Call and tell us what you drive." },
  { q: "Can you just give me a second opinion?", a: "Absolutely. Bring your other estimate. If the repair is not needed, we will tell you, and if it is, we will tell you what we would charge." },
  { q: "How long has VP Auto Repair been in business?", a: "Since 2006. The shop is owned and run by Vladimir Pineda." },
  { q: "Do I need an appointment?", a: `Calling ahead at ${PHONE} is best so we can plan the day around your car, but you are welcome to stop by during business hours.` },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "VP Auto Repair",
  telephone: "+1-916-204-6237",
  founder: "Vladimir Pineda",
  foundingDate: "2006",
  address: { "@type": "PostalAddress", streetAddress: "1502 Silica Ave", addressLocality: "Sacramento", addressRegion: "CA", postalCode: "95815", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 38.6081449, longitude: -121.4335769 },
  openingHours: ["Mo-Sa 08:00-17:00"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "54" },
  hasMap: MAPS,
};

export default function Home() {
  return (
    <>
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <div className="hidden bg-accent text-sm text-white/90 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> {ADDRESS}</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Mon to Sat 8 a.m. to 5 p.m. · Closed Sunday</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5 font-head text-xl font-extrabold text-ink">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white"><Icon name="wrench" className="h-5 w-5" /></span>
            VP Auto Repair
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#visit" className="hover:text-brand">Visit</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-bold text-ink sm:inline">{PHONE}</a>
            <a href={TEL} className="btn group hidden rounded-full bg-cta pr-2 text-white hover:bg-cta-dark md:inline-flex">
              Call Now
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-transform duration-200 group-hover:rotate-12"><Icon name="phone" className="h-4 w-4" /></span>
            </a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-11 w-11 place-items-center rounded-full bg-cta text-white md:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="bg-gradient-to-b from-brand-soft to-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.15fr_1fr]">
            <div className="reveal">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-dark shadow-sm">
                <Icon name="award" className="h-4 w-4" /> Independent shop on Silica Ave since 2006
              </p>
              <h1 className="font-head text-[clamp(2.25rem,5vw,3.6rem)] font-extrabold text-ink">
                Auto Repair in Sacramento: Engines, Brakes &amp; Honest Quotes
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted">
                Vladimir Pineda has been fixing Sacramento&rsquo;s cars since 2006. You get a straight answer, a fair price that matches the final bill, and your old parts back so you can see what we replaced.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn group rounded-full bg-cta pr-2 text-lg text-white hover:bg-cta-dark">
                  Call {PHONE}
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 transition-transform duration-200 group-hover:rotate-12"><Icon name="phone" className="h-5 w-5" /></span>
                </a>
                <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn rounded-full border-2 border-ink/80 text-ink hover:bg-white"><Icon name="pin" className="h-5 w-5" /> Get Directions</a>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.95rem] font-semibold">
                <Stars className="h-5 w-5" />
                <span>4.7 · 54 Google reviews</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Since 2006</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Open Saturdays</span>
              </p>
            </div>
            <div className="reveal rounded-[2rem] bg-white/60 p-2 ring-1 ring-ink/5">
              <figure className="rounded-[calc(2rem-0.5rem)] bg-white p-7 shadow-[0_30px_60px_-35px_oklch(0.42_0.17_27/0.35)]">
                <Stars className="h-5 w-5" />
                <blockquote className="mt-4 font-head text-xl font-bold leading-snug text-ink">
                  &ldquo;Once again he fixed the problem for way less than the other guys wanted. We would not take our vehicles anywhere else.&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-muted">Katie R. · third repair with VP</figcaption>
                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm">
                  <div><dt className="text-muted">Hours</dt><dd className="font-semibold">Mon to Sat, 8 to 5</dd></div>
                  <div><dt className="text-muted">Where</dt><dd className="font-semibold">1502 Silica Ave</dd></div>
                  <div><dt className="text-muted">Owner</dt><dd className="font-semibold">Vladimir Pineda</dd></div>
                  <div><dt className="text-muted">In business</dt><dd className="font-semibold">Since 2006</dd></div>
                </dl>
              </figure>
            </div>
          </div>
        </section>

        <section aria-label="Why customers trust us" className="border-y border-line bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              ["award", "4.7 on Google", "54 reviews"],
              ["calendar", "Since 2006", "20 years in Sacramento"],
              ["tag", "Upfront quotes", "final bill matches"],
              ["user", "Owner on site", "Vladimir Pineda"],
            ].map(([icon, a, b]) => (
              <div key={a} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name={icon} /></span>
                <div><p className="font-head font-bold leading-tight">{a}</p><p className="text-sm text-muted">{b}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <h2 className="font-head text-3xl font-extrabold md:text-4xl">Repairs we handle every day</h2>
              <p className="mt-4 text-lg text-muted">From a routine oil change to the engine problem nobody else could pin down. Every job starts with an honest diagnosis and a price you approve.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className={`reveal lift flex flex-col rounded-2xl border bg-white p-6 ${s.featured ? "border-brand ring-1 ring-brand" : "border-line"}`}>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                  <h3 className="mt-4 font-head text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-muted">{s.text}</p>
                  <a href={TEL} className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-dark">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="font-head text-3xl font-extrabold md:text-4xl">Rated 4.7 from 54 Google reviews</h2>
                <p className="mt-3 text-lg text-muted">What our customers say most: fair prices, quick turnaround, and a mechanic who explains things.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-dark">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-2xl bg-white p-6 shadow-[0_20px_40px_-30px_oklch(0.22_0.015_260/0.3)]">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 flex-1 leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm"><span className="font-semibold">{r.name}</span> <span className="text-muted">· {r.job}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <h2 className="font-head text-3xl font-extrabold md:text-4xl">Meet Vladimir, the &ldquo;VP&rdquo; in VP Auto Repair</h2>
              <div className="mt-5 space-y-4 text-lg text-muted">
                <p>Vladimir Pineda opened VP Auto Repair on Silica Avenue in 2006, and he still runs the shop himself. Plenty of customers just call him VP.</p>
                <p>The way he works is simple. He finds out what is actually wrong, explains it so you understand it even if you know nothing about cars, and gives you a price before he picks up a wrench. If something can wait, he says so. When the job is done, he shows you the parts he took off.</p>
                <p>He also knows money is tight for a lot of people right now. That is why so many reviews say the same thing: he fixed it for less than the other shops quoted, and the final bill matched what he said.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title} className="reveal rounded-2xl border border-line bg-white p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-white"><Icon name={r.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-3 font-head text-lg font-bold">{r.title}</h3>
                  <p className="mt-1 text-muted">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 className="reveal font-head text-3xl font-extrabold md:text-4xl">How a repair works at VP</h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal rounded-2xl bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-head text-lg font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-4 font-head text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
            <p className="reveal mt-8 rounded-2xl border border-dashed border-brand/40 bg-white px-5 py-4 text-muted">
              <span className="font-semibold text-ink">A tip from a regular:</span> get there as they open and you can be out before the day is done, with plenty of day left to enjoy your repaired car.
            </p>
          </div>
        </section>

        <section id="visit" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <h2 className="font-head text-3xl font-extrabold md:text-4xl">Visit the shop on Silica Ave</h2>
              <p className="mt-4 text-lg text-muted">Our shop is on Silica Avenue in Sacramento, an easy drive from anywhere in the Sacramento area.</p>
              <ul className="mt-6 space-y-3 text-lg">
                <li className="flex gap-3"><Icon name="pin" className="mt-1 h-5 w-5 shrink-0 text-brand" /> {ADDRESS}</li>
                <li className="flex gap-3"><Icon name="clock" className="mt-1 h-5 w-5 shrink-0 text-brand" /> Monday to Saturday, 8 a.m. to 5 p.m. · Sunday closed</li>
                <li className="flex gap-3"><Icon name="phone" className="mt-1 h-5 w-5 shrink-0 text-brand" /> <a href={TEL} className="font-semibold">{PHONE}</a></li>
              </ul>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn mt-6 rounded-full border-2 border-ink/80 hover:bg-tint"><Icon name="route" className="h-5 w-5" /> Get Directions</a>
            </div>
            <iframe title="Map to VP Auto Repair, 1502 Silica Ave, Sacramento" src="https://maps.google.com/maps?q=1502%20Silica%20Ave%2C%20Sacramento%2C%20CA%2095815&z=15&output=embed" loading="lazy" className="reveal h-80 w-full rounded-2xl border border-line lg:h-full" />
          </div>
        </section>

        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <h2 className="reveal font-head text-3xl font-extrabold md:text-4xl">Common questions</h2>
            <div className="mt-8 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="reveal rounded-2xl bg-white px-5 py-4">
                  <summary className="flex items-center justify-between gap-4 font-head text-lg font-bold">
                    {f.q}
                    <span className="faq-toggle grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="font-head text-3xl font-extrabold md:text-4xl">Car acting up? Call Vladimir.</h2>
              <p className="mt-3 text-lg text-white/85">{PHONE} · Monday to Saturday, 8 a.m. to 5 p.m.</p>
            </div>
            <a href={TEL} className="btn group rounded-full bg-white pr-2 text-lg text-brand-dark hover:bg-brand-soft">
              Call {PHONE}
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white transition-transform duration-200 group-hover:rotate-12"><Icon name="phone" className="h-5 w-5" /></span>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-accent pb-24 text-white/80 md:pb-0">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3 md:px-6">
          <div>
            <p className="font-head text-xl font-extrabold text-white">VP Auto Repair</p>
            <p className="mt-3">{ADDRESS}</p>
            <p className="mt-1"><a href={TEL} className="font-semibold text-white">{PHONE}</a></p>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 font-semibold text-white">Google reviews <Icon name="arrow" className="h-4 w-4" /></a>
          </div>
          <div>
            <p className="font-head font-bold text-white">Services</p>
            <ul className="mt-3 space-y-1.5">
              <li>Engine diagnostics &amp; repair</li><li>Brake service</li><li>Transmission repair</li><li>Electrical repair</li><li>Scheduled maintenance</li>
            </ul>
          </div>
          <div>
            <p className="font-head font-bold text-white">Hours</p>
            <ul className="mt-3 space-y-1.5"><li>Monday to Saturday: 8 a.m. to 5 p.m.</li><li>Sunday: closed</li></ul>
            <p className="mt-4">Owner: Vladimir Pineda · Since 2006</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-sm">© {new Date().getFullYear()} VP Auto Repair, Sacramento</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn rounded-full bg-cta text-white"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn rounded-full bg-accent text-white"><Icon name="pin" className="h-5 w-5" /> Directions</a>
      </div>
    </>
  );
}
