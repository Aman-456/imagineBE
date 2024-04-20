import React from "react";
import PropTypes from "prop-types";

const AdminTags = ({ show }) => {
  AdminTags.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
  };
  console.log("tags ", show);
  return (
    <div >
      {show && (
        <div className="tags fixed bg-black h-screen pl-20 pr-20 flex text-start text-white pt-[90px] flex-col gap-8">
          <h1>Home</h1>
          <h1>Hot!</h1>
          <h1>Submit News</h1>
          <h1>Submit Image</h1>
          <h1>Submit Video</h1>
          <h1>Tags</h1>
          <h1>Top Users</h1>
          <h1>Admin</h1>
        </div>
        )}
      
    </div>
  );
};

export default AdminTags;
