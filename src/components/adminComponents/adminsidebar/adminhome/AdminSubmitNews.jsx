import React from 'react'

const AdminSubmitNews = () => {
  return (
    <div className='min-h-screen'>
      <h1 className='mt-10 text-center text-white text-4xl font-semibold'>News</h1>
      <div className=' w-[80%] mx-auto mt-32 mb-20 text-white font-semibold'>
      <h1>Select Thumbnail</h1>
      <label htmlFor="fileInput" className="block w-full text-center bg-black text-white py-12 px-4 rounded-2xl border border-gray-500 cursor-pointer mt-4">
                     Drop files here to upload
                    </label>
<input id="fileInput" type="file" className="hidden"
  onChange={(e) => handleFileUpload(e.target.files)}
/>



      <h1 className='mt-6'>Title</h1>
            <input type="text" className='w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600'/>

            <h1 className='mt-6'>Category:</h1>
            <select  className='w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600'>
                <option value=""></option>
                <option value="Vedio">Vedios</option>
                </select>
    

               

                <h1 className='mt-6'>Content</h1>
            <textarea type="text" className='w-full bg-black rounded-2xl mt-2 text-white px-2 py-2  outline-none ' rows={8}/>
                <h1 className='mt-10'>Tags-use hyphens to combine words</h1>
            <input type="text" className='w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600'/>
            <button className='bg-[#635bff] mt-2 px-24 rounded-2xl py-3'>Submit</button>
      </div>
    </div>
  )
}

export default AdminSubmitNews
