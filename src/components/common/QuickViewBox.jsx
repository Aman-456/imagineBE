import React, { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";

import Loading from './Loading';
import CopyTextButton from '../pages/singlepost/CopyTextButton';


const QuickViewBox = ({onClose,post}) => {
    const [showMainDiv, setshowMainDiv] = useState(false);
    const [showLoadingDiv, setshowLoadingDiv] = useState(true);
   
    useEffect(() => {
        const timer = setTimeout(() => {
          setshowLoadingDiv(false); // Hide the other div after 2 seconds
          setshowMainDiv(true); // Show the child div after 2 seconds
        }, 1000);
    
      //  logic to set frist box images 
      const scrollableDivs = document.getElementsByClassName('scrollable-div');
      for (const scrollableDiv of scrollableDivs) {
          const numChildren = scrollableDiv.childElementCount;
          if (numChildren === 1) {
              scrollableDiv.style.justifyContent = 'center';
          } else {
              scrollableDiv.style.justifyContent = 'start';
          }
      }
        return () => clearTimeout(timer);
      }, []); 
    
  return (
    <div style={{ backgroundColor: 'rgba(111, 105, 132, 0.92)' , } } className=' w-[100%]  fixed top-0 left-0 z-50 overflow-y-auto'>
        <div className='w-[100%] h-[100vh] overflow-y-auto'>
        <div className='text-right'>
        <div onClick={onClose} className='rounded-full bg-white inline-block text-black p-3 text-sm right-10 top-4 cursor-pointer fixed'><ImCross /></div>
        </div>
       

        {showLoadingDiv && (
        <div className='flex justify-center items-center h-screen'>
            <Loading/>
        </div>
      )}
         {showMainDiv && (
            <div className='bg-[#151419] w-9/12 mx-auto rounded-2xl mt-20  pt-4 pb-8'>
                

                <div className=' text-white'>
            <div className={`scrollable-div  rounded-2xl  flex items-center justify-center gap-4 `}>
            
                <div className='rounded-2xl overflow-hidden h-96  w-[420px]   mt-2 flex-shrink-0'><img src={post.image} alt="Image" className='w-full h-full'/></div>
               
            
            </div>
        </div>

        
        <div className=' pt-8 mx-auto mt-8 rounded-2xl w-full '>
            <div className='px-4 space-x-3 text-[#646373] font-semibold'>
                <span className='bg-[#19171d] px-4 py-2 rounded-2xl'>bicycle</span>
                <span className='bg-[#19171d] px-4 py-2 rounded-2xl'>bike</span>
                <span className='bg-[#19171d] px-4 py-2 rounded-2xl'>riders</span>
            </div>
            <div className='px-4 mt-8 text-white font-bold text-4xl'><h1>{post.title}</h1></div>
            <CopyTextButton buttonText="Copy Prompt" text={post.title} background="bg-[#19171d]"/>

            <div className='bg-[#19171d] px-6 py-2 flex justify-between items-center rounded-b-2xl'>
                <div className='flex gap-4 font-semibold text-lg text-[#646373]'>
                    <p>7 views</p>
                    <p>5 March</p>
                    </div>

                <div className='flex gap-2'>
                <button className='border border-[#646373] px-4 py-2 rounded-2xl text-[#646373] font-semibold'>flag</button>
                <button className='border border-[#646373] px-4 py-2 rounded-2xl text-[#646373] font-semibold'>comment</button>
                </div>
            </div>
        </div>
           
        </div>
    )}
        </div>
  
  </div>
  )
}

export default QuickViewBox

