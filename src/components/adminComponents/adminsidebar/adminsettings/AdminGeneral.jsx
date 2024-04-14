import React from "react";

const AdminGeneral = () => {
  return (
    <div className=" w-[84%] mx-auto mt-20 text-white font-semibold mb-20">
      <h1>Site name:</h1>
      <input
        defaultValue={"Imagen AI"}
        type="text"
        className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
      />
      <h1 className="mt-6">Site URL:</h1>
      <input
        defaultValue={"https://dev.imagen.network/"}
        type="text"
        className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
      />
      <h1 className="mt-6">URL structure:</h1>
      
<div className="mt-2 text-sm text-[#8a8997]">
        <div className="mt-2">
        <input type="radio" name="url" value="Employed" />
        <span className="ml-2 px-3 bg-[#8a8997]"></span>
        <span className="ml-1">/123/why-do-birds-sing (requires "htaccess" file)</span>
       </div>
       <div className="mt-3">
        <input type="radio" name="url" value="Employed" />
        <span className="ml-2 px-3 bg-[#8a8997]"></span>
        <span className="ml-1">/index.php/123/why-do-birds-sing</span>
       </div>
       <div className="mt-3">
        <input type="radio" name="url" value="Employed" />
        <span className="ml-2 px-1 text-green-900  bg-white border border-green-400">ok</span>
        <span className="ml-1">/index.php/123/why-do-birds-sing</span>
       </div>
       <div className="mt-3">
        <input type="radio" name="url" value="Employed" />
        <span className="ml-2 px-1 text-green-900  bg-white border border-green-400">ok</span>
        <span className="ml-1"> /?qa=123&qa_1=why-do-birds-sing</span>
       </div>
       <div className="mt-3">
        <input type="radio" name="url" value="Employed" />
        <span className="ml-2 px-1 text-green-900  bg-white border border-green-400">ok</span>
        <span className="ml-1"> /index.php?qa=123&qa_1=why-do-birds-sing</span>
       </div>
       <p className="text-base mt-2">Options with the <span className="text-green-800 text-xs">OK</span> label are working for your site's configuration. For best search engine optimization (SEO), use the first <span className="text-green-800 text-xs">OK</span>  option available.</p>

      
       
</div>
<h1 className='mt-4'>Site Language:</h1>
            <select  className='w-full font-bold text-lg bg-black rounded-2xl mt-2 text-white px-4 py-2 border-2 border-gray-600 outline-2 outline-blue-600'>
                
                <option value="Vedio">English (US)</option>
                </select>
                <h1 className='mt-6'>Site theme:</h1>
            <select   className='w-full font-bold text-lg bg-black rounded-2xl mt-2 text-white px-4 py-2 border-2 border-gray-600 outline-2 outline-blue-600'>
                
                <option value="Vedio">leonardo</option>
                <option value="Vedio">default</option>
                </select>

                <h1 className='mt-6'>Theme for mobiles:</h1>
            <select   className='w-full font-bold text-lg bg-black rounded-2xl mt-2 text-white px-4 py-2 border-2 border-gray-600 outline-2 outline-blue-600'>
                
                <option value="Vedio">leonardo</option>
                <option value="Vedio">default</option>
                </select>

                <h1 className='mt-6'>Media classification:</h1>
            <select   className='w-full font-bold text-lg bg-black rounded-2xl mt-2 text-white px-4 py-2 border-2 border-gray-600 outline-2 outline-blue-600'>
                
                <option value="Vedio">Tags and Categories</option>
                <option value="Vedio">None</option>
                <option value="Vedio">Tags</option>
                <option value="Vedio">Categories</option>
                </select>
                <div className="mt-6">
                <input type="checkbox" />
                  <span className="ml-3">Take site down for temporary maintenance</span>
                </div>
                <div className="mt-2">
                <button className='bg-[#635bff] mt-2 px-14 rounded-2xl py-3'>Save Options</button>
                <button className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Reset To Defaults</button>
                </div>
                
     
    </div>
  );
};

export default AdminGeneral;
