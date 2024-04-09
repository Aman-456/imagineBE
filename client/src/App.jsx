import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./components/pages/home";
import LoginPage from "./components/pages/login";
import SignUp from "./components/pages/signup";
import { ToastContainer } from "react-toastify";
import Shorts from "./components/pages/shorts/shorts";
import Reactions from "./components/pages/reactions/reactions";
import Hot from "./components/pages/hot/hot";
import Explore from "./components/pages/explore/Explore";
import Post from "./components/pages/singlepost/Post";
import UserProfile from "./components/pages/singlepost/UserProfile";
import withAuth from "./components/withAuth";
import { LayoutNonAuth, LayoutProtected } from "./components/Layouts";

// css
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// import HamburgerMenu from "./components/sidebar/HamburgerMenu";
// import AdminNavbar from "./components/layout/AdminNavbar";
// import Admin from "./components/pages/admindashboard";

const App = () => {
  // import withAuth component and wrap the component that needs to be protected
  const Layout = withAuth(LayoutProtected);

  return (
    <BrowserRouter>
      <div className="lg:flex lg:relative h-screen">
        <Routes>
          {/* client routes */}
          <Route element={<Outlet />} path="/">
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/reactions" element={<Reactions />} />
              <Route path="/hot" element={<Hot />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/:category/:id/:title" element={<Post />} />
              <Route path="/user/:username" element={<UserProfile />} />
            </Route>
            <Route element={<LayoutNonAuth />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
          </Route>
          {/* admin routes */}
        </Routes>
      </div>

      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
