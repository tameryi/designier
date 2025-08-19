export function ContactForm() {
  return (
    <form className="card p-6 grid gap-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input id="name" name="name" type="text" className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input id="email" name="email" type="email" className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300" placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" name="message" rows={5} className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300" placeholder="Tell me about your project"></textarea>
      </div>
      <div>
        <button type="button" className="btn btn-primary w-full">Send Message</button>
      </div>
    </form>
  )
}


