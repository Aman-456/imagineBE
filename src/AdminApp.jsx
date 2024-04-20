import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Tags from "./components/sidebar/Tags";
import HomePage from "./components/pages/home";
import LoginPage from "./components/pages/login";
import SignUp from "./components/pages/signup";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Shorts from "./components/pages/shorts/shorts";
import Reactions from "./components/pages/reactions/reactions";
import Hot from "./components/pages/hot/hot";
import Explore from "./components/pages/explore/Explore";
import Post from "./components/pages/singlepost/Post";
import UserProfile from "./components/pages/singlepost/UserProfile";
import HamburgerTabs from "./components/sidebar/HamburgerTabs";
import Vedios from "./components/pages/vedios/Vedios";
import SubmitAi from "./components/pages/submitai/SubmitAi";
import SubmitImage from "./components/pages/submitImage/SubmitImage";
import PopularTags from "./components/pages/popularTags/PopularTags";
import SingleTag from "./components/pages/popularTags/SingleTag";
import TopUsers from "./components/pages/topusers/TopUsers";

// import HamburgerMenu from "./components/sidebar/HamburgerMenu";
// import AdminNavbar from "./components/layout/AdminNavbar";
// import Admin from "./components/pages/admindashboard";

import AdminSidebar from './components/adminComponents/adminsidebar/AdminSidebar'
import AdminTags from './components/adminComponents/adminsidebar/AdminTags'
import AdminHamburgerTabs from './components/adminComponents/adminsidebar/AdminHamburgerTabs'
import AdminNavbar from "./components/adminComponents/adminsidebar/AdminNavbar";
import Subscriptions from "./components/pages/subscriptions/Subscriptions";
import AdminSubmitai from "./components/adminComponents/adminsidebar/adminhome/AdminSubmitai";
import AdminSubmitImage from "./components/adminComponents/adminsidebar/adminhome/AdminSubmitImage";
import AdminSubmitNews from "./components/adminComponents/adminsidebar/adminhome/AdminSubmitNews";
import AdminSettings from "./components/adminComponents/adminsidebar/adminsettings/AdminSettings";
import AdminGeneral from "./components/adminComponents/adminsidebar/adminsettings/AdminGeneral";
import AdminEmails from "./components/adminComponents/adminsidebar/adminsettings/AdminEmails";
import AdminUsers from "./components/adminComponents/adminsidebar/adminsettings/AdminUsers";
import AdminLayout from "./components/adminComponents/adminsidebar/adminsettings/AdminLayout";
import EditAdminUser from "./components/adminComponents/adminsidebar/adminsettings/EditAdminUser";
import CreateAdminUser from "./components/adminComponents/adminsidebar/adminsettings/CreateAdminUser";
import CreateAdminUserTitle from "./components/adminComponents/adminsidebar/adminsettings/CreateAdminUserTitle";
import EditAminUserTitle from "./components/adminComponents/adminsidebar/adminsettings/EditAminUserTitle";
import AdminMemberShip from "./components/adminComponents/adminsidebar/adminsettings/AdminMemberShip";
import AdminPosting from "./components/adminComponents/adminsidebar/adminsettings/AdminPosting";
import AdminLists from "./components/adminComponents/adminsidebar/adminsettings/AdminLists";
import AdminPermissions from "./components/adminComponents/adminsidebar/adminsettings/AdminPermissions";
import AdminRSS from "./components/adminComponents/adminsidebar/adminsettings/AdminRSS";
import AdminPoints from "./components/adminComponents/adminsidebar/adminsettings/AdminPoints";
import AdminSpam from "./components/adminComponents/adminsidebar/adminsettings/AdminSpam";
import AdminStats from "./components/adminComponents/adminsidebar/adminsettings/AdminStats";
import AdminMailing from "./components/adminComponents/adminsidebar/adminsettings/AdminMailing";
import AdminWidgets from "./components/adminComponents/adminsidebar/adminsettings/AdminWidgets";
import AdminCategories from "./components/adminComponents/adminsidebar/adminsettings/AdminCategories";
import AdminMenu from "./components/adminComponents/adminsidebar/adminsettings/AdminMenu";
import AdminManage from "./components/adminComponents/adminsidebar/adminsettings/AdminManage";
import AdminPlugins from "./components/adminComponents/adminsidebar/adminsettings/AdminPlugins";
import AdminModerate from "./components/adminComponents/adminsidebar/adminsettings/AdminModerate";
import AdminFlagged from "./components/adminComponents/adminsidebar/adminsettings/AdminFlagged";
import AdminHidden from "./components/adminComponents/adminsidebar/adminsettings/AdminHidden";
import UserProfileTags from "./components/adminComponents/adminsidebar/UserProfileTags";
import AdminUserProfile from "./components/pages/singlepost/AdminUserProfile";
import AdminUserDetailProfile from "./components/pages/singlepost/AdminUserDetailProfile";
import Messages from "./components/pages/singlepost/Messages";
import Membership from "./components/adminComponents/adminsidebar/Membership";


// const App = () => {
//   const [show, setShow] = useState(false);
//   const [isOpen, setIsOpen] = useState(false)
//   const [isSmallScreen, setIsSmallScreen] = useState(false);
//   const [showHamburgerTags,setShowHamburgerTags]=useState(false)

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 800);
//     };

//     // Initial check on mount
//     handleResize();

//     // Add event listener for window resize
//     window.addEventListener("resize", handleResize);

//     // Clean up event listener on component unmount
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <BrowserRouter>
//       {!isSmallScreen ? (
//         <div className="lg:flex lg:relative h-screen">
//           <div className="lg:w-[5%] bg-[#030303] h-screen lg:fixed z-50">
//             <Sidebar show={show} isOpen={isOpen} setIsOpen={setIsOpen} setShow={setShow}  showHamburgerTags={showHamburgerTags} setShowHamburgerTags={setShowHamburgerTags}/>
//           </div>
//           <div className="absolute bg-[#030303] left-[65px] z-50">
//             <Tags show={show} setShow={setShow} />
//             {/* <HamburgerMenu isOpen={isOpen} /> */}
//           </div>
//           <div className="absolute bg-[#030303] left-[65px] z-50">
//             <HamburgerTabs show={showHamburgerTags}  />
//             {/* <HamburgerMenu isOpen={isOpen} /> */}
//           </div>

//           <div className="w-[100%] lg:w-[95%] absolute lg:right-0 ">
//             <div className="bg-[#030303]">
//               <Navbar />
//             </div>

//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/login" element={<LoginPage />} />
//               <Route path="/signup" element={<SignUp />} />
//               <Route path="/shorts" element={<Shorts/>} />
//               <Route path="/reactions" element={<Reactions/>} />
//               <Route path="/hot" element={<Hot/>} />
//               <Route path="/explore" element={<Explore/>} />
//               <Route path="/:category/:id/:title" element={<Post/>} />
//               <Route path="/user/:username" element={<UserProfile/>} />
//               <Route path="/videos" element={<Vedios/>} />
//               <Route path="/submitai" element={<SubmitAi/>} />
//               <Route path="/submitimage" element={<SubmitImage/>} />
//               <Route path="/tags" element={<PopularTags/>} />
//               <Route path="/tags/:category" element={<SingleTag/>} />
//               <Route path="/users" element={<TopUsers/>} />


//             </Routes>

//             <Footer />
//           </div>
//         </div>
//       ) : (
//         <div className="w-[100%]">
//           <div className="bg-[#030303]">
//             <Navbar />
//           </div>

//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/signup" element={<SignUp />} />

//           </Routes>

//           <Footer />
//         </div>
//       )}

//       <ToastContainer />
//     </BrowserRouter>
//   );
// };

const AdminApp = ({toggleAdminMode}) => {
    const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showHamburgerTags,setShowHamburgerTags]=useState(false)
  const [showUserProfile,setShowUserProfile]=useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <BrowserRouter>
    {!isSmallScreen ? (
      <div className="lg:flex lg:relative h-screen">
        <div className="lg:w-[5%] bg-[#030303] h-screen lg:fixed z-50">
        <AdminSidebar show={show} isOpen={isOpen} setIsOpen={setIsOpen} setShow={setShow} showHamburgerTags={showHamburgerTags} setShowHamburgerTags={setShowHamburgerTags} showUserProfile={showUserProfile} setShowUserProfile={setShowUserProfile}/>
        </div>
        <div className="absolute bg-[#030303] left-[65px] z-50">
          <AdminTags show={show} setShow={setShow} />
          {/* <HamburgerMenu isOpen={isOpen} /> */}
        </div>
        <div className="absolute bg-[#030303] left-[65px] z-50">
         <AdminHamburgerTabs show={showHamburgerTags}  setShow={setShowHamburgerTags} />
            {/* <HamburgerMenu isOpen={isOpen} /> */}
          </div>

          <div className="absolute bg-[#030303] left-[65px] z-50">
            <UserProfileTags toggleAdminMode={toggleAdminMode} show={showUserProfile} setShow={setShowUserProfile}/>
          </div>


        <div className="w-[100%] lg:w-[95%] absolute lg:right-0 ">
          <div className="bg-[#030303]">
            <AdminNavbar />
            
          </div>

          <Routes>
            {/* <Route path="/" element={<Admin />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/shorts" element={<Shorts/>}/>
               <Route path="/reactions" element={<Reactions/>} />
            <Route path="/hot" element={<Hot/>} />
          <Route path="/explore" element={<Explore/>} />
             <Route path="/:category/:id/:title" element={<Post/>} />
             <Route path="/user/:username" element={<AdminUserProfile/>} />
             <Route path="/user/details" element={<AdminUserDetailProfile/>} />
             <Route path="/videos" element={<Vedios/>} />
               <Route path="/submitai" element={<AdminSubmitai/>} />
              <Route path="/submitimage" element={<AdminSubmitImage/>} />
              <Route path="/tags" element={<PopularTags/>} />
              <Route path="/tags/:category" element={<SingleTag/>} />
               <Route path="/users" element={<TopUsers/>} />
               <Route path="/subscriptions" element={<Subscriptions/>} />
               <Route path="/news" element={<AdminSubmitNews/>} />
               <Route path="/admin/general" element={<AdminSettings AdminCurrentTab={AdminGeneral}/>} />
               <Route path="/admin/emails" element={<AdminSettings AdminCurrentTab={AdminEmails}/>} />
               <Route path="/admin/users" element={<AdminSettings AdminCurrentTab={AdminUsers}/>} />
               <Route path="/admin/users/userfield/:id" element={<AdminSettings AdminCurrentTab={EditAdminUser}/>} />
               <Route path="/admin/users/userfield" element={<AdminSettings AdminCurrentTab={CreateAdminUser}/>} />
               <Route path="/admin/users/usertitle" element={<AdminSettings AdminCurrentTab={CreateAdminUserTitle}/>} />
               <Route path="/admin/users/usertitle/:id" element={<AdminSettings AdminCurrentTab={EditAminUserTitle}/>} />
               <Route path="/admin/layout" element={<AdminSettings AdminCurrentTab={AdminLayout}/>} />
               <Route path="/admin/membership" element={<AdminSettings AdminCurrentTab={AdminMemberShip}/>} />
               <Route path="/admin/posting" element={<AdminSettings AdminCurrentTab={AdminPosting}/>} />
               <Route path="/admin/lists" element={<AdminSettings AdminCurrentTab={AdminLists}/>} />
               <Route path="/admin/permissions" element={<AdminSettings AdminCurrentTab={AdminPermissions}/>} />
               <Route path="/admin/rss" element={<AdminSettings AdminCurrentTab={AdminRSS}/>} />
               <Route path="/admin/points" element={<AdminSettings AdminCurrentTab={AdminPoints}/>} />
               <Route path="/admin/spam" element={<AdminSettings AdminCurrentTab={AdminSpam}/>} />
               <Route path="/admin/stats" element={<AdminSettings AdminCurrentTab={AdminStats}/>} />
               <Route path="/admin/mailing" element={<AdminSettings AdminCurrentTab={AdminMailing}/>} />
               <Route path="/admin/widgets" element={<AdminSettings AdminCurrentTab={AdminWidgets}/>} />
               <Route path="/admin/categories" element={<AdminSettings AdminCurrentTab={AdminCategories}/>} />
               <Route path="/admin/menu" element={<AdminSettings AdminCurrentTab={AdminMenu}/>} />
               <Route path="/admin/manage" element={<AdminSettings AdminCurrentTab={AdminManage}/>} />
               <Route path="/admin/plugins" element={<AdminSettings AdminCurrentTab={AdminPlugins}/>} />
               <Route path="/admin/moderate" element={<AdminSettings AdminCurrentTab={AdminModerate}/>} />
               <Route path="/admin/flagged" element={<AdminSettings AdminCurrentTab={AdminFlagged}/>} />
               <Route path="/admin/hidden" element={<AdminSettings AdminCurrentTab={AdminHidden}/>} />
               <Route path="/messages" element={<Messages/>} />
               <Route path="/membership" element={<Membership/>} />

              

               


            {/* Admin Routes */}
          </Routes>

          <Footer />
        </div>
      </div>
    ) : (
      <div className="w-[100%]">
        <div className="bg-[#030303]">
          {/* <AdminNavbar /> */}
        </div>

        <Routes>
          {/* <Route path="/" element={<Admin />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
               <Route path="/shorts" element={<Shorts/>}/>
               <Route path="/reactions" element={<Reactions/>} />
            <Route path="/hot" element={<Hot/>} />
          <Route path="/explore" element={<Explore/>} />
             <Route path="/:category/:id/:title" element={<Post/>} />
             <Route path="/user/:username" element={<UserProfile/>} />
             <Route path="/videos" element={<Vedios/>} />
               <Route path="/submitai" element={<SubmitAi/>} />
              <Route path="/submitimage" element={<SubmitImage/>} />
              <Route path="/tags" element={<PopularTags/>} />
              <Route path="/tags/:category" element={<SingleTag/>} />
               <Route path="/users" element={<TopUsers/>} />

          {/* Admin Routes */}
        </Routes>

        <Footer />
      </div>
    )}

    <ToastContainer />
  </BrowserRouter>
    // Add your other admin routes here
  );
};


// export default App;
export default AdminApp;