import React from 'react'
import { Link } from 'react-router-dom'

const UserProfileTags = ({show,setShow,toggleAdminMode}) => {
  const handleLinkClick = () => {
    setShow(false); // Close the menu when a link is clicked
  };
  return (
    <div>
      {show &&(
        <div className=" fixed bg-[#151419] h-screen  flex text-start text-[#d7d7d7]  flex-col  pt-10 pl-8 pr-16 rounded-r-2xl font-semibold justify-start">
            <Link to={'/user/imagen_u'} className='text-white text-3xl font-semibold' onClick={handleLinkClick}>imagen_u</Link>
            <button className='text-white w-32 mt-3  bg-yellow-300 rounded-2xl text-xl' >150 Points</button>
            <Link to={'/user/details'} className='text-xl mt-6 text-[#646373] hover:text-white' onClick={handleLinkClick}>My settings</Link>
            <Link to={'/messages'} className='text-xl mt-6 text-[#646373] hover:text-white' onClick={handleLinkClick}>Private Messages</Link>
            <Link to={'/membership'} className='text-xl mt-6 text-[#646373] hover:text-white' onClick={handleLinkClick}>My Memebership</Link>
            <Link to={'/subscriptions'} className='text-xl mt-6 text-[#646373] hover:text-white' onClick={handleLinkClick}>Subscriptions</Link>
            <Link to={''} className='text-xl mt-6 text-[#646373] hover:text-white' onClick={handleLinkClick}>My Favorites</Link>
            <Link to={''} className='text-xl mt-6 text-[#646373] hover:text-white' onClick={toggleAdminMode}>Logout</Link>

        </div>
      )}
    </div>
  )
}

export default UserProfileTags

