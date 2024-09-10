import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
    animal: "cow",
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
        "http://localhost:3001/user/signup",
        formData
      );

      if (response) {
        toast.success("Account successfully created!");
        navigate("/login");
      }
    } catch (error) {
      toast.error("This is an error while creating your account!");
    }
  };

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div>
        <Navbar />
      </div>

      <div className="w-screen h-screen flex items-center justify-center bg-slate-300">
        <form
          method="post"
          action="/user/signup"
          className="w-1/3 mx-auto py-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-4xl font-bold mb-4">
            Signup your Account
          </h1>
          <div className="my-2">
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-900 mb-2"
            >
              Username
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="username"
              name="username"
              className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out border-1 border-black"
              placeholder="Enter your username"
              required
            />
            {/* <br /> {errors.username && <p className="text-red-600">This field is required.</p>} */}
          </div>

          <div className="my-2">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-900 mb-2"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out border-1 border-black"
              placeholder="Enter your email"
              required
            />
            {/* <br /> {errors.username && <p className="text-red-600">This field is required.</p>} */}
          </div>

          <div className="my-2">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-900 mb-2"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out border-1 border-black"
              placeholder="Enter your password"
              required
            />
            {/* <br /> {errors.username && <p className="text-red-600">This field is required.</p>} */}
          </div>

          <div className="my-2">
            <label
              htmlFor="contact"
              className="block text-lg font-medium text-gray-900 mb-2"
            >
              Contact
            </label>
            <input
              onChange={handleChange}
              type="number"
              id="contact"
              name="contact"
              className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out border-1 border-black"
              placeholder="Enter your contact number"
              required
            />
            {/* <br /> {errors.username && <p className="text-red-600">This field is required.</p>} */}
          </div>
          <div className="my-2">
            <label className="block text-lg font-medium text-gray-900 mb-2">
              Select your pet category:
            </label>
            <select
              onChange={handleChange}
              id="animal"
              name="animal"
              className="border-2 border-black px-4 py-1 rounded-lg"
            >
              <option value="cow">Cow</option>
              <option value="dog">Dog</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn-primary bg-[#1F2937] py-2 rounded text-white w-full text-center my-5 active:scale-95"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
