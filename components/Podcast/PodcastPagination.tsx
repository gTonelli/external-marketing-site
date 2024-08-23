'use client'

// core
import { ChangeEvent, useCallback } from 'react'
// components
import { Icon } from '../Icon'
// libraries
import ReactPaginate from 'react-paginate'

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
      nextLabel={<Icon name="chevron-right" size="xs" />}
      previousLabel={<Icon name="chevron-left" size="xs" />}
      breakLabel="..."
      pageRangeDisplayed={pageSize}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      onPageChange={(event) => handleChange(undefined, event.selected + 1)}
    />
  )
}
