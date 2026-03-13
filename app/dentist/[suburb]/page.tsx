import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { uniqueSuburbs, suburbToSlug, slugToSuburb } from '@/lib/suburbs'
import {
  generateIntroParagraph,
  generateWhyLocalSection,
  generateFAQs,
  generateMetaDescription,
  getNearbySuburbs,
} from '@/lib/content-generator'
import SuburbHero from '@/components/SuburbHero'
import ServiceCard, { serviceItems } from '@/components/ServiceCard'
import FAQAccordion from '@/components/FAQAccordion'
import LeadForm from '@/components/LeadForm'
import BreadcrumbNav from '@/components/BreadcrumbNav'

// Generate all static params at build time
export async function generateStaticParams() {
  return uniqueSuburbs.map((suburb) => ({
    suburb: suburbToSlug(suburb),
  }))
}

// Generate metadata per suburb
export async function generateMetadata({
  params,
}: {
  params: { suburb: string }
}): Promise<Metadata> {
  const suburbName = slugToSuburb(params.suburb)
  if (!suburbName) return {}

  const description = generateMetaDescription(suburbName)
  const url = `https://dentistssydney.com.au/dentist/${params.suburb}`

  return {
    title: `Dentist ${suburbName} | Find a Local Dentist Near You`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `Dentist ${suburbName} | Dentists Sydney`,
      description,
      url,
      type: 'website',
    },
  }
}

export default function SuburbPage({ params }: { params: { suburb: string } }) {
  const suburbName = slugToSuburb(params.suburb)

  if (!suburbName) {
    notFound()
  }

  const intro = generateIntroParagraph(suburbName)
  const whyLocal = generateWhyLocalSection(suburbName)
  const faqs = generateFAQs(suburbName)
  const nearbySuburbs = getNearbySuburbs(suburbName)

  // Schema markup
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Dentists Sydney — ${suburbName}`,
    description: `Dental referral service connecting patients with local dentists in ${suburbName}, Sydney NSW.`,
    url: `https://dentistssydney.com.au/dentist/${params.suburb}`,
    areaServed: {
      '@type': 'Place',
      name: `${suburbName}, Sydney NSW, Australia`,
    },
    serviceType: 'Dentist',
    '@id': `https://dentistssydney.com.au/dentist/${params.suburb}`,
    sameAs: ['https://dentistssydney.com.au'],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <SuburbHero suburb={suburbName} />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <BreadcrumbNav
          items={[
            { label: 'Home', href: '/' },
            { label: 'Find a Dentist', href: '/' },
            { label: `Dentist ${suburbName}` },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Intro section */}
            <section aria-labelledby="intro-heading">
              <h2 id="intro-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Dental Care in {suburbName}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{intro}</p>
            </section>

            {/* Services */}
            <section aria-labelledby="services-heading">
              <h2 id="services-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Dental Services Available in {suburbName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceItems.map((service) => (
                  <ServiceCard
                    key={service.title}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                ))}
              </div>
            </section>

            {/* Why local */}
            <section aria-labelledby="why-local-heading" className="bg-[#0B6E6E]/5 rounded-2xl p-6 sm:p-8">
              <h2 id="why-local-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Why Choose a Local Dentist in {suburbName}?
              </h2>
              <p className="text-gray-600 leading-relaxed">{whyLocal}</p>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions — Dentist {suburbName}
              </h2>
              <FAQAccordion faqs={faqs} />
            </section>

            {/* Nearby suburbs */}
            <section aria-labelledby="nearby-heading">
              <h2 id="nearby-heading" className="text-xl font-bold text-gray-900 mb-4">
                Also Searching Nearby?
              </h2>
              <div className="flex flex-wrap gap-2">
                {nearbySuburbs.map((s) => (
                  <Link
                    key={s}
                    href={`/dentist/${suburbToSlug(s)}`}
                    className="bg-white border border-[#0B6E6E]/30 text-[#0B6E6E] text-sm px-4 py-2 rounded-full hover:bg-[#0B6E6E] hover:text-white transition-colors"
                  >
                    Dentist {s}
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick contact card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-3" aria-hidden="true">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Find a Dentist in {suburbName}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  We'll match you with a trusted local provider. No obligation, no cost.
                </p>
                <Link
                  href="#enquiry-form"
                  className="btn-primary w-full text-center text-sm py-3 block"
                >
                  Enquire Now
                </Link>
              </div>

              {/* Trust signals */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h3 className="font-bold text-gray-900 text-sm">Why Use Our Service?</h3>
                {[
                  { title: 'Free Matching', desc: 'No cost to connect with a local dentist' },
                  { title: 'Local Providers', desc: 'Verified dental practices near you' },
                  { title: 'All Ages Welcome', desc: 'Family-friendly care for every patient' },
                  { title: 'Fast Response', desc: 'We aim to respond same business day' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#0B6E6E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Full-width lead form section */}
        <section
          id="enquiry-form"
          aria-labelledby="enquiry-heading"
          className="mt-16 bg-gradient-to-br from-[#0B6E6E] to-[#1a3a5c] rounded-3xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 id="enquiry-heading" className="text-2xl sm:text-3xl font-bold mb-3">
                Connect With a Dentist in {suburbName} Today
              </h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                Fill in your details and we'll match you with a trusted local dental provider in {suburbName}. 
                No obligation — we're here to help you find the right care.
              </p>
              <div className="space-y-3">
                {[
                  'Free referral service — no fees ever',
                  'Local practices accepting new patients',
                  'We\'ll call you at your preferred time',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-blue-100">
                    <span className="text-green-400 font-bold">✓</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <LeadForm suburb={suburbName} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
