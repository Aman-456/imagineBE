import React from 'react'

import { PiDotsSixBold } from "react-icons/pi"
import { ImCheckboxUnchecked } from "react-icons/im";

const FilterButton = ({onRangeChange }) => {
  return (
    <div className='bg-[#030303] w-[96%] mx-auto p-2 py-4 rounded-2xl mt-12 flex items-center justify-end '>
     
      <div className=' flex justify-center items-center gap-2 mr-4'>
        <div><ImCheckboxUnchecked className='bg-white rounded-sm text-white'/></div>
        <div className='flex items-center cursor-pointer w-60'>
          <input type="range" min={1} max={9} defaultValue={5} onChange={(e) => onRangeChange(e.target.value)} className='  w-full cursor-pointer bg-[#ced0d9] ' />
        </div>
        <div><PiDotsSixBold className='text-3xl font-extrabold text-white'/></div>
      </div>
    </div>
  )
}

export default FilterButton

