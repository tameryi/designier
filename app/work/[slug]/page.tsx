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
  portfolioImages?: Array<{
    src: string
    layout: 'full' | 'four' | 'half' | 'third' // full = 100% width, half = 50% width, third = 33% width
    customClass?: string
  }>
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
    image: '/images/fibula.webp',
    portfolioImages: [
      { src: '/images/fibula-d1.webp', layout: 'full' }, // 1 full image
      { src: '/images/fibula-m1.png', layout: 'third', customClass: 'rounded-2xl border border-white/10' }, // 1 half - 1 half (2 images side by side)
      { src: '/images/fibula-m2.png', layout: 'third', customClass: 'rounded-2xl border border-white/10' }, // 1 half - 1 half (2 images side by side)
      { src: '/images/fibula-m3.png', layout: 'third', customClass: 'rounded-2xl border border-white/10' }, // 1 image - 1 image - 1 image (3 images side by side)
      { src: '/images/fibula-d2.webp', layout: 'full' }, // 1 image - 1 image - 1 image (3 images side by side)
      { src: '/images/fibula-d3.webp', layout: 'full' }, // 1 image - 1 image - 1 image (3 images side by side)
    ],
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
    image: '/images/bilyoner-p.webp',
    portfolioImages: [
      { src: '/images/bilyoner1.jpg', layout: 'full' }, // 1 full image
      { src: '/images/bilyoner2.png', layout: 'third' }, // 1 half - 1 half (2 images side by side)
      { src: '/images/bilyoner4.png', layout: 'third' }, // 1 half - 1 half (2 images side by side)
      { src: '/images/bilyoner9.png', layout: 'third' }, // 1 image - 1 image - 1 image (3 images side by side)
      { src: '/images/bilyoner3.jpg', layout: 'half' }, // 1 image - 1 image - 1 image (3 images side by side)
      { src: '/images/bilyoner5.jpg', layout: 'half' }, // 1 image - 1 image - 1 image (3 images side by side)
    ],
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
    portfolioImages: [
      { src: '/images/lobier-d1.png', layout: 'full' }, // 1 full image
      { src: '/images/lobier3.png', layout: 'third', customClass: 'rounded-2xl' }, // 1 half - 1 half (2 images side by side)
      { src: '/images/lobier9.png', layout: 'third', customClass: 'rounded-2xl border border-white/10' }, // 1 half - 1 half (2 images side by side)
      { src: '/images/lobier5.png', layout: 'third', customClass: 'rounded-2xl border border-white/10' }, // 1 half - 1 half (2 images side by side)
      { src: '/images/lobier2.jpg', layout: 'full' }, // 1 image - 1 image - 1 image (3 images side by side)
      { src: '/images/lobier6.png', layout: 'full' }, // 1 image - 1 image - 1 image (3 images side by side)
      { src: '/images/lobier-d2.png', layout: 'full' }, // 1 image - 1 image - 1 image (3 images side by side)
    ],
  },
}

export function generateStaticParams(): { slug: WorkSlug }[] {
  return Object.keys(works).map((key) => ({ slug: key as WorkSlug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: WorkSlug }> }): Promise<Metadata> {
  const { slug } = await params
  const work = works[slug]
  return {
    title: `${work.title} – Designier`,
    description: `${work.title}: ${work.role} for ${work.industry}. ${work.challenge}`,
  }
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: WorkSlug }> }) {
  const { slug } = await params
  const work = works[slug]
  return (
    <>
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
              <Image src={work.image} alt={work.title} width={1200} height={900} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {work.portfolioImages && work.portfolioImages.length > 0 && (
        <section className="section bg-gray-900/50">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Portfolio</h2>
              <p className="text-gray-300 mt-2">A showcase of the design and development work</p>
            </div>
            
            <div className="grid grid-cols-6 gap-10">
              {work.portfolioImages.map((image, index) => {
                let colSpan = 'md:col-span-1';
                
                if (image.layout === 'full') {
                  colSpan = 'col-span-6';
                } else if (image.layout === 'four') {
                  colSpan = 'col-span-4'; 
                } else if (image.layout === 'half') {
                  colSpan = 'col-span-3'; 
                } else if (image.layout === 'third') {
                  colSpan = 'col-span-2';
                }
                
                return (
                  <div 
                    key={index} 
                    className={`overflow-hidden rounded-lg group ${colSpan}`}
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image 
                        src={image.src} 
                        alt={`${work.title} portfolio image ${index + 1}`} 
                        width={800} 
                        height={600} 
                        className={`w-full h-auto rounded-lg ${image.customClass}`} 
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  )
}


