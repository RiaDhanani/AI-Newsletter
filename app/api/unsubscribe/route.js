import { NextResponse } from 'next/server'
import supabase from '@/lib/supabase'

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (!email || !email.includes('@')) {
        return new Response('<p>Invalid unsubscribe link.</p>', {
            status: 400,
            headers: { 'Content-Type': 'text/html' },
        })
    }

    const { error } = await supabase
        .from('subscribers')
        .delete()
        .eq('email', email)

    if (error) {
        return new Response('<p>Something went wrong. Please try again.</p>', {
            status: 500,
            headers: { 'Content-Type': 'text/html' },
        })
    }

    return new Response(
        `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:2rem;text-align:center;">
        <h2>You have been unsubscribed.</h2>
        <p>${email} has been removed from The Signal mailing list.</p>
        </body></html>`,
        { status: 200, headers: { 'Content-Type': 'text/html' } }
    )
}
