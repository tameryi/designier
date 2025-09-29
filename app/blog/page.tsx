import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog – Designier',
  description: 'Insights on design, frontend, and product from Designier.',
}

export default async function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Blog</h1>
        <div className="mt-10 grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="card p-6 border border-white/10 transition hover:border-white/20 hover:shadow-lg hover:shadow-black/30">
                <div className="flex gap-6 items-start">
                  <div className="w-28 h-20 shrink-0 overflow-hidden rounded-lg bg-gray-800">
                    <Image
                      src={post.frontmatter.thumbnail || '/og/og.png'}
                      alt={post.frontmatter.title}
                      width={224}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-medium text-white">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-sm text-gray-300 mt-1">{new Date(post.frontmatter.date).toLocaleDateString()}</p>
                    {post.frontmatter.excerpt && (
                      <p className="text-gray-300 mt-2">{post.frontmatter.excerpt}</p>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


