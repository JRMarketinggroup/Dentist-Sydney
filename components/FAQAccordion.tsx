'use client'

import { useState } from 'react'
import type { FAQ } from '@/lib/content-generator'

interface FAQAccordionProps {
  faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3" role="list">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden"
          role="listitem"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
          >
            <h3 className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">
              {faq.question}
            </h3>
            <span className="flex-shrink-0">
              <svg
                className={`w-5 h-5 text-[#0B6E6E] transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            className={`transition-all duration-200 ${openIndex === i ? 'block' : 'hidden'}`}
          >
            <div className="px-5 pb-4">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
