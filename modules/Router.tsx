// core
import { useRouter as useNextRouter } from 'next/navigation'
// utils
import { EExternalRoutes, ERoutes } from '@/utils/constants'

export const useRouter = (route: ERoutes | EExternalRoutes) => {
  const router = useNextRouter()

  if (Object.values(ERoutes).includes(route as ERoutes)) {
    router.push(route)
  } else {
    window.location.assign(route)
  }
}
