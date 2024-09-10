import React from "react";
import UserLeftPannel from "../component/userPannel/UserLeftPannel";
import { HiMiniUserCircle } from "react-icons/hi2";

const UserProfile = () => {
  const value = JSON.parse(localStorage.getItem("authToken"));

  return (
    <div>
      <div className="container mx-auto w-screen h-screen overflow-hidden">
        <main className="flex md:flex-row lg:flex-row">
          <div className="w-72 rounded-md h-full">
            {" "}
            <UserLeftPannel />
          </div>
          <div className="flex-1 bg-gray-300 p-4 rounded-md h-screen">
           
            <div className="container py-8 flex gap-8 items-center">
              <div className="flex flex-col justify-center items-center mx-8 p-4">
                <HiMiniUserCircle className="w-40 h-40 rounded-full mb-4" />
                <label
                  htmlFor="profileImg"
                  className="cursor-pointer active:scale-95 text-white rounded-md p-2 bg-[#1F2937]"
                >
                  Update picture
                </label>
                <input
                  type="file"
                  name="profileImg"
                  id="profileImg"
                  className="hidden"
                />
              </div>
              <div>
              <h1 className="text-4xl mb-2">Username : {value.username}</h1>
                <h2 className="text-xl  mb-2">Email : {value.email}</h2>
                <p className="text-lg mb-2">Contact : {value.contact}</p>
                <p className="text-lg mb-4">Pet : {value.animal}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
