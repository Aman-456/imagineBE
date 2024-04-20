import React, { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";
import { FaFacebookSquare, FaTwitter,FaPinterest,FaTumblr,FaLinkedinIn,FaTiktok,FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Loading from './Loading';


const ShareBox = ({onClose,id,title}) => {
    const [showMainDiv, setshowMainDiv] = useState(false);
    const [showLoadingDiv, setshowLoadingDiv] = useState(true);
    const currentUrl = window.location.href;
    const newUrl = `${currentUrl}${id}/${title}`;
    useEffect(() => {
        const timer = setTimeout(() => {
          setshowLoadingDiv(false); // Hide the other div after 2 seconds
          setshowMainDiv(true); // Show the child div after 2 seconds
        }, 1000);
    
        return () => clearTimeout(timer);
      }, []); 
    
  return (
    <div style={{ backgroundColor: 'rgba(111, 105, 132, 0.92)' }} className=' w-[100%] h-[100%] fixed top-0 left-0 overflow-hidden z-50'>
    <div className='text-right'>
        <div onClick={onClose} className='rounded-full bg-white inline-block text-black p-3 text-sm mt-4 mr-8 cursor-pointer'><ImCross /></div>
        </div>

        {showLoadingDiv && (
        <div className='flex justify-center items-center h-full'>
            <Loading/>
        </div>
      )}
         {showMainDiv && (
    <div className='bg-[#151419] w-9/12 mx-auto rounded-2xl mt-8 px-10 pt-20 pb-20'>
        <h1 className='text-xl font-semibold'>Share</h1>
        <div className='mt-8'>
            <ul className='flex justify-center items-center gap-2'>
            <a href="www.facebook.com" target='_blank'>
                <li className='border border-white cursor-pointer rounded-full p-8'><FaFacebookSquare /></li></a>
                <a href="www.facebook.com" target='_blank'>
                <li className='border border-white cursor-pointer rounded-full p-8'><FaTwitter /></li></a>
                <a href="www.facebook.com" target='_blank'>
                <li className='border border-white cursor-pointer rounded-full p-8'><FaPinterest/></li></a>
                <a href="www.facebook.com" target='_blank'>
                <li className='border border-white cursor-pointer rounded-full p-8'><MdOutlineEmail /></li></a>
                <a href="www.facebook.com" target='_blank'>
                <li className='border border-white cursor-pointer rounded-full p-8'><FaTumblr /></li></a>
                <a href="www.facebook.com" target='_blank'>
                <li className='border border-white cursor-pointer rounded-full p-8'><FaLinkedinIn /></li></a>
                <a href="www.facebook.com" target='_blank'>
                <li className='border border-white cursor-pointer rounded-full p-8'><FaTiktok /></li></a>
                <a href="www.facebook.com" target='_blank'>
                <li className='border border-white cursor-pointer rounded-full p-8'><FaWhatsapp /></li></a>
                
            </ul>
        </div>
        <h1 className='text-xl font-semibold mt-8'>or Copy Link</h1>
        <div className='bg-white rounded-2xl p-3 mt-10'>
            <input type="text" value={newUrl} className='text-[#464646] w-full outline-none'/>
        </div>
    </div>
    )}
  </div>
  )
}

export default ShareBox
