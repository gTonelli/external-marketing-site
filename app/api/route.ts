import { revalidatePath, revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { tags, paths } = await request.json()

    if (request.headers.get('auth-revalidation-key') !== process.env.PRIVATE_REVALIDATION_KEY)
      throw 'Unauthorized'

    tags?.map((tag: string) => {
      revalidateTag(tag)
    })

    paths?.map((path: string) => {
      revalidatePath(path)
    })

    return NextResponse.json({ message: 'OK', success: true })
  } catch (error) {
    return NextResponse.json({ message: error, success: false }, { status: 400 })
  }
}
