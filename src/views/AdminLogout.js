import React from "react";
import AdminPannel from "../component/adminPannel/AdminPannel";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const AdminLogout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    toast.success("Logged out successfully");
    navigate("/admin");
  };

  return (
    <>
      <>
        <div className="container mx-auto w-screen h-screen overflow-hidden">
          <main className="flex md:flex-row lg:flex-row">
            <div className="w-72 rounded-md h-full">
              {" "}
              <AdminPannel />
            </div>
            <div className="flex h-screen w-full justify-center items-center">
              <div className="bg-gray-800 p-8 rounded-xl flex justify-center items-center flex-col gap-4">
                <h1 className="text-4xl font-semobold my-4 text-gray-300 ">
                  Are you sure u want to logout...?
                </h1>
                <div className="flex gap-8">
                  <button
                    onClick={handleClick}
                    className="px-8 text-xl font-medium active:scale-95 bg-gray-400 rounded-md py-2 "
                  >
                    Yes
                  </button>
                  <button>
                    <Link
                      to={"/admin/dashboard"}
                      className="px-8 text-xl font-medium active:scale-95 bg-gray-400 rounded-md py-2"
                    >
                      No
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    </>
  );
};

export default AdminLogout;
