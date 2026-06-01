import { NextResponse } from 'next/server'

export async function POST(request) {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
        return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const res = await fetch(
        `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
            },
            body: JSON.stringify({
                email,
                reactivate_existing: true,
                send_welcome_email: true,
            }),
        }
    )

    if (!res.ok) {
        return NextResponse.json({ error: 'Could not subscribe' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
}
