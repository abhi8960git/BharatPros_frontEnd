import React from 'react';

const HeroBanner = () => {
  return (
    <div className='flex text-xs text-center justify-center bg-blue-100 mx-2 mt-[70px] pb-4 rounded-b-[30px] gap-2 shadow-sm'>
      {/* Image 1 */}
      <div className='-mt-[66px]'>
        <img src="Hills3D.png" alt="good" width={100} height={100}  className=' bg-black/20 rounded-full p-1 hover:scale-95 duration-200 transition-all'/>
        <p className='mt-2'>Adventure <br></br> and <br /> Activities</p>
      </div>

    

      {/* Image 3 */}
      <div className='-mt-[62px]'>
        <img src="Hotel3D.webp" alt="good" width={130} height={130} className=' bg-black/20 rounded-full p-2 hover:scale-95 duration-200 transition-all' />
        <p className='mt-4'>Hotels</p>
      </div>

        {/* Image 2 */}
        <div className='-mt-[62px]'>
        <img src="Home3D.png" alt="good" width={100} height={100} className=' bg-black/20 rounded-full p-1 hover:scale-95 duration-200 transition-all' />
        <p className='mt-4'>HomeStays</p>
      </div>
    </div>
  );
};

export default HeroBanner;
