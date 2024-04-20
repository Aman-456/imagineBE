import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/png/newlogo.png'
import { FaUser } from "react-icons/fa";
import { singleUserData } from "../../common/commonData"; 

const TopUsers = () => {
    const [posts,setPosts]=useState(singleUserData);
    
  return (
    <div className='min-h-screen p-10'>
      <h1 className='text-center text-3xl text-white font-semibold mt-2'>Top Scoring Users</h1>
      <div className=' mt-16 flex flex-wrap gap-5 justify-center'>
      {posts.map((post)=>(
        <div key={post.id} className='bg-[#2c2c31] pt-2 pb-8 px-4    rounded-2xl w-[32%] '>
        <div className='   rounded-2xl  h-40 relative'>
            <div className='rounded-2xl overflow-hidden w-full h-full'>
                <img src={Logo} alt="Logo" className='w-full h-full'/>
            </div>
            <Link to={`/user/${post.username}`} className='absolute -bottom-10 left-[35%] inline-block items-center  bg-slate-400 px-10 py-10 rounded-full text-white border-4 border-white'><FaUser /></Link>
        </div>
        <div className='mt-16 flex flex-col justify-center items-center mx-auto  '>
            <Link to={`/user/${post.username}`}><h1 className='text-white text-3xl cursor-pointer'>{post.username}</h1></Link>
            <p className='text-white text-xl font-semibold inline-block bg-yellow-200 px-6 rounded-2xl mt-6'>150 Points</p>
        </div>
        <div className='mt-4  text-gray-500 font-semibold text-xl flex justify-center items-center gap-6'>
            <div >
                <h1 className='text-center text-2xl'>7</h1>
                <p>Posts</p>
            </div>
            <div>
            <h1 className='text-center text-2xl'>0</h1>
                <p>Following</p>
            </div>
            <div>
            <h1 className='text-center text-2xl'>0</h1>
                <p>Followers</p>
            </div>
        </div>

    </div>
      ))}
       
      </div>
    </div>
  )
}

export default TopUsers
