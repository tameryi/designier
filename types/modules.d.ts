declare module 'next-mdx-remote/rsc' {
  import type { ComponentProps, ReactElement } from 'react'
  export function MDXRemote(props: { source: string } & Record<string, unknown>): ReactElement
}

declare module 'gray-matter' {
  const matter: (input: string) => { data: Record<string, unknown>; content: string }
  export default matter
}

declare module 'reading-time' {
  type ReadingStats = { time: number; words: number; minutes: number; text: string }
  const readingTime: (text: string) => ReadingStats
  export default readingTime
}


