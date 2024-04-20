import React from 'react'
import { BsEmojiFrown } from "react-icons/bs";

const Shorts = () => {
  return (
    <div className='h-screen'>
      <div className='w-full flex justify-center items-center mt-24'>
        <div className='bg-white flex flex-col items-center justify-center w-1/3 rounded-2xl py-8 gap-4 text-[#646373]'>
            <div ><BsEmojiFrown className='text-8xl font-extrabold'/></div>
            <div className='text-2xl font-semibold'>Nothing Found!</div>
        </div>
      </div>
    </div>
  )
}

export default Shorts
