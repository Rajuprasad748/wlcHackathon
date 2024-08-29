import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Leftpannel = () => {
  const pannelIcones = [
    {
      name: "Home",
      icon: <IoHome />,
      path: "/dashboard",
    },
    {
      name: "QNA",
      icon: <BsFillPatchQuestionFill />,
      path: "/user/analysis",
    },
    {
      name: "Chat",
      icon: <BiMessageSquareDetail />,
      path: "/User/Chat",
    },
    {
      name: "Profile",
      icon: <CgProfile />,
      path: "/user/profile",
    },
    {
      name: "Logout",
      icon: <RiLogoutCircleLine />,
      path: "/",
    },
  ];

  return (
    <>
      <div className="bg-gray-800 text-white h-screen w-72 p-8">
        <div>
          <h1 className="text-6xl font-bold m-4">WLC</h1>
        </div>
        <nav>
          <ul className="space-y-4 my-20 flex flex-col justify-center gap-2">
            {pannelIcones.map((item, index) => (
              <li key={index} className="rounded-lg hover:bg-slate-400">
                <Link
                  to={item.path}
                  className="p-4 flex items-center gap-4 text-2xl"
                >
                  {item.icon}
                  <span className="text-xl">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Leftpannel;
