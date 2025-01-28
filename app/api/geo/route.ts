import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest, response: NextResponse) {
  return fetch(
    `http://ip-api.com/json/${
      request.headers.get('x-forwarded-for')?.split(',')[0] || request.ip
    }?fields=countryCode`
  )
    .then((res) => res.json())
    .then((data) => {
      return new NextResponse(JSON.stringify({ countryCode: data.countryCode || 'Unkown' }), {
        headers: { 'Cache-Control': 'public, max-age=600000' },
      })
    })
}
