import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Contact | Find a Sydney Dentist',
  description: 'Get in touch with Dentists Sydney. Fill in the form to be matched with a trusted local dental provider in your Sydney suburb.',
  alternates: {
    canonical: 'https://dentistssydney.com.au/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Connect With a Local Dentist Today
          </h1>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Fill in the form and we'll match you with a trusted dental provider in your Sydney suburb. 
            Our service is completely free — no fees, no obligation.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-[#0B6E6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'All Sydney Suburbs',
                desc: 'We cover dentists across Greater Sydney, from the Northern Beaches to Campbelltown and everywhere in between.',
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-[#0B6E6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Fast Response',
                desc: 'We aim to respond to all enquiries within one business day.',
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-[#0B6E6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Free Service',
                desc: 'Our matching service is completely free for patients. We\'re here to help, not to charge you.',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0B6E6E]/10 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> dentistssydney.com.au is a referral service and does not operate a dental clinic. 
              For dental emergencies, please contact a local dental practice directly or call 000 in life-threatening situations.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Send Us an Enquiry</h2>
          <p className="text-sm text-gray-500 mb-6">We'll match you with a local provider and arrange a callback.</p>
          <LeadForm />
        </div>
      </div>
    </div>
  )
}
