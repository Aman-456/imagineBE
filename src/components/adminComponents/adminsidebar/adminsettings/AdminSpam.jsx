import React from 'react'

const AdminSpam = () => {
  return (
    <div  className=" w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
        <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Request confirmation of user emails:</span>
                <input type="checkbox" checked/>
                </div>

                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">All new users must confirm their email:</span>
                <input type="checkbox" checked/>
                </div>


                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Enable moderation (approval) of users:</span>
                <input type="checkbox" />
                </div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Email me when a new user registers:</span>
                <input type="checkbox" />
                </div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Temporarily suspend new user registrations:
</span>
                <input type="checkbox" />
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Use captcha for user registration:
</span>
                <input type="checkbox" checked/>
                </div>

                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Use captcha on reset password form:
</span>
                <input type="checkbox" checked/>
                </div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Use captcha on feedback form:
</span>
                <input type="checkbox" checked/>
                </div>
                <div className="mt-5 flex justify-between items-center w-[85%] pl-2">
      <span className="ml-3 text-xl">Use captcha module:</span>
                
                <select className=' bg-white rounded-2xl  text-gray-700 px-2 py-1 w-40  border-2 border-gray-600 outline-2 outline-blue-600 ' >
                    <option value="">King Captcha</option> 
                     
                    </select>

                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Use moderation for users with few points:
</span>
                <input type="checkbox" />
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Allow posts to be flagged:
</span>
                <input type="checkbox" checked/>
                </div>
                <div className="mt-2 flex justify-between items-center w-[80%] pl-2">
      <span className="ml-3 text-xl">Email me if a post receives:</span>
                <div>
                <input type="text" defaultValue={"1"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>flags</span>

                </div>
                </div>
                <div className=" flex justify-between items-center w-[80%] pl-2">
      <span className="ml-3 text-xl">Email me again after every additional:</span>
                <div>
                <input type="text" defaultValue={"2"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>flags</span>

                </div>
                </div>
                <div className=" flex justify-between items-center w-[80%] pl-2">
      <span className="ml-3 text-xl">Automatically hide posts which reach:</span>
                <div>
                <input type="text" defaultValue={"5"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>flags</span>

                </div>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <p className='mt-2'>Blocked IP addresses - separate by spaces or commas:</p>
                <textarea type="text" className='w-full bg-black rounded-2xl mt-4 text-white px-2 py-2  border-2 border-gray-600 outline-2 outline-blue-600' rows={6}/>
                <p className='mt-4'>Use a hyphen for ranges or * to match any number. Examples: 192.168.0.4 , 192.168.0.0-192.168.0.31 , 192.168.0.*</p>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className=" flex justify-between items-center w-[87%] pl-2">
      <span className="ml-3 text-xl">Rate limit for user registrations:</span>
                <div>
                <input type="text" defaultValue={"5"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per IP/hour</span>

                </div>
                </div>
                <div className=" flex justify-between items-center w-[87%] pl-2">
      <span className="ml-3 text-xl">Rate limit for logging in:</span>
                <div>
                <input type="text" defaultValue={"20"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per IP/hour</span>

                </div>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className=" flex justify-between items-center w-[87%] pl-2">
      <span className="ml-3 text-xl">Rate limit for Submiting Post:</span>
                <div>
                <input type="text" defaultValue={"10"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per IP/hour</span>

                </div>
                </div>
                <div className=" flex justify-end items-center w-[89%] pl-2">
      
                <div>
                <input type="text" defaultValue={"20"} className=' bg-white rounded-2xl mt-2 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per user/hour</span>

                </div>
                </div>
                <div className=" flex justify-between items-center w-[87%] pl-2">
      <span className="ml-3 text-xl">Rate limit for adding Comments:</span>
                <div>
                <input type="text" defaultValue={"50"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per IP/hour</span>

                </div>
                </div>
                <div className=" flex justify-end items-center w-[89%] pl-2">
      
                <div>
                <input type="text" defaultValue={"25"} className=' bg-white rounded-2xl mt-2 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per user/hour</span>

                </div>
                </div>
                <div className=" flex justify-between items-center w-[87%] pl-2">
      <span className="ml-3 text-xl">Rate limit for posting comments:</span>
                <div>
                <input type="text" defaultValue={"40"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per IP/hour</span>

                </div>
                </div>
                <div className=" flex justify-end items-center w-[89%] pl-2">
      
                <div>
                <input type="text" defaultValue={"20"} className=' bg-white rounded-2xl mt-2 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per user/hour</span>

                </div>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className=" flex justify-between items-center w-[87%] pl-2">
      <span className="ml-3 text-xl">Rate limit for voting:</span>
                <div>
                <input type="text" defaultValue={"600"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per IP/hour</span>

                </div>
                </div>
                <div className=" flex justify-end items-center w-[89%] pl-2">
      
                <div>
                <input type="text" defaultValue={"300"} className=' bg-white rounded-2xl mt-2 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per user/hour</span>

                </div>
                </div>
                <div className=" flex justify-between items-center w-[87%] pl-2">
      <span className="ml-3 text-xl">Rate limit for flagging posts:</span>
                <div>
                <input type="text" defaultValue={"10"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per IP/hour</span>

                </div>
                </div>
                <div className=" flex justify-end items-center w-[89%] pl-2">
      
                <div>
                <input type="text" defaultValue={"5"} className=' bg-white rounded-2xl mt-2 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per user/hour</span>

                </div>
                </div>
                <div className=" flex justify-between items-center w-[87%] pl-2">
      <span className="ml-3 text-xl">Rate limit for uploading files:</span>
                <div>
                <input type="text" defaultValue={"20"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per IP/hour</span>

                </div>
                </div>
                <div className=" flex justify-end items-center w-[89%] pl-2">
      
                <div>
                <input type="text" defaultValue={"10"} className=' bg-white rounded-2xl mt-2 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per user/hour</span>

                </div>


                </div>
                <div className=" flex justify-between items-center w-[87%] pl-2">
      <span className="ml-3 text-xl">Rate limit for private and wall messages:</span>
                <div>
                <input type="text" defaultValue={"10"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per IP/hour</span>

                </div>
                </div>
                <div className=" flex justify-end items-center w-[89%] pl-2">
      
                <div>
                <input type="text" defaultValue={"5"} className=' bg-white rounded-2xl mt-2 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>per user/hour</span>

                </div>

                
                </div>

                <div className="mt-2 ">
                <button className='bg-[#635bff] text-white mt-2 px-14 rounded-2xl py-3'>Save Options</button>
                <button className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Reset To Defaults</button>
                </div>

    </div>
  )
}

export default AdminSpam
