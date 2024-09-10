import React from "react";
import UserLeftPannel from "../component/userPannel/UserLeftPannel";
import MessageButton from "../component/MessageButton";
import { CgProfile } from "react-icons/cg";

const UserChat = () => {

  return (
    <div>
      <div className="container mx-auto w-screen h-screen overflow-hidden">
        <main className="flex md:flex-row lg:flex-row">
          <div className="w-72 rounded-md h-full">
            {" "}
            <UserLeftPannel />
          </div>
          <div className="flex-1 bg-slate-300 rounded-md h-screen overflow-hidden py-16 px-32">
            <div className="chatbox min-h-[70vh] w-full border-2 border-solid border-black rounded-md">
              <div className="flex items-center bg-slate-800 text-white py-2 rounded-t-md">
                <h1 className="font-semibold text-2xl px-10 flex gap-4 items-center">
                  <span>
                    <CgProfile />
                  </span>{" "}
                  Admin
                </h1>
              </div>
            </div>
            <div>
              <MessageButton />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserChat;
