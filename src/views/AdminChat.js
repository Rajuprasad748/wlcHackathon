import React from 'react'
import AdminPannel from '../component/adminPannel/AdminPannel';
import { CgProfile } from "react-icons/cg";
import MessageButton from '../component/MessageButton';

const AdminChat = () => {
  return (
    <>
      <div className="container mx-auto w-screen h-screen overflow-hidden">
        <main className="flex md:flex-row lg:flex-row">
          <div className="w-72 rounded-md h-full">
            {" "}
            <AdminPannel />
          </div>
          <div className="flex-1 bg-slate-300 rounded-md h-screen overflow-hidden py-16 px-32"> 
            <div className="chatbox min-h-[70vh] w-full border-2 border-solid border-black rounded-md">
            <div className='flex items-center bg-slate-800 text-white py-2 rounded-t-md'>
              <h1 className="font-semibold text-2xl px-10 flex gap-4 items-center">
              <span><CgProfile /></span> username
              </h1>
            </div>
            </div>
            <div>
              <MessageButton />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default AdminChat
