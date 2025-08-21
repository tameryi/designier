export function ContactForm() {
  return (
    <form className="gradient-bg rounded-xl p-6 grid gap-4" target="_blank" action="https://formsubmit.co/designierco@gmail.com" method="POST">

      <input type="text" name="_honey" style={{ display: 'none' }} />

      <input type="hidden" name="_captcha" value="true" />

      <input type="hidden" name="_subject" value="New Designier Contact Request" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
        <input id="name" name="name" type="text" className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300" placeholder="How should I call you?" required/>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
        <input id="email" name="email" type="email" className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300" placeholder="Don’t worry, no boring newsletters" required/>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
        <textarea id="message" name="message" rows={5} className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300" placeholder="Tell me about your project" required></textarea>
      </div>
      <div className="text-center">
        <button type="submit" className="btn w-full md:w-1/3 gradient-bg text-white font-semibold transform transition-all duration-500 hover:scale-[1.05] hover:shadow-lg">Send Message</button>
      </div>
    </form>
  )
}


