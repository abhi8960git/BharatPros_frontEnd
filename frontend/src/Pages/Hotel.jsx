import React from 'react'
import { Wrapper } from '../components/Dashborad/Wrapper'
import SearchComponent from '../components/Dashborad/SearchComponent'
import HotelCard from '../components/HotelCard'

const Hotel = () => {
  return (
   <Wrapper>
    <SearchComponent placeholderText="Search Hotels.."/>

    <div className='mt-3 flex flex-col gap-3'>
        {
          [0,1,2].map(()=>(
            <>
            <HotelCard/>
            </>
          ))
        }
    </div>
   </Wrapper>
  )
}

export default Hotel