import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Designier – UI/UX Design & Frontend Development',
  description:
    'Portfolio of Tamer Yılmaz, designer and frontend developer specializing in SaaS and Travel Tech.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="gradient-bg text-foreground antialiased min-h-screen">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


