import { Link, useNavigate } from "react-router-dom";
import React from "react";
import UserLeftPannel from "../component/userPannel/UserLeftPannel";
import toast from "react-hot-toast";

const UserLogout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    toast.success("Logged out successfully");
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div>
      <div className="container mx-auto w-screen h-screen overflow-hidden bg-slate-300">
        <main className="flex md:flex-row lg:flex-row">
          <div className="w-72 rounded-md h-full">
            {" "}
            <UserLeftPannel />
          </div>
          <div className="flex h-screen w-full justify-center items-center">
            <div className="bg-gray-800 p-8 rounded-xl flex justify-center items-center flex-col gap-4">
              <h1 className="text-4xl font-semobold my-4 text-gray-300 ">
                Are you sure u want to logout...?
              </h1>
              <div className="flex gap-8">
                <button
                  onClick={handleClick}
                  className="px-8 text-xl font-medium active:scale-95 bg-gray-400 rounded-md py-2 "
                >
                  Yes
                </button>
                <button >
                  <Link to={'/dashboard'} className="px-8 text-xl font-medium active:scale-95 bg-gray-400 rounded-md py-2">No</Link>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserLogout;
