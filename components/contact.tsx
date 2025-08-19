"use client"
import { ContactForm } from '@/components/contact-form'
import { Envelope, LinkedinLogo } from '@phosphor-icons/react'

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Let’s Talk</h2>
          <p className="text-gray-300 mt-4">
            Interested in working together? I’m available for remote roles and freelance projects worldwide, with
            availability in CET/EET time zones.
          </p>
          <div className="mt-4 text-sm text-gray-200 flex items-center justify-center gap-6">
            <a href="mailto:hello@example.com" className="hover:underline inline-flex items-center gap-2">
              <Envelope size={18} /> Email
            </a>
            <a href="#" className="hover:underline inline-flex items-center gap-2">
              <LinkedinLogo size={18} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}


