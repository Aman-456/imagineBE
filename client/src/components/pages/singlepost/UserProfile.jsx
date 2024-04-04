import React, { useEffect, useState } from "react";
import Logo from '../../assets/png/newlogo.png'
import { FaUser } from "react-icons/fa";
import FilterButton from "../../common/FilterButton";
import { singleUserData } from "../../common/commonData"; 
import Posts from "../../common/Posts";
import { Link, useParams } from "react-router-dom";

const UserProfile = () => {
  const {username}=useParams()
  
  const [posts,setPosts]=useState(singleUserData);
  const [flexValue, setFlexValue] = useState(19);
  const [activeCategory,setActiveCategory]=useState('All Posts')
  const categories=singleUserData.map(item=>item.category)
  // const uniqureCategories=["Recent",...new Set(categories)]
  const uniqureCategories=[...new Set(categories)]
  const filterPostHandler=(category)=>{
    // if(category==="Recent"){
    //   setPosts(data)
    //   return;
    // }
    const filteredPosts=singleUserData.filter(post=>post.category===category);
    setPosts(filteredPosts);
  }
 useEffect(()=>{
setFlexValue(19);
 },[activeCategory]);

  // Map range values to flex widths
  const rangeToFlexMap = {
    1: 45,
    2: 32,
    3: 24,
    4: 19,
    5: 15,
    6: 14,
    7: 13,
    8: 12,
    9: 11,
    
  };

  const handleRangeChange = (value) => {
    setFlexValue(rangeToFlexMap[value] || 19); // Default to 19 if value not found
  };


  return (
    <>
      <div className="text-white pb-12 mt-8  bg-[#0c0b0d] min-h-screen">


      <div className='bg-[#2c2c31]  pb-8 mx-auto  mt-4 rounded-2xl w-11/12 '>
            <div className='   rounded-2xl  h-60 relative'>
                <div className='rounded-2xl overflow-hidden w-full h-full'>
                    <img src={Logo} alt="Logo" className='w-full h-full'/>
                </div>
                <Link to={`/user/${username}`} className='absolute -bottom-16 left-[42%] inline-block items-center  bg-slate-400 px-16 py-16 rounded-full text-white border-4 border-white'><FaUser /></Link>
            </div>
            <div className='mt-16 flex flex-col justify-center items-center mx-auto  mr-8'>
                <Link to={`/user/${username}`}><h1 className='text-white text-5xl cursor-pointer font-semibold'>{username}</h1></Link>
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
        
        <FilterButton activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={uniqureCategories} onFilterPosts={filterPostHandler} onRangeChange={handleRangeChange} />
        <Posts posts={posts}  flexValue={flexValue} />
       
      </div>
    </>
  );
};

export default UserProfile;
