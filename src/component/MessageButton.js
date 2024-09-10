import React from "react";

const MessageButton = () => {
  return (
    <div className="inputBox flex gap-4 px-8 my-2">
      <input
        type="text"
        name="chatMessage"
        id="chatMessage"
        placeholder="Write a message..."
        className="w-full px-4 py-2 border-1 border-solid border-white bg-slate-800 rounded-md text-white"
      />
      <button className="bg-slate-800 rounded-md text-white px-6 cursor-pointer py-1 active:scale-95">
        Send
      </button>
    </div>
  );
};

export default MessageButton;
