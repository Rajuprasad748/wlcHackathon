import React, { useState } from "react";
import Navbar from "../component/Navbar";
import toast from "react-hot-toast";
import axios from "axios";

const ContactUsPage = () => {
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/user/feedback",
        inputData
      );

      if (response) {
        toast.success("Thank You for your feedback!");
      }
    } catch (error) {
      toast.error("Error while submitting your feedback");
    }
  };
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div>
        <Navbar />
      </div>

      <section className="body-font relative flex items-center justify-center w-full bg-slate-300 h-full">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-2">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
              Contact Us
            </h1>
          </div>
          <form onSubmit={handleSubmit} method="post">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={inputData.username}
                      onChange={(e) =>
                        setInputData({ ...inputData, username: e.target.value })
                      }
                      className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out border-1 border-black"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={inputData.email}
                      onChange={(e) =>
                        setInputData({ ...inputData, email: e.target.value })
                      }
                      className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out border-1 border-black"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={inputData.message}
                      onChange={(e) =>
                        setInputData({ ...inputData, message: e.target.value })
                      }
                      className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out border-1 border-black"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-[#1F2937] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg active:scale-95">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
