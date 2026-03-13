'use client'

import { useState } from 'react'
import { LeadFormModal } from './LeadForm'

interface SuburbHeroProps {
  suburb: string
}

export default function SuburbHero({ suburb }: SuburbHeroProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0B6E6E] to-[#1a3a5c] text-white py-16 sm:py-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-white/5 rounded-full" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-green-300 text-sm font-medium">Accepting New Patients</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Find a Trusted Dentist in <span className="text-green-300">{suburb}</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              Quality local dental care for {suburb} residents. Bulk billing options available. 
              Family-friendly practices welcoming patients of all ages.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-white text-[#0B6E6E] font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors text-center shadow-lg"
                aria-haspopup="dialog"
              >
                Request a Callback
              </button>
              <a
                href="#enquiry-form"
                className="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-center"
              >
                Fill in an Enquiry
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { icon: '✓', text: 'Verified local providers' },
                { icon: '✓', text: 'No referral needed' },
                { icon: '✓', text: 'Free matching service' },
              ].map((signal) => (
                <div key={signal.text} className="flex items-center gap-2 text-sm text-blue-100">
                  <span className="text-green-400 font-bold">{signal.icon}</span>
                  {signal.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeadFormModal suburb={suburb} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
