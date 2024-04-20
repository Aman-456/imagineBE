import React, { useState } from "react";
import Search from "./Search";
import FilterButton from "../common/FilterButton";
import { homeData } from "../common/commonData";

import Posts from "../common/Posts";

const Home = () => {
  const [posts,setPosts]=useState(homeData);
  const [flexValue, setFlexValue] = useState(19);
  const [activeCategory,setActiveCategory]=useState('Recent')
  const [showRange,setShowRange]=useState(true)
  const categories=homeData.map(item=>item.category)

  // const uniqureCategories=["Recent",...new Set(categories)]
  const uniqureCategories=[...new Set(categories)]
  const filterPostHandler=(category)=>{
    // if(category==="Recent"){
    //   setPosts(data)
    //   return;
    // }
    const filteredPosts=homeData.filter(post=>post.category===category);
    setPosts(filteredPosts);
  }


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
      <div className="text-white pb-12  bg-[#0c0b0d] ">
        <Search />
        <div className="">
        <FilterButton categories={uniqureCategories} onFilterPosts={filterPostHandler} onRangeChange={handleRangeChange} activeCategory={activeCategory} setActiveCategory={setActiveCategory} showRange={showRange}/>
        <Posts posts={posts}  flexValue={flexValue} />

        </div>
     
       
      </div>
    </>
  );
};

export default Home;
