import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
      const baseUrl = import.meta.env.VITE_BASE_URL;
      if (!baseUrl) {
        toast.error("Base Url is not defined");
        return;
      }

      // Use Axios instead of fetch
      const response = await axios.post(`${baseUrl}/signup`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);
      toast.success("Registered Successfully");
      navigate("/login");
      setFormData({
        username: "",
        password: "",
        email: "",
      });
      // Handle success response
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          if (
            error.response.data.message ===
            "User already exists. Please try another name"
          ) {
            toast.error("Username already exists. Please try another name");
          } else if (
            error.response.data.message ===
            "Email already exists. Please use another email"
          ) {
            toast.error(
              "Email address already exists. Please try another address"
            );
          }
        }
      } else {
        toast.error("Internal Server Error");
      }
      console.error("Error:", error);
      // Handle error response
    }
  };

  return (
    <div className="bg-[#0c0b0d] text-[#8a8997] px-[2%] py-[2%]">
      <div className="w-[60%] mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-4 gap-2 py-10"
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            required
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="rounded-full py-2 bg-[#0f0f11] border-2 border-[#24242b] hover:border-blue-500 outline-none px-3"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="rounded-full py-2 bg-[#0f0f11] border-2 border-[#24242b] hover:border-blue-500 outline-none px-3"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-full py-2 bg-[#0f0f11] border-2 border-[#24242b] hover:border-blue-500 outline-none px-3"
          />
          <p>
            Privacy: Your email address will not be shared or sold to third
            parties.
          </p>
          <div className="flex gap-8 items-center pt-4 text-white">
            <button
              type="submit"
              className="bg-[#635bff]  hover:bg-[#363192] px-10 rounded-xl py-1"
            >
              Register
            </button>
            <Link to="/login">
              <span className="bg-[#635bff]  hover:bg-[#363192] py-1 px-10 rounded-xl">
                Login
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
