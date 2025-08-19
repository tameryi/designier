import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  slug: string
  role: string
  industry: string
  description: string
  image: string
}

export function CaseStudyCard({ title, slug, role, industry, description, image }: Props) {
  return (
    <Link href={`/work/${slug}`} className="block group">
      <div className="card overflow-hidden hover:bg-white/[0.07]">
        <Image src={image} alt={title} width={1200} height={900} className="w-full h-auto transition-transform group-hover:scale-[1.01]" />
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-300 mt-1">Role: <span className="text-gray-100">{role}</span> · Industry: <span className="text-gray-100">{industry}</span></p>
          <p className="text-gray-300 mt-3">{description}</p>
        </div>
      </div>
    </Link>
  )
}


