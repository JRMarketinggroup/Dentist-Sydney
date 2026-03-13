'use client'

import { useState, useEffect } from 'react'

interface LeadFormProps {
  suburb?: string
  variant?: 'modal' | 'inline'
  onClose?: () => void
}

export default function LeadForm({ suburb = '', variant = 'inline', onClose }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    suburb: suburb,
    preferredTime: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setFormData(prev => ({ ...prev, suburb }))
  }, [suburb])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    
    // Log to console — client can wire to Formspree/EmailJS/webhook
    console.log('Lead form submission:', formData)
    
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // POST to placeholder endpoint (replace with real endpoint)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {
        // Silently catch — API route may not exist yet
      })
    } catch {
      // Continue regardless
    }

    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thanks! We'll be in touch soon.</h3>
        <p className="text-gray-600 text-sm">
          We've received your enquiry and will match you with a local dental provider in{' '}
          {formData.suburb || 'your area'} as soon as possible.
        </p>
        {onClose && (
          <button onClick={onClose} className="mt-4 btn-secondary text-sm py-2">
            Close
          </button>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0B6E6E] focus:border-transparent outline-none transition"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="04XX XXX XXX"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0B6E6E] focus:border-transparent outline-none transition"
            aria-required="true"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-1">
            Suburb
          </label>
          <input
            type="text"
            id="suburb"
            name="suburb"
            value={formData.suburb}
            onChange={handleChange}
            placeholder="Your suburb"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0B6E6E] focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
            Best Time to Call
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0B6E6E] focus:border-transparent outline-none transition bg-white"
          >
            <option value="">Any time</option>
            <option value="morning">Morning (8am–12pm)</option>
            <option value="afternoon">Afternoon (12pm–5pm)</option>
            <option value="evening">Evening (5pm–7pm)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Tell us what you need (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. looking for a family dentist, need emergency care, interested in teeth whitening..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0B6E6E] focus:border-transparent outline-none transition resize-none"
        />
      </div>

      <p className="text-xs text-gray-500">
        By submitting this form you agree to our{' '}
        <a href="/privacy" className="text-[#0B6E6E] hover:underline">Privacy Policy</a>. 
        We'll match you with a local dental provider — no obligation.
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="w-full btn-primary py-3 text-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Submitting...' : 'Connect Me With a Local Dentist'}
      </button>
    </form>
  )
}

// Modal wrapper
export function LeadFormModal({ suburb, isOpen, onClose }: { suburb?: string; isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close enquiry form"
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 id="modal-title" className="text-xl font-bold text-gray-900 mb-1">
          Request a Callback
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          We'll match you with a trusted local dentist{suburb ? ` in ${suburb}` : ''} and arrange a callback at your convenience.
        </p>
        <LeadForm suburb={suburb} variant="modal" onClose={onClose} />
      </div>
    </div>
  )
}
