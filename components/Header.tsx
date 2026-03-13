'use client'

import { useState } from 'react'
import Link from 'next/link'
import { suburbRegions, suburbToSlug } from '@/lib/suburbs'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [findOpen, setFindOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    { label: 'General Dentistry', href: '/services/general-dentistry' },
    { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
    { label: 'Emergency Dentist', href: '/services/emergency-dentist' },
    { label: 'Teeth Whitening', href: '/services/teeth-whitening' },
    { label: 'Invisalign', href: '/services/invisalign' },
    { label: 'Dental Implants', href: '/services/dental-implants' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-[#0B6E6E] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-[#0B6E6E]">Dentists<span className="text-gray-800">Sydney</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link href="/" className="text-gray-700 hover:text-[#0B6E6E] font-medium transition-colors">
              Home
            </Link>

            {/* Find a Dentist Dropdown */}
            <div className="relative" onMouseEnter={() => setFindOpen(true)} onMouseLeave={() => setFindOpen(false)}>
              <button
                className="text-gray-700 hover:text-[#0B6E6E] font-medium transition-colors flex items-center gap-1"
                aria-expanded={findOpen}
                aria-haspopup="true"
              >
                Find a Dentist
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {findOpen && (
                <div className="absolute top-full left-0 mt-1 w-[600px] bg-white rounded-xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 gap-6 z-50">
                  {Object.entries(suburbRegions).map(([region, suburbs]) => (
                    <div key={region}>
                      <h3 className="text-xs font-semibold text-[#0B6E6E] uppercase tracking-wider mb-2">{region}</h3>
                      <ul className="space-y-1">
                        {suburbs.slice(0, 5).map((suburb) => (
                          <li key={suburb}>
                            <Link
                              href={`/dentist/${suburbToSlug(suburb)}`}
                              className="text-sm text-gray-600 hover:text-[#0B6E6E] transition-colors"
                            >
                              {suburb}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button
                className="text-gray-700 hover:text-[#0B6E6E] font-medium transition-colors flex items-center gap-1"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {services.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-[#0B6E6E] hover:bg-gray-50 transition-colors"
                    >
                      {svc.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-[#0B6E6E] font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#0B6E6E] font-medium transition-colors">
              Contact
            </Link>
            <Link href="/contact" className="btn-primary text-sm py-2 px-4">
              Get Matched
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2" aria-label="Mobile navigation">
          <Link href="/" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
          <div className="py-2">
            <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider mb-2">By Region</p>
            {Object.entries(suburbRegions).map(([region, suburbs]) => (
              <div key={region} className="mb-3">
                <p className="text-sm font-medium text-gray-700 mb-1">{region}</p>
                <div className="flex flex-wrap gap-2">
                  {suburbs.slice(0, 4).map((suburb) => (
                    <Link
                      key={suburb}
                      href={`/dentist/${suburbToSlug(suburb)}`}
                      className="text-xs text-[#0B6E6E] bg-teal-50 px-2 py-1 rounded"
                      onClick={() => setMobileOpen(false)}
                    >
                      {suburb}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link href="/about" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="/contact" className="btn-primary block text-center mt-4" onClick={() => setMobileOpen(false)}>Get Matched With a Dentist</Link>
        </nav>
      )}
    </header>
  )
}
