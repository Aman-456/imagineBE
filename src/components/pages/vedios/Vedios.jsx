import React, { useState } from 'react'
import FilterButton from '../hot/FilterButton';

const Vedios = () => {
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
    <div className='min-h-screen p-8'>
      <div className='text-white bg-black rounded-2xl p-8'>
        <h1 className='text-center text-4xl font-semibold'>Videos</h1>
        <h2 className='text-center text-xl mt-2'>No Posts Found</h2>
      </div>
      <FilterButton onRangeChange={handleRangeChange}/>
    </div>
  )
}

export default Vedios
