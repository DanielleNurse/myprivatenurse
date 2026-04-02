'use client'

import { useState } from 'react'

const careTypes = [
  'Post-Surgical Recovery Care',
  'Overnight Nursing Care',
  'Live-In Daily Care',
  'IV Therapy & Wound Care',
  'Postpartum & Newborn Support',
  'Elder Companion & Wellness Visits',
  'Pediatric Private Nursing',
  'Corporate & Event Nursing',
  'Other / Not Sure',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xlgolqzp', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setFormState('success')
        form.reset()
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <>
      {/* Page header */}
      <div className="page-header pt-40 md:pt-48">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-gold text-xs font-inter font-medium tracking-widest uppercase mb-5">
            Get in Touch
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-cream mb-4">
            Let&rsquo;s Connect
          </h1>
          <div className="w-16 h-px bg-gold mx-auto my-6" />
          <p className="text-cream/70 font-inter text-base md:text-lg leading-relaxed">
            I respond personally to every inquiry. Share a bit about your situation and I&rsquo;ll be in touch within one business day.
          </p>
        </div>
      </div>

      {/* Contact section */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Contact form — 3 cols */}
            <div className="lg:col-span-3">
              <div className="section-label mb-4">Send a Message</div>
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-navy mb-2">
                Request a Consultation
              </h2>
              <div className="gold-divider-left mb-8" />

              {formState === 'success' ? (
                <div className="bg-gold-pale border border-gold/30 p-10 text-center">
                  <div className="w-12 h-12 text-gold mx-auto mb-4">
                    <CheckCircleIcon />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-navy mb-3">
                    Thank You
                  </h3>
                  <p className="text-navy/65 font-inter text-base leading-relaxed">
                    Your message has been received. I&rsquo;ll be in touch personally within one business day.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-6 btn-outline-gold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-navy font-inter text-sm font-medium mb-2" htmlFor="name">
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full border border-cream-deeper bg-white px-4 py-3 font-inter text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-gold transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-navy font-inter text-sm font-medium mb-2" htmlFor="phone">
                        Phone Number <span className="text-gold">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(480) 000-0000"
                        className="w-full border border-cream-deeper bg-white px-4 py-3 font-inter text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-gold transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-navy font-inter text-sm font-medium mb-2" htmlFor="email">
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full border border-cream-deeper bg-white px-4 py-3 font-inter text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>

                  {/* Type of care */}
                  <div>
                    <label className="block text-navy font-inter text-sm font-medium mb-2" htmlFor="care_type">
                      Type of Care Needed <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="care_type"
                        name="care_type"
                        required
                        defaultValue=""
                        className="w-full border border-cream-deeper bg-white px-4 py-3 font-inter text-sm text-navy focus:outline-none focus:border-gold transition-colors duration-200 appearance-none pr-10"
                      >
                        <option value="" disabled>Select type of care&hellip;</option>
                        {careTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                        <ChevronIcon />
                      </div>
                    </div>
                  </div>

                  {/* Preferred dates */}
                  <div>
                    <label className="block text-navy font-inter text-sm font-medium mb-2" htmlFor="preferred_dates">
                      Preferred Start Date / Date Range
                    </label>
                    <input
                      id="preferred_dates"
                      name="preferred_dates"
                      type="text"
                      placeholder="e.g., Week of May 12, or ASAP"
                      className="w-full border border-cream-deeper bg-white px-4 py-3 font-inter text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-navy font-inter text-sm font-medium mb-2" htmlFor="message">
                      Tell Me More <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Share anything helpful about the patient's situation, medical background, or specific needs…"
                      className="w-full border border-cream-deeper bg-white px-4 py-3 font-inter text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                    />
                  </div>


                  {formState === 'error' && (
                    <div className="bg-red-50 border border-red-200 px-4 py-3 text-red-700 font-inter text-sm">
                      Something went wrong. Please try again or call me directly at 480-335-1671.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="btn-navy w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>

                  <p className="text-navy/40 font-inter text-xs mt-3">
                    Your information is kept strictly confidential and is never shared with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Contact info — 2 cols */}
            <div className="lg:col-span-2">
              <div className="section-label mb-4">Direct Contact</div>
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-navy mb-2">
                Reach Me Directly
              </h2>
              <div className="gold-divider-left mb-8" />

              <div className="space-y-6 mb-10">
                <a
                  href="tel:4803351671"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                    <PhoneIcon />
                  </div>
                  <div>
                    <div className="text-navy/50 font-inter text-xs uppercase tracking-wider mb-1">Phone</div>
                    <div className="text-navy font-inter font-medium group-hover:text-gold transition-colors">
                      480-335-1671
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:danielle@myprivatenurse.health"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                    <EmailIcon />
                  </div>
                  <div>
                    <div className="text-navy/50 font-inter text-xs uppercase tracking-wider mb-1">Email</div>
                    <div className="text-navy font-inter font-medium group-hover:text-gold transition-colors break-all">
                      danielle@myprivatenurse.health
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <LocationIcon />
                  </div>
                  <div>
                    <div className="text-navy/50 font-inter text-xs uppercase tracking-wider mb-1">Service Area</div>
                    <div className="text-navy font-inter font-medium">
                      Scottsdale &amp; Phoenix, AZ
                    </div>
                    <div className="text-navy/50 font-inter text-sm mt-0.5">
                      and surrounding communities
                    </div>
                  </div>
                </div>
              </div>

              {/* Response time note */}
              <div className="bg-navy p-6 md:p-8">
                <div className="w-8 h-px bg-gold mb-5" />
                <h3 className="font-playfair text-lg font-semibold text-cream mb-3">
                  What Happens Next?
                </h3>
                <div className="space-y-3">
                  {[
                    'I respond personally to every inquiry within one business day.',
                    'We\'ll have a brief call to discuss your needs and determine if we\'re a good fit.',
                    'I\'ll put together a care plan and we\'ll align on timing and logistics.',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="font-playfair text-gold text-sm font-semibold flex-shrink-0 mt-0.5">
                        {i + 1}.
                      </span>
                      <span className="text-cream/65 font-inter text-sm leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discretion note */}
              <div className="mt-6 border-l-2 border-gold/40 pl-5 py-2">
                <p className="text-navy/55 font-inter text-sm leading-relaxed italic">
                  &ldquo;Every inquiry is treated with complete discretion. I understand how personal these decisions are, and I take your privacy seriously.&rdquo;
                </p>
                <p className="text-gold font-inter text-xs font-medium mt-2">
                  — Danielle Olich, BSN, RN-BC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function CheckCircleIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}
