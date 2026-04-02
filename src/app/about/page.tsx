import Link from 'next/link'
import PlaceholderPhoto from '@/components/PlaceholderPhoto'
import Testimonials from '@/components/Testimonials'
import { allTestimonials } from '@/data/testimonials'

const experience = [
  {
    title: 'Private Care Nursing',
    employer: 'Navi Nurses',
    location: 'Scottsdale & Phoenix, AZ',
    period: 'August 2023 – Present',
    current: true,
    description:
      'Delivering personalized private duty nursing care directly to patients\' homes. Providing post-surgical recovery support, complex care management, and concierge nursing services.',
  },
  {
    title: 'Registered Nurse',
    employer: 'HonorHealth',
    location: 'Scottsdale, AZ',
    period: 'March 2013 – Present',
    current: true,
    description:
      'Serving in medical-surgical and telemetry units at one of Arizona\'s premier health systems. Specializing in post-operative care, cardiac monitoring, patient education, and complex disease management.',
  },
  {
    title: 'Registered Nurse',
    employer: 'Gallus Detox',
    location: 'Scottsdale, AZ',
    period: 'September 2017 – August 2021',
    current: false,
    description:
      'Provided compassionate, evidence-based nursing care in a specialized addiction medicine and medical detoxification setting. Developed expertise in withdrawal management, behavioral health, and meeting patients with kindness during their most vulnerable moments.',
  },
  {
    title: 'Registered Nurse',
    employer: 'St. Joseph\'s Hospital and Medical Center',
    location: 'Phoenix, AZ',
    period: 'October 2009 – April 2013',
    current: false,
    description:
      'Worked in medical-surgical and oncology units at a nationally recognized Level I Trauma Center. Built clinical foundations in oncology nursing, wound care, pain management, and central line care.',
  },
  {
    title: 'Licensed Practical Nurse',
    employer: 'Avalon Shadow Mountain Health Care',
    location: 'Scottsdale, AZ',
    period: 'July 2007 – October 2009',
    current: false,
    description:
      'Began nursing career in long-term and skilled nursing care, developing deep appreciation for patient-centered, one-on-one care and the importance of patience and presence in nursing practice.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header pt-40 md:pt-48">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-gold text-xs font-inter font-medium tracking-widest uppercase mb-5">
            About
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-cream mb-2">
            Danielle Olich,
          </h1>
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-cream italic mb-4">
            BSN, RN-BC
          </h1>
          <div className="w-16 h-px bg-gold mx-auto my-6" />
          <p className="text-cream/70 font-inter text-base md:text-lg leading-relaxed">
            17+ years of clinical excellence. Board certified. Deeply committed to the kind of care that treats you as a whole person.
          </p>
        </div>
      </div>

      {/* Full Bio */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 border border-gold/25 rounded" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 border border-gold/15 rounded" />
                <PlaceholderPhoto size="lg" className="relative z-10" />
                {/* Credentials badge */}
                <div className="absolute -bottom-6 right-0 md:-right-6 bg-navy text-cream px-6 py-5 shadow-xl">
                  <div className="text-gold font-playfair text-2xl font-semibold">RN-BC</div>
                  <div className="text-cream/70 text-xs font-inter tracking-wide uppercase mt-1">Board Certified</div>
                  <div className="text-cream/70 text-xs font-inter tracking-wide uppercase">Med-Surg Nursing</div>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div>
              <div className="section-label mb-4">My Story</div>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-navy mb-6">
                A Career Built on Compassion
              </h2>
              <div className="gold-divider-left" />

              <div className="space-y-5 text-navy/70 font-inter text-base leading-relaxed">
                <p>
                  With over 17 years of nursing experience across some of the Valley&rsquo;s most respected medical institutions, I&rsquo;ve had the privilege of caring for patients through some of the most vulnerable and important moments of their lives.
                </p>
                <p>
                  My career began in long-term and skilled nursing care, where I learned that the most meaningful nursing happens one patient at a time — with patience, presence, and genuine compassion.
                </p>
                <p>
                  From there I went on to work in telemetry, medical-surgical, and oncology units at St. Joseph&rsquo;s Hospital and HonorHealth, where I built deep clinical expertise in post-surgical recovery, wound care, pain management, central line care, and complex disease management.
                </p>
                <p>
                  I also spent several years in addiction and detox nursing at Gallus Detox, where I learned how much courage it takes for people to ask for help — and how important it is to meet them with kindness when they do.
                </p>
                <p>
                  Today I bring all of that experience directly to you — in the comfort of your own home. I&rsquo;m board certified, detail-oriented, and deeply committed to the kind of care that treats you as a whole person — not just a patient.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  ['Post-Surgical Recovery', 'Wound Care & PICC Lines'],
                  ['Pain Management', 'Cardiac Telemetry'],
                  ['Oncology Nursing', 'Addiction & Detox Nursing'],
                  ['Patient Education', 'Complex Disease Management'],
                ].map(([area]) => (
                  <div key={area} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-navy/65 text-sm font-inter">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gold/20 p-8 text-center">
              <div className="font-playfair text-4xl font-semibold text-gold mb-2">BSN</div>
              <div className="w-8 h-px bg-gold/40 mx-auto mb-4" />
              <div className="text-cream font-playfair text-lg mb-1">Bachelor of Science</div>
              <div className="text-cream/55 font-inter text-sm">in Nursing Science</div>
            </div>
            <div className="border border-gold/20 p-8 text-center">
              <div className="font-playfair text-4xl font-semibold text-gold mb-2">RN-BC</div>
              <div className="w-8 h-px bg-gold/40 mx-auto mb-4" />
              <div className="text-cream font-playfair text-lg mb-1">Board Certified</div>
              <div className="text-cream/55 font-inter text-sm">Medical-Surgical Nursing</div>
            </div>
            <div className="border border-gold/20 p-8 text-center">
              <div className="font-playfair text-4xl font-semibold text-gold mb-2">17+</div>
              <div className="w-8 h-px bg-gold/40 mx-auto mb-4" />
              <div className="text-cream font-playfair text-lg mb-1">Years of Experience</div>
              <div className="text-cream/55 font-inter text-sm">Across Major Health Systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume / Experience */}
      <section className="bg-cream-dark py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Professional History</div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-navy mb-4">
              Clinical Experience
            </h2>
            <div className="gold-divider" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 transform md:-translate-x-1/2" />

            <div className="space-y-10">
              {experience.map(({ title, employer, location, period, current, description }, index) => (
                <div
                  key={employer + period}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-gold transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                    {current && (
                      <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white border border-cream-deeper shadow-sm p-6 md:p-7">
                      {current && (
                        <span className="inline-block bg-gold/10 text-gold text-xs font-inter font-semibold tracking-wide px-2 py-1 rounded mb-3">
                          Current
                        </span>
                      )}
                      <div className="text-gold font-inter text-xs font-medium tracking-wide uppercase mb-2">
                        {period}
                      </div>
                      <h3 className="font-playfair text-lg font-semibold text-navy mb-1">
                        {title}
                      </h3>
                      <div className="text-navy-light font-inter text-sm font-medium mb-1">
                        {employer}
                      </div>
                      <div className="text-navy/50 font-inter text-xs mb-4">
                        {location}
                      </div>
                      <p className="text-navy/60 font-inter text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Endorsements */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="text-gold text-xs font-inter font-medium tracking-widest uppercase mb-4">
              Professional Endorsements
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-cream mb-4">
              What Colleagues Say
            </h2>
            <div className="w-16 h-px bg-gold mx-auto my-6" />
            <p className="text-cream/50 font-inter text-sm max-w-xl mx-auto leading-relaxed">
              Excerpts from Danielle&rsquo;s 2022–2023 annual performance review at HonorHealth — multiple categories rated <span className="text-gold">Exceptional Performer</span>.
            </p>
          </div>
          <Testimonials items={allTestimonials} variant="dark" showAll />
        </div>
      </section>

      {/* Education */}
      <section className="bg-cream py-16 md:py-20 border-y border-cream-deeper">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <div className="section-label mb-4">Education</div>
            <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-navy">
              Academic Foundation
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="flex justify-center">
            <div className="bg-white border border-cream-deeper shadow-sm p-8 md:p-10 max-w-lg w-full text-center">
              <div className="w-14 h-14 mx-auto mb-5 text-gold">
                <EducationIcon />
              </div>
              <div className="font-playfair text-xl font-semibold text-navy mb-1">
                Associate of Applied Science in Nursing
              </div>
              <div className="w-8 h-px bg-gold mx-auto my-4" />
              <div className="text-navy-light font-inter font-medium text-sm mb-1">
                Gateway Community College
              </div>
              <div className="text-navy/50 font-inter text-sm mb-1">
                Phoenix, AZ
              </div>
              <div className="text-gold font-inter text-xs font-medium tracking-wide uppercase mt-3">
                Class of 2009
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-pale py-20 md:py-24 border-y border-gold/20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="section-label mb-4">Work With Me</div>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-navy mb-4">
            Let&rsquo;s Talk About Your Care
          </h2>
          <div className="gold-divider" />
          <p className="text-navy/65 font-inter text-base leading-relaxed mb-8">
            My experience, credentials, and compassionate approach are now available to you directly — in your home, on your terms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-navy">
              Get in Touch
            </Link>
            <Link href="/services" className="btn-outline-gold">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function EducationIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  )
}
