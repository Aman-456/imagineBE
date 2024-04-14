import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa";
import FilterButton from '../../common/FilterButton';
import { subscriptionData} from '../../common/commonData';
import { GiHamburgerMenu } from "react-icons/gi";

import { FaHashtag } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import Posts from '../../common/Posts';

const Subscriptions = () => {
    const [posts,setPosts]=useState(subscriptionData);
  const [flexValue, setFlexValue] = useState(19);
  const [activeCategory,setActiveCategory]=useState('Following users')
  const categories=subscriptionData.map(item=>item.category)
  // const uniqureCategories=["Recent",...new Set(categories)]
  const uniqureCategories=[...new Set(categories)]
  const filterPostHandler=(category)=>{
    // if(category==="Recent"){
    //   setPosts(data)
    //   return;
    // }
    const filteredPosts=subscriptionData.filter(post=>post.category===category);
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
  const categoryEmojiMap = {
    "Following users": < FaUsers />,
    "Categories": <GiHamburgerMenu />,
    "Tags": < FaHashtag />,
    
  };
  return (
    <div className='min-h-screen p-8 '>
        <div className='flex flex-col items-center justify-center text-white mt-2'>
        <div className=' inline-block  rounded-full p-8 items-center text-white text-4xl bg-[#8c97aa] border-4 border-white'><FaUser  className=''/></div>
        <h1 className='mt-4 text-4xl font-semibold'>imagen_u/ From people you follow</h1>
        </div>
       <div className='mt-20'> <FilterButton activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={uniqureCategories} onFilterPosts={filterPostHandler} onRangeChange={handleRangeChange} categoryEmojiMap={categoryEmojiMap}/></div>
        <Posts posts={posts}  flexValue={flexValue}/>
        
  
      
    </div>
  )
}

export default Subscriptions
