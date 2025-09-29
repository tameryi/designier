import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  const slugs = getAllPosts().map((p) => ({ slug: p.slug }))
  return slugs
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const og = post.frontmatter.ogImage || post.frontmatter.thumbnail || '/og/og.png'
  return {
    title: `${post.frontmatter.title} – Designier`,
    description: post.frontmatter.excerpt,
    openGraph: {
      images: [og],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const dateStr = formatDate(post.frontmatter.date)

  return (
    <section className="section">
      <div className="container !max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">{post.frontmatter.title}</h1>
          <p className="text-sm text-gray-300 mt-2">{dateStr} · {post.readTimeMinutes} min read</p>
        </div>

        {post.frontmatter.thumbnail && (
          <div className="mb-8 rounded-2xl overflow-hidden">
            <Image
              src={post.frontmatter.thumbnail}
              alt={post.frontmatter.title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <article className="prose prose-invert max-w-none font-inter prose-headings:scroll-mt-24 prose-h2:text-white prose-h2:mt-8 prose-h2:mb-3 prose-h2:text-2xl prose-p:leading-7 prose-li:leading-7" dangerouslySetInnerHTML={{ __html: (await remark().use(remarkGfm).use(remarkHtml).process(post.content)).toString() }} />
      </div>
    </section>
  )
}

function formatDate(input: string): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).formatToParts(new Date(input))
  const day = parts.find(p => p.type === 'day')?.value ?? ''
  const month = parts.find(p => p.type === 'month')?.value ?? ''
  const year = parts.find(p => p.type === 'year')?.value ?? ''
  return `${day} ${month} ${year}`
}


