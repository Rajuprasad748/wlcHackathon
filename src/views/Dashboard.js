import React, { useEffect, useState } from "react";
import UserLeftPannel from "../component/userPannel/UserLeftPannel";
import Feed from "../component/Feed";
import axios from "axios";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [newses, allNewses] = useState([]);

  const fetchData = async () => {
    try {
      const allData = await axios.get("http://localhost:3001/dashboard");
      allNewses(allData.data.newses);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto w-screen h-screen overflow-hidden">
        <main className="flex md:flex-row lg:flex-row">
          <div className="w-72 rounded-md h-full">
            {" "}
            <UserLeftPannel />
          </div>
          <div className="flex-1 bg-slate-300 rounded-md h-full">
            <Feed newses={newses} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
