import React, { useState } from "react";
import Search from "./Search";
import FilterButton from "../../common/FilterButton";
import { homeData } from "../../common/commonData";
import Posts from "../../common/Posts";

const Home = () => {
  const [posts, setPosts] = useState(homeData);
  const [flexValue, setFlexValue] = useState(19);
  const [activeCategory, setActiveCategory] = useState("Recent");
  const categories = homeData.map((item) => item.category);

  // const uniqureCategories=["Recent",...new Set(categories)]
  const uniqureCategories = [...new Set(categories)];
  const filterPostHandler = (category) => {
    // if(category==="Recent"){
    //   setPosts(data)
    //   return;
    // }
    const filteredPosts = homeData.filter((post) => post.category === category);
    setPosts(filteredPosts);
  };

  // Map range values to flex widths
  // Map range values to flex widths considering gap
  const rangeToFlexMap = {
    1: "99",
    2: "calc(50% - 0.8rem)",
    3: "calc(33.33% - 0.8rem)",
    4: "calc(25% - 0.8rem)",
    5: "calc(20% - 0.8rem)",
    6: "calc(16.67% - 0.8rem)",
    7: "calc(14.28% - 0.8rem)",
    8: "calc(12.5% - 0.8rem)",
  };

  const handleRangeChange = (value) => {
    setFlexValue(rangeToFlexMap[value] || 2); // Default to 19 if value not found
  };

  return (
    <>
      <div className="text-white pb-12">
        <Search />
        <div className="">
          <FilterButton
            categories={uniqureCategories}
            onFilterPosts={filterPostHandler}
            onRangeChange={handleRangeChange}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <Posts posts={posts} flexValue={flexValue} />
        </div>
      </div>
    </>
  );
};

export default Home;
