import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-black/20 backdrop-blur border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          Designier
        </Link>
        <nav className="flex items-center gap-6 text-sm text-gray-200">
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  )
}


