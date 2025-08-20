import type { Metadata } from 'next'
import Image from 'next/image'

type WorkSlug = 'fibula' | 'bilyoner' | 'lobier'

type Work = {
  title: string
  role: string
  industry: string
  challenge: string
  solution: string
  result: string
  image: string
}

const works: Record<WorkSlug, Work> = {
  fibula: {
    title: 'Fibula',
    role: 'Design & Frontend Development',
    industry: 'Travel',
    challenge:
      'Fibula needed a modern B2C travel platform with complex booking flows for flights and hotels.',
    solution:
      'I designed and developed the frontend using React, ensuring smooth integration with backend APIs. The focus was on speed, usability, and a clean UI that makes travel booking simple.',
    result:
      'The platform launched successfully, offering customers a seamless booking experience and improving overall conversions.',
    image: '/images/fibula1.webp',
  },
  bilyoner: {
    title: 'Bilyoner',
    role: 'Frontend Development (Figma to Code)',
    industry: 'Betting / Gaming',
    challenge:
      'Bilyoner required a pixel-perfect implementation of Figma designs into a fully functional web interface.',
    solution:
      'I converted Figma designs into responsive, production-ready code, with attention to detail and performance.',
    result:
      'The updated frontend improved user experience, with faster load times and a polished UI across devices.',
    image: '/images/bilyoner1.webp',
  },
  lobier: {
    title: 'Lobier AI',
    role: 'Design & React Development',
    industry: 'SaaS / AI',
    challenge:
      'Hotels needed a way to provide 24/7 guest engagement and booking support.',
    solution:
      'I designed the interface, created marketing visuals, and developed the frontend in React. The chatbot was designed to be simple, friendly, and easy to integrate.',
    result:
      'Lobier AI is now being tested with boutique hotels, providing real-time guest support and increasing direct bookings.',
    image: '/images/lobier1.webp',
  },
}

export function generateStaticParams(): { slug: WorkSlug }[] {
  return Object.keys(works).map((key) => ({ slug: key as WorkSlug }))
}

export function generateMetadata({ params }: { params: { slug: WorkSlug } }): Metadata {
  const work = works[params.slug]
  return {
    title: `${work.title} – Designier`,
    description: `${work.title}: ${work.role} for ${work.industry}. ${work.challenge}`,
  }
}

export default function WorkDetailPage({ params }: { params: { slug: WorkSlug } }) {
  const work = works[params.slug]
  return (
    <section className="section">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">{work.title}</h1>
          <p className="text-sm text-gray-300 mt-2">Role: {work.role} · Industry: {work.industry}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="text-xl font-medium text-white">Challenge</h2>
              <p className="text-gray-300 mt-2">{work.challenge}</p>
            </div>
            <div className="card p-6">
              <h2 className="text-xl font-medium text-white">Solution</h2>
              <p className="text-gray-300 mt-2">{work.solution}</p>
            </div>
            <div className="card p-6">
              <h2 className="text-xl font-medium text-white">Result</h2>
              <p className="text-gray-300 mt-2">{work.result}</p>
            </div>
          </div>
          <div className="card overflow-hidden">
            <Image src={work.image} alt={work.title} width={1200} height={900} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}


