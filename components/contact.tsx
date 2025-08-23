"use client"
import { ContactForm } from '@/components/contact-form'
import { Envelope, LinkedinLogo } from '@phosphor-icons/react'

export function Contact() {
  return (
    <section id="contact" className="section container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Side - Title and Description */}
        <div className="lg:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Let's Talk</h2>
          <p className="text-gray-300 mt-4 lg:mt-6 text-lg">
            Interested in working together? I'm available for remote roles and freelance projects worldwide, with
            availability in CET/EET time zones.
          </p>
          
          {/* Contact Buttons */}
          <div className="mt-8 lg:mt-10 flex flex-col md:flex-row gap-4">
            <a 
              href="mailto:tamer@designier.co" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 lg:w-1/2 bg-black hover:bg-white/80 hover:text-black text-white rounded-lg transition-colors duration-200 border border-white/20 hover:border-white/30"
            >
              <Envelope size={20} />
              <span className="font-medium">Email</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/tameryilmaz/" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 lg:w-1/2 bg-black hover:bg-white/80 hover:text-black text-white rounded-lg transition-colors duration-200 border border-white/20 hover:border-white/30"
            >
              <LinkedinLogo size={20} />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:flex lg:items-start">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}


