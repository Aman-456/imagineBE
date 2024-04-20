import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'; 
import { BsEmojiFrown } from "react-icons/bs";
import { FaLessThan,FaGreaterThan } from "react-icons/fa";
import Logo from '../../assets/png/newlogo.png'
import { FaUser } from "react-icons/fa";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { BsFillEmojiGrinFill } from "react-icons/bs";
import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { BsFillEmojiSurpriseFill } from "react-icons/bs";
import { BsEmojiWinkFill } from "react-icons/bs";
import { BsFillEmojiTearFill } from "react-icons/bs";
import { BsEmojiAngryFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CopyTextButton from './CopyTextButton';
import { homeData, reactionData, exploreData,hotData,tagData,singleUserData } from '../../common/commonData';

const Post = () => {
    const {category,id,title}=useParams()
  const [post, setPost] = useState(null);
  const [nextPost,setNextPost]=useState(null)
  const [prevPost,setPrevPost]=useState(null)

  const newCategory = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const fetchData = (category) => {
    switch (category) {
        case 'Recent':
        case 'Hot!':
        case 'Most Votes':
        case 'Most Comments':
        case 'Most views':
            return homeData;
        case 'Haha':
        case 'Love':
        case 'Lol':
        case 'Cute':
        case 'Omg':
        case 'WTF':
        case 'Cry':
        case 'Angry':
            return reactionData;
        case 'Video':
        case 'Images':
        case 'News':
        case 'Polls':
        case 'Lists':
        case 'Trivia Quiz':
        case 'Music':
            return exploreData;
            case 'Hot Post':
                return hotData;
        case 'Jungle':
        case 'Bike':
        case 'Bycycle':
            return tagData;
            case 'All Posts':
            return singleUserData;
        default:
            return [];
    }
};


 
 
  const newid=Number(id)
  useEffect(() => {
    const currentData = fetchData(newCategory);
      const foundPost = currentData.find(post => post.id === newid);
      setPost(foundPost);
      const currentCategory=foundPost.category;
      
      
      const next = currentData.find(post => post.id > newid && post.category === currentCategory);
      setNextPost(next)

      const sortedData = [...currentData].sort((a, b) => b.id - a.id);
      
      const prev = sortedData.find(post => post.id < newid && post.category === currentCategory);
      setPrevPost(prev)

        //  logic to set frist box images 
      const scrollableDivs = document.getElementsByClassName('scrollable-div');
      for (const scrollableDiv of scrollableDivs) {
          const numChildren = scrollableDiv.childElementCount;
          if (numChildren === 1) {
              scrollableDiv.style.justifyContent = 'center';
          } else {
              scrollableDiv.style.justifyContent = 'start';
          }
      }

    
     
      
  
  }, [id]);






  const prevtitleInUrl = prevPost ? prevPost.title.replace(/\s+/g, '-').toLowerCase() : '';
  const nexttitleInUrl = nextPost ? nextPost.title.replace(/\s+/g, '-').toLowerCase() : '';
 
  



 

  if (!post) {
    return <div className='w-full flex justify-center items-center mt-28'>
    <div className='bg-white flex flex-col items-center justify-center w-1/3 rounded-2xl py-8 gap-4 text-[#646373]'>
      <div><BsEmojiFrown className='text-8xl font-extrabold'/></div>
      <div className='text-2xl font-semibold'>Nothing Found!</div>
    </div>
  </div>;
  }
 

  return (
    <div className='min-h-screen'>
       

        {/* first image box  */}
        <div className=' mx-auto ml-8 mt-8 text-white'>
            <div className={`scrollable-div bg-[#2c2c31] rounded-2xl px-8 pt-4 pb-4 flex items-center justify-center gap-4 `}>
            
                <div className='rounded-2xl overflow-hidden h-96  w-[450px]   mt-2 flex-shrink-0'><img src={post.image} alt="Image" className='w-full h-full'/></div>
                
                
               
            
            </div>
        </div>

        {/* second title box */}
        <div className='bg-[#2c2c31] pt-8 mx-auto mt-4 rounded-2xl w-4/6 '>
            <div className='px-4 space-x-3 text-[#646373] font-semibold'>
                <span className='bg-[#353539] px-4 py-2 rounded-2xl'>bicycle</span>
                <span className='bg-[#353539] px-4 py-2 rounded-2xl'>bike</span>
                <span className='bg-[#353539] px-4 py-2 rounded-2xl'>riders</span>
            </div>
            <div className='px-4 mt-8 text-white font-bold text-4xl'><h1>{post.title}</h1></div>
            <CopyTextButton buttonText="Copy Prompt" text={post.title} />

            <div className='bg-[#353539] px-6 py-2 flex justify-between items-center rounded-b-2xl'>
                <div className='flex gap-4 font-semibold text-lg text-[#646373]'>
                    <p>7 views</p>
                    <p>5 days ago</p>
                    </div>

                <div className='flex gap-2'>
                <button className='border border-[#646373] px-4 py-2 rounded-2xl text-[#646373] font-semibold'>flag</button>
                <button className='border border-[#646373] px-4 py-2 rounded-2xl text-[#646373] font-semibold'>comment</button>
                </div>
            </div>
        </div>
        {/* third left right shifting box  */}

        <div className='pt-8 mx-auto mt-4 rounded-2xl w-4/6 flex justify-center items-center gap-4 '>
            {prevPost &&(
                <Link to={`/${prevPost.id}/${prevtitleInUrl}`}   className='bg-[#2c2c31] w-full rounded-2xl h-40 overflow-hidden relative custom-detail-box'>
                <img src={prevPost.image} alt="" className='w-full h-full custom-detail-image '/>
                <div className='absolute left-0 text-white bottom-0 flex items-center gap-2 px-4 pb-4 text-3xl justify-start  w-full'>
    <div className='text-2xl  h-20 items-center justify-center flex'><FaLessThan /></div>
    <div className=''><h1>{prevPost.title}</h1></div>
                </div>
            </Link>
            )}
            {nextPost &&(
                <Link  to={`/${nextPost.id}/${nexttitleInUrl}`} className='bg-[#2c2c31] w-full rounded-2xl h-40 overflow-hidden relative custom-detail-box'>
                <img src={nextPost.image} alt="" className='w-full h-full custom-detail-image'/>
                <div className='absolute left-0 text-white bottom-0 flex items-center gap-2 px-4 pb-4 text-3xl justify-end  w-full'>
  <div className=''><h1>{nextPost.title} </h1></div>
  <div className='text-2xl  h-20 items-center justify-center flex'><FaGreaterThan /></div>
</div>
            </Link>
            )}
        </div>

        {/* fourthe user detail section  */}
        <div className='bg-[#2c2c31] pt-1 pb-8  mx-auto mt-4 rounded-2xl w-4/6 '>
            <div className='m-4   rounded-2xl  h-40 relative'>
                <div className='rounded-2xl overflow-hidden w-full h-full'>
                    <img src={Logo} alt="Logo" className='w-full h-full'/>
                </div>
                <Link to={`/user/${post.username}`} className='absolute -bottom-10 left-[40%] inline-block items-center  bg-slate-400 px-10 py-10 rounded-full text-white border-4 border-white'><FaUser /></Link>
            </div>
            <div className='mt-16 flex flex-col justify-center items-center mx-auto  mr-8'>
                <Link to={`/user/${post.username}`}><h1 className='text-white text-3xl cursor-pointer'>{post.username}</h1></Link>
                <p className='text-white text-xl font-semibold inline-block bg-yellow-200 px-6 rounded-2xl mt-6'>150 Points</p>
            </div>
            <div className='mt-4  text-gray-500 font-semibold text-xl flex justify-center items-center gap-6'>
                <div >
                    <h1 className='text-center text-2xl'>7</h1>
                    <p>Posts</p>
                </div>
                <div>
                <h1 className='text-center text-2xl'>0</h1>
                    <p>Following</p>
                </div>
                <div>
                <h1 className='text-center text-2xl'>0</h1>
                    <p>Followers</p>
                </div>
            </div>

        </div>

        {/* fifth reactions section  */}
        <div className='bg-[#2c2c31] px-8 pt-3 pb-8  mx-auto mt-4 rounded-2xl w-4/6 flex justify-center items-center  '>

            <div className=' flex items-center flex-col justify-center rounded-2xl p-1 group cursor-pointer'>
            <BsEmojiLaughingFill className='text-4xl text-[#646373] group-hover:text-[#fbd971]'/>
            <div className='text-center text-white bg-[#4a454f] p-[1px] rounded-2xl flex flex-col gap-1 mt-1'>
                <p className='text-xl font-semibold'>0%</p>
                <div className=' h-16 flex flex-col justify-end'>
                    <div className=' bg-[#fbd971] rounded-3xl '></div>
                </div>
                <button className='text-[#8a8997] text-xl w-24 py-1 bg-[#151419] rounded-2xl'>Haha</button>
            </div>
            </div>

            <div className=' flex items-center flex-col justify-center rounded-2xl p-1 group cursor-pointer'>
            <BsEmojiHeartEyesFill  className='text-4xl text-[#646373] group-hover:text-[#fbd971]'/>
            <div className='text-center text-white bg-[#4a454f] p-[1px] rounded-2xl flex flex-col gap-1 mt-1'>
                <p className='text-xl font-semibold'>0%</p>
                <div className=' h-16 flex flex-col justify-end'>
                    <div className=' bg-[#fbd971] rounded-3xl '></div>
                </div>
                <button className='text-[#8a8997] text-xl w-24 py-1 bg-[#151419] rounded-2xl'>Love</button>
            </div>
            </div>


            <div className=' flex items-center flex-col justify-center rounded-2xl p-1 group cursor-pointer'>
            <BsFillEmojiGrinFill className='text-4xl text-[#646373] group-hover:text-[#fbd971]'/>
            <div className='text-center text-white bg-[#4a454f] p-[1px] rounded-2xl flex flex-col gap-1 mt-1'>
                <p className='text-xl font-semibold'>0%</p>
                <div className=' h-16 flex flex-col justify-end'>
                    <div className=' bg-[#fbd971] rounded-3xl '></div>
                </div>
                <button className='text-[#8a8997] text-xl w-24 py-1 bg-[#151419] rounded-2xl'>Lol</button>
            </div>
            </div>



            <div className=' flex items-center flex-col justify-center rounded-2xl p-1 group cursor-pointer'>
            <BsFillEmojiDizzyFill className='text-4xl text-[#646373] group-hover:text-[#fbd971]'/>
            <div className='text-center text-white bg-[#4a454f] p-[1px] rounded-2xl flex flex-col gap-1 mt-1'>
                <p className='text-xl font-semibold'>0%</p>
                <div className=' h-16 flex flex-col justify-end'>
                    <div className=' bg-[#fbd971] rounded-3xl '></div>
                </div>
                <button className='text-[#8a8997] text-xl w-24 py-1 bg-[#151419] rounded-2xl'>Cute</button>
            </div>
            </div>


            <div className=' flex items-center flex-col justify-center rounded-2xl p-1 group cursor-pointer'>
            <BsFillEmojiSurpriseFill  className='text-4xl text-[#646373] group-hover:text-[#fbd971]'/>
            <div className='text-center text-white bg-[#4a454f] p-[1px] rounded-2xl flex flex-col gap-1 mt-1'>
                <p className='text-xl font-semibold'>0%</p>
                <div className=' h-16 flex flex-col justify-end'>
                    <div className=' bg-[#fbd971] rounded-3xl '></div>
                </div>
                <button className='text-[#8a8997] text-xl w-24 py-1 bg-[#151419] rounded-2xl'>Omg</button>
            </div>
            </div>



            <div className=' flex items-center flex-col justify-center rounded-2xl p-1 group cursor-pointer'>
            <BsEmojiWinkFill className='text-4xl text-[#646373] group-hover:text-[#fbd971]'/>
            <div className='text-center text-white bg-[#4a454f] p-[1px] rounded-2xl flex flex-col gap-1 mt-1'>
                <p className='text-xl font-semibold'>0%</p>
                <div className=' h-16 flex flex-col justify-end'>
                    <div className=' bg-[#fbd971] rounded-3xl '></div>
                </div>
                <button className='text-[#8a8997] text-xl w-24 py-1 bg-[#151419] rounded-2xl'>WTF</button>
            </div>
            </div>


            <div className=' flex items-center flex-col justify-center rounded-2xl p-1 group cursor-pointer'>
            <BsFillEmojiTearFill className='text-4xl text-[#646373] group-hover:text-[#fbd971]'/>
            <div className='text-center text-white bg-[#4a454f] p-[1px] rounded-2xl flex flex-col gap-1 mt-1'>
                <p className='text-xl font-semibold'>0%</p>
                <div className=' h-16 flex flex-col justify-end'>
                    <div className=' bg-[#fbd971] rounded-3xl '></div>
                </div>
                <button className='text-[#8a8997] text-xl w-24 py-1 bg-[#151419] rounded-2xl'>Cry</button>
            </div>
            </div>

            <div className=' flex items-center flex-col justify-center rounded-2xl p-1 group cursor-pointer'>
            <BsEmojiAngryFill className='text-4xl text-[#646373] group-hover:text-[#fbd971]'/>
            <div className='text-center text-white bg-[#4a454f] p-[1px] rounded-2xl flex flex-col gap-1 mt-1'>
                <p className='text-xl font-semibold'>0%</p>
                <div className=' h-16 flex flex-col justify-end'>
                    <div className=' bg-[#fbd971] rounded-3xl '></div>
                </div>
                <button className='text-[#8a8997] text-xl w-24 py-1 bg-[#151419] rounded-2xl'>Angry</button>
            </div>
            </div>

            
            
            
        </div>
        {/* six comment section  */}
        <div className='bg-[#2c2c31] p-4 pb-6   mx-auto mt-6 mb-8 rounded-2xl w-4/6 '>
            <div className='bg-black rounded-2xl p-2 flex justify-start gap-4'>
                <div className='bg-white rounded-2xl py-2 px-6 flex items-center justify-center gap-1'>
                <AiFillMessage />
                    <button>Comments</button>
                </div>
                <div className=' rounded-2xl py-2 px-6 text-[#8a8997] hover:bg-white flex justify-center items-center gap-1'>
                <MdFacebook />
                    <button>Comments</button>
                </div>
            </div>
        </div>

        {/* fixed small box  */}
        <div className='bg-black fixed bottom-8 left-[42%] rounded-3xl flex items-center justify-between  w-48 p-2 text-white'>
    <FaLessThan className='rotate-90 text-2xl'/>
    <button className='p-2 px-4 bg-[#2c2c31] rounded-full'>0</button>
    <FaGreaterThan className='rotate-90 text-2xl'/>
    <button className='p-3 bg-[#2c2c31] rounded-full'><FaRegPaperPlane /></button>
        </div>
       
    </div>
  );
}

export default Post;
