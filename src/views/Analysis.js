import React from 'react'
import UserLeftPannel from "../component/userPannel/UserLeftPannel";

const Analysis = () => {
  return (
    <div>
      <div class="container mx-auto w-screen h-screen overflow-hidden">
        <main class="flex md:flex-row lg:flex-row">
          <div class="w-72 rounded-md h-full">
            {" "}
            <UserLeftPannel />
          </div>
          <div>
            <h1>Qna</h1>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Analysis
