import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Tags from "./Tags";

const SideNav = () => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[12%] xl:w-[6%] bg-[#030303]   h-screen fixed">
      <Sidebar
        show={show}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setShow={setShow}
      />
      <div className="absolute bg-[#030303] left-[65px] z-50">
        <Tags show={show} setShow={setShow} />
      </div>
    </div>
  );
};

export default SideNav;
