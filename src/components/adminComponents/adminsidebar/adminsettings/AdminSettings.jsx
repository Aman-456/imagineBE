import React, { useState } from 'react';
import { allTabs } from './allTabs';
import { Link, useLocation } from 'react-router-dom';

const AdminSettings = ({ AdminCurrentTab: CurrentTab }) => {
  const [tabs, setTabs] = useState(allTabs);
  const location = useLocation();

  const isActiveTab = (tabPath) => {
    return location.pathname === `/admin/${tabPath}`;
  };

  return (
    <div className='min-h-screen px-8 py-8'>
      <div className='bg-[#030303] w-full mx-auto p-2 rounded-2xl  flex items-center justify-between'>
        <div className='flex items-center justify-start gap-1 flex-wrap text-white'>
          {tabs.map((tab) => (
            <Link
              to={`/admin/${tab.tab}`}
              key={tab.id}
              className={`flex items-center justify-center gap-2 text-xl  bg-[#151419] rounded-xl px-4 py-2 font-semibold hover:bg-white hover:text-black ${isActiveTab(tab.tab) ? 'bg-white text-black' : ''}`}
            >
              {tab.tab.charAt(0).toUpperCase() + tab.tab.slice(1)}
            </Link>
          ))}
        </div>
      </div>
      <CurrentTab />
    </div>
  );
};

export default AdminSettings;
