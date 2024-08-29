import React from "react";
import Navbar from "../component/Navbar";

const TeamPage = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div>
        <Navbar />
      </div>
      <div className="bg-slate-300">
        <div className="h-[8vh]">
          <h1 className="text-center text-4xl py-4 text-gray-600 font-semibold">Meet Our Team</h1>
        </div>
      <section className="w-full flex px-40 py-16 justify-between flex-wrap gap-4">
          <div className="card text-slate-300 bg-[#1F2937] shadow-md rounded-lg overflow-hidden w-1/3">
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">John Doe</h2>
              <p >Enrollment: 20230123</p>
              <p >Role: Student</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
              </p>
            </div>
          </div>
          <div className="card bg-gray-400 text-white shadow-md rounded-lg overflow-hidden w-1/3">
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">John Doe</h2>
              <p className="text-gray-500">Enrollment: 20230123</p>
              <p className="text-gray-500">Role: Student</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
          </div>
          <div className="card bg-gray-400 shadow-md rounded-lg overflow-hidden w-1/3">
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">John Doe</h2>
              <p className="text-gray-500">Enrollment: 20230123</p>
              <p className="text-gray-500">Role: Student</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
          </div>
          <div className="card bg-gray-400 shadow-md rounded-lg overflow-hidden w-1/3">
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">John Doe</h2>
              <p className="text-gray-500">Enrollment: 20230123</p>
              <p className="text-gray-500">Role: Student</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TeamPage;
