import React, { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoHomeSharp } from "react-icons/io5";
import { FaFireFlameSimple } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import Tags from "./Tags";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Sidebar = ({toggleAdminMode, show, setShow,setIsOpen,isOpen,showHamburgerTags,setShowHamburgerTags }) => {
  const [showIcons, setShowIcons] = useState(true);
  Sidebar.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
  };
  const toggleIcons = () => {
    setShowIcons(!showIcons);
    setShowHamburgerTags(!showHamburgerTags)
    handleHamburgerMenu()
  };

  const toggleTags = () => {
    setShow(!show);
  };
  const handleMouseleave = () => {
    setTimeout(() => {
      setShow(false)
    }, 500)
  }

  const handleHamburgerMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  
  return (
    <>
      <div className="fixed h-full " >
        <div className="h-full py-3  z-20 bg-black" onMouseEnter={() => setShow(true)} onMouseLeave={handleMouseleave}>
          <div className="text-white   h-full  flex flex-col justify-between items-center" >
            
           <div className="cursor-pointer">
           {showIcons ? (
              <div className="py-2  px-6 " onClick={toggleIcons}>
                <FaGripLines fontSize="24px" />
              </div>
            ) : (
              <div className="py-2 px-6 " onClick={toggleIcons}>
                <RxCross1 fontSize="24px" />
              </div>
            )}
           </div>
            <div className="flex gap-20 ">
              <div className="icons flex flex-col justify-between">
                <div className="flex flex-col gap-5 px-6 ">
                  <div>
                    <button className="icon-border py-2 ">
                      <IoHomeSharp fontSize="20px" />
                    </button>
                  </div>
                  <div>
                    <button className="icon-border py-2">
                      <FaFireFlameSimple fontSize="20px" />
                    </button>
                  </div>
                  <div>
                    <button className="icon-border py-2" >
                      <FaNewspaper fontSize="20px" />
                    </button>
                  </div>
                  <div>
                    <button className="icon-border py-2" >
                      <FaVideo fontSize="20px" />
                    </button>
                  </div>
                  <div>
                    <button className="icon-border py-2" >
                      <FaImage fontSize="20px" />
                    </button>
                  </div>
                  <div>
                    <button className="icon-border py-2" >
                      <FaHashtag fontSize="20px" />
                    </button>
                  </div>
                  <div>
                    <button className="icon-border py-2" >
                      <FaUsers fontSize="20px" />
                    </button>
                  </div>
                </div>
                {/* --- */}
               
              </div>
            </div>
             <div className="flex flex-col gap-4 ">
                  <div className="bg-[#151419] p-3 flex items-center justify-center  mx-4 rounded-full">
                    <Link  onClick={toggleAdminMode}>
                      <FaUser />
                    </Link>
                  </div>
                  <div className="flex flex-col items-center gap-5 p-3 w-[35px] h-[70px] mx-4 bg-[#151419]  rounded-2xl">
                    <FaSun />

                    <FaMoon />
                  </div>
                </div>
          </div>
          {/*  */}

          {show && <Tags />}
          
        
          
        </div>
        z
      </div>
     
      
    </>
  );
};

export default Sidebar;
{
  /* <div className="text-white  absolute   ">
{showIcons ? (
  <div className="py-4" onClick={toggleIcons}>
    <FaGripLines fontSize="24px" />
  </div>
) : (
  <div className="py-4" onClick={toggleIcons}>
    <RxCross1 fontSize="24px" />
  </div>
)}
<div className="flex gap-20 pt-24">
  <div className="icons">
    <div className="flex flex-col gap-10 ">
      <div>
        <IoHomeSharp fontSize="20px" />
      </div>
      <div>
        <FaFireFlameSimple fontSize="20px" />
      </div>
      <div>
        <FaNewspaper fontSize="20px" />
      </div>
      <div>
        <FaVideo fontSize="20px" />
      </div>
      <div>
        <FaImage fontSize="20px" />
      </div>
      <div>
        <FaHashtag fontSize="20px" />
      </div>
      <div>
        <FaUsers fontSize="20px" />
      </div>
    </div>
    <div className="flex flex-col gap-5 pt-20">
      <div>
        <FaUser />
      </div>
      <div>
        <FaSun />
      </div>
      <div>
        <FaMoon />
      </div>
    </div>
  </div>
</div>
</div> */
}