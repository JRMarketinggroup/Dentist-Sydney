import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Dentists Sydney',
  description: 'Privacy Policy for dentistssydney.com.au — how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://dentistssydney.com.au/privacy',
  },
}

const sections = [
  {
    title: '1. About This Policy',
    content: `This Privacy Policy explains how dentistssydney.com.au ("we", "us", "our") collects, uses, discloses, and protects your personal information. We are committed to handling your personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).

By using this website or submitting an enquiry, you consent to the collection and use of your personal information as described in this policy.`,
  },
  {
    title: '2. Information We Collect',
    content: `We collect the following types of personal information through our website enquiry forms:

• Full name
• Phone number
• Suburb/location
• Preferred contact time
• Any additional information you provide in your message

We may also collect non-personal information through website analytics tools, including browser type, pages visited, time spent on pages, and referring websites. This information is used in aggregate form only and does not identify you personally.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the personal information you provide to:

• Match you with a suitable local dental provider in or near your suburb
• Pass your contact details to that dental provider so they can contact you
• Respond to your enquiries
• Improve our website and service

We do not use your personal information for any purpose other than those stated above without your consent.`,
  },
  {
    title: '4. Disclosure of Your Information',
    content: `Your personal information (name, phone number, suburb, and message) will be shared with local dental providers for the purpose of arranging a callback or appointment as requested.

We do not sell, rent, or trade your personal information to third parties for marketing purposes.

We may disclose your information if required by law or in response to a valid legal request.`,
  },
  {
    title: '5. Data Security',
    content: `We take reasonable steps to protect your personal information from misuse, loss, unauthorised access, modification, or disclosure. However, no data transmission over the internet is entirely secure, and we cannot guarantee the absolute security of information transmitted to us.

We recommend that you do not include sensitive health information in your enquiry messages.`,
  },
  {
    title: '6. Cookies and Analytics',
    content: `Our website may use cookies and third-party analytics tools (such as Google Analytics) to improve the user experience and understand how visitors use our site. These tools may collect information about your browsing behaviour on an anonymised basis.

You can disable cookies in your browser settings; however, this may affect the functionality of the website.`,
  },
  {
    title: '7. Access and Correction',
    content: `You have the right to request access to the personal information we hold about you, and to request corrections if that information is inaccurate or incomplete. To make such a request, please contact us using the details on our Contact page.`,
  },
  {
    title: '8. Complaints',
    content: `If you believe we have breached the Australian Privacy Principles or this policy, you may make a complaint by contacting us. We will respond to your complaint within a reasonable time. If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. The current version will always be available on this page. We encourage you to review this policy periodically.`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: January 2025</p>

      <div className="prose prose-gray max-w-none space-y-8">
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
