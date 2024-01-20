import React from 'react'

const NoProfessionalsFound = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <img src="404Error.svg" alt="error"  />
        <p className='text-blue-400 font-bold'>No Professionals found.. </p>
    </div>
  )
}

export default NoProfessionalsFound