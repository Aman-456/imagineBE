import React, { useState,useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';


const AdminUsers = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState([]);
 
   // State to store the id of the item to update

   useEffect(() => {
    fetchItems();
    fetchTitle();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setItems(response.data);
      console.log(items.id)
      items.forEach(item => console.log("Item ID:", item.id));
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const fetchTitle = async () => {
    try {
      const response = await axios.get('http://localhost:5000/usertitle');
      setTitle(response.data);
  
      title.forEach(item => console.log("Item ID:", item.id));
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  
 

 

  

  return (
    <div>

    <>
 <div className=" w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
      <div className="mt-6 flex justify-between w-[80%] pl-2">
      <span className="ml-3 text-xl">Enable Bookmarks</span>
                <input type="checkbox" checked/>
                </div>
                <div className='border-b-2 border-dashed border-white mt-5'></div>
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Notice at bottom for first time visitors - HTML allowed:</span>
                </div>
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Enable GDPR:</span>
                </div>
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Custom message on register form - HTML allowed:</span>
                </div>
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Terms & Conditions checkbox on registration form - HTML allowed:</span>
                </div>
                <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3">Notice at bottom for new registered users - HTML allowed:</span>
                </div>
                <div className="mt-6 px-2">
                <input type="checkbox" checked/>
                  <span className="ml-3"> Custom message in email sent to new registered users:</span>
                </div>
                <textarea type="text" className='w-full bg-black rounded-2xl mt-4 text-white px-2 py-2  border-2 border-gray-600 outline-2 outline-blue-600' rows={6}/>
                <div className="mt-6 flex justify-between w-[80%] pl-2">
      <span className="ml-3 text-xl">Only log in by email address (not username):</span>
                <input type="checkbox"/>
                </div>
                <div className="mt-6 flex justify-between w-[80%] pl-2">
      <span className="ml-3 text-xl">Enable wall posts on user profiles:</span>
                <input type="checkbox" checked/>
                </div>
                <div className="mt-6 flex justify-between w-[80%] pl-2">
      <span className="ml-3 text-xl">Enable private messaging between users:</span>
                <input type="checkbox" checked/>
                </div>
                <div className="mt-6 flex justify-between w-[80%] pl-2">
      <span className="ml-3 text-xl">Store and display private message history:</span>
                <input type="checkbox" checked/>
                </div>
                <div className="mt-2 flex justify-between items-center w-[92%] pl-2">
      <span className="ml-3 text-xl">Private messages per page:</span>
                <div>
                <input type="text" defaultValue={"10"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>(max 20)</span>

                </div>
                </div>

                <div className=" flex justify-between items-center w-[92%] pl-2">
      <span className="ml-3 text-xl">Wall posts per page:</span>
                <div>
                <input type="text" defaultValue={"10"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>(max 20)</span>

                </div>
                </div>
                <div className='border-b-2 border-dashed border-white mt-3'></div>
                <div className="mt-6 flex justify-between w-[80%] pl-2">
      <span className="ml-3 text-xl">Allow users to upload avatars:</span>
                <input type="checkbox" checked/>
                </div>

                <div className=" flex mt-2 justify-between items-center w-[90%] pl-2">
      <span className="ml-3 text-xl">Maximum size for storing avatars:</span>
                <div>
                <input type="text" defaultValue={"400"} className=' bg-white rounded-2xl mt-4 text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
                <span className='ml-2 text-lg'>pixels</span>

                </div>
                </div>


                <div className="mt-6 flex justify-between w-[80%] pl-2">
      <span className="ml-3 text-xl">Default avatar:</span>
                
                </div>

                <div className="mt-6 flex justify-between w-[80%] pl-2">
      
      <img src="" alt="" className="ml-3 w-16 rounded-full h-16"/>
                <input type="checkbox" />
                </div>
                <div className='mt-4 pl-2'>
                    <input type="file" className='ml-3'/>
                </div>
                <div className='border-b-2 border-dashed border-white mt-3'></div>
                <h2 className='ml-3 mt-4'>Extra fields for users:</h2>

                <ul className='list-disc ml-3'>
                {items.map(item => (
                    <li key={item.id} className='mt-2'>{item.name} - <span className='text-[#635bff] cursor-pointer' >
                    <Link to={`/admin/users/userfield/${item.id}`}>edit field</Link>
                    </span> </li>
                ))}
                    
                   
                   
                    <li className='mt-2'> <span  className='text-[#635bff] cursor-pointer'> <Link to={'/admin/users/userfield'}>Add new field</Link> </span> </li>
                </ul>
                <div className='border-b-2 border-dashed border-white mt-3'></div>
                <h2 className='ml-3 mt-4'>User titles based on points:</h2>
                {title.map(item => (
                    <li key={item.id} className='mt-2'>{item.title} - {item.points} points - <span className='text-[#635bff] cursor-pointer' >
                    <Link to={`/admin/users/usertitle/${item.id}`}>edit field</Link>
                    </span> </li>
                ))}

                <ul className='list-disc ml-3'>
                <li className='mt-2'> <span  className='text-[#635bff] cursor-pointer'><Link to={'/admin/users/usertitle'}>Add new title</Link></span> </li>
                </ul>
                <div className="mt-2 ">
                <button className='bg-[#635bff] text-white mt-2 px-14 rounded-2xl py-3'>Save Options</button>
                <button className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Reset To Defaults</button>
                </div>
           
    </div>   
    
    </>
 






   
   
    </div>
  );
};

export default AdminUsers;
