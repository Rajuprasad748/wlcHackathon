import React from "react";
import Navbar from "../component/Navbar";

const Admin = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div>
        <Navbar />
      </div>
     
        <div className="w-screen h-screen flex bg-slate-300 items-center justify-center">
          <form class="w-1/3">
            <h1 className="text-center text-3xl font-medium my-2">
              Login as an Admin
            </h1>
            <div class="my-5">
              <label
                for="email"
                className="block text-lg font-medium text-gray-900 mb-2"
              >
                AdminId
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out border-1 border-black"
                placeholder="Enter your email"
                required
              />
            </div>

            <div class="my-5">
              <label
                for="password"
                className="block text-lg font-medium text-gray-900 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
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
