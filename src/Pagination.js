import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {

    const { page, nbPages, prevpage, nextpage } = useGlobalContext();
  return (
    <>
    <div className='pagination_btn'>
        <button onClick={() => prevpage()}>Prev</button>
        <p>{page} to {nbPages}</p>
        <button onClick={() => nextpage()}>Next</button>
    </div>
    </>
  )
}

export default Pagination