'use server'

import { cookies } from 'next/headers'
import { TUserData } from './types'
import jwt from 'jsonwebtoken'
import { pick } from 'lodash'

/** Server method to get user data */
export async function getUserData() {
  try {
    const cookieStore = await cookies()
    const secret = process.env.NEXT_PRIVATE_JWT_SECRET
    const token = cookieStore.get(
      process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME || '_pds_session'
    )?.value
    if (!secret || !token) return undefined
    const userData = jwt.verify(token, secret) as TUserData
    if (userData.exp && userData.exp < Date.now() / 1000) return undefined
    return pick(userData, ['firstName', 'lastName', 'avatar_url', 'createdAt', 'roles'])
  } catch {
    return undefined
  }
}
