import Link from 'next/link'
import { suburbRegions, suburbToSlug } from '@/lib/suburbs'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#0B6E6E] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Dentists<span className="text-[#0d8a8a]">Sydney</span></span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Connecting Sydney residents with trusted local dental providers across all suburbs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#0d8a8a] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#0d8a8a] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#0d8a8a] transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-[#0d8a8a] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#0d8a8a] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/general-dentistry" className="hover:text-[#0d8a8a] transition-colors">General Dentistry</Link></li>
              <li><Link href="/services/cosmetic-dentistry" className="hover:text-[#0d8a8a] transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link href="/services/emergency-dentist" className="hover:text-[#0d8a8a] transition-colors">Emergency Dentist</Link></li>
              <li><Link href="/services/teeth-whitening" className="hover:text-[#0d8a8a] transition-colors">Teeth Whitening</Link></li>
              <li><Link href="/services/invisalign" className="hover:text-[#0d8a8a] transition-colors">Invisalign</Link></li>
              <li><Link href="/services/dental-implants" className="hover:text-[#0d8a8a] transition-colors">Dental Implants</Link></li>
            </ul>
          </div>

          {/* Suburbs by Region */}
          <div>
            <h3 className="text-white font-semibold mb-4">Find a Dentist Near You</h3>
            <ul className="space-y-2 text-sm">
              {Object.entries(suburbRegions).map(([region, suburbs]) => (
                <li key={region}>
                  <Link
                    href={`/dentist/${suburbToSlug(suburbs[0])}`}
                    className="hover:text-[#0d8a8a] transition-colors"
                  >
                    Dentist {region}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-gray-500 leading-relaxed mb-3">
            <strong className="text-gray-400">Disclaimer:</strong> dentistssydney.com.au is a dental referral and lead generation service. We connect patients with local dental providers. We are not a dental clinic and do not provide dental services directly. Always consult a qualified dental professional for dental advice and treatment.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} dentistssydney.com.au. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <Link href="/privacy" className="text-gray-500 hover:text-[#0d8a8a] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-[#0d8a8a] transition-colors">Terms of Service</Link>
              <Link href="/contact" className="text-gray-500 hover:text-[#0d8a8a] transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
