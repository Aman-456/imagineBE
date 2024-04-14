import React, { useEffect, useState } from "react";

import FilterButton from "../../common/FilterButton";
import { exploreData } from "../../common/commonData"; 
import Posts from "../../common/Posts";
import { FaVideo } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";

import { VscListFlat } from "react-icons/vsc";
import { PiListFill } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import { FaHeadphonesSimple } from "react-icons/fa6";

const Explore = () => {
  const [posts,setPosts]=useState(exploreData);
  const [flexValue, setFlexValue] = useState(19);
  const [activeCategory,setActiveCategory]=useState('Video')
  const categories=exploreData.map(item=>item.category)
  // const uniqureCategories=["Recent",...new Set(categories)]
  const uniqureCategories=[...new Set(categories)]
  const filterPostHandler=(category)=>{
    // if(category==="Recent"){
    //   setPosts(data)
    //   return;
    // }
    const filteredPosts=exploreData.filter(post=>post.category===category);
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
    "Video": <FaVideo />,
    "Images": <FaImage />,
    "News": <FaNewspaper />,
    "Polls": <VscListFlat />,
    "Lists": <PiListFill />,
    "Trivia Quiz": <ImCross />,
    "Music": <FaHeadphonesSimple />,
   
  };

  return (
    <>
      <div className="text-white pb-12 mt-8  bg-[#0c0b0d] min-h-screen">
        
        <FilterButton activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={uniqureCategories} onFilterPosts={filterPostHandler} onRangeChange={handleRangeChange} categoryEmojiMap={categoryEmojiMap}/>
        <Posts posts={posts}  flexValue={flexValue} />
       
      </div>
    </>
  );
};

export default Explore;
