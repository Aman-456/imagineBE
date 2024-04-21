import React, { useState } from 'react'
import AdminApp from './AdminApp';
import UserApp from './UserApp';

const App = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
  };
  return (
    <div>
       {isAdminMode ? (
          <AdminApp  toggleAdminMode={toggleAdminMode}/>
        ) : (
          <UserApp toggleAdminMode={toggleAdminMode} />
        )}
    </div>
  )
}

export default App
