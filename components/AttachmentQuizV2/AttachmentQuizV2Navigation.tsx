// core
import { useRouter } from 'next/navigation'
// components
import Image from 'next/image'
import { Icon } from '../Icon'

export const AttachmentQuizV2Navigation = ({ onGoBack }: { onGoBack?: () => void }) => {
  const router = useRouter()
  const _onGoBack = onGoBack ?? router.back

  return (
    <div className="relative z-15 py-3 px-5 grid grid-cols-3 items-center bg-[#f5f5f5] min-h-[94px] xl:px-24 2xl:px-48 3xl:px-72">
      <div className="flex items-center text-grey cursor-pointer" onClick={() => _onGoBack()}>
        <Icon className="mr-2" name="chevron-left" />

        <strong>Go Back</strong>
      </div>

      <Image
        alt="The Personal Development School Logo: A sapling in a circle with the business name next to it."
        className="mx-auto"
        src="/images/pds-logo-stacked-right-primary.png"
        width={165}
        height={61}
      />
    </div>
  )
}
