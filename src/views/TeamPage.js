import React from "react";
import Navbar from "../component/Navbar";
import Nayan from '../membersImg/Nayan.jpg'
import Akshat from '../membersImg/Akshat.jpg'
import Divyanshi from '../membersImg/Divyanshi.jpg'
import Arushi from '../membersImg/Arushi.jpg'
import Harsh from '../membersImg/Harsh.jpg'
import Raju from '../membersImg/Raju.jpg'

const TeamPage = () => {
  const members = [
    {
      name: "Nayan Brijpuria",
      imgSrc: `${Nayan}`,
      role: "Team Leader",
      department: "LNCTS CSE-AIML (B)",
      enrollment: "0157AL221139",
    },
    {
      name: "Arushi Panwalkar",
      imgSrc: `${Arushi}`,
      role: "Designer",
      department: "LNCTS CSE-AIML (A)",
      enrollment: "0157AL221050",
    },
    {
      name: "Divyanshi Verma",
      imgSrc: `${Divyanshi}`,
      role: "Designer",
      department: "LNCTS CSE-AIML (B)",
      enrollment: "0157AL221088",
    },
    {
      name: "Harsh Mishra",
      imgSrc: `${Harsh}`,
      role: "Researcher",
      department: "LNCTS CSE-AIML (B)",
      enrollment: "0157AL221093",
    },
    {
      name: "Akshat Rathore",
      imgSrc: `${Akshat}`,
            role: "Researcher",
      department: "LNCTS CSE-AIML (A)",
      enrollment: "0157AL221022",
    },
    {
      name: "Raju Prasad",
      imgSrc: `${Raju}`,
      role: "Developer",
      department: "LNCTS CSE-AIML (B)",
      enrollment: "0157AL221161",
    },
  ];

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div>
        <Navbar />
      </div>
      <div className="bg-slate-300">
        <div className="h-[8vh] mb-4">
          <h1 className="text-center text-4xl py-6 text-gray-600 font-bold">
            Team Members:
          </h1>
        </div>
        <section className="flex px-10 py-10 justify-between flex-wrap gap-4 w-[82vw] text-white">
          {members.map((member, index) => (
            <div
              key={index}
              className="card bg-[#1F2937] shadow-md rounded-lg overflow-hidden w-[30%] hover:scale-110 transition-all"
            >
              <div className="p-4 flex flex-col items-center justify-center">
        <div className="w-28 h-28 my-2 overflow-hidden bg-slate-300 rounded-full">
        <img src={member.imgSrc} alt="" className="w-full h-full object-cover"/>
        </div>
                <h2 className="text-xl font-bold">{member.name}</h2>
                <p className="font-semibold text-lg">{member.role}</p>
                <p>{member.enrollment}</p>
                <p>{member.department}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default TeamPage;
