import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const SubmitAi = () => {
  return (
    <div className='min-h-screen '>
      <div className='bg-white mt-40 rounded-2xl mx-auto w-2/6 p-8 flex flex-col items-center justify-center'>
      <FaUserCircle className='text-8xl'/>
      <h1 className='mt-2 text-2xl text-center p-3'>Please <span className='text-blue-600'>log in</span> or <span className='text-blue-600'>register</span> to submit a Post. </h1>
      </div>
    </div>
  )
}

export default SubmitAi
