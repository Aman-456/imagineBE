import React from "react";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <div>
      <div className="bg-[#0c0b0d]">
        <div className="w-[96%] pb-4 flex flex-col gap-4 mx-auto">
          <h1 className="text-[48px] mb-2 p-2 mx-auto relative">
            Imagen Network
            <span
              className="absolute bg-gradient-to-r from-[#635bff] to-[#bc56f8] bottom-0 left-0 right-0 h-[6px] rounded-[4px] transform rotate-[-3deg]"
              style={{
                content: "",
                position: "absolute",
              }}
            ></span>
          </h1>
          <div className="w-[40%] mx-auto pt-8">
            <span className="flex justify-between items-center px-4 w-[100%] py-2  mx-auto bg-[#0f0f11] border-2 border-gray-800 rounded-lg">
              <input
                type="text"
                className="bg-[#0f0f11] text-[24px] custom "
                placeholder="Search"
              />
              <GoSearch fontSize="24px" />
            </span>
          </div>
          <div className=" mx-auto flex justify-center  gap-2 items-center">
            <h1 className="text-[40px] text-gray-600 font-semibold ">Discover</h1>
            <button className="border-[1px] border-gray-500 rounded-full text-[14px] mt-2 py-1 px-3 ">
              Lady_in_jungle
            </button>
            <button className="border-[1px] border-gray-500 rounded-full text-[14px] mt-2 py-1 px-3 ">
              jungle
            </button>
            <button className="border-[1px] border-gray-500 rounded-full text-[14px] mt-2 py-1 px-3 ">
              tag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
