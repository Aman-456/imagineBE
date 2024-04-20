import React, { useState } from 'react';
import { BsEmojiFrown } from "react-icons/bs";

const categories = [
  { id: 1, category: 'Inbox' },
  { id: 2, category: 'Outbox' },
];

const Messages = () => {
  const [activeCategory, setActiveCategory] = useState('Inbox');

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat.category);
  };

  return (
    <div className='m-6 min-h-screen'>

        <div className='w-11/12 mx-auto  p-2 bg-black rounded-2xl'>
        <div className='flex items-center justify-start gap-2 flex-wrap text-white'>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => changeCategoryHandler(category)}
            className={`flex items-center justify-center gap-2 text-xl bg-[#151419] rounded-xl px-4 py-2 font-semibold hover:bg-white hover:text-black ${
              activeCategory === category.category ? 'bg-white text-black' : ''
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>
        </div>
        <div className='w-full flex justify-center items-center mt-28'>
      <div className='bg-white flex flex-col items-center justify-center w-1/3 rounded-2xl py-8 gap-4 text-[#646373]'>
        <div><BsEmojiFrown className='text-8xl font-extrabold'/></div>
        <div className='text-2xl font-semibold'>Nothing Found!</div>
      </div>
    </div>
      
    </div>
  );
};

export default Messages;
