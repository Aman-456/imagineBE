import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setProfile } from "../../store/profileSlice";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!import.meta.env.VITE_BASE_URL) {
        return toast.error("baseUrl is not defined");
      }
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api-login`,
        loginData
      );
      toast.success("Login successfully");
      setLoginData({
        email: "",
        password: "",
      });
      const { email, password, token = null, _id } = data.userData;

      dispatch(setProfile({ email, password, token, _id }));
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        toast.error(data.message ?? "An error occurred. Please try again.");
      } else if (error.request) {
        toast.error("No response from the server. Please try again later.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <h1 className="mx-auto pb-6 text-[40px]">Login</h1>
      <form
        action=""
        onSubmit={handleLoginSubmit}
        className="flex flex-col  gap-2 text-start"
      >
        <label className="text-[20px]" htmlFor="">
          Email
        </label>
        <input
          className="w-[100%] rounded-lg border-4 border-transparent hover:border-gray-500 outline-none  px-2 py-2 "
          type="text"
          required
          name="email"
          onChange={handleChange}
          value={loginData.email}
          placeholder="Enter your email"
        />
        <label className="text-[20px]" htmlFor="">
          Password
        </label>
        <input
          className="w-[100%] rounded-lg border-4 border-transparent hover:border-gray-500 outline-none  px-2 py-2 "
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={loginData.password}
          placeholder="Enter your password"
        />
        <div className="flex gap-3 py-4">
          {/* <input type="checkbox" /> */}
          {/* <label htmlFor="remember me">Remember Me</label> */}
        </div>
        <button
          type="submit"
          className="w-[100%] py-3 rounded-xl text-[20px] text-white bg-[#635bff]  hover:bg-[#363192] "
        >
          Sign In
        </button>
      </form>
      <div className="pt-10">
        <Link to="/signup">
          <button className="w-[100%] py-3 rounded-xl text-[20px] text-white bg-[#19171d]  hover:bg-[#131216] ">
            Register
          </button>
        </Link>
      </div>
    </>
  );
};

export default Login;
