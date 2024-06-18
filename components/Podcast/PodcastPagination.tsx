'use client'

import ReactPaginate from 'react-paginate'
import { Icon } from '../Icon'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

interface IPodcastPaginationProps {
  currPage: number
  pageCount: number
  pageSize: number
}

export const PodcastPagination = ({ currPage, pageCount, pageSize }: IPodcastPaginationProps) => {
  const router = useRouter()

  const onPageChange = useCallback(
    (selected: number) => {
      if (selected === 0) router.push(`/podcast`, { scroll: false })
      else router.push(`/podcast?page=${selected + 1}`, { scroll: false })
    },
    [router]
  )

  return (
    <ReactPaginate
      initialPage={currPage - 1}
      containerClassName="flex justify-center items-center list-none mt-4"
      pageClassName="mx-4"
      pageLinkClassName="text-black"
      previousClassName="w-6 h-6 flex justify-center items-center bg-primary rounded-full"
      previousLinkClassName="flex text-white"
      nextClassName="w-6 h-6 flex justify-center items-center bg-primary rounded-full"
      nextLinkClassName="flex text-white"
      activeLinkClassName="text-primary font-bold"
      nextLabel={<Icon name="chevron-right" size="xs" />}
      previousLabel={<Icon name="chevron-left" size="xs" />}
      breakLabel="..."
      pageRangeDisplayed={pageSize}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      hrefAllControls
      hrefBuilder={(page, pageCount) =>
        page == 1
          ? '/podcast'
          : page >= 2 && page <= pageCount + 1
          ? `/podcast?page=${page}`
          : undefined
      }
      onPageChange={(event) => onPageChange(event.selected)}
    />
  )
}
