import React, { useState } from 'react'
import { hotData } from '../../common/commonData'
import FilterButton from './FilterButton'
import Posts from '../../common/Posts'

const Hot = () => {
    const [posts,setPosts]=useState(hotData);
    const [flexValue, setFlexValue] = useState(19);

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
    <div className=' text-white pb-12 min-h-screen'>
      <div className='mt-10'><h1 className=' text-4xl font- text-center'>Hot Posts</h1></div>
      <div className=''>
      <FilterButton onRangeChange={handleRangeChange}/>
      <Posts posts={posts}  flexValue={flexValue}/>
      </div>
     
    </div>
  )
}

export default Hot
