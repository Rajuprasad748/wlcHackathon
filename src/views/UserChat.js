import React from 'react'
import UserLeftPannel from "../component/userPannel/UserLeftPannel";

const UserChat = () => {
  return (
    <div>
        <div class="container mx-auto w-screen h-screen overflow-hidden">
        <main class="flex md:flex-row lg:flex-row">
          <div class="w-72 rounded-md h-full">
            {" "}
            <UserLeftPannel />
          </div>
          <div class="flex-1 bg-gray-300 p-4 rounded-md h-screen">
            <h1 className="text-4xl font-bold p-4">Chat</h1>
           
          </div>
        </main>
      </div>
    </div>
  )
}

export default UserChat
