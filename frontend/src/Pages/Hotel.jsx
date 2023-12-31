import React from 'react'
import { Wrapper } from '../components/Dashborad/Wrapper'
import SearchComponent from '../components/Dashborad/SearchComponent'
import HotelCard from '../components/HotelCard'

const Hotel = () => {
  return (
   <Wrapper>
    <SearchComponent placeholderText="Search Hotels.."/>

    <div>
        <HotelCard/>
    </div>
   </Wrapper>
  )
}

export default Hotel