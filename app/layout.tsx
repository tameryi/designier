import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import CursorTrail from '@/components/cursor-trail'
import MagneticButton from '@/components/magnetic-button'

export const metadata: Metadata = {
  metadataBase: new URL('https://designier.co'),
  title: 'Designier – UI/UX Design & Frontend Development',
  description:
    'Portfolio of Tamer Yılmaz, designer and frontend developer specializing in Startups and Travel Tech.',
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: 'hgZ0Zm1wct8KV6HfBLP6-75WR0UbYP1ov4JxREIZ7ec',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://designier.co/',
    title: 'Design & Frontend Development for Startups and Remote Teams',
    description:
      'Portfolio of Tamer Yılmaz, designer and frontend developer specializing in Startups and Travel Tech.',
    siteName: 'Designier',
    images: [
      {
        url: '/og/og.png',
        width: 1200,
        height: 630,
        alt: 'Designier – Tamer Yılmaz Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tameryilma' as any,
    creator: '@tameryilma' as any,
    title: 'Designier – UI/UX & Frontend',
    description:
      'Portfolio of Tamer Yılmaz, designer and frontend developer specializing in Startups and Travel Tech.',
    images: ['/og/og.png'],
  },
}

const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage', display: 'swap' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className={`${bricolage.variable} gradient-bg text-foreground antialiased min-h-screen font-sans`}>

        {/* Google Ads (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-10877799252" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10877799252');
          `}
        </Script>

        {/* Google Analytics 4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HBYJ2JQQ59" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HBYJ2JQQ59');
          `}
        </Script>

        {/* Twitter universal website tag (uwt.js) */}
        <Script id="twitter-pixel" strategy="afterInteractive">
          {`
            !(function(e,t,n,s,u,a){
              e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments)},
              s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))
            })(window,document,'script');
            twq('init','o8566');
            twq('track','PageView');
          `}
        </Script>
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


