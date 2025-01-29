import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest, response: NextResponse) {
  return fetch(
    `https://pro.ip-api.com/json/${
      request.headers.get('x-forwarded-for')?.split(',')[0] || request.ip
    }?key=${process.env.NEXT_PRIVATE_IP_API_KEY}&fields=countryCode`
  )
    .then((res) => res.json())
    .then(
      (data) =>
        new NextResponse(JSON.stringify({ countryCode: data.countryCode || 'Unkown' }), {
          headers: { 'Cache-Control': 'public, max-age=600000' },
        })
    )
}
