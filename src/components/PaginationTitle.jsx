import React from 'react'

const PaginationTitle = ({ currentPage, totalPages, totalResults }) => {
  return (
    <div className='container flex justify-between font-medium text-[18px] leading-[24px]'>
        <p>About {totalResults} results found</p>
        <p>{`${currentPage} page of ${totalPages}`}</p>
    </div>
  )
}

export default PaginationTitle