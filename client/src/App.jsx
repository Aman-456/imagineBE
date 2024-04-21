import React, { useState } from "react";
import AdminApp from "./AdminApp";
import UserApp from "./UserApp";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.profile.profile);
  return <div>{user?.isAdmin ? <AdminApp /> : <UserApp />}</div>;
};

export default App;
