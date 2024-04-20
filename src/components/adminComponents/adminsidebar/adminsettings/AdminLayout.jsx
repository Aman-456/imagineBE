import React, { useState } from 'react'
import Card from '../../../assets/png/layoutcard.png'
import { Images } from './layout'

const AdminLayout = () => {
  const [activeId, setActiveId] = useState(null);

  const handleDivClick = (id) => {
    setActiveId(id);
};
  return (
    <div className=" w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
      <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Show a logo image in the page header</span>
                </div>
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3"> Page logo for night mode:</span>
                </div>
                <div className='mt-4 w-16 h-16'>
                    <img src={Card} alt="" />
                </div>
                <input type="file" className='mt-6' />
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Mobile Logo:</span>
                </div>
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Custom HTML in sidebar box on every page:</span>
                </div>
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3"> Ads area at top of every page:</span>
                </div>
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">  Include &lt;meta&gt; description:</span>
                </div>

                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">  Custom HTML in &lt;head&gt; section of every page:</span>
                </div>
                <div className="mt-6 px-2">
                <input type="checkbox" checked />
                  <span className="ml-3"> Custom CSS Code:</span>
                </div>
                <textarea defaultValue={`.load-nomore{\ndisplay:none!important;\n}`} type="text" className='w-full bg-black rounded-2xl mt-4 text-white px-2 py-2 line-height-8  border-2 border-gray-600 outline-2 outline-blue-600' rows={6} />
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3"> Analytics code :</span>
                </div>
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Ads area at below of posts</span>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3"> Hide default comments:</span>
                </div>
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Hide Facebook comments:</span>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <h2 className='ml-3 mt-4'>Select template for featured posts:</h2>

                <div className='flex gap-3 flex-wrap mt-4'>
                  {Images.map((data)=>(
                    <div onClick={() => handleDivClick(data.id)} key={data.id} className={`w-48 h-40 border-4 border-white rounded-2xl
                     ${
                      activeId === data.id? 'border-blue-500' : ''
                  }`}>
                      <div className='w-full h-full overflow-hidden border-4 border-black rounded-2xl'>
                        <img src={data.logo} alt="" className='w-full h-full'/>
                      </div>
                    </div>
                  ))}
                </div>

                <h1 className='mt-8'>Featured posts height (px):</h1>
      <input
        
        type="text"
        className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
      />

<h1 className='mt-6'>Footer Facebook link:</h1>
      <input
        defaultValue={"https://t.me/ImagenNetwork"}
        type="text"
        className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
      />

<h1 className='mt-6'>Footer Twitter link:</h1>
      <input
        defaultValue={"https://twitter.com/Imagen_Network"}
        type="text"
        className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
      />
      
<h1 className='mt-6'>Footer Instagram link:</h1>
      <input
        
        type="text"
        className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
      />
      <h1 className='mt-6'>Footer YouTube link:</h1>
      <input
        
        type="text"
        className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
      />
      <h1 className='mt-6'>Footer Pinterest link:</h1>
      <input
        
        type="text"
        className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
      />


<div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Display RSS page link</span>
                </div>

                <div className="mt-2">
                <button className='bg-[#635bff] text-white mt-2 px-14 rounded-2xl py-3'>Save Options</button>
                <button className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Reset To Defaults</button>
                </div>
    </div>
  )
}

export default AdminLayout
