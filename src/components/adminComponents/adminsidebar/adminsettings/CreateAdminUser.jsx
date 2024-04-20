import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const CreateAdminUser = () => {
    const [itemName, setItemName] = useState('');
    const navigate=useNavigate();
    const handleCreate = async () => {
        try {
          const newItem = { name: itemName };
          await axios.post('http://localhost:5000/users', newItem);
          navigate('/admin/users'); // Redirect back to the home page after creating
        } catch (error) {
          console.error('Error creating item:', error);
        }
      };

      const cancelHandle=()=>{
        navigate('/admin/users')
      }
  return (
    <div>

      <div className=" w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
        <h1 className='mt-4'>Field name:</h1>
          <input 
        type="text" 
        value={itemName}
        onChange={e => setItemName(e.target.value)}
        placeholder=""
        className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600" 
      />



             <h1 className='mt-4'>Content type:</h1>
            <select  className='w-full font-bold text-lg bg-black rounded-2xl mt-2 text-white px-4 py-2 border-2 border-gray-600 outline-2 outline-blue-600'>
                
                <option value="">Single line of text</option>
                <option value="">Multiple line of text</option>
                <option value="">Linked URL</option>
                </select>


                <h1 className='mt-4'>Visible for:</h1>
            <select  className='w-full font-bold text-lg bg-black rounded-2xl mt-2 text-white px-4 py-2 border-2 border-gray-600 outline-2 outline-blue-600'>
                
                <option value="">Anybody</option>
                <option value="">Registered users</option>
                <option value="">Verified users</option>
                <option value="">Premium Members (Membership)</option>
                <option value="">Experts,Editors, Moderators,Admins</option>
                <option value="">Editors, Moderators,Admins</option>
                <option value=""> Moderators and Admins</option>
                <option value="">Administrators</option>
                </select>
                <h1 className='mt-4'>Position:</h1>
            <select  className='w-full font-bold text-lg bg-black rounded-2xl mt-2 text-white px-4 py-2 border-2 border-gray-600 outline-2 outline-blue-600'>
            <option value="">After "About"</option>
                <option value="">Full Name</option>
                <option value="">After "Location"</option>
                <option value="">After "Website"</option>
                <option value="">After "Telegram"</option>
                <option value="">After "Twitter"</option>
                <option value="">After "Instagram"</option>
                <option value=""> After "Reddit"</option>
                <option value="">After "Pinterest"</option>
                <option value="">After "Linkedln"</option>
               
                </select>

                <div className="mt-6">
             <input type="checkbox" />
               <span className="ml-3"> Show field on user registration form</span>
             </div>

             <div className="mt-2">
             <button onClick={handleCreate} className='bg-[#635bff] mt-2 px-14 rounded-2xl py-3'>Add Field</button>
             <button onClick={cancelHandle} className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Cancel</button>
             </div>
      
    </div>
</div>
  )
}

export default CreateAdminUser
