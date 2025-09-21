import { CaseStudyCard } from '@/components/case-study-card'

const CASE_STUDIES = [
  {
    title: 'Lobier AI',
    slug: 'lobier',
    role: 'Design & React Development',
    industry: 'SaaS / AI',
    description: 'Designed and developed an AI chatbot interface for hotels.',
    image: '/images/lobier1.webp',
  },
  {
    title: 'Fibula',
    slug: 'fibula',
    role: 'Design & Frontend Development',
    industry: 'Travel',
    description: 'Designed and developed the frontend for a modern travel booking platform with flights and hotels.',
    image: '/images/fibula.webp',
  },
  // {
  //   title: 'Bilyoner',
  //   slug: 'bilyoner',
  //   role: 'Frontend Development (Figma to Code)',
  //   industry: 'Betting / Gaming',
  //   description: 'Converted Figma designs into responsive, production-ready code.',
  //   image: '/images/bilyoner-p.webp',
  // },
]

export function CaseStudies() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center text-white">Case Studies</h2>
        <div className="mt-10 grid grid-cols-1 gap-6">
          {CASE_STUDIES.map((c) => (
            <CaseStudyCard key={c.slug} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}


