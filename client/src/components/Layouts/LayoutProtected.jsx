import Navbar from "./client/Navbar";
import Footer from "./client/Footer";
import SideNav from "./client/SideNav";
import { Outlet } from "react-router-dom";

export const LayoutProtected = () => {
  return (
    <div className="w-[100%] lg:w-[100%] absolute lg:right-0 ">
      <SideNav />
      <div className="bg-[#030303] w-[95%] ml-[auto]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>{" "}
    </div>
  );
};
