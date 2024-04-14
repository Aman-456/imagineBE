import React from 'react'

const AdminMemberShip = () => {
  return (
    <div className=" w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
      <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Enable Homepage Login</span>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Enable Membership</span>
                </div>


                <h1 className='mt-6'>Select Currency:  </h1>
            <select   className='w-full font-bold text-lg bg-black rounded-2xl mt-2 text-white px-4 py-2 border-2 border-gray-600 outline-2 outline-blue-600'>
                
                <option value="Vedio">United States dollar</option>
                <option value="Vedio">Euro</option>
                <option value="Vedio">Australian dollar</option>
                <option value="Vedio">Sterling</option>
                <option value="Vedio">Canadian dollar</option>
                <option value="Vedio">Chinese Renminbi</option>
                </select>

                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Enable Stripe ( card payment ):</span>
                </div>
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Enable Paypal payment:</span>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                
                <div className="mt-6 px-2">
                <input type="checkbox" checked />
                  <span className="ml-3"> Enable Plan 1</span>
                </div>


                <div className=" flex justify-start gap-3 items-center w-[92%] pl-2 mt-4">
      <span className="">Number of dates: </span>
                <div>
                <input defaultValue={"10"} type="text" className=' bg-white rounded-2xl text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 

                </div>
                </div>

                
                <h1 className='mt-6'>Week/Month/Year/Unlimited:    </h1>
            <select   className='w-full font-bold text-lg bg-black rounded-2xl mt-2 text-white px-4 py-2 border-2 border-gray-600 outline-2 outline-blue-600'>
                
                <option value="">Week</option>
                <option value="">Month</option>
                <option value="">Year</option>
                <option value="">Unlimited</option>
                
                </select>


                <div className=" flex justify-start gap-3 items-center w-[92%]  mt-4">
      <span className="">Price: </span>
                <div>
                <input defaultValue={"10"} type="text" className=' bg-white rounded-2xl text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 

                </div>
                </div>

                <h1 className='mt-4'>Title:</h1>
   <input
     defaultValue={"Weekly Plan"}
     type="text"
     className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
   />


<h1 className='mt-4'>Description:</h1>
   <input
     
     type="text"
     className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
   />


<div className='border-b-2 border-dashed border-white mt-5'></div>
                
                <div className="mt-6 px-2">
                <input type="checkbox"  />
                  <span className="ml-3"> Enable Plan 2</span>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                
                <div className="mt-6 px-2">
                <input type="checkbox"  />
                  <span className="ml-3"> Enable Plan 3</span>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                
                <div className="mt-6 px-2">
                <input type="checkbox"  />
                  <span className="ml-3"> Enable Plan 4</span>
                </div>
                
                
                <div className="mt-6 px-2">
                <input type="checkbox"  />
                  <span className="ml-3">Custom message on payment form:</span>
                </div>

                <div className="mt-2">
             <button className='bg-[#635bff] text-white mt-2 px-14 rounded-2xl py-3'>Save Options</button>
             <button className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Reset To Defaults</button>
             </div>
    </div>
  )
}

export default AdminMemberShip
