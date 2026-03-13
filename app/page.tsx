import type { Metadata } from 'next'
import Link from 'next/link'
import { uniqueSuburbs, suburbToSlug, suburbRegions } from '@/lib/suburbs'
import ServiceCard, { serviceItems } from '@/components/ServiceCard'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Dentist Sydney | Find a Local Dentist Near You',
  description: 'Find a trusted dentist across Sydney. Connect with local dental providers for check-ups, cosmetic dentistry, emergency dental care and more. All Sydney suburbs covered.',
  alternates: {
    canonical: 'https://dentistssydney.com.au',
  },
  openGraph: {
    title: 'Dentist Sydney | Find a Local Dentist Near You',
    description: 'Find a trusted dentist across Sydney. Connect with local dental providers for check-ups, cosmetic dentistry, emergency dental care and more.',
    url: 'https://dentistssydney.com.au',
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Dentists Sydney',
  url: 'https://dentistssydney.com.au',
  description: 'Dental referral service connecting Sydney residents with trusted local dentists across all suburbs.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://dentistssydney.com.au/dentist/{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const stats = [
  { value: '250+', label: 'Sydney Suburbs Covered' },
  { value: '100%', label: 'Free Matching Service' },
  { value: 'Same Day', label: 'Response Time' },
  { value: 'All Ages', label: 'Family-Friendly Providers' },
]

const steps = [
  {
    step: '1',
    title: 'Tell Us What You Need',
    desc: 'Fill in your suburb, contact details, and what kind of dental care you\'re looking for.',
  },
  {
    step: '2',
    title: 'We Find the Right Match',
    desc: 'Our team identifies a trusted local dental provider near you who can help.',
  },
  {
    step: '3',
    title: 'Get Called Back',
    desc: 'A local dentist or their team reaches out to book your appointment at a time that suits you.',
  },
]

export default function HomePage() {
  // Show a representative sample of suburbs on homepage
  const featuredRegions = Object.entries(suburbRegions)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0B6E6E] to-[#1a3a5c] text-white overflow-hidden">
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
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-white/5 rounded-full" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-green-300 text-sm font-medium">Matching Patients Across Sydney</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Find a Trusted<br />
                <span className="text-green-300">Dentist in Sydney</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We connect Sydney residents with qualified local dentists across every suburb. 
                General care, cosmetic treatments, emergency dental — all covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#find-suburb" className="bg-white text-[#0B6E6E] font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors text-center shadow-lg">
                  Find a Dentist Near Me
                </a>
                <a href="#how-it-works" className="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-center">
                  How It Works
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                {['No cost to you', 'Local verified providers', 'All suburbs covered'].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-blue-100">
                    <span className="text-green-400 font-bold">✓</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Hero form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h2 className="text-lg font-bold text-gray-900 mb-1">Get Matched With a Local Dentist</h2>
              <p className="text-sm text-gray-500 mb-6">Free service — we'll find the right provider for you.</p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100" aria-label="Service statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#0B6E6E] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 sm:py-20 bg-gray-50" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="how-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Getting matched with a local Sydney dentist is simple and completely free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-[#0B6E6E] text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Dental Services Available Across Sydney
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From routine check-ups to complete smile transformations — find the right treatment near you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Suburb finder */}
      <section id="find-suburb" className="py-16 sm:py-20 bg-gray-50" aria-labelledby="suburb-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="suburb-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Find a Dentist in Your Sydney Suburb
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We cover every corner of Sydney. Browse by region to find local dental care near you.
            </p>
          </div>

          {featuredRegions.map(([region, suburbs]) => (
            <div key={region} className="mb-10">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#0B6E6E] rounded-full" aria-hidden="true" />
                {region}
              </h3>
              <div className="flex flex-wrap gap-2">
                {suburbs.map((suburb) => (
                  <Link
                    key={suburb}
                    href={`/dentist/${suburbToSlug(suburb)}`}
                    className="bg-white border border-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full hover:border-[#0B6E6E] hover:text-[#0B6E6E] transition-colors shadow-sm"
                  >
                    Dentist {suburb}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Full suburb grid — A-Z */}
          <div className="mt-12">
            <h3 className="text-lg font-bold text-gray-800 mb-6">All Sydney Suburbs — A to Z</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {uniqueSuburbs.map((suburb) => (
                <Link
                  key={suburb}
                  href={`/dentist/${suburbToSlug(suburb)}`}
                  className="text-xs text-gray-600 hover:text-[#0B6E6E] py-1 transition-colors truncate"
                  title={`Dentist ${suburb}`}
                >
                  {suburb}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Use Dentists Sydney to Find a Provider?
              </h2>
              <div className="space-y-5">
                {[
                  { title: 'Completely Free', desc: 'Our matching service costs you nothing. Ever. We connect patients with providers at no charge.' },
                  { title: 'Local Expertise', desc: 'We focus exclusively on Sydney suburbs, so we know the local dental landscape and can match you effectively.' },
                  { title: 'All Services Covered', desc: 'Whether you need a simple check-up or complex treatment like implants or orthodontics, we\'ll find the right fit.' },
                  { title: 'Family-Friendly', desc: 'We can match you with practices that see patients of all ages — from toddlers to seniors — under one roof.' },
                  { title: 'Fast Response', desc: 'Submit your enquiry and we aim to have a local provider reach out to you within one business day.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#0B6E6E]/10 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <svg className="w-4 h-4 text-[#0B6E6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image placeholder */}
            <div
              className="bg-gradient-to-br from-[#0B6E6E]/10 to-[#1a3a5c]/10 rounded-3xl h-80 lg:h-full min-h-[320px] flex items-center justify-center"
              role="img"
              aria-label="Modern dental clinic environment — clean, professional, welcoming"
            >
              <div className="text-center text-[#0B6E6E]/50 p-8">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-sm font-medium">Trusted Local Dental Providers<br />Across All Sydney Suburbs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#0B6E6E] to-[#1a3a5c] py-16" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Find Your Local Sydney Dentist?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of Sydney residents who've found quality local dental care through our free matching service.
          </p>
          <a
            href="#find-suburb"
            className="bg-white text-[#0B6E6E] font-bold px-10 py-4 rounded-xl hover:bg-green-50 transition-colors inline-block shadow-lg"
          >
            Find a Dentist in My Suburb
          </a>
        </div>
      </section>
    </>
  )
}
