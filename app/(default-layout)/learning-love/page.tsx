import { Metadata } from 'next'
import LearningLovePage from './LearningLovePage'

export const metadata: Metadata = {
  title: 'Order Learning Love Now | The Personal Development School',
  description:
    'Create and build the best relationships of your life with “Learning Love”, the new book by Thais Gibson. Order it today from The Personal Development School.',
  robots: 'all',
}

export default function Page() {
  return <LearningLovePage />
}
