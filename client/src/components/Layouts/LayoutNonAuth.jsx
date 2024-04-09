import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export const LayoutNonAuth = () => {
  const profile = useSelector((state) => state.profile);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    console.log(profile);
    if (profile?.email) {
      navigate("/");
    }
  }, [profile]);
  if (profile?.email) return null;
  return (
    <div className="text-[#8a8997] w-full  max-w-[620px] h-[100%]  py-4 flex justify-center items-center mx-auto">
      <div className="bg-[#242424] mx-5 w-full border-2 border-transparent hover:border-white  px-16 py-6 rounded-xl">
        <Outlet />
      </div>
    </div>
  );
};
