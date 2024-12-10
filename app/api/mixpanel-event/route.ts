import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { mixpanelID, insertID, event, props } = await request.json()

    console.log(
      `Event= ${event}, Token= ${
        process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN
      }, Insert ID= ${insertID.slice(0, 36)}`
    )
    await fetch('https://api.mixpanel.com/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          event,
          properties: {
            token:
              process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN || '449fc24bc868d03e5a530ce37f0cac9d',
            time: Date.now(),
            distinct_id: mixpanelID,
            $insert_id: insertID.slice(0, 36),
            ...props,
          },
        },
      ]),
    })
      .then((res) => res.text())
      .then((res) => {
        if (res !== '1') throw `An unexpected error occured. Response was ${res}`
        console.log('Res', res)
      })

    return NextResponse.json({ message: 'OK', success: true })
  } catch (error) {
    return NextResponse.json({ message: error, success: false }, { status: 400 })
  }
}
