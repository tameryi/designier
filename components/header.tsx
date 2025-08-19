"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isMenuOpen) {
      const original = document.documentElement.style.overflow
      document.documentElement.style.overflow = 'hidden'
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMenuOpen(false)
      }
      window.addEventListener('keydown', onKeyDown)
      return () => {
        document.documentElement.style.overflow = original
        window.removeEventListener('keydown', onKeyDown)
      }
    }
  }, [isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full bg-black/20 backdrop-blur border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Image src="/images/favicon.svg" alt="Designier" width={32} height={32} priority /> Designier
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:bg-white hover:text-black btn btn-outline">Contact</a>
        </nav>
        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel + overlay */}
      {isMenuOpen && (
        <>
          <button
            aria-hidden
            tabIndex={-1}
            className="md:hidden fixed inset-0 z-40 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          <nav
            id="mobile-nav"
            className="md:hidden fixed top-16 inset-x-0 z-50 border-b border-white/10 bg-black backdrop-blur supports-[backdrop-filter]:bg-black/90"
          >
            <div className="container py-4">
              <ul className="flex flex-col gap-2 text-base text-gray-200">
                <li>
                  <a href="#portfolio" className="block rounded-lg px-3 py-2 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                </li>
                <li>
                  <a href="#about" className="block rounded-lg px-3 py-2 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>About</a>
                </li>
                <li>
                  <a href="#contact" className="block rounded-lg px-3 py-2 btn btn-outline hover:bg-[#F683AC]" onClick={() => setIsMenuOpen(false)}>Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}


