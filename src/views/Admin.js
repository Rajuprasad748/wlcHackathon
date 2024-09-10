import React , { useState } from "react";
import Navbar from "../component/Navbar";
import axios from 'axios'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Admin = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/admin/login",
        formData
      );
      if(response){
        toast.success('Admin logged in successfully');
        navigate('/admin/dashboard')
      }
    } catch (error) {
      toast.error('Invalid email address or password');
    }
  };





  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div>
        <Navbar />
      </div>
     
        <div className="w-screen h-screen flex bg-slate-300 items-center justify-center">
          <form className="w-1/3" onSubmit={handleSubmit} method="post">
            <h1 className="text-center text-4xl font-bold my-2">
              Login as an Admin
            </h1>
            <div className="my-5">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-900 mb-2"
              >
                AdminId
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out border-1 border-black"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="my-5">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-900 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out border-1 border-black"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
               className="btn-primary bg-[#1F2937] px-4 py-2 text-lg font-semibold  rounded-lg text-white w-full text-center my-5 active:scale-95"
            >
              Login
            </button>
          </form>
        </div>
     
    </div>
  );
};

export default Admin;
