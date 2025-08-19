import { CaseStudyCard } from '@/components/case-study-card'

const CASE_STUDIES = [
  {
    title: 'Rafeef B2C',
    slug: 'rafeef',
    role: 'Frontend Development',
    industry: 'Travel',
    description: 'Developed the frontend for a modern travel booking platform with flights and hotels.',
    image: '/images/rafeef.svg',
  },
  {
    title: 'Bilyoner',
    slug: 'bilyoner',
    role: 'Frontend Development (Figma to Code)',
    industry: 'Betting / Gaming',
    description: 'Converted Figma designs into responsive, production-ready code.',
    image: '/images/bilyoner.svg',
  },
  {
    title: 'Lobier AI',
    slug: 'lobier',
    role: 'Design & React Development',
    industry: 'Travel / AI',
    description: 'Designed and developed an AI chatbot interface for hotels.',
    image: '/images/lobier.svg',
  },
]

export function CaseStudies() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center text-white">Case Studies</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((c) => (
            <CaseStudyCard key={c.slug} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}


