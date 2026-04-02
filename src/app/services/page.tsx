import Link from 'next/link'

const services = [
  {
    title: 'Post-Surgical Recovery Care',
    description:
      'Comprehensive in-home care following any surgical procedure. I manage wound care, monitor for complications, coordinate with your surgical team, and guide your recovery every step of the way — so you heal safely and comfortably at home.',
    details: ['Incision & wound monitoring', 'Drain management', 'Medication administration', 'Pain assessment & management', 'Infection prevention', 'Communication with surgical team'],
    icon: <SurgicalIcon />,
  },
  {
    title: 'Overnight Nursing Care',
    description:
      'Dedicated overnight presence for patients who need monitoring, assistance, or simply the reassurance of a skilled nurse nearby. Rest easy knowing that a licensed professional is watching over your loved one through the night.',
    details: ['Vital sign monitoring', 'Medication scheduling', 'Fall prevention', 'Emergency response', 'Comfort positioning', 'Family peace of mind'],
    icon: <MoonIcon />,
  },
  {
    title: 'Live-In Daily Care',
    description:
      'Around-the-clock clinical care for patients with complex or ongoing medical needs. I provide continuous daily support that maintains clinical standards while preserving the dignity and comfort of home life.',
    details: ['24-hour clinical oversight', 'Daily assessment & documentation', 'Medication management', 'Care coordination', 'Family communication', 'Emergency preparedness'],
    icon: <HomeIcon />,
  },
  {
    title: 'IV Therapy & Wound Care',
    description:
      'Hospital-grade IV therapy and advanced wound care management delivered at home. With years of experience in clinical settings, I provide skilled treatment that meets the highest standards of care.',
    details: ['IV line management & PICC care', 'Infusion therapy', 'Complex wound assessment', 'Dressing changes', 'Debridement assistance', 'Healing progress tracking'],
    icon: <IVIcon />,
  },
  {
    title: 'Postpartum & Newborn Support',
    description:
      'Compassionate, expert support for new mothers and newborns during the critical postpartum period. I provide clinical monitoring for mother and baby alongside practical education and emotional support.',
    details: ['Postpartum assessment', 'Newborn monitoring', 'Breastfeeding support', 'Medication management', 'Warning sign education', 'Emotional wellness check-ins'],
    icon: <BabyIcon />,
  },
  {
    title: 'Elder Companion & Wellness Visits',
    description:
      'Scheduled wellness visits combining clinical assessment with genuine companionship. Ideal for aging adults who want to maintain independence while having a trusted medical professional monitoring their health.',
    details: ['Vital sign assessment', 'Medication review & reconciliation', 'Fall risk evaluation', 'Cognitive wellness screening', 'Nutrition & hydration monitoring', 'Family status updates'],
    icon: <HeartIcon />,
  },
  {
    title: 'Pediatric Private Nursing',
    description:
      'Specialized in-home nursing care for children with medical needs. I work closely with pediatric care teams and families to provide skilled, child-friendly care that keeps kids comfortable and parents informed.',
    details: ['Pediatric assessment & monitoring', 'Medical equipment management', 'Medication administration', 'Care team coordination', 'Parent education & support', 'School & activity coordination'],
    icon: <PediatricIcon />,
  },
  {
    title: 'Corporate & Event Nursing',
    description:
      'Professional nursing presence for corporate events, private gatherings, film sets, and high-profile occasions. Discreet, prepared, and ready to respond — so your event runs safely and smoothly.',
    details: ['On-site medical assessment', 'Emergency first response', 'Medication administration', 'Confidential & discreet service', 'Health screening capabilities', 'Coordination with local EMS'],
    icon: <EventIcon />,
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header pt-40 md:pt-48">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-gold text-xs font-inter font-medium tracking-widest uppercase mb-5">
            What I Offer
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-cream mb-4">
            Private Nursing Services
          </h1>
          <div className="w-16 h-px bg-gold mx-auto my-6" />
          <p className="text-cream/70 font-inter text-base md:text-lg leading-relaxed">
            Every service is tailored to you. Whether you need short-term post-surgical support or ongoing clinical care, I bring the same expertise and dedication to every patient.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ title, description, details, icon }) => (
              <div
                key={title}
                className="bg-white border border-cream-deeper shadow-sm hover:shadow-md transition-all duration-300 p-8 md:p-10 group"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-12 h-12 text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                  <div>
                    <h2 className="font-playfair text-xl md:text-2xl font-semibold text-navy mb-2 group-hover:text-navy-light transition-colors">
                      {title}
                    </h2>
                    <div className="w-8 h-px bg-gold" />
                  </div>
                </div>

                <p className="text-navy/65 font-inter text-sm md:text-base leading-relaxed mb-6">
                  {description}
                </p>

                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-navy/55 text-xs font-inter">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="bg-cream-dark py-16 border-y border-cream-deeper">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="section-label mb-4">Pricing</div>
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-navy mb-4">
            Tailored to Your Situation
          </h2>
          <div className="gold-divider" />
          <p className="text-navy/65 font-inter text-base leading-relaxed mb-6">
            Every care situation is unique, and pricing reflects the type of care, duration, and level of clinical complexity involved. I believe in transparent, honest conversations about cost — please reach out and we&rsquo;ll discuss what&rsquo;s right for you.
          </p>
          <p className="text-navy/50 font-inter text-sm italic">
            Serving Scottsdale &amp; Phoenix, AZ and surrounding communities.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="text-gold text-xs font-inter font-medium tracking-widest uppercase mb-4">
              My Approach
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-cream mb-4">
              What to Expect
            </h2>
            <div className="w-16 h-px bg-gold mx-auto my-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Consultation', description: 'We discuss your situation, medical history, and specific care needs over a phone or in-person consultation.' },
              { step: '02', title: 'Care Plan Design', description: 'I develop a personalized care plan in coordination with your existing healthcare providers.' },
              { step: '03', title: 'Seamless Start', description: 'Care begins on your schedule. I arrive prepared, professional, and focused entirely on you.' },
              { step: '04', title: 'Ongoing Communication', description: 'You and your family receive regular updates and direct access to me throughout the engagement.' },
            ].map(({ step, title, description }) => (
              <div key={step} className="text-center">
                <div className="font-playfair text-4xl font-semibold text-gold/30 mb-4">{step}</div>
                <div className="w-8 h-px bg-gold mx-auto mb-5" />
                <h3 className="font-playfair text-lg font-semibold text-cream mb-3">{title}</h3>
                <p className="text-cream/55 font-inter text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-pale py-20 md:py-24 border-y border-gold/20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="section-label mb-4">Let&rsquo;s Connect</div>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-navy mb-4">
            Ready to Discuss Your Care?
          </h2>
          <div className="gold-divider" />
          <p className="text-navy/65 font-inter text-base leading-relaxed mb-8">
            Reach out today and I&rsquo;ll respond personally to discuss your needs and how I can help.
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

function SurgicalIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  )
}

function IVIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  )
}

function BabyIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  )
}

function PediatricIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  )
}

function EventIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  )
}
