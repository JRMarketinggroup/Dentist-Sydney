import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Dentists Sydney | Find a Local Dentist Near You',
    template: '%s | Dentists Sydney',
  },
  description: 'Find a trusted local dentist across Sydney. Book general check-ups, cosmetic dentistry, emergency dental care and more. Serving all Sydney suburbs.',
  metadataBase: new URL('https://dentistssydney.com.au'),
  openGraph: {
    siteName: 'Dentists Sydney',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
