export function Hero() {
  return (
    <section className="section">
      <div className="container md:text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
          Design & Frontend Development <br className="hidden md:block" /> for SaaS and Travel Companies
        </h1>
        <p className="mt-5 text-lg text-gray-300 max-w-3xl mx-auto">
          I help businesses design and build modern websites and apps that users love. With 15+ years of experience in
          UI/UX design and frontend development, I bring clarity, speed, and impact to every project.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#portfolio" className="btn btn-primary">View Portfolio</a>
          <a href="#contact" className="btn btn-outline hover:bg-white hover:text-black">Let’s Work Together</a>
        </div>
      </div>
    </section>
  )
}


