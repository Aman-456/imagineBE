import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const EditAdminUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [deleteChecked, setDeleteChecked] = useState(false);
    const [itemName, setItemName] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/users/${id}`);
             // Assuming the API response contains the name field
            setItemName(response.data.name); 
           
            // Set the field name in the state
            console.log(itemName)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSaveChanges = async () => {
        try {
            if (deleteChecked) {
                await axios.delete(`http://localhost:5000/users/${id}`);
            } else {
                await axios.put(`http://localhost:5000/users/${id}`, { id, name: itemName });
            }
            navigate('/admin/users');
        } catch (error) {
            console.error('Error updating/deleting field:', error);
        }
    };
    
    const handleCancel = () => {
        navigate('/admin/users'); // Navigate to the users page
      };

    return (
        <div className="w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
            <h1 className='mt-4'>Field name:</h1>
            <input
                type="text"
                value={itemName}
                onChange={e => setItemName(e.target.value)}
                className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
            />


            
<div className="mt-6">
             <input className='cursor-pointer' type="checkbox" checked={deleteChecked}
                    onChange={e => setDeleteChecked(e.target.checked)}/>
               <span className="ml-3"> Delete this field</span>
             </div>


             {deleteChecked ? '' : (
                <div>

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
                                
                                <option value="">Full Name</option>
                                <option value="">After "Location"</option>
                                <option value="">After "Website"</option>
                                <option value="">After "Telegram"</option>
                                <option value="">After "Twitter"</option>
                                <option value="">After "Instagram"</option>
                                <option value=""> After "Reddit"</option>
                                <option value="">After "Pinterest"</option>
                                <option value="">After "Linkedln"</option>
                                <option value="">After "About"</option>
                                </select>
                
                                <div className="mt-6">
                             <input type="checkbox" />
                               <span className="ml-3"> Show field on user registration form</span>
                             </div>
                
                </div>
             )}



            


            <div className="mt-2">
                <button onClick={handleSaveChanges} className='bg-[#635bff] mt-2 px-14 rounded-2xl py-3'> {deleteChecked ? 'Delete' : 'Save Changes'}</button>
                <button onClick={handleCancel} className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Cancel</button>
            </div>
        </div>
    );
}

export default EditAdminUser;
