import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Designier – UI/UX Design & Frontend Development',
  description:
    'Portfolio of Tamer Yılmaz, designer and frontend developer specializing in SaaS and Travel Tech.',
  icons: {
    icon: '/favicon.svg',
  },
}

const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage', display: 'swap' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className={`${bricolage.variable} gradient-bg text-foreground antialiased min-h-screen font-sans`}>
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


