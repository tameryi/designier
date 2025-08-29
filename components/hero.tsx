import MagneticButton from "./magnetic-button";

export function Hero() {
  return (
    <section className="section">
      <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-b-[48px]"
    >
      <div className="hero-blob" />
    </div>
      <div className="container md:text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
          Design & Frontend Development <br className="hidden md:block" /> for Startups and Remote Teams
        </h1>
        <p className="mt-5 text-lg text-gray-300 max-w-3xl mx-auto">
          I help businesses design and build modern websites and apps that users love. With 15+ years of experience in
          UI/UX design and frontend development, I bring clarity, speed, and impact to every project.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <MagneticButton href="#portfolio" className="btn btn-primary">View Portfolio</MagneticButton>
          <MagneticButton href="#contact" className="btn btn-outline hover:bg-white hover:text-black">Let’s Work Together</MagneticButton>
        </div>
      </div>
    </section>
  )
}


