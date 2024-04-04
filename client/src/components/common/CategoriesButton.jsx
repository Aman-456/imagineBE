import React, { useEffect} from 'react'


const CategoriesButton = ({categories,onFilterPosts,activeCategory,setActiveCategory,categoryEmojiMap}) => {
    

    useEffect(() => {
      onFilterPosts(activeCategory);
    }, []);

    const changeCategoryHandler=(activeCat)=>{
        setActiveCategory(activeCat)
        onFilterPosts(activeCat)
    }
    


  return (
    <div className='flex items-center justify-center gap-2 flex-wrap'>
      {
        categories.map((category)=>(
          
            <button key={category} onClick={()=>changeCategoryHandler(category)} className={`flex items-center justify-center gap-2 text-xl bg-[#151419] rounded-xl px-4 py-2 font-semibold hover:bg-white hover:text-black ${activeCategory == category ? "bg-white text-black": ""}`}> {categoryEmojiMap && categoryEmojiMap[category]} {category}</button>
        ))
      }
    </div>
  )
}

export default CategoriesButton
