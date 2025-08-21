'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

type Props = {
  title: string
  slug: string
  role: string
  industry: string
  description: string
  image: string
}

export function CaseStudyCard({ title, slug, role, industry, description, image }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Link href={`/work/${slug}`} className="block group">
      <div 
        ref={cardRef}
        className={`card overflow-hidden hover:bg-white/[0.07] transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <Image src={image} alt={title} width={1200} height={900} className="w-full h-auto transition-transform group-hover:scale-[1.01]" />
        <div className="p-5">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="text-xs text-gray-300 mt-1">Role: <span className="text-gray-100">{role}</span> · Industry: <span className="text-gray-100">{industry}</span></p>
          <p className="text-gray-300 mt-3">{description}</p>
        </div>
      </div>
    </Link>
  )
}


