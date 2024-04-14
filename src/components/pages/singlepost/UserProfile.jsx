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
  const [showwallCategory,setShowWallCategory]=useState(false)
  const [showAllCategories,setShowAllCategories]=useState(true)
  const [showRange,setShowRange]=useState(true)
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

if(activeCategory === "Wall"){
  setShowAllCategories(false)
  setShowWallCategory(true)
  setShowRange(false)
} else{
  setShowAllCategories(true)
  setShowWallCategory(false)
  setShowRange(true)
}

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

        <FilterButton activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={uniqureCategories} onFilterPosts={filterPostHandler}   onRangeChange={handleRangeChange}
        showRange={showRange}
        />
        
     
        
        {showAllCategories && 
          <Posts posts={posts}  flexValue={flexValue} />
      }
        {showwallCategory && (
          <div className="mx-auto w-[80%]  mt-16 mb-40">
             <textarea type="text" className='w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600' rows={6}/>
            <button className='bg-[#635bff] mt-2 px-16 font-semibold rounded-2xl py-3'>Add Wall Post</button>
          </div>
        )}
       
      </div>
    </>
  );
};

export default UserProfile;
