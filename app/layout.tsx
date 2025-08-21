import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import CursorTrail from '@/components/cursor-trail'

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
        <CursorTrail />
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


