'use client'
import { useEffect, useRef } from 'react'

export default function BeehiivEmbed() {
  const ref = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://subscribe-forms.beehiiv.com/v3/loader.js'
    script.async = true
    script.setAttribute('data-beehiiv-form', '30753988-de1d-4052-a32e-81ad0090a77d')
    ref.current?.appendChild(script)
  }, [])

  return <div ref={ref} />
}
