import Link from 'next/link'
import PlaceholderPhoto from '@/components/PlaceholderPhoto'
import Testimonials from '@/components/Testimonials'
import { featuredTestimonials } from '@/data/testimonials'

const services = [
  {
    title: 'Post-Surgical Recovery',
    description: 'Expert wound care, pain management, and rehabilitation support following surgery — in the comfort of your home.',
    icon: <SurgicalIcon />,
  },
  {
    title: 'Overnight Nursing Care',
    description: 'Dedicated overnight monitoring and care so you and your family can rest with complete peace of mind.',
    icon: <OvernightIcon />,
  },
  {
    title: 'IV Therapy & Wound Care',
    description: 'Clinical-grade IV therapy and advanced wound care management with hospital-trained precision.',
    icon: <IVIcon />,
  },
  {
    title: 'Elder Companion & Wellness',
    description: 'Compassionate wellness visits, medication management, and companion care for older adults.',
    icon: <HeartIcon />,
  },
]

const credentials = [
  { value: '17+', label: 'Years Experience' },
  { value: 'RN-BC', label: 'Board Certified' },
  { value: 'BSN', label: 'Nursing Science' },
  { value: '2', label: 'Major Health Systems' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen bg-cream flex items-center pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div className="order-2 lg:order-1">
              <div className="section-label mb-5">Private Duty Nursing · Scottsdale & Phoenix, AZ</div>
              <h1 className="font-playfair text-4xl md:text-5xl xl:text-6xl font-semibold text-navy leading-tight mb-6">
                Exceptional Care,{' '}
                <span className="italic text-navy-light">Delivered</span>{' '}
                to Your Door
              </h1>
              <div className="gold-divider-left" />
              <p className="text-navy/70 font-inter text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                With 17 years of nursing experience and a board certification in medical-surgical nursing, I provide expert private duty nursing care in the comfort of your home. From post-surgical recovery to complex care management, I bring hospital-grade expertise with a personal touch.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="btn-navy">
                  View Services
                </Link>
                <Link href="/contact" className="btn-outline-gold">
                  Get in Touch
                </Link>
              </div>

              {/* Trust signals */}
              <div className="mt-10 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-navy/60 text-sm font-inter">BSN, RN-BC Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-navy/60 text-sm font-inter">17+ Years Clinical Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-navy/60 text-sm font-inter">Discreet & Confidential</span>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-full border border-gold/20" />
                <div className="absolute -inset-8 rounded-full border border-gold/10" />
                <PlaceholderPhoto size="lg" />
                {/* Floating credential badge */}
                <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white shadow-xl border border-cream-deeper px-5 py-4 rounded">
                  <div className="text-gold font-playfair text-xl font-semibold">17+</div>
                  <div className="text-navy text-xs font-inter font-medium tracking-wide uppercase mt-0.5">Years of</div>
                  <div className="text-navy text-xs font-inter font-medium tracking-wide uppercase">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="bg-navy py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {credentials.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-playfair text-3xl md:text-4xl font-semibold text-gold mb-1">
                  {value}
                </div>
                <div className="text-cream/60 text-xs font-inter tracking-widest uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-cream-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="section-label mb-4">What I Offer</div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-navy mb-4">
              Private Nursing Services
            </h2>
            <div className="gold-divider" />
            <p className="text-navy/60 font-inter max-w-2xl mx-auto text-base leading-relaxed">
              Every service is delivered with the same clinical expertise you&rsquo;d expect in a top-tier hospital — and the warmth of someone who genuinely cares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ title, description, icon }) => (
              <div key={title} className="card group">
                <div className="text-gold mb-5 w-10 h-10">{icon}</div>
                <h3 className="font-playfair text-lg font-semibold text-navy mb-3 group-hover:text-navy-light transition-colors">
                  {title}
                </h3>
                <p className="text-navy/60 font-inter text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-navy">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border border-gold/30 rounded" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-gold/20 rounded" />
                <PlaceholderPhoto size="lg" className="relative z-10" />
              </div>
            </div>

            <div>
              <div className="section-label mb-4">About Danielle</div>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-navy mb-2">
                Danielle Olich,
              </h2>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-navy italic mb-6">
                BSN, RN-BC
              </h2>
              <div className="gold-divider-left" />
              <p className="text-navy/70 font-inter text-base leading-relaxed mb-6">
                With over 17 years of nursing experience across some of the Valley&rsquo;s most respected medical institutions — including St. Joseph&rsquo;s Hospital and HonorHealth — I bring deep clinical expertise directly to you.
              </p>
              <p className="text-navy/70 font-inter text-base leading-relaxed mb-8">
                I&rsquo;m board certified in medical-surgical nursing and specialize in post-surgical recovery, wound care, pain management, and complex disease management. Today I bring all of that experience to your home — with patience, presence, and genuine compassion.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Post-Surgical Recovery',
                  'Telemetry & Med-Surg',
                  'Oncology Nursing',
                  'Addiction & Detox Care',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckGoldIcon />
                    <span className="text-navy/70 text-sm font-inter">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-navy">
                Read Full Bio &amp; Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Endorsements */}
      <section className="bg-cream py-20 md:py-28 border-t border-cream-deeper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Professional Endorsements</div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-navy mb-4">
              What Colleagues Say
            </h2>
            <div className="gold-divider" />
            <p className="text-navy/55 font-inter text-sm max-w-xl mx-auto leading-relaxed">
              The following are excerpts from Danielle&rsquo;s 2022–2023 performance review at HonorHealth, where multiple categories were rated <span className="text-gold font-medium">Exceptional Performer</span>.
            </p>
          </div>
          <Testimonials items={featuredTestimonials} variant="light" />
        </div>
      </section>

      {/* Why private duty nursing */}
      <section className="bg-navy py-20 md:py-28 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-gold/5 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-gold/5 -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="text-gold text-xs font-inter font-medium tracking-widest uppercase mb-4">
              Why Private Duty Nursing
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-cream mb-4">
              The Care You Deserve, Where You Are Most Comfortable
            </h2>
            <div className="w-16 h-px bg-gold mx-auto my-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'One-on-One Attention',
                description: 'Unlike hospital settings, private duty nursing means every moment of care is focused entirely on you — with no divided attention, no rushed visits.',
              },
              {
                title: 'Clinical Excellence at Home',
                description: 'Receive the same standard of care you\'d expect from a top medical institution, without leaving the comfort and familiarity of your own home.',
              },
              {
                title: 'Continuity of Care',
                description: 'I get to know you, your history, and your preferences — providing consistent, personalized care that builds trust over time.',
              },
            ].map(({ title, description }) => (
              <div key={title} className="border border-gold/20 p-8 hover:border-gold/40 transition-colors duration-300">
                <div className="w-8 h-px bg-gold mb-6" />
                <h3 className="font-playfair text-xl font-semibold text-cream mb-4">
                  {title}
                </h3>
                <p className="text-cream/60 font-inter text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-pale py-20 md:py-24 border-y border-gold/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="section-label mb-4">Ready to Get Started?</div>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-navy mb-4">
            Let&rsquo;s Discuss Your Care Needs
          </h2>
          <div className="gold-divider" />
          <p className="text-navy/70 font-inter text-base leading-relaxed mb-8">
            Every situation is unique. Reach out today for a personal consultation — I&rsquo;ll listen carefully and help design a care plan that&rsquo;s right for you or your loved one.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-navy">
              Request a Consultation
            </Link>
            <a href="tel:4803351671" className="btn-outline-gold">
              Call 480-335-1671
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function CheckGoldIcon() {
  return (
    <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function SurgicalIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  )
}

function OvernightIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  )
}

function IVIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}
