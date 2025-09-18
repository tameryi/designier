import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { VideoCollage } from '@/components/video-collage'
import { CaseStudies } from '@/components/case-studies'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <VideoCollage />
      <CaseStudies />
      <About />
      <Contact />
    </>
  )
}


