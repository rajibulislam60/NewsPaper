import React from 'react'

const PaginationTitle = () => {
  return (
    <div className='container flex justify-between font-medium text-[18px] leading-[24px]'>
        <p>About {0} results found</p>
        <p>{1} page of {100}</p>
    </div>
  )
}

export default PaginationTitle