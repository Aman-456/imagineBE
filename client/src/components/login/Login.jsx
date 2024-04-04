import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const test=()=>{
    navigate('/')
  }

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let loginSuccessful = false;
    try {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      if (!baseUrl) {
        toast.error("baseUrl is not defined");
        return;
      }
      const response = await axios.post(`${baseUrl}/login`, loginData);
      toast.success("Login successfully");
      loginSuccessful = true;
      console.log("success");
      navigate.push("/");
      setLoginData({
        email: "",
        password: "",
      });
    } catch (error) {
      if (!loginSuccessful) {
        if (error.response) {
          // The request was made and the server responded with a status code
          const { status, data } = error.response;
          if (status === 404) {
            toast.error(data.message); // User not found
          } else if (status === 401) {
            toast.error(data.message); // Incorrect password
          } else {
            toast.error("An error occurred. Please try again."); // Other server errors
          }
        } else if (error.request) {
          // The request was made but no response was received
          toast.error("No response from the server. Please try again later.");
        } else {
          // Something happened in setting up the request that triggered an error
          toast.error("An error occurred. Please try again.");
        }
      }
    }
  };

  return (
    <>
      <div className="w-[96%] mx-auto bg-[#151419] text-[#8a8997]">
        <div className=" w-[50%]    py-4 flex justify-center mx-auto">
          <div className="bg-[#242424] w-[80%] border-2 border-transparent hover:border-white  px-16 py-6 rounded-xl">
            <h1 className="mx-auto pb-6 text-[40px]">Login</h1>
            <form
              action=""
              onSubmit={test}
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
                <input type="checkbox" />
                <label htmlFor="remember me">Remember Me</label>
              </div>
              <button type="submit" className="w-[100%] py-3 rounded-xl text-[20px] text-white bg-[#635bff]  hover:bg-[#363192] ">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
