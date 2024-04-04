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

// import HamburgerMenu from "./components/sidebar/HamburgerMenu";
// import AdminNavbar from "./components/layout/AdminNavbar";
// import Admin from "./components/pages/admindashboard";

const App = () => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
          <div className="lg:w-[5%] bg-[#030303] h-screen lg:fixed">
            <Sidebar show={show} isOpen={isOpen} setIsOpen={setIsOpen} setShow={setShow} />
          </div>
          <div className="absolute bg-[#030303] left-[65px] z-50">
            <Tags show={show} setShow={setShow} />
            {/* <HamburgerMenu isOpen={isOpen} /> */}
          </div>

          <div className="w-[100%] lg:w-[95%] absolute lg:right-0 ">
            <div className="bg-[#030303]">
              <Navbar />
            </div>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/shorts" element={<Shorts/>} />
              <Route path="/reactions" element={<Reactions/>} />
              <Route path="/hot" element={<Hot/>} />
              <Route path="/explore" element={<Explore/>} />
              <Route path="/:category/:id/:title" element={<Post/>} />
              <Route path="/user/:username" element={<UserProfile/>} />


            </Routes>

            <Footer />
          </div>
        </div>
      ) : (
        <div className="w-[100%]">
          <div className="bg-[#030303]">
            <Navbar />
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />

          </Routes>

          <Footer />
        </div>
      )}

      <ToastContainer />
    </BrowserRouter>
  );
};

// const AdminRoutes = () => {
//   return (
//     <BrowserRouter>
//     {!isSmallScreen ? (
//       <div className="lg:flex lg:relative h-screen">
//         <div className="lg:w-[5%] bg-[#030303] h-screen lg:fixed">
//           <Sidebar show={show} isOpen={isOpen} setIsOpen={setIsOpen} setShow={setShow} />
//         </div>
//         <div className="absolute bg-[#030303] left-[75px] z-50">
//           <Tags show={show} setShow={setShow} />
//           <HamburgerMenu isOpen={isOpen} />
//         </div>

//         <div className="w-[100%] lg:w-[95%] absolute lg:right-0 ">
//           <div className="bg-[#030303]">
//             <AdminNavbar />
//           </div>

//           <Routes>
//             <Route path="/" element={<Admin />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/signup" element={<SignUp />} />

//             {/* Admin Routes */}
//           </Routes>

//           <Footer />
//         </div>
//       </div>
//     ) : (
//       <div className="w-[100%]">
//         <div className="bg-[#030303]">
//           <AdminNavbar />
//         </div>

//         <Routes>
//           <Route path="/" element={<Admin />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignUp />} />

//           {/* Admin Routes */}
//         </Routes>

//         <Footer />
//       </div>
//     )}

//     <ToastContainer />
//   </BrowserRouter>
//     // Add your other admin routes here
//   );
// };

export default App;