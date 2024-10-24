'use client'

// core
import { ChangeEvent } from 'react'
// libraries
import ReactPaginate from 'react-paginate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@awesome.me/kit-545b942488/icons/classic/solid'

interface IPodcastPaginationProps {
  currPage: number
  pageCount: number
  pageSize: number
  handleChange: (_?: ChangeEvent, currPage?: number) => Promise<void>
}

export const PodcastPagination = ({
  currPage,
  pageCount,
  pageSize,
  handleChange,
}: IPodcastPaginationProps) => {
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
      nextLabel={<FontAwesomeIcon icon={faChevronRight} size="xs" />}
      previousLabel={<FontAwesomeIcon icon={faChevronLeft} size="xs" />}
      breakLabel="..."
      pageRangeDisplayed={pageSize}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      onPageChange={(event) => handleChange(undefined, event.selected + 1)}
    />
  )
}
