import React from 'react'

const AdminPoints = () => {
  return (
    <div className=" w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
       <div className="mt-2 flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Posting a Post:</span>
                <div>
                <input type="text" defaultValue={"2"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>

                <div className="mt-2 flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Selecting an Comment for your Post:</span>
                <div>
                <input type="text" defaultValue={"3"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>
                <div className="mt-2 flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Per up vote on your Post:</span>
                <div >
                  <span className='text-xl text-white'>+</span>
                <input type="text" defaultValue={"1"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16 ml-2  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>

                <div className="mt-2 flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Per down vote on your Post:</span>
                <div >
                  <span className='text-xl text-white'>-</span>
                <input type="text" defaultValue={"1"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16 ml-2  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>
                <div className="mt-2 flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Limit from up votes on each Post:</span>
                <div >
                  <span className='text-xl text-white'>+</span>
                <input type="text" defaultValue={"10"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16 ml-2  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>
                <div className="mt-2 flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Limit from down votes on each Post:</span>
                <div >
                  <span className='text-xl text-white'>-</span>
                <input type="text" defaultValue={"3"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16 ml-2  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>

                
                 
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-2 flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Posting an Comment:</span>
                <div>
                <input type="text" defaultValue={"4"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>
                <div className="mt-2 flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Having your Comment selected as the best:</span>
                <div>
                <input type="text" defaultValue={"30"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>

                <div className="mt-2 flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Per up vote on your Comment:</span>
                <div >
                  <span className='text-xl text-white'>+</span>
                <input type="text" defaultValue={"2"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16 ml-2  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>


                <div className="mt-2 flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Per down vote on your Comment:</span>
                <div >
                  <span className='text-xl text-white'>-</span>
                <input type="text" defaultValue={"2"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16 ml-2  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>

                <div className="mt-2 flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Limit from up votes on each Comment:</span>
                <div >
                  <span className='text-xl text-white'>-</span>
                <input type="text" defaultValue={"5"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16 ml-2  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>


                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-2 flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Voting up a Post:</span>
                <div>
                <input type="text" defaultValue={"1"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>
                <div className=" flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Voting down a Post:</span>
                <div>
                <input type="text" defaultValue={"1"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>

                <div className=" flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Voting up an Comment:</span>
                <div>
                <input type="text" defaultValue={"1"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>
                <div className=" flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Voting down an Comment:</span>
                <div>
                <input type="text" defaultValue={"1"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>points</span>

                </div>
                </div>

                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-2 flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Multiply all points:</span>
                <div >
                  <span className=' text-white'>x</span>
                <input type="text" defaultValue={"10"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16 ml-2  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 px-6 text-lg'></span>

                </div>
                </div>
                <div className=" flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Add for all users:
</span>
                <div >
                  <span className='text-xl text-white'>+</span>
                <input type="text" defaultValue={"10"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16 ml-2  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2  text-lg'>points</span>

                </div>
                </div>


                <div className="mt-2 ml-3">
                <button className='bg-[#635bff] text-white mt-2 px-14 rounded-2xl py-3'>Save Options</button>
                <button className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Reset To Defaults</button>
                </div>

                
    </div>
  )
}

export default AdminPoints
