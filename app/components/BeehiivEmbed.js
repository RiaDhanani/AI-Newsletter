'use client'
import Script from 'next/script'

export default function BeehiivEmbed() {
  return (
    <Script
      src="https://subscribe-forms.beehiiv.com/v3/loader.js"
      data-beehiiv-form="30753988-de1d-4052-a32e-81ad0090a77d"
      strategy="afterInteractive"
    />
  )
}
