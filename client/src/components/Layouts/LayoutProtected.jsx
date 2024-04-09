import Navbar from "./client/Navbar";
import Footer from "./client/Footer";
import SideNav from "./client/SideNav";
import { Outlet } from "react-router-dom";

export const LayoutProtected = () => {
  return (
    <div className="w-[100%] lg:w-[100%] absolute lg:right-0">
      <SideNav />
      <div className="bg-[#030303]  w-[88%] pl-3 pr-2 xl:w-[94%] ml-[auto] overflow-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </div>{" "}
    </div>
  );
};
