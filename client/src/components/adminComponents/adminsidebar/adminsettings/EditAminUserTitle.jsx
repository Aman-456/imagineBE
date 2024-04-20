import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const EditAminUserTitle = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [deleteChecked, setDeleteChecked] = useState(false);
    const [itemTitle, setItemTitle] = useState('');
    const [itemPoints, setItemPoints] = useState('');

    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/usertitle/${id}`);
             // Assuming the API response contains the name field
            setItemTitle(response.data.title); 
            setItemPoints(response.data.points); 
           
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSaveChanges = async () => {
        try {
            if (deleteChecked) {
                await axios.delete(`http://localhost:5000/usertitle/${id}`);
            } else {
                await axios.put(`http://localhost:5000/usertitle/${id}`, { id, title: itemTitle,points:itemPoints });
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
    <div className=" w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
    <h1 className='mt-4'>
User title - HTML allowed:</h1>
      <input 
    type="text" 
    value={itemTitle}
    onChange={e => setItemTitle(e.target.value)}
    placeholder=""
    className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600" 
  /> 


<div className="mt-6">
             <input className='cursor-pointer' type="checkbox" checked={deleteChecked}
                    onChange={e => setDeleteChecked(e.target.checked)}/>
               <span className="ml-3"> Delete this field</span>
             </div>

             {deleteChecked ? '' : (
                <div className=" flex justify-start gap-3 items-center w-[92%] pl-2 mt-6">
                <span className="ml-3">Points required to receive title:</span>
                          <div>
                          <input  value={itemPoints}
                onChange={e => setItemPoints(e.target.value)} type="text" className=' bg-white rounded-2xl text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 
            
                          </div>
                          </div>
             )}


   

              <div className="mt-2">
           <button onClick={handleSaveChanges}  className='bg-[#635bff] mt-2 px-14 rounded-2xl py-3 text-white'>Save Changes</button>
           <button onClick={handleCancel} className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Cancel</button>
           </div>
  
  
  </div>
  )
}

export default EditAminUserTitle
