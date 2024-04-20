import React, { useState } from 'react';

const AdminMailing = () => {
  // State to manage the checkbox status
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
      <div className="mt-6 px-2">
        {/* Checkbox input */}
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <span className="ml-3"> Enable mass mailings to all users</span>
      </div>
      <h1 className="ml-2 mt-4">Users will be able to unsubscribe on their account page.</h1>
      
      {isChecked && (
        <div className='mt-6'>
          <h1>From name:</h1>
      <input
        defaultValue={"Imagen AI"}
        type="text"
        className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
      />
       <h1 className='mt-5'>From email address:</h1>
      <input
        defaultValue={"no-reply@imagen.network"}
        type="text"
        className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
      />
      <h1 className='mt-5'>Subject Line:</h1>
      <input
        defaultValue={"A message from Imagen AI"}
        type="text"
        className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
      />
      <h1 className='mt-5'>Body text:</h1>
      <textarea defaultValue={`-- \n
Imagen AI \n
https://dev.imagen.network/`} type="text" className='w-full bg-black rounded-2xl mt-4 text-white px-2 py-2   border-2 border-gray-600 outline-2 outline-blue-600' rows={6} />
 <h1 className='mt-3'>An unsubscribe link will be added at the bottom of every message.</h1>
 <h1 className='mt-5'>Maximum mailing rate: <span>
  <input type="text" defaultValue={"500"} className=' bg-white rounded-2xl mt-2 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
   </span> emails per minute.</h1>
        </div>
      )}
      {/* Conditionally render the div based on the checkbox status */}
      
        <div>
          
          <div className="mt-2">
            <button className="bg-[#635bff] text-white mt-2 px-14 rounded-2xl py-3">Save Options</button>
            <button className="bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3">Reset To Defaults</button>
            {isChecked && (
              <>
               <button className="bg-[#635bff] text-white mt-2 ml-2 px-14 rounded-2xl py-3">Send Test to Me</button>
               <button className="bg-[#635bff] text-white mt-2 ml-2 px-14 rounded-2xl py-3">Start Mailing</button>
              </>
              
            )}
          </div>
        </div>
      
    </div>
  );
};

export default AdminMailing;
