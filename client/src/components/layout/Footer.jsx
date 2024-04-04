import React, { useEffect, useState } from "react";
import { RiTelegramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { Tooltip } from "@mui/material";

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-[#0c0b0d] pt-[30px] pb-2 ">
      {!isSmallScreen ? (
        <div className="w-[100%] lg:w-[96%] bg-[#151419]  rounded-xl   lg:px-10 pt-6 pb-4 lg:mx-auto">
          <div className="flex item-center justify-center mx-auto gap-4 ">
            <Tooltip title="Join us on Telegram!" placement="top">
              <span className="bg-transparent border border-gray-500 rounded-xl p-2 ">
                <RiTelegramLine
                  fontSize="24px"
                  style={{
                    color: "white",
                  }}
                />
              </span>
            </Tooltip>
            <Tooltip title="Follow us on Twiter" placement="top">
              <span className="bg-transparent border border-gray-500 rounded-xl p-2 ">
                <FaTwitter
                  fontSize="24px"
                  style={{
                    color: "white",
                  }}
                />
              </span>
            </Tooltip>
          </div>
          <div className="flex gap-40 pr-[16px] font-semibold   mt-6 items-center w-[81%] mx-auto ">
            <div className="text-white flex flex-col ">
              <button>Send feedback</button>
              <button>Features</button>
            </div>
            <span className=" hidden lg:block borders"></span>
            <div>
              <h1 className="text-white">Get $IMAGE</h1>
              <h1 className="text-white">Use $IMAGE</h1>
            </div>
            <span className=" hidden lg:block borders"></span>
            <div className="text-white">
              <button>FAQ</button>
            </div>
          </div>
          <h1 className="text-white w-[24%] mt-8 mx-auto">
            2024 © Imagen AI | All rights reserved
          </h1>
        </div>
      ) : (
        <div className="w-[100%]  bg-[#151419] pb-2  rounded-xl">
          <div className="flex pt-9 justify-center gap-4">
            <Tooltip title="Join us on Telegram!" placement="top">
              <span className="bg-transparent border border-gray-500 rounded-xl p-2 ">
                <RiTelegramLine
                  fontSize="24px"
                  style={{
                    color: "white",
                  }}
                />
              </span>
            </Tooltip>
            <Tooltip title="Follow us on Twiter" placement="top">
              <span className="bg-transparent border border-gray-500 rounded-xl p-2 ">
                <FaTwitter
                  fontSize="24px"
                  style={{
                    color: "white",
                  }}
                />
              </span>
            </Tooltip>
          </div>
          <div className="flex flex-col   mt-6 items-center ">
            <div className="text-white flex flex-col">
              <button>Send feedback</button>
              <button>Features</button>
            </div>
            <div>
              <h1 className="text-white">Get $IMAGE</h1>
              <h1 className="text-white">Use $IMAGE</h1>
            </div>
            <div className="text-white">
              <button>FAQ</button>
            </div>
          </div>
          <h1 className="text-white text-center  mt-8 pb-4">
            2024 © Imagen AI | All rights reserved
          </h1>
        </div>
      )}
    </div>
  );
};

export default Footer;
