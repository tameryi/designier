import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
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

  const dateStr = new Date(post.frontmatter.date).toLocaleDateString()

  return (
    <section className="section">
      <div className="container">
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

        <article className="prose prose-invert max-w-none">
          {/* RSC MDX renderer */}
          <MDXRemote source={post.content} />
        </article>
      </div>
    </section>
  )
}


