import React from 'react';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div className='flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer'>
  <div className='flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full hover:bg-blue-gradient'>
    <div className='flex justify-center items-start flex-row'>
      <p className=' mr-0.5 font-montserrat font-extralight text-[16px] leading-[21px]'>
        <span className='text-gradient'>ЗАМОВИТИ</span>
      </p>
      <img src={arrowUp} alt="arrowUP" className='w-[23px] h-[23px] object-contain' />
    </div>
  </div>
</div>
  )
}

export default GetStarted