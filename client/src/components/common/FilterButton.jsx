import React from 'react'
import CategoriesButton from './CategoriesButton'
import { PiDotsSixBold } from "react-icons/pi"
import { ImCheckboxUnchecked } from "react-icons/im";


const FilterButton = ({categories,onFilterPosts,onRangeChange , activeCategory,setActiveCategory,categoryEmojiMap}) => {

  


  return (
    <div className='bg-[#030303] w-[96%] mx-auto p-2 rounded-2xl mt-4 flex items-center justify-between'>
      <div className=' flex  justify-center items-center'>
        <CategoriesButton activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} onFilterPosts={onFilterPosts} categoryEmojiMap={categoryEmojiMap}/>
      </div>
      <div className=' flex justify-center items-center gap-2 mr-4'>
        <div><ImCheckboxUnchecked className='bg-white rounded-sm'/></div>
        <div className='flex items-center cursor-pointer w-60'>
          <input type="range" min={1} max={9} defaultValue={5} onChange={(e) => onRangeChange(e.target.value)} className='  w-full cursor-pointer bg-[#ced0d9] ' />
        </div>
        <div><PiDotsSixBold className='text-3xl font-extrabold'/></div>
      </div>
    </div>
  )
}

export default FilterButton

