import React from 'react'

const AdminRSS = () => {
  return (
    <div className=" w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
        <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Feed for recent post:</span>
                <input type="checkbox" checked/>
                </div>

                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Feed for recent Post and Comments:</span>
                <input type="checkbox" checked/>
                </div>

                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Feed for recent activity:</span>
                <input type="checkbox" checked/>
                </div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Feed for hot Post:</span>
                <input type="checkbox" />
                </div>

                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Feed for non commented Post:</span>
                <input type="checkbox" checked />
                </div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Feed for each tag's Post:</span>
                <input type="checkbox"  />
                </div>
      

                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Individual feeds per category:</span>
                <input type="checkbox"  checked/>
                </div>

                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Feeds for search results:</span>
                <input type="checkbox"  />
                </div>

                <div className='border-b-2 border-dashed border-white mt-5'></div>

                <div className="mt-2 flex justify-between items-center w-[83%] pl-2">
      <span className="ml-3 text-xl">Maximum length of feeds:</span>
                <div>
                <input type="text" defaultValue={"50"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>(max 50)</span>

                </div>
                </div>

                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Include full text in feeds:</span>
                <input type="checkbox"  checked/>
                </div>


                <div className="mt-2 ml-3">
                <button className='bg-[#635bff] text-white mt-2 px-14 rounded-2xl py-3'>Save Options</button>
                <button className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Reset To Defaults</button>
                </div>
    </div>
  )
}

export default AdminRSS
