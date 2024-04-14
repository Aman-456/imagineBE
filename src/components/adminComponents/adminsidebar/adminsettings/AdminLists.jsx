import React from 'react'

const AdminLists = () => {
  return (
    <div className=" w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
      <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Custom message on submit form - HTML allowed:</span>
                </div>

                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Custom message on Comment form - HTML allowed:</span>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-5 flex justify-between items-center w-[87%] pl-2">
      <span className="ml-3 text-xl">Length of Post page:</span>
                <div>
                <input type="text" defaultValue={"20"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'> (max 50)</span>

                </div>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-5 flex justify-between items-center w-[88%] pl-2">
      <span className="ml-3 text-xl">Length of Tags page:</span>
                <div>
                <input type="text" defaultValue={"30"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'> (max 200)</span>

                </div>
                </div>
                <div className="mt-5 flex justify-between items-center w-[88%] pl-2">
      <span className="ml-3 text-xl">Length of Users page:</span>
                <div>
                <input type="text" defaultValue={"20"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'> (max 200)</span>

                </div>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-5 flex justify-between items-center w-[88%] pl-2">
      <span className="ml-3 text-xl">Minimum length of Post title:</span>
                <div>
                <input type="text" defaultValue={"12"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'> characters</span>

                </div>
                </div>
                <div className="mt-5 flex justify-between items-center w-[88%] pl-2">
      <span className="ml-3 text-xl">Maximum length of Post title:</span>
                <div>
                <input type="text" defaultValue={"120"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'> (max 800)</span>

                </div>
                </div>
                <div className="mt-5 flex justify-between items-center w-[84%] pl-2">
      <span className="ml-3 text-xl">Minimum number of tags:</span>
                <div>
                <input type="text" defaultValue={"0"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'> tags</span>

                </div>
                </div>
                <div className="mt-5 flex justify-between items-center w-[84%] pl-2">
      <span className="ml-3 text-xl">Maximum number of tags:</span>
                <div>
                <input type="text" defaultValue={"5"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'> tags</span>

                </div>
                </div>
                <div className="mt-6 flex justify-between w-[75%] pl-2">
      <span className="ml-3 text-xl">Use comma as the only tag separator:</span>
                <input type="checkbox"/>
                </div>
                <div className="mt-5 flex justify-between items-center w-[88%] pl-2">
      <span className="ml-3 text-xl">Minimum length of Comment:</span>
                <div>
                <input type="text" defaultValue={"12"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'> characters</span>

                </div>
                </div>
                <div className="mt-6 flex justify-between w-[75%] pl-2">
      <span className="ml-3 text-xl">Check email notification box by default:</span>
                <input type="checkbox"/>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <h2 className='mt-4 '>Censored words - separate by spaces or commas:</h2>

                <textarea type="text" className='w-full bg-black rounded-2xl mt-4 text-white px-2 py-2  border-2 border-gray-600 outline-2 outline-blue-600' rows={6}/>
                <p className='mt-4'>Use a * to match any letters. Examples: doh (will only match exact word doh) , doh* (will match doh or dohno) , do*h (will match doh, dooh, dough).</p>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-6 flex justify-between w-[75%] pl-2">
      <span className="ml-3 text-xl">Check for similar Post when Submiting:</span>
                <input type="checkbox"/>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-6 flex justify-between w-[75%] pl-2">
      <span className="ml-3 text-xl">Show example tags based on Post:</span>
                <input type="checkbox" checked/>
                </div>

                <div className="mt-5 flex justify-between items-center w-[85%] pl-2">
      <span className="ml-3 text-xl">Example tags matching:</span>
                
                <select className=' bg-white rounded-2xl  text-gray-700 px-2 py-1 w-28  border-2 border-gray-600 outline-2 outline-blue-600 ' >
                    <option value="">Default</option> 
                    <option value="">Widest</option> 
                    <option value="">Wider</option> 
                    <option value="">Narrower</option> 
                    <option value="">Narrowest</option> 
                    
                    </select>

                </div>
                <div className="mt-6 flex justify-between w-[75%] pl-2">
      <span className="ml-3 text-xl">Show matching tags while typing:</span>
                <input type="checkbox" checked/>
                </div>

                <div className="mt-5 flex justify-between items-center w-[88%] pl-2">
      <span className="ml-3 text-xl">Maximum tag hints to show:</span>
                <div>
                <input type="text" defaultValue={"5"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'> (max 50)</span>

                </div>
                </div>

                <div className="mt-2 ">
                <button className='bg-[#635bff] text-white mt-2 px-14 rounded-2xl py-3'>Save Options</button>
                <button className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Reset To Defaults</button>
                </div>

    </div>
  )
}

export default AdminLists
