import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Dentists Sydney',
  description: 'Terms of Service for dentistssydney.com.au — the terms governing use of our dental referral service.',
  alternates: {
    canonical: 'https://dentistssydney.com.au/terms',
  },
}

const sections = [
  {
    title: '1. About Our Service',
    content: `dentistssydney.com.au ("the Site", "we", "us") is a dental referral and lead generation service. We connect members of the public ("users") with local dental providers ("dental practices") across Greater Sydney, Australia.

We are not a dental clinic. We do not provide dental services, clinical advice, diagnoses, or treatment of any kind. By using this Site, you acknowledge and agree to these Terms of Service.`,
  },
  {
    title: '2. Nature of the Referral Service',
    content: `Our service facilitates introductions between users seeking dental care and local dental practices. When you submit an enquiry through our Site:

• We will share your contact details with one or more local dental practices near your stated suburb
• Those dental practices may contact you directly to arrange an appointment
• We do not guarantee that any dental practice will contact you, accept you as a patient, or provide services to you
• The dental practices we refer you to are independent businesses; we are not responsible for their conduct, quality of care, fees, or any other aspect of their services`,
  },
  {
    title: '3. No Clinical Relationship',
    content: `Using this Site does not create any clinical or healthcare relationship between you and dentistssydney.com.au. We are not registered health practitioners and do not provide health services.

Nothing on this Site constitutes dental, medical, or health advice. Always seek the advice of a qualified dental or medical professional for any dental or health concerns.`,
  },
  {
    title: '4. User Responsibilities',
    content: `By using this Site, you agree to:

• Provide accurate and truthful information in any enquiry forms
• Not submit enquiries on behalf of others without their consent
• Not use the Site for any unlawful or fraudulent purpose
• Not submit false, misleading, or defamatory information`,
  },
  {
    title: '5. Limitation of Liability',
    content: `To the maximum extent permitted by Australian law, dentistssydney.com.au excludes all liability for any loss, damage, or injury arising from:

• The conduct, services, or omissions of any dental practice we refer you to
• Reliance on any information published on this Site
• Any failure to connect you with a dental provider
• Technical failures, errors, or interruptions to this Site

Our total liability to you for any claim arising out of or in connection with this Site is limited to $100 AUD.`,
  },
  {
    title: '6. No Guarantees',
    content: `We make no guarantees that:

• A dental practice will contact you following your enquiry
• Any particular dental practice is currently accepting new patients
• The dental practices we refer you to meet any specific standard of care or quality
• Information on this Site is current, complete, or free from errors`,
  },
  {
    title: '7. Third-Party Links',
    content: `This Site may contain links to third-party websites, including dental practices or health information resources. We do not endorse or take responsibility for the content or practices of any third-party websites.`,
  },
  {
    title: '8. Intellectual Property',
    content: `All content on this Site, including text, graphics, logos, and code, is the property of dentistssydney.com.au or its licensors and is protected by Australian and international intellectual property laws. You may not reproduce, distribute, or use any content from this Site without our prior written consent.`,
  },
  {
    title: '9. Governing Law',
    content: `These Terms of Service are governed by the laws of New South Wales, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of New South Wales.`,
  },
  {
    title: '10. Changes to These Terms',
    content: `We reserve the right to update these Terms of Service at any time. The current version will always be available on this page. Continued use of the Site after changes are posted constitutes your acceptance of the updated terms.`,
  },
  {
    title: '11. Contact',
    content: `If you have any questions about these Terms of Service, please contact us via the Contact page on this website.`,
  },
]

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: January 2025</p>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title} aria-labelledby={section.title.replace(/\s+/g, '-').toLowerCase()}>
            <h2
              id={section.title.replace(/\s+/g, '-').toLowerCase()}
              className="text-xl font-bold text-gray-900 mb-3"
            >
              {section.title}
            </h2>
            <div className="text-gray-600 leading-relaxed whitespace-pre-line text-sm sm:text-base">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
