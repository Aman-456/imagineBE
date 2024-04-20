import React from 'react'

const AdminPosting = () => {
  return (
    <div className=" w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
      
      <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Disable image posting</span>
                <input type="checkbox"/>
                </div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Disable video posting</span>
                <input type="checkbox"/>
                </div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Disable news posting</span>
                <input type="checkbox"/>
                </div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Disable poll posting</span>
                <input type="checkbox"/>
                </div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Disable list posting</span>
                <input type="checkbox"/>
                </div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Disable Trivia Quiz posting</span>
                <input type="checkbox"/>
                </div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Disable Music posting</span>
                <input type="checkbox"/>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Enable Google AMP:</span>
                <input type="checkbox"/>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Enable Amazon AWS S3:</span>
                <input type="checkbox"/>
                </div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Enable Wasabi Storage:</span>
                <input type="checkbox"/>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Allow Video Upload :</span>
                <input type="checkbox"/>
                </div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Enable Mp3 music upload:</span>
                <input type="checkbox" checked/>
                </div>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 text-xl">Enable NSFW</span>
                <input type="checkbox" />
                </div>

                <div className="mt-5 flex justify-between items-center w-[78%] pl-2">
      <span className="ml-3 text-xl">Max. Image upload file size:</span>
                <div>
                <input type="text" defaultValue={"5"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>MB</span>

                </div>
                </div>

                <div className="mt-5 flex justify-between items-center w-[81%] pl-2">
      <span className="ml-3 text-xl">Max. image count in multiple upload:</span>
                <div>
                <input type="text" defaultValue={"12"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>Images</span>

                </div>
                </div>

                <div className="mt-5 flex justify-between items-center w-[78%] pl-2">
      <span className="ml-3 text-xl">Max. Video upload file size:</span>
                <div>
                <input type="text" defaultValue={"50"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>MB</span>

                </div>
                </div>
                <div className="mt-5 flex justify-between items-center w-[92%] pl-2">
      <span className="ml-3 text-xl">FFmpeg path to create mp4 video thumbnail:</span>
                <div>
                <input type="text" defaultValue={"/usr/bin/ffmpeg"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-60  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 

                </div>
                </div>
                <div className="mt-5 flex justify-between items-center w-[92%] pl-2">
      <span className="ml-3 text-xl">Facebook App id for share:</span>
                <div>
                <input type="text"  className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-60  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 

                </div>
                </div>
                <h1 className='ml-5 mt-4 text-xl'>Enable watermark for images:</h1>
                <div className="mt-6 flex justify-between w-[70%] pl-2">
      <span className="ml-3 bg-white rounded-2xl h-16 w-16"></span>
                <input type="checkbox"/>
                </div>
                <input type="file" className='mt-5 ml-5'/>

                <div className="mt-5 flex justify-between items-center w-[85%] pl-2">
      <span className="ml-3 text-xl">Watermark Position:</span>
                
                <select className=' bg-white rounded-2xl  text-gray-700 px-2 py-1 w-40  border-2 border-gray-600 outline-2 outline-blue-600 ' >
                    <option value="">Bottom right</option> 
                    <option value="">Top Left</option> 
                    <option value="">Top right</option>
                    <option value="">Center</option> 
                    <option value="">Bottom Left</option> 
                    <option value="">Bottom center</option> 
                    </select>

                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-5 flex justify-between items-center w-[78%] pl-2">
      <span className="ml-3 text-xl">Sort Comments by:</span>
                
                <select className=' bg-white rounded-2xl  text-gray-700 px-2 py-1 w-20  border-2 border-gray-600 outline-2 outline-blue-600 ' >
                    <option value="">Time</option> 
                    <option value="">Votes</option> 
                    
                    </select>

                </div>
                <div className="mt-5 flex justify-between items-center w-[87%] pl-2">
      <span className="ml-3 text-xl">Maximum Comments per page:</span>
                <div>
                <input type="text" defaultValue={"10"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'> Comments</span>

                </div>
                </div>
                <div className="mt-5 flex justify-between items-center w-[87%] pl-2">
      <span className="ml-3 text-xl">Partially hide replies if more than:</span>
                <div>
                <input type="text" defaultValue={"10"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'> Comments</span>

                </div>
                </div>
                <div className="mt-5 flex justify-between items-center w-[87%] pl-2">
      <span className="ml-3 text-xl">If partially hidden, show most recent:
</span>
                <div>
                <input type="text" defaultValue={"5"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'> Comments</span>

                </div>
                </div>
                <div className="mt-6 flex justify-between w-[73%] pl-2">
      <span className="ml-3 text-xl">Show reply button on comments:</span>
                <input type="checkbox" />
                </div>
                <div className="mt-5 flex justify-between items-center w-[82%] pl-2">
      <span className="ml-3 text-xl">Related Post matching:</span>
                
                <select className=' bg-white rounded-2xl  text-gray-700 px-2 py-1 w-28  border-2 border-gray-600 outline-2 outline-blue-600 ' >
                    <option value="">Default</option> 
                    <option value="">Widest</option> 
                    <option value="">Wider</option> 
                    <option value="">Narrower</option> 
                    <option value="">Narrowest</option> 
                    
                    </select>

                </div>
                <div className="mt-5 flex justify-between items-center w-[86%] pl-2">
      <span className="ml-3 text-xl">Maximum related Post:
</span>
                <div>
                <input type="text" defaultValue={"6"} className=' bg-white rounded-2xl  text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'> (max 50)</span>

                </div>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-5 flex justify-between items-center w-[77%] pl-2">
      <span className="ml-3 text-xl">Links to previous/next pages:</span>
                
                <select className=' bg-white rounded-2xl  text-gray-700 px-1 py-1 w-12  border-2 border-gray-600 outline-2 outline-blue-600 ' >
                    <option value="">3</option> 
                    <option value="">0</option> 
                    <option value="">1</option> 
                    <option value="">2</option> 
                    <option value="">4</option> 
                    <option value="">5</option> 
                    
                    </select>

                </div>
                <div className="mt-2 ml-2">
                <button className='bg-[#635bff] text-white mt-2 px-14 rounded-2xl py-3'>Save Options</button>
                <button className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Reset To Defaults</button>
                </div>
    </div>
  )
}

export default AdminPosting
