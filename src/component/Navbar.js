import React from "react";
import { IoHome } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { IoMdLogIn } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      icon: <IoHome />,
      path: "/",
    },
    {
      name: "Members",
      icon: <GrGroup />,
      path: "/members",
    },
    {
      name: "Admin",
      icon: <FaUserDoctor />,
      path: "/admin",
    },
    {
      name: "Signup",
      icon: <FaUser />,
      path: "/signup",
    },
    {
      name: "Login",
      icon: <IoMdLogIn />,
      path: "/login",
    },
    {
      name: "Contact Us",
      icon: <TfiEmail />,
      path: "/contactUs",
    },
  ];

  return (
    <>
      <div className="flex">
        <div className="bg-gray-800 text-white h-screen w-72 p-8 text-tighter">
          <div>
            <h1 className="text-6xl font-bold m-4">WLC</h1>
          </div>
          <nav>
            <ul className="space-y-4 my-20 flex flex-col justify-center gap-2 font-semibold">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-400 text-2xl"
                  >
                    {item.icon}
                    <span className="text-xl">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
