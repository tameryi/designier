import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export type PostFrontmatter = {
  title: string
  date: string
  excerpt?: string
  thumbnail?: string
  ogImage?: string
}

export type Post = {
  slug: string
  frontmatter: PostFrontmatter
  content: string
  readTimeMinutes: number
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
}

export function getPostBySlug(slug: string): Post | null {
  const realSlug = slug.replace(/\.(md|mdx)$/i, '')
  const mdxPath = path.join(POSTS_DIR, `${realSlug}.mdx`)
  const mdPath = path.join(POSTS_DIR, `${realSlug}.md`)
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null
  if (!filePath) return null

  const file = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(file)

  const fm = data as Partial<PostFrontmatter>
  if (!fm.title || !fm.date) {
    throw new Error(`Post ${realSlug} is missing required frontmatter: title and date`)
  }

  const stats = readingTime(content)

  return {
    slug: realSlug,
    frontmatter: {
      title: fm.title,
      date: fm.date,
      excerpt: fm.excerpt ?? undefined,
      thumbnail: fm.thumbnail ?? undefined,
      ogImage: fm.ogImage ?? undefined,
    },
    content,
    readTimeMinutes: Math.max(1, Math.round(stats.minutes)),
  }
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug)!)
    .filter(Boolean)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}


