import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!import.meta.env.VITE_BASE_URL) {
        return toast.error("Base Url is not defined");
      }
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api-signup`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Registered Successfully");
      setFormData({
        username: "",
        password: "",
        email: "",
      });
      navigate("/login");
      // Handle success response
    } catch (error) {
      const response = error.response;
      if (response) {
        if (response.status === 400) {
          toast.error(response.data.message);
        }
      } else {
        toast.error("Internal Server Error");
      }
      console.error("Error:", error.message);
      // Handle error response
    }
  };

  return (
    <>
      <h1 className="mx-auto pb-6 text-[40px]">Register</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col  gap-2 text-start"
      >
        <label className="text-[20px]" htmlFor="">
          Username
        </label>
        <input
          className="w-[100%] rounded-lg border-4 border-transparent hover:border-gray-500 outline-none  px-2 py-2 "
          type="text"
          required
          name="username"
          onChange={handleChange}
          value={formData.username}
          placeholder="Enter your username"
        />
        <label className="text-[20px]" htmlFor="">
          Email
        </label>
        <input
          className="w-[100%] rounded-lg border-4 border-transparent hover:border-gray-500 outline-none  px-2 py-2 "
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={formData.email}
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
          value={formData.password}
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="w-[100%] py-3 mt-5 rounded-xl my-4 text-[20px] text-white bg-[#635bff]  hover:bg-[#363192] "
        >
          Register{" "}
        </button>
      </form>
      <div className="pt-5">
        <Link to="/login">
          <button className="w-[100%] py-3 rounded-xl text-[20px] text-white bg-[#19171d]  hover:bg-[#131216] ">
            Login
          </button>
        </Link>
      </div>
    </>
  );
};

export default Signup;
