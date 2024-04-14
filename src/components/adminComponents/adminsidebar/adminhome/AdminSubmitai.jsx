import React from 'react'
import { FaPaperPlane } from "react-icons/fa";

const AdminSubmitai = () => {
  return (
    <div className='min-h-screen p-1 '>
        <div className='flex item-center justify-center'>
        <div className='pl-8  pt-8 w-[70%]'>
            <div className='w-full bg-black bg-opacity-10  p-6 rounded-3xl'>
                <div className='flex items-center justify-between w-full bg-[#151419] px-4 py-2 rounded-2xl'>
                    <input type="text " className='w-full text-lg bg-transparent  outline-none text-white'  placeholder='An Impressionist oil painting of sunflowers in a purple vase...'/>
                    <button className='bg-white flex justify-center items-center gap-2 p-2 rounded-2xl'> <FaPaperPlane /> Generate</button>
                </div>
            </div>
            <div className='w-full bg-black bg-opacity-10  px-5 py-1 pb-4 rounded-3xl mt-6'>
            <div className=' w-full bg-[#151419] px-4 py-3 rounded-2xl'>
                <div className='bg-black rounded-2xl p-1 w-full'>
                    <button className='bg-white rounded-2xl px-8 py-2 text-[#333]'>Size</button>
                </div>
                <div className='flex gap-3 mt-6 text-sm'>
                    <button  className='bg-[#0c0b0d] text-white rounded-2xl px-5 py-2 '>Square(512x512)</button>
                    <button  className='bg-white rounded-2xl px-5 py-2 text-[#333]'>Square(1024x1024)</button>
                </div>
            </div>
            </div>
        </div>
      <div className=' bg-black bg-opacity-10 pl-10 pr-7 py-10  rounded-3xl mt-2 w-[30%]'>
        <div className='bg-[#151419] rounded-2xl pl-8 pr-10 pt-12 pb-10 text-white font-semibold'>
            <h1>Title</h1>
            <input type="text" className='w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600'/>
            <h1 className='mt-6'>Category:</h1>
            <select  className='w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600'>
                <option value=""></option>
                <option value="Vedio">Vedios</option>
                </select>
                <h1 className='mt-10'>Tags-use hyphens to combine words</h1>
            <input type="text" className='w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600'/>
            <button className='bg-[#635bff] mt-2 w-full rounded-2xl py-3'>Submit</button>
        </div>
        
      </div>
        </div>
      
    </div>
  )
}

export default AdminSubmitai;
