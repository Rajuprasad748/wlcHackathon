import React from "react";
import UserLeftPannel from '../component/userPannel/UserLeftPannel'
import Feed from "../component/Feed";

const Dashboard = () => {
  return (
    <>
      <div class="container mx-auto w-screen h-screen overflow-hidden">
        <main class="flex md:flex-row lg:flex-row">
          <div class="w-72 rounded-md h-full">
            {" "}
            <UserLeftPannel />
          </div>
          <div class="flex-1 bg-gray-100 p-4 rounded-md h-full"> 
            <Feed />
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
