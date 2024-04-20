

import FilterButton from '../hot/FilterButton'
import Posts from '../../common/Posts'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { tagData } from '../../common/commonData'


const SingleTag = () => {
    const [posts,setPosts]=useState([]);
    const {category}=useParams()
    console.log(category)
    
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

      useEffect(() => {
        // Simulate fetching data based on category
        // Replace this with your actual data fetching logic
        const fetchData = async () => {
            // Filter tagData based on the category
            const filteredPosts = tagData.filter(post => post.category === category);
            setPosts(filteredPosts);
        };

        fetchData();
    }, [category]);

  return (
    <div className=' text-white pb-12 min-h-screen'>
      <div className='mt-10'><h1 className=' text-4xl font- text-center'>#{category.toLowerCase()}</h1></div>
      <div className=''>
      <FilterButton onRangeChange={handleRangeChange}/>
      <Posts posts={posts}  flexValue={flexValue}/>
      </div>
     
    </div>
  )
}

export default SingleTag
