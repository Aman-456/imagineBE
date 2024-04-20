import React, { useEffect, useState } from "react";
import Logo from '../../assets/png/newlogo.png'
import { FaUser } from "react-icons/fa";
import FilterButton from "../../common/FilterButton";
import { adminsingleUserData } from "../../common/commonData"; 
import Posts from "../../common/Posts";
import { Link, useNavigate, useParams } from "react-router-dom";
import card from '../../assets/png/newlogo.png'

const AdminUserDetailProfile = () => {
  const {username}="imagen_u"
  const navigate = useNavigate()
  
  const [posts,setPosts]=useState(adminsingleUserData);
  const [flexValue, setFlexValue] = useState(19);
  const [showwallCategory,setShowWallCategory]=useState(false)
  const [showAllCategories,setShowAllCategories]=useState(true)
  const[showUserCategory,setShowUserCategory]=useState(false)
  const[showDetailCategory,setShowDetailCategory]=useState(false)
  const [showRange,setShowRange]=useState(true)
  const [activeCategory,setActiveCategory]=useState('My details')
  const categories=adminsingleUserData.map(item=>item.category)
  // const uniqureCategories=["Recent",...new Set(categories)]
  const uniqureCategories=[...new Set(categories)]
  const filterPostHandler=(category)=>{
    // if(category==="Recent"){
    //   setPosts(data)
    //   return;
    // }
    const filteredPosts=adminsingleUserData.filter(post=>post.category===category);
    setPosts(filteredPosts);
  }
 useEffect(()=>{
setFlexValue(19);


if(activeCategory === "Wall"){
  setShowAllCategories(false)
  setShowWallCategory(true)
  setShowDetailCategory(false)
  setShowUserCategory(false)
  setShowRange(false)
}
else if(activeCategory === "User imagen_u"){
  setShowRange(false)
  setShowAllCategories(false)
  setShowUserCategory(true)
  setShowDetailCategory(false)
  setShowWallCategory(false)
} 
else if(activeCategory === "My Favorites"){
  setShowRange(false)
  setShowAllCategories(true)
  setShowUserCategory(false)
  setShowDetailCategory(false)
  setShowWallCategory(false)
} 
else if(activeCategory === "Private Messages"){
  navigate("/messages")
  setShowRange(false)
  setShowAllCategories(true)
  setShowUserCategory(false)
  setShowDetailCategory(false)
  setShowWallCategory(false)
} 
else if(activeCategory === "My details"){
  setShowRange(false)
  setShowAllCategories(false)
  setShowDetailCategory(true)
  setShowWallCategory(false)
  setShowUserCategory(false)
}
else if(activeCategory === "Followers"){
  setShowRange(false)
  setShowAllCategories(true)
  setShowDetailCategory(false)
  setShowWallCategory(false)
  setShowUserCategory(false)
} 
else if(activeCategory === "Following"){
  setShowRange(false)
  setShowAllCategories(true)
  setShowDetailCategory(false)
  setShowWallCategory(false)
  setShowUserCategory(false)
} 

else{
  setShowAllCategories(true)
  
  setShowRange(true)
  setShowDetailCategory(false)
  setShowWallCategory(false)
  setShowUserCategory(false)
}

 },[activeCategory]);

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
      <div className="text-white pb-12 mt-8  bg-[#0c0b0d] min-h-screen">


      <div className='bg-[#2c2c31]  pb-8 mx-auto  mt-4 rounded-2xl w-11/12 '>
            <div className='   rounded-2xl  h-60 relative'>
                <div className='rounded-2xl overflow-hidden w-full h-full'>
                    <img src={Logo} alt="Logo" className='w-full h-full'/>
                </div>
                <Link to={`/user/${username}`} className='absolute -bottom-16 left-[42%] inline-block items-center  bg-slate-400 px-16 py-16 rounded-full text-white border-4 border-white'><FaUser /></Link>
            </div>
            <div className='mt-16 flex flex-col justify-center items-center mx-auto  mr-8'>
                <Link to={`/user/${username}`}><h1 className='text-white text-5xl cursor-pointer font-semibold'>{username}</h1></Link>
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

        <FilterButton activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={uniqureCategories} onFilterPosts={filterPostHandler}   onRangeChange={handleRangeChange}
        showRange={showRange}
        />
        
     
        
        {showAllCategories && 
          <Posts posts={posts}  flexValue={flexValue} />
      }
        {showwallCategory && (
          <div className="mx-auto w-[80%]  mt-16 mb-40">
             <textarea type="text" className='w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600' rows={6}/>
            <button className='bg-[#635bff] mt-2 px-16 font-semibold rounded-2xl py-3'>Add Wall Post</button>
          </div>
        )}

        {showUserCategory &&(
          <div className="mx-auto mt-10 w-10/12 ">
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Member for:</div>
              <div className="ml-1 text-xl">2 months</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Type:</div>
              <div className="ml-1 text-xl">	Super Administrator</div>
            </div>
            <div className="flex justify-start  ">
              <div className="bg-[#151515] py-2 w-96 px-4  text-2xl text-[#b0b7bb] border-b-2 border-black h-14">Extra privileges:</div>
              <div className="ml-1 text-lg border-b-2 border-black w-full">
                <h1>Recategorizing Posts</h1>
                <h1>Editing any Post</h1>
                <h1>Editing any Comment</h1>
                <h1>Editing any reply</h1>
                <h1>Editing posts silently</h1>
                <h1>Selecting Comment for any Post</h1>
                <h1>Viewing IPs of anonymous posts</h1>
                <h1>Viewing who voted or flagged posts</h1>
                <h1>Approving or rejecting posts</h1>
                <h1>Hiding or showing any post</h1>
                <h1>Deleting hidden posts</h1>
              </div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Email:</div>
              <div className="ml-1 text-lg "> <span className="text-blue-600">amirmughal22@gmail.com </span>(only shown to admins)	</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Last login:</div>
              <div className="ml-1 text-lg ">2 weeks ago from <span className="text-blue-600">108.162.227.25 </span>(only shown to moderators and admins)	</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Last write action:</div>
              <div className="ml-1 text-lg ">2 weeks ago from<span className="text-blue-600">162.158.190.95 </span>(only shown to moderators and admins)	</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">sasim:</div>
              <div className="ml-1 text-lg ">	</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Website:</div>
              <div className="ml-1 text-lg ">	</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Telegram:</div>
              <div className="ml-1 text-lg ">	</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Twitter:</div>
              <div className="ml-1 text-lg ">	</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Instagram:</div>
              <div className="ml-1 text-lg ">	</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Reddit:</div>
              <div className="ml-1 text-lg ">	</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Pinterest:</div>
              <div className="ml-1 text-lg ">	</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">LinkedIn:</div>
              <div className="ml-1 text-lg ">	</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">About:</div>
              <div className="ml-1 text-lg ">	</div>
            </div>
            <button className="bg-blue-600 mt-2  rounded-2xl px-20 py-3 text-xl hover:bg-[#151515]">Edit Profile</button>
            
            <h1 className="mt-16 text-6xl pb-2 px-2 text-blue-600 bg-[#151515]">Activity by imagen_u</h1>

            <div className="flex justify-start items-center border-b-2 border-black mt-6">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Bonus points:</div>
              <div className="ml-1 text-lg "> <input type="text" className="bg-white border-2 border-gray-500 w-16 rounded-2xl py-1 px-1 text-black " defaultValue={"0"}/>	(only shown to admins)</div>
            </div>

            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Score:</div>
              <div className="ml-1 text-lg ">150 points	</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Title:</div>
              <div className="ml-1 text-lg ">asddd</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Posts:</div>
              <div className="ml-1 text-lg ">7</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Comments:</div>
              <div className="ml-1 text-lg ">0</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Replies:</div>
              <div className="ml-1 text-lg ">0</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Voted on:</div>
              <div className="ml-1 text-lg ">	0 Posts, 0 Comments</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Gave out:</div>
              <div className="ml-1 text-lg ">	0 up votes, 0 down votes</div>
            </div>
            <div className="flex justify-start items-center border-b-2 border-black">
              <div className="bg-[#151515] h-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Received:</div>
              <div className="ml-1 text-lg ">	0 up votes, 0 down votes</div>
            </div>

            <button className="bg-blue-600 mt-2  rounded-2xl px-20 py-3 text-xl hover:bg-[#151515]">Update bonus</button>

          </div>
        )}
        
        {showDetailCategory && (
          <div className="mx-auto mt-10 w-10/12 ">
            <div className="flex justify-start items-center ">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Member for:</div>
              <div className="ml-1 text-xl">2 months</div>
            </div>
            <div className="flex justify-start items-center ">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Type:</div>
              <div className="ml-1 text-xl">Super Administrator</div>
            </div>
            <div className="flex justify-start items-center mt-2">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Username:</div>
              <div className="ml-1 text-xl w-7/12 h-10"><input type="text" className="text-black h-full w-full pb-1 outline-1 outline-blue-600 rounded-2xl px-4" defaultValue={"imagen_u"}/></div>
            </div>
            <div className="flex justify-start items-center mt-2">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Email:</div>
              <div className="ml-1 text-xl w-7/12 h-10"><input type="text" className="text-black h-full w-full pb-1 outline-1 outline-blue-600 rounded-2xl px-4" defaultValue={"amirmughal22@gmail.com"}/></div>
            </div>
            <div className="flex justify-start items-center mt-2">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Private messages:</div>
              <div className="ml-1 text-lg w-7/12 h-10 flex items-center gap-2">
                <input type="checkbox" checked/>
              Allow users to email you (without seeing your address)
              </div>
            </div>
            <div className="flex justify-start items-center mt-2">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Wall posts:</div>
              <div className="ml-1 text-lg w-7/12 h-10 flex items-center gap-2">
                <input type="checkbox" checked/>
                Allow users to post on your wall (you will also be emailed)
              </div>
            </div>
            <div className="flex justify-start items-center mt-2">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Cover:</div>
              <div className="ml-1 text-sm w-7/12 h-10 flex items-center gap-2">
                <img src={card} alt="" className="w-10 h-10 rounded-full"/>
                <input type="file"/>
                
              </div>
            </div>


            <div className="flex justify-start items-center mt-2">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Avatar:</div>
              <div className="ml-1 text-sm w-7/12 h-10 flex flex-col justify-start items-start gap-2">
                <span><input type="radio" value={"yes"} className="mr-2"/>None</span>
                <span><input type="radio" className="mr-2"/> <input type="file"/></span>
                
                
              </div>
            </div>

            <div className="flex justify-start items-center mt-4">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">sasim:</div>
              <div className="ml-1  text-xl w-7/12 h-10"><input type="text" className="text-black h-full w-full pb-1 outline-1 outline-blue-600 rounded-2xl px-4" /></div>
            </div>
            <div className="flex justify-start items-center mt-2">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Website:</div>
              <div className="ml-1  text-xl w-7/12 h-10"><input type="text" className="text-black h-full w-full pb-1 outline-1 outline-blue-600 rounded-2xl px-4" /></div>
            </div>
            <div className="flex justify-start items-center mt-2">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Telegram:</div>
              <div className="ml-1  text-xl w-7/12 h-10"><input type="text" className="text-black h-full w-full pb-1 outline-1 outline-blue-600 rounded-2xl px-4" /></div>
            </div>
            <div className="flex justify-start items-center mt-2">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Twitter:</div>
              <div className="ml-1  text-xl w-7/12 h-10"><input type="text" className="text-black h-full w-full pb-1 outline-1 outline-blue-600 rounded-2xl px-4" /></div>
            </div>
            <div className="flex justify-start items-center mt-2">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Instagram:</div>
              <div className="ml-1  text-xl w-7/12 h-10"><input type="text" className="text-black h-full w-full pb-1 outline-1 outline-blue-600 rounded-2xl px-4" /></div>
            </div>
            <div className="flex justify-start items-center mt-2">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Reddit:</div>
              <div className="ml-1  text-xl w-7/12 h-10"><input type="text" className="text-black h-full w-full pb-1 outline-1 outline-blue-600 rounded-2xl px-4" /></div>
            </div>
            <div className="flex justify-start items-center mt-2">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Pinterest:</div>
              <div className="ml-1  text-xl w-7/12 h-10"><input type="text" className="text-black h-full w-full pb-1 outline-1 outline-blue-600 rounded-2xl px-4" /></div>
            </div>
            <div className="flex justify-start items-center mt-2">
              <div className=" py-2 w-72 px-4 text-2xl text-[#b0b7bb]">LinkedIn:</div>
              <div className="ml-1  text-xl w-7/12 h-10"><input type="text" className="text-black h-full w-full pb-1 outline-1 outline-blue-600 rounded-2xl px-4" /></div>
            </div>
            <div className="flex justify-start items-start mt-2">
              <div className=" py-2 w-72 h-12 px-4 text-2xl text-[#b0b7bb]">About:</div>
              <div className="ml-1  text-xl w-7/12 ">
              <textarea  cols="30" rows="6" className="text-black h-full w-full pb-1 outline-1 outline-blue-600 rounded-2xl px-4"></textarea></div>
            </div>
            <div className="flex justify-center items-center h-12 rounded-2xl mt-2 bg-blue-600 w-60 font-semibold">Save Profile</div>

            <div className="bg-[#151419] mt-16 text-5xl pt-1 pb-3 font-semibold">Changed Password</div>


            <div className="flex justify-start items-center mt-4">
              <div className="ml-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Old password:</div>
              <div className="ml-60  text-xl w-4/12 h-10"><input type="text" className="text-black h-full w-full pb-1 outline-1 outline-blue-600 rounded-2xl px-4" /></div>
            </div>
            <div className="flex justify-start items-center mt-4">
              <div className="ml-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">New password:</div>
              <div className="ml-60  text-xl w-4/12 h-10"><input type="text" className="text-black h-full w-full pb-1 outline-1 outline-blue-600 rounded-2xl px-4" /></div>
            </div>
            <div className="flex justify-start items-center mt-4">
              <div className="ml-12 py-2 w-72 px-4 text-2xl text-[#b0b7bb]">Retype new password:</div>
              <div className="ml-60  text-xl w-4/12 h-10"><input type="text" className="text-black h-full w-full pb-1 outline-1 outline-blue-600 rounded-2xl px-4" /></div>
            </div>

            <div className="flex justify-center items-center h-12 rounded-2xl mt-2 bg-blue-600 w-60 font-semibold ml-8">Change Password</div>
            <div className="text-5xl mt-16 text-[#b0b7bb] font-semibold">Delete my account</div>
            <div className="flex justify-center items-center h-12 rounded-2xl mt-4 bg-blue-600 w-48  font-semibold ">Delete</div>
          </div>
          
        )}
       
      </div>
    </>
  );
};

export default AdminUserDetailProfile;
