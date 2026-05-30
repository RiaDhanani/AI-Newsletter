import { NextResponse } from 'next/server'
import supabase from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
        return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const { error } = await supabase
        .from('subscribers')
        .insert({ email })

    if (error && error.code !== '23505') {
        return NextResponse.json({ error: 'Could not save email' }, { status: 500 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const unsubscribeUrl = `${baseUrl}/api/unsubscribe?email=${encodeURIComponent(email)}`

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'You\'re subscribed to The Signal',
        html: `<p>Welcome! You'll receive The Signal every Monday and Friday.</p>
<p style="margin-top:2rem;font-size:12px;color:#888;">
  Don't want these emails? <a href="${unsubscribeUrl}">Unsubscribe</a>
</p>`
    })

    return NextResponse.json({ success: true })
}