import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-cream">
      {/* Top footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand */}
          <div>
            <div className="font-playfair text-2xl font-semibold text-cream mb-2">
              My Private Nurse
            </div>
            <div className="text-gold text-xs font-medium tracking-widest uppercase mb-5">
              Danielle Olich, BSN, RN-BC
            </div>
            <p className="text-cream/70 text-sm font-inter leading-relaxed">
              Hospital-grade nursing expertise delivered with a personal touch — in the comfort of your home.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-gold text-xs font-medium tracking-widest uppercase mb-5">
              Navigation
            </div>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About & Resume' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-cream/70 hover:text-gold text-sm font-inter transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="text-gold text-xs font-medium tracking-widest uppercase mb-5">
              Contact
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:4803351671"
                className="text-cream/70 hover:text-gold text-sm font-inter transition-colors duration-200 flex items-center gap-2"
              >
                <PhoneIcon />
                480-335-1671
              </a>
              <a
                href="mailto:danielle@myprivatenurse.health"
                className="text-cream/70 hover:text-gold text-sm font-inter transition-colors duration-200 flex items-center gap-2"
              >
                <EmailIcon />
                danielle@myprivatenurse.health
              </a>
              <div className="text-cream/70 text-sm font-inter flex items-center gap-2">
                <LocationIcon />
                Scottsdale &amp; Phoenix, AZ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="w-full h-px bg-gold/20" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-cream/40 text-xs font-inter">
          &copy; 2025 My Private Nurse &mdash; Danielle Olich, BSN, RN-BC. All rights reserved.
        </p>
        <p className="text-cream/40 text-xs font-inter">
          Scottsdale &amp; Phoenix, AZ &bull; myprivatenurse.health
        </p>
      </div>
    </footer>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}
