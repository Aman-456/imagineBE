import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { tagData } from '../../common/commonData'

const PopularTags = () => {
    const [posts,setPosts]=useState(tagData);
  return (
    <div className='min-h-screen'>
        <h1 className='text-white text-center text-4xl font-semibold mt-10'>Popular tags</h1>
        <div className='w-10/12 mx-auto mt-28'>
        <div className=' flex text-xl gap-3 flex-wrap text-[#646373] font-semibold'>
        {posts.map((post)=>(
                <Link to={`/tags/${post.category}`} className='bg-[#19171d] px-4 py-2 rounded-2xl'>{post.category.toLowerCase()}</Link>
            ))}
            
        
              
                
                
             
            </div>
        </div>
      
    </div>
  )
}

export default PopularTags
