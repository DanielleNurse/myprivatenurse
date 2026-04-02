import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Danielle Olich, BSN, RN-BC | Private Duty Nurse | Scottsdale & Phoenix, AZ',
  description:
    'Expert private duty nursing care in the comfort of your home. Post-surgical recovery, complex care management, wound care, and more. Serving Scottsdale & Phoenix, AZ.',
  keywords:
    'private duty nurse, Scottsdale nurse, Phoenix nurse, post-surgical care, home nursing, RN, concierge nursing',
  openGraph: {
    title: 'Danielle Olich, BSN, RN-BC | Private Duty Nurse',
    description:
      'Hospital-grade nursing expertise delivered with a personal touch — right to your door in Scottsdale & Phoenix.',
    url: 'https://myprivatenurse.health',
    siteName: 'My Private Nurse',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter bg-cream text-navy antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
