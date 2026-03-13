import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Dentists Sydney | Our Dental Referral Service',
  description: 'Learn about Dentists Sydney — a free dental referral service connecting patients with trusted local dentists across all Sydney suburbs.',
  alternates: {
    canonical: 'https://dentistssydney.com.au/about',
  },
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          About Dentists Sydney
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          A free dental referral service helping Sydney residents find quality local dental care — quickly and without the hassle.
        </p>
      </div>

      {/* What we do */}
      <section className="mb-12" aria-labelledby="what-we-do">
        <h2 id="what-we-do" className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4">
            Dentists Sydney is a dental referral and patient-matching service operating across Greater Sydney. 
            We are not a dental clinic — we do not provide dental treatment, advice, or clinical services of any kind.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our role is simple: when someone in Sydney is looking for a dentist, we help them find one. 
            We connect patients with local dental providers across every Sydney suburb, from the Northern Beaches 
            to Campbelltown, from Penrith to Cronulla. Our service is completely free for patients.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe access to quality dental care should be straightforward. Finding a trusted local dentist 
            shouldn't require hours of research, reading through inconsistent online reviews, or calling practices 
            that aren't accepting new patients. We simplify that process.
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="mb-12 bg-gray-50 rounded-2xl p-8" aria-labelledby="how-we-work">
        <h2 id="how-we-work" className="text-2xl font-bold text-gray-900 mb-6">How Our Referral Service Works</h2>
        <div className="space-y-5">
          {[
            { num: '1', title: 'Patient Submits an Enquiry', desc: 'A patient in Sydney fills in our simple contact form with their suburb, contact details, and the type of dental care they\'re looking for.' },
            { num: '2', title: 'We Identify a Local Match', desc: 'Our team identifies a suitable dental provider in or near the patient\'s suburb who can accommodate their needs.' },
            { num: '3', title: 'The Provider Makes Contact', desc: 'The dental practice contacts the patient directly to arrange an appointment. The referral is complete.' },
          ].map((step) => (
            <div key={step.num} className="flex items-start gap-4">
              <div className="w-9 h-9 bg-[#0B6E6E] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" aria-hidden="true">
                {step.num}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className="mb-12" aria-labelledby="coverage">
        <h2 id="coverage" className="text-2xl font-bold text-gray-900 mb-4">Our Coverage</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Dentists Sydney maintains suburb-specific information for over 250 Sydney suburbs, covering all major 
          regions including Inner West, Eastern Suburbs, North Shore, Northern Beaches, Western Sydney, 
          South Sydney, and the South West corridor.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Regardless of where you live in Sydney, we can help you find a qualified dental provider nearby.
        </p>
        <Link href="/" className="inline-block mt-4 btn-primary">
          Find a Dentist in My Suburb
        </Link>
      </section>

      {/* Disclaimer */}
      <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6" aria-labelledby="disclaimer">
        <h2 id="disclaimer" className="text-lg font-bold text-amber-900 mb-3">Important Disclaimer</h2>
        <p className="text-amber-800 text-sm leading-relaxed">
          dentistssydney.com.au is a dental referral and lead generation service. We connect patients with local 
          dental providers and do not operate as a dental clinic. We do not provide clinical dental advice, 
          diagnosis, or treatment. The dental providers we refer patients to are independent businesses, 
          and we do not warrant or guarantee their services, qualifications, or outcomes. Always consult a 
          registered dental professional for clinical advice and treatment. In a dental or medical emergency, 
          please contact your local dental practice, call 000, or attend your nearest hospital emergency department.
        </p>
      </section>
    </div>
  )
}
