import Link from 'next/link'
import Image from 'next/image'
import Testimonials from '@/components/Testimonials'
import { featuredTestimonials } from '@/data/testimonials'

const services = [
  'Post-Surgical Recovery',
  'IV, Wound, Drain & Catheter Management',
  'Medication Management',
  'Elder Companion & Wellness',
  'Dementia Care & Education',
  'Care for Chronic Conditions',
  'Ostomy Care & Management',
  'Pain Management',
  'Advocacy — Doctor Appointments & Hospitalization',
]

const credentials = [
  { value: '17+', label: 'Years Experience' },
  { value: 'RN-BC', label: 'Board Certified' },
  { value: 'BSN', label: 'Nursing Science' },
  { value: 'AZ', label: 'Licensed in Arizona' },
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
                <Link href="/about" className="btn-navy">
                  About Me
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
                <div className="absolute -inset-4 rounded-full border border-gold/20" />
                <div className="absolute -inset-8 rounded-full border border-gold/10" />
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/danielle.png"
                    alt="Danielle Olich, BSN, RN-BC — Private Duty Nurse"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
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

      {/* Services */}
      <section className="bg-cream-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="section-label mb-4">What I Offer</div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-navy mb-4">
              Private Nursing Services
            </h2>
            <div className="gold-divider" />
            <p className="text-navy/60 font-inter max-w-2xl mx-auto text-base leading-relaxed">
              A private duty nurse committed to enhancing the quality of life for clients in their own home. I bring clinical expertise and emotional support, serving as an unwavering advocate — ensuring patients&rsquo; wishes are prioritized and medical information is clearly communicated to families and physicians.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((title) => (
              <div key={title} className="card group flex items-center gap-4 py-6">
                <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <h3 className="font-playfair text-base font-semibold text-navy group-hover:text-navy-light transition-colors">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 border border-gold/30 rounded" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-gold/20 rounded" />
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden relative z-10">
                  <Image
                    src="/images/danielle.png"
                    alt="Danielle Olich, BSN, RN-BC"
                    fill
                    className="object-cover object-top"
                  />
                </div>
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
              <p className="text-navy/70 font-inter text-base leading-relaxed mb-8">
                With over 17 years of nursing experience across some of the Valley&rsquo;s most respected medical institutions — including St. Joseph&rsquo;s Hospital and HonorHealth — I bring deep clinical expertise directly to you. I&rsquo;m board certified in medical-surgical nursing and specialize in post-surgical recovery, wound care, pain management, and complex disease management. Today I bring all of that experience to your home — with patience, presence, and genuine compassion.
              </p>
              <Link href="/about" className="btn-navy">
                Read Full Bio &amp; Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-20 md:py-28 border-t border-cream-deeper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Professional Endorsements</div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-navy mb-4">
              What Colleagues Say
            </h2>
            <div className="gold-divider" />
            <p className="text-navy/55 font-inter text-sm max-w-xl mx-auto leading-relaxed">
              Excerpts from Danielle&rsquo;s 2022–2023 performance review at HonorHealth, where multiple categories were rated <span className="text-gold font-medium">Exceptional Performer</span>.
            </p>
          </div>
          <Testimonials items={featuredTestimonials} variant="light" />
        </div>
      </section>

      {/* Why private duty nursing */}
      <section className="bg-navy py-20 md:py-28 relative overflow-hidden">
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
                <h3 className="font-playfair text-xl font-semibold text-cream mb-4">{title}</h3>
                <p className="text-cream/60 font-inter text-sm leading-relaxed">{description}</p>
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
