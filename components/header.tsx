import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-black/20 backdrop-blur border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Image src="/images/favicon.svg" alt="Designier" width={32} height={32} priority /> Designier
        </Link>
        <nav className="flex items-center gap-6 text-sm text-gray-200">
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:bg-[#F683AC] btn btn-outline">Contact</a>
        </nav>
      </div>
    </header>
  )
}


