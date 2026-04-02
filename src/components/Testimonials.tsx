import { type Testimonial } from '@/data/testimonials'

interface TestimonialsProps {
  items: Testimonial[]
  variant?: 'light' | 'dark'
  showAll?: boolean
}

export default function Testimonials({ items, variant = 'light', showAll = false }: TestimonialsProps) {
  const displayed = showAll ? items : items.slice(0, 3)

  if (variant === 'dark') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayed.map((t) => (
          <div key={t.id} className="border border-gold/20 p-8 flex flex-col hover:border-gold/40 transition-colors duration-300">
            <QuoteMarkDark />
            <blockquote className="text-cream/75 font-inter text-sm leading-relaxed flex-1 mt-4 mb-6 italic">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div>
              <div className="w-8 h-px bg-gold mb-4" />
              <div className="text-cream font-playfair text-base font-semibold">{t.name}</div>
              <div className="text-gold text-xs font-inter mt-0.5">{t.title}</div>
              <div className="text-cream/40 text-xs font-inter mt-0.5">{t.context}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {displayed.map((t) => (
        <div key={t.id} className="bg-white border border-cream-deeper shadow-sm hover:shadow-md transition-shadow duration-300 p-8 flex flex-col">
          <QuoteMarkLight />
          <blockquote className="text-navy/65 font-inter text-sm leading-relaxed flex-1 mt-4 mb-6 italic">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div>
            <div className="w-8 h-px bg-gold mb-4" />
            <div className="text-navy font-playfair text-base font-semibold">{t.name}</div>
            <div className="text-gold text-xs font-inter font-medium mt-0.5">{t.title}</div>
            <div className="text-navy/40 text-xs font-inter mt-0.5">{t.context}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Single large featured quote — for hero areas
export function FeaturedQuote({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <svg className="w-10 h-10 text-gold/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
        <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.654 1.346-3 3-3V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.654 1.346-3 3-3V8z" />
      </svg>
      <blockquote className="font-playfair text-xl md:text-2xl text-navy italic leading-relaxed mb-8">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="w-8 h-px bg-gold mx-auto mb-4" />
      <div className="text-navy font-inter font-semibold text-sm">{testimonial.name}</div>
      <div className="text-gold text-xs font-inter font-medium mt-1">{testimonial.title}</div>
      <div className="text-navy/40 text-xs font-inter mt-0.5">{testimonial.context}</div>
    </div>
  )
}

function QuoteMarkLight() {
  return (
    <svg className="w-8 h-8 text-gold/30" fill="currentColor" viewBox="0 0 32 32">
      <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.654 1.346-3 3-3V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.654 1.346-3 3-3V8z" />
    </svg>
  )
}

function QuoteMarkDark() {
  return (
    <svg className="w-8 h-8 text-gold/40" fill="currentColor" viewBox="0 0 32 32">
      <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.654 1.346-3 3-3V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.654 1.346-3 3-3V8z" />
    </svg>
  )
}
