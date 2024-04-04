import React from 'react';
import { FaShareAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { BsEmojiFrown } from "react-icons/bs";

const Post = ({ post, flexValue }) => {
  const [showIcon, setShowIcon] = React.useState(false);
  const titleInUrl = post.title.replace(/\s+/g, '-').toLowerCase();
  // const categoryInUrl = post.category.replace(/\s+/g, '-').toLowerCase();
  const categoryInUrl = post.category ? post.category.replace(/\s+/g, '-').toLowerCase() : 'Hot-Post';


  const postStyle = {
    flexBasis: `${flexValue}%`,
    transition: 'flex-basis 0.5s ease' // Transition flex-basis over 0.5 seconds with ease timing function
  };

  return ( 
    // add custom styling clasname= custom-post for hover posttitle-div
    <>
    <Link to={`/${categoryInUrl}/${post.id}/${titleInUrl}`}  style={postStyle} className={`custom-post-box overflow-hidden rounded-xl   relative cursor-pointer`} 
         onMouseEnter={() => setShowIcon(true)} 
         onMouseLeave={() => setShowIcon(false)}>
      <div className="relative">
        {/* custom image-scale class for scale  */}
        <img src={post.image} alt="" className='image-scale transform transition-transform duration-300'/>
        <div>
          {showIcon && (
             <>
             <div className='group'>
             <div className=' p-2 inline-block bg-[#403f43ae] rounded-full absolute top-3 left-4'><FaShareAlt /></div>
             <div className='px-4 hidden py-1  bg-[#000000b8] rounded-2xl font-semibold absolute top-3 left-14 group-hover:inline-block'>Share</div>
             </div>
            
             <div className='group'>
               <div className='p-2 inline-block bg-[#403f4369] rounded-full absolute top-[40%] left-[40%] hover:text-blue-900'><IoSearch /></div>
               <div className='hidden group-hover:inline-block px-3 py-1  bg-[#000000b8] rounded-xl font-semibold absolute top-[40%] right-0'>Quick View</div>
             </div>
           </>
          )}
        </div>
      </div>
 {/* add custom stylink for hover effect classname = custom-title-box  */}
<div className='custom-title-box px-3 py-2 bg-[#4241452f]  absolute left-0  w-full'  >
    <h1 className='text-xl font-semibold' >{post.title}</h1>
  </div>
    </Link>
    
    </>
  );
};

const Posts = ({ posts,flexValue }) => {
  return (
    <div className='flex items-center justify-start flex-wrap gap-3  w-[96%] mx-auto p-2 mt-6 mb-8'>
        {posts.map((post) => (
  post.image ? (
    <Post key={post.id} post={post} flexValue={flexValue} />
  ) : (
    <div className='w-full flex justify-center items-center mt-28' key={post.id}>
      <div className='bg-white flex flex-col items-center justify-center w-1/3 rounded-2xl py-8 gap-4 text-[#646373]'>
        <div><BsEmojiFrown className='text-8xl font-extrabold'/></div>
        <div className='text-2xl font-semibold'>Nothing Found!</div>
      </div>
    </div>
  )
))}
    </div>
  );
};

export default Posts;
