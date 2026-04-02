// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS / PROFESSIONAL ENDORSEMENTS
//
// To add a new testimonial:
//   1. Copy one of the objects below
//   2. Paste it at the top of the `testimonials` array
//   3. Fill in your quote, name, title, and context
//   4. Set `featured: true` to show it prominently on the home page
//   5. Save, commit, and push — Netlify will redeploy automatically
//
// To remove one: delete its object from the array.
// To reorder: move objects up or down in the array.
// ─────────────────────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string
  quote: string
  name: string
  title: string
  context: string        // e.g. "HonorHealth · 2023" or "Private Patient · Phoenix, AZ"
  featured?: boolean     // show on home page (limit to 3)
  category?: 'supervisor' | 'colleague' | 'patient' | 'family'
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      "I have heard Danielle many times tell her patients she is there to help them — often providing the 'why' and helping to educate and advocate for them. She asks questions to seek to understand and listens rather than assumes. She is considerate, thoughtful, and open-hearted.",
    name: 'Jamie Jergenson',
    title: 'Nurse Manager, Med-Surg 4th Floor',
    context: 'HonorHealth · 2023',
    featured: true,
    category: 'supervisor',
  },
  {
    id: '2',
    quote:
      'Danielle involves family and patients in designing and delivering her care. She calls family to give updates, and rounds with physicians to hear conversations bedside while helping to advocate for her patients. She follows up on the healthcare plan by reaching out to other departments and physicians for clarification and communication of needs.',
    name: 'Jamie Jergenson',
    title: 'Nurse Manager, Med-Surg 4th Floor',
    context: 'HonorHealth · 2023',
    featured: true,
    category: 'supervisor',
  },
  {
    id: '3',
    quote:
      'Danielle honors and advocates for her patients by understanding their needs, feelings, and perspective. She is honest and genuine — and treats others the way she would want to be treated.',
    name: 'Jamie Jergenson',
    title: 'Nurse Manager, Med-Surg 4th Floor',
    context: 'HonorHealth · 2023',
    featured: true,
    category: 'supervisor',
  },
  {
    id: '4',
    quote:
      'Danielle is not phased by change and demonstrates adaptability. She is calm and flexible when it comes to patient care and the needs of the unit. Danielle is able to describe in detail her patient assessments based on her thorough examination and review of patient history.',
    name: 'Jamie Jergenson',
    title: 'Nurse Manager, Med-Surg 4th Floor',
    context: 'HonorHealth · 2023',
    featured: false,
    category: 'supervisor',
  },
  {
    id: '5',
    quote:
      'I often see Danielle engaged and having conversations with patients and their families — laughing and sharing a memory. She is personable, kind, and genuinely present with every person in her care.',
    name: 'Jamie Jergenson',
    title: 'Nurse Manager, Med-Surg 4th Floor',
    context: 'HonorHealth · 2023',
    featured: false,
    category: 'supervisor',
  },
  {
    id: '6',
    quote:
      'You are always so patient and kind. Your personality is just what new nurses and patients need. I enjoy working with you and appreciate the help you offer to your peers.',
    name: 'Jamie Jergenson',
    title: 'Nurse Manager, Med-Surg 4th Floor',
    context: 'HonorHealth · 2023',
    featured: false,
    category: 'supervisor',
  },
]

// Helpers — used by components, no need to edit these
export const featuredTestimonials = testimonials.filter((t) => t.featured)
export const allTestimonials = testimonials
