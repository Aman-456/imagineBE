import React, { useEffect, useState } from "react";

import FilterButton from "../../common/FilterButton";
import { reactionData } from "../../common/commonData";
import Posts from "../../common/Posts";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { BsFillEmojiGrinFill } from "react-icons/bs";
import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { BsFillEmojiSurpriseFill } from "react-icons/bs";
import { BsEmojiWinkFill } from "react-icons/bs";
import { BsFillEmojiTearFill } from "react-icons/bs";
import { BsEmojiAngryFill } from "react-icons/bs";

const Reactions = () => {
  const [posts,setPosts]=useState(reactionData);
  const [flexValue, setFlexValue] = useState(19);
  const [activeCategory,setActiveCategory]=useState('Haha')
  const categories=reactionData.map(item=>item.category)
  // const uniqureCategories=["Recent",...new Set(categories)]
  const uniqureCategories=[...new Set(categories)]
  const filterPostHandler=(category)=>{
    // if(category==="Recent"){
    //   setPosts(data)
    //   return;
    // }
    const filteredPosts=reactionData.filter(post=>post.category===category);
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
    "Haha": <BsEmojiLaughingFill />,
    "Love": <BsEmojiHeartEyesFill />,
    "Lol": <BsFillEmojiGrinFill />,
    "Cute": <BsFillEmojiDizzyFill />,
    "Omg": <BsFillEmojiSurpriseFill />,
    "WTF": <BsEmojiWinkFill />,
    "Cry": <BsFillEmojiTearFill />,
    "Angry": <BsEmojiAngryFill />,
  };

  return (
    <>
      <div className="text-white pb-12 mt-8  bg-[#0c0b0d] min-h-screen">
        
        <FilterButton activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={uniqureCategories} onFilterPosts={filterPostHandler} onRangeChange={handleRangeChange} categoryEmojiMap={categoryEmojiMap}/>
        <Posts posts={posts}  flexValue={flexValue}/>
       
      </div>
    </>
  );
};

export default Reactions;
