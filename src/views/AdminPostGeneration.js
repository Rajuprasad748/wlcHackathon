import React from "react";
import AdminPannel from "../component/adminPannel/AdminPannel";
const AdminPostGeneration = () => {
  return (
    <>
      <div className="container mx-auto w-screen h-screen overflow-hidden">
        <main className="flex md:flex-row lg:flex-row">
          <div className="w-72 rounded-md h-full">
            {" "}
            <AdminPannel />
          </div>
          <div className="flex bg-slate-300 rounded-md h-screen w-full items-center justify-center">
            
            <div className="w-96 p-10 bg-slate-100 px-16">
            <h1 className="font-semibold text-2xl text-center my-4">Add a post</h1>
            <form className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="image" className="mr-4">
                  Image:
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="border p-2"
                />
              </div>

              <div>
                <label htmlFor="heading" className="block mb-2">
                  Heading:
                </label>
                <input
                  type="text"
                  id="heading"
                  name="heading"
                  className="border border-1 border-black w-full p-2"
                />
              </div>

              <div>
                <label htmlFor="description" className="block mb-2">
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full p-2 h-24 resize-none border border-1 border-black"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit Post
              </button>
            </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminPostGeneration;
