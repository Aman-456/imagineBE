import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateAdminUserTitle = () => {
  const [itemTitle, setItemTitle] = useState('');
  const [itemPoints, setItemPoints] = useState('');
  const navigate=useNavigate();
  const handleCreate = async () => {
      try {
        const newTitle = { title: itemTitle, points: itemPoints }; 
        await axios.post('http://localhost:5000/usertitle', newTitle);
        navigate('/admin/users'); // Redirect back to the home page after creating
      } catch (error) {
        console.error('Error creating item:', error);
      }
    };
    const cancelHandle=()=>{
      navigate('/admin/users')
    }
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
     <div className=" flex justify-start gap-3 items-center w-[92%] pl-2 mt-6">
      <span className="ml-3">Points required to receive title:</span>
                <div>
                <input  value={itemPoints}
      onChange={e => setItemPoints(e.target.value)} type="text" className=' bg-white rounded-2xl text-gray-700 px-2 py-2 w-16  border-2 border-gray-600 outline-2 outline-blue-600 ' /> 

                </div>
                </div>

                <div className="mt-2">
             <button onClick={handleCreate}  className='bg-[#635bff] mt-2 px-14 rounded-2xl py-3 text-white'>Add Title</button>
             <button onClick={cancelHandle} className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Cancel</button>
             </div>
    
    
    </div>
   
  )
}

export default CreateAdminUserTitle
