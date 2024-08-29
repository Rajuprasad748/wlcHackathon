import React from "react";
import UserLeftPannel from "../component/userPannel/UserLeftPannel";
import { HiMiniUserCircle } from "react-icons/hi2";


const UserProfile = () => {
  return (
    <div>
      <div class="container mx-auto w-screen h-screen overflow-hidden">
        <main class="flex md:flex-row lg:flex-row">
          <div class="w-72 rounded-md h-full">
            {" "}
            <UserLeftPannel />
          </div>
          <div class="flex-1 bg-gray-300 p-4 rounded-md h-screen">
            <h1 className="text-4xl font-bold p-4">User Profile</h1>
            <div class="container py-8 flex gap-8 items-center">
              <div class="flex flex-col justify-center items-center mx-8 p-4">
              < HiMiniUserCircle
                  class="w-40 h-40 rounded-full mb-4"
                />
                 <label htmlFor="profileImg" className="cursor-pointer active:scale-95 text-white rounded-md p-2 bg-[#1F2937]">Update picture</label>
                <input type="file" name="profileImg" id="profileImg" className="hidden"/>
                </div>
                <div>
                <h2 class="text-3xl font-bold mb-2">John Doe</h2>
                <p class="text-lg mb-4">john.doe@example.com</p>
                <p class="text-lg mb-4">+1 (123) 456-7890</p>
                </div>
              </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
