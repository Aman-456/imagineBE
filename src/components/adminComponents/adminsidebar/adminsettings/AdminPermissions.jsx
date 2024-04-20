import React from "react";

const AdminPermissions = () => {
  return (
    <div className=" w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
      <div className="mt-5 flex justify-between items-center w-[80%] pl-2">
        <span className="ml-3 text-xl">Viewing Post Page:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-72  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Anybody</option>
          <option value="">Registered users</option>
          <option value="">registered user with email confirmed</option>
          <option value="">Verified users</option>
          <option value="">Premium Memebrs (Memebership)</option>
        </select>
      </div>
      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Submitting Post:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Registered user with email confirmed</option>
          <option value="">Registered users</option>
          <option value="">Registered user with email confirmed</option>
          <option value="">Verified users</option>
          <option value="">Premium Memebrs (Memebership)</option>
        </select>
      </div>

      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Commenting Post:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">verified users</option>
          <option value="">Registered user with email confirmed</option>
          <option value="">Registered users</option>
          <option value="">Registered user with email confirmed</option>
          <option value="">Premium Memebrs (Memebership)</option>
          <option value="">Registered user with enought point </option>
          <option value="">
            Registered & email confirmed & enough points{" "}
          </option>
          <option value="">Experts,Editors, Moderators,Admins</option>
        </select>
      </div>
      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Adding reply:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">verified users</option>
          <option value="">Registered user with email confirmed</option>
          <option value="">Registered users</option>
          <option value="">Registered user with email confirmed</option>
          <option value="">Premium Memebrs (Memebership)</option>
          <option value="">Registered user with enought point </option>
          <option value="">
            Registered & email confirmed & enough points{" "}
          </option>
          <option value="">Experts,Editors, Moderators,Admins</option>
          <option value="">Editors, Moderators,Admins</option>
        </select>
      </div>

      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Voting Posts:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Registered users</option>
          <option value="">verified users</option>
          <option value="">Registered user with email confirmed</option>

          <option value="">Registered user with email confirmed</option>
          <option value="">Premium Memebrs (Memebership)</option>
          <option value="">Registered user with enought point </option>
          <option value="">
            Registered & email confirmed & enough points{" "}
          </option>
        </select>
      </div>
      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Voting on Comments:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Registered users</option>
          <option value="">verified users</option>
          <option value="">Registered user with email confirmed</option>

          <option value="">Registered user with email confirmed</option>
          <option value="">Premium Memebrs (Memebership)</option>
          <option value="">Registered user with enought point </option>
          <option value="">
            Registered & email confirmed & enough points{" "}
          </option>
        </select>
      </div>
      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Voting posts down:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Registered users</option>
          <option value="">verified users</option>
          <option value="">Registered user with email confirmed</option>

          <option value="">Registered user with email confirmed</option>
          <option value="">Premium Memebrs (Memebership)</option>
          <option value="">Registered user with enought point </option>
          <option value="">
            Registered & email confirmed & enough points{" "}
          </option>
          <option value="">Experts,Editors,Moderators,Admins</option>
        </select>
      </div>

      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Recategorizing Posts:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Experts,Editors,Moderators,Admins</option>
          <option value="">Registered users</option>
          <option value="">verified users</option>
          <option value="">Registered user with email confirmed</option>

          <option value="">Registered user with email confirmed</option>
          <option value="">Premium Memebrs (Memebership)</option>
          <option value="">Registered user with enought point </option>
          <option value="">
            Registered & email confirmed & enough points{" "}
          </option>
        </select>
      </div>

      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Editing any Post:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Editors,Moderators,Admins</option>
          <option value="">Registered users</option>
          <option value="">verified users</option>
          <option value="">Registered user with email confirmed</option>

          <option value="">Registered user with email confirmed</option>
          <option value="">Premium Memebrs (Memebership)</option>
          <option value="">Registered user with enought point </option>
          <option value="">
            Registered & email confirmed & enough points{" "}
          </option>
          <option value="">Experts,Editors,Moderators,Admins</option>
        </select>
      </div>

      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Editing any Comment:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Experts,Editors,Moderators,Admins</option>
          <option value="">Registered users</option>
          <option value="">verified users</option>
          <option value="">Registered user with email confirmed</option>

          <option value="">Registered user with email confirmed</option>
          <option value="">Premium Memebrs (Memebership)</option>
          <option value="">Registered user with enought point </option>
          <option value="">
            Registered & email confirmed & enough points{" "}
          </option>
          <option value="">Editors,Moderators,Admins</option>
        </select>
      </div>

      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Editing any reply:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Editors,Moderators,Admins</option>
          <option value="">Registered users</option>
          <option value="">verified users</option>
          <option value="">Registered user with email confirmed</option>

          <option value="">Registered user with email confirmed</option>
          <option value="">Premium Memebrs (Memebership)</option>
          <option value="">Registered user with enought point </option>
          <option value="">
            Registered & email confirmed & enough points{" "}
          </option>
          <option value="">Experts,Editors,Moderators,Admins</option>
          <option value="">Moderators and Admins</option>
        </select>
      </div>
      <div className="mt-5 flex justify-between items-center w-[80%] pl-2">
        <span className="ml-3 text-xl">Editing posts silently:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-72  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Moderators and Admins</option>
          <option value="">Editors,Moderators,Admins</option>

          <option value="">Experts,Editors,Moderators,Admins</option>
          <option value="">Administrators</option>
        </select>
      </div>
      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Selecting Comment for any Post:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Experts,Editors,Moderators,Admins</option>
          <option value="">Editors,Moderators,Admins</option>

          <option value="">Registered user with enought point </option>
          <option value="">
            Registered & email confirmed & enough points{" "}
          </option>

          <option value="">Moderators and Admins</option>
        </select>
      </div>

      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Viewing IPs of anonymous posts:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Editors,Moderators,Admins</option>
          <option value="">Anybody</option>

          <option value="">Registered users</option>
          <option value="">verified users</option>
          <option value="">Registered user with email confirmed</option>

          <option value="">Registered user with email confirmed</option>
          <option value="">Premium Memebrs (Memebership)</option>
          <option value="">Registered user with enought point </option>
          <option value="">
            Registered & email confirmed & enough points{" "}
          </option>
          <option value="">Experts,Editors,Moderators,Admins</option>
          <option value="">Moderators and Admins</option>
        </select>
      </div>
      <div className="mt-5 flex justify-between items-center w-[80%] pl-2">
        <span className="ml-3 text-xl">
          Viewing who voted or flagged posts:
        </span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-72  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Administrators</option>
          <option value="">Editors,Moderators,Admins</option>

          <option value="">Experts,Editors,Moderators,Admins</option>
          <option value="">Moderators and Admins</option>
          <option value="">Super Administrators</option>
        </select>
      </div>

      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Flagging posts:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Registered user with email confirmed</option>
          <option value="">Editors,Moderators,Admins</option>
          <option value="">Anybody</option>

          <option value="">Registered users</option>
          <option value="">verified users</option>

          <option value="">Registered user with email confirmed</option>
          <option value="">Premium Memebrs (Memebership)</option>
          <option value="">Registered user with enought point </option>
          <option value="">
            Registered & email confirmed & enough points{" "}
          </option>
          <option value="">Experts,Editors,Moderators,Admins</option>
          <option value="">Moderators and Admins</option>
        </select>
      </div>

      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Approving or rejecting posts:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Experts,Editors,Moderators,Admins</option>

          <option value="">Editors,Moderators,Admins</option>

          <option value="">Registered user with enought point </option>
          <option value="">
            Registered & email confirmed & enough points{" "}
          </option>

          <option value="">Moderators and Admins</option>
        </select>
      </div>

      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Hiding or showing any post:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
          <option value="">Editors,Moderators,Admins</option>
          <option value="">Experts,Editors,Moderators,Admins</option>

          <option value="">Registered user with enought point </option>
          <option value="">
            Registered & email confirmed & enough points
          </option>

          <option value="">Moderators and Admins</option>
        </select>
      </div>

      <div className="mt-5 flex justify-between items-center w-[80%] pl-2">
        <span className="ml-3 text-xl">Deleting hidden posts:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-72  border-2 border-gray-600 outline-2 outline-blue-600 ">
        <option value="">Moderators and Admins</option>
          <option value="">Editors,Moderators,Admins</option>
          
          <option value="">Administrators</option>

          
        </select>
      </div>

      <div className="mt-5 flex justify-between items-center w-[89%] pl-2">
        <span className="ml-3 text-xl">Posting on user walls:</span>

        <select className=" bg-white rounded-2xl  text-gray-700 px-2 py-1 w-5/12  border-2 border-gray-600 outline-2 outline-blue-600 ">
        <option value="">Registered user with email confirmed </option>
        <option value="">Registered users</option>
        <option value="">Verified users</option>
        <option value="">Registered user with enough points</option>
        <option value="">Premimum Members (Memebrship)</option>
          

          
          <option value="">
            Registered & email confirmed & enough points
          </option>

        </select>
      </div>
      <div className="mt-6 flex justify-between items-center w-[70%] pl-2">
        <span className="ml-3 text-xl">Blocking or unblocking user or IPs:</span>

       <span className="text-white">Moderators and Admins</span>
      </div>


      <div className="mt-6 flex justify-between items-center w-[70%] pl-2">
        <span className="ml-3 text-xl">Approving registered users:</span>

       <span className="text-white">Moderators and Admins</span>
      </div>

      <div className="mt-6 flex justify-between items-center w-[70%] pl-2">
        <span className="ml-3 text-xl">Creating experts:</span>

       <span className="text-white">Moderators and Admins</span>
      </div>
      <div className="mt-6 flex justify-between items-center w-[64%] pl-2">
        <span className="ml-3 text-xl">Viewing user email addresses:</span>

       <span className="text-white">Administrators</span>
      </div>

      <div className="mt-6 flex justify-between items-center w-[64%] pl-2">
        <span className="ml-3 text-xl">Deleting users:</span>

       <span className="text-white">Administrators</span>
      </div>

      <div className="mt-6 flex justify-between items-center w-[64%] pl-2">
        <span className="ml-3 text-xl">Creating editors and moderators:</span>

       <span className="text-white">Administrators</span>
      </div>
      <div className="mt-6 flex justify-between items-center w-[69%] pl-2">
        <span className="ml-3 text-xl">Creating administrators:</span>

       <span className="text-white">	Super Administrators</span>
      </div>

      <div className="mt-3 ml-3">
                <button className='bg-[#635bff] text-white mt-2 px-14 rounded-2xl py-3'>Save Options</button>
                <button className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Reset To Defaults</button>
                </div>
    </div>
  );
};

export default AdminPermissions;
