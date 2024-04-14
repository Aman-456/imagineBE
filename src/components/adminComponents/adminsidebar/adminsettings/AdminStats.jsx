import React from "react";

const AdminStats = () => {
  return (
    <div className=" w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">
          Request confirmation of user emails:
        </span>
        <span className="text-lg text-white w-48">8.2</span>
      </div>

      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">Build date:</span>
        <span className="text-lg text-white w-48"> 2022-10-01</span>
      </div>
      <div className="border-b-2 border-dashed border-white mt-5"></div>

      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">Media database version:</span>
        <span className="text-lg text-white w-48"> 62</span>
      </div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">Database size:</span>
        <span className="text-lg text-white w-48">1.5 MB</span>
      </div>
      <div className="border-b-2 border-dashed border-white mt-5"></div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">PHP version:</span>
        <span className="text-lg text-white w-48">8.2.17</span>
      </div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">MySQL version:</span>
        <span className="text-lg text-white w-48">10.3.39-MariaDB</span>
      </div>
      <div className="border-b-2 border-dashed border-white mt-5"></div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">Total Post:</span>
        <span className="text-lg text-white w-48">8</span>
      </div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">From users:</span>
        <span className="text-lg text-white w-48">8</span>
      </div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">From anonymous:</span>
        <span className="text-lg text-white w-48">0</span>
      </div>
      <div className="border-b-2 border-dashed border-white mt-5"></div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">Total Comments:</span>
        <span className="text-lg text-white w-48">0</span>
      </div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">From users:</span>
        <span className="text-lg text-white w-48">0</span>
      </div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">From anonymous:</span>
        <span className="text-lg text-white w-48">0</span>
      </div>
      <div className="border-b-2 border-dashed border-white mt-5"></div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">Total replies:</span>
        <span className="text-lg text-white w-48">0</span>
      </div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">From users:</span>
        <span className="text-lg text-white w-48">0</span>
      </div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">From anonymous:</span>
        <span className="text-lg text-white w-48">0</span>
      </div>
      <div className="border-b-2 border-dashed border-white mt-5"></div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">Registered users:</span>
        <span className="text-lg text-white w-48">6</span>
      </div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">Users who posted:</span>
        <span className="text-lg text-white w-48">2</span>
      </div>
      <div className="mt-6 flex justify-between w-[90%] pl-2">
        <span className="ml-3 text-xl">Users who voted:</span>
        <span className="text-lg text-white w-48">0</span>
      </div>
      <div className="mt-20">
        <h1 className="text-5xl">Database clean-up operations</h1>
        <div className="mt-6 flex justify-start items-center">
          <span className="text-white text-lg bg-blue-600 rounded-2xl px-4 py-2 hover:bg-yellow-300">Recount Posts</span>
          <span className="text-xs ml-4">- the number of Comments, votes, flags and hotness for each post</span>
        </div>
        <div className="mt-2 flex justify-start items-center">
          <span className="text-white text-lg bg-blue-600 rounded-2xl px-4 py-2 hover:bg-yellow-300">Reindex content</span>
          <span className="text-xs ml-4">- for searching and related Post suggestions</span>
        </div>
        <div className="mt-2 flex justify-start items-center">
          <span className="text-white text-lg bg-blue-600 rounded-2xl px-4 py-2 hover:bg-yellow-300">Recalculate user points</span>
          <span className="text-xs ml-4">- for user ranking and points displays</span>
        </div>
        <div className="mt-2 flex justify-start items-center">
          <span className="text-white text-lg bg-blue-600 rounded-2xl px-4 py-2 hover:bg-yellow-300">Refill event streams</span>
          <span className="text-xs ml-4">- for each user's list of updates</span>
        </div>
        <div className="mt-2 flex justify-start items-center">
          <span className="text-white text-lg bg-blue-600 rounded-2xl px-4 py-2 hover:bg-yellow-300">Recalculate categories</span>
          <span className="text-xs ml-4">- for post categories and category counts</span>
        </div>
        <div className="mt-2 flex justify-start items-center">
          <span className="text-white text-lg bg-blue-600 rounded-2xl px-4 py-2 hover:bg-yellow-300">Delete hidden posts</span>
          <span className="text-xs ml-4">- all hidden Post, Comment and comments without dependents</span>
        </div>
      </div>
    </div>
  );
};

export default AdminStats;
