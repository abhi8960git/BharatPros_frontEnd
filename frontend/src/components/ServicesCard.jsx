import React from 'react'
import { GoEye } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
const ServicesCard = () => {
  return (
    <div className='flex flex-col gap-1 mx-2 border-2 border-black/10   mb-5 '>
        {/* name */}
        <p className='text-center font-bold bg-black/10 py-2 text-xl '>Rikit Gupta</p>
        {/* service name */}
        <p className='text-center'>Architects - Residenial</p>
        {/* address */}

        <div className='text-center text-sm text-black/60 '>
            <span>Post Office : Parwanoo</span>
            <span>Solan , Himachal Pradesh</span>
            <span>Pincode : 176310</span>
        </div>

        <div className='flex gap-3 justify-center my-3'>
            <button className='flex justify-center items-center  rounded-full px-3 py-1  gap-1  text-black/60 active:scale-105 transition-all duration-200 border border-black '>View Profile<GoEye/></button>
            <button className='flex justify-center items-center rounded-full px-3 py-1  gap-1 text-black/60 active:scale-105 transition-all duration-200 border border-black '>Call<IoCallOutline/></button>
        </div>
    


    </div>
  )
}

export default ServicesCard