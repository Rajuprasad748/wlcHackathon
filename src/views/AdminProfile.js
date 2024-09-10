import React from 'react'
import AdminPannel from '../component/adminPannel/AdminPannel';

const AdminProfile = () => {
  return (
    <>
    <div className="container mx-auto w-screen h-screen overflow-hidden">
      <main className="flex md:flex-row lg:flex-row">
        <div className="w-72 rounded-md h-full">
          {" "}
          <AdminPannel />
        </div>
        <div className="flex flex-col bg-slate-300 rounded-md w-full h-screen p-8 gap-8"> 
          <h1 className='text-5xl font-bold'>Admin</h1>
          <h2 className='text-3xl font-semibold'>wlcadmin@gmail.com</h2>
          <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel nostrum iure maiores cumque numquam nesciunt, minus error doloribus quae facere repudiandae dignissimos ullam officia hic dolorem saepe pariatur libero ut laudantium nobis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, sit quaerat delectus corporis itaque nemo velit ex. Nihil, eveniet. Eligendi voluptatum accusantium nihil molestias excepturi eveniet minima, nisi incidunt unde at veritatis quidem, ab cum quam quia provident assumenda? Rerum ut amet, architecto officiis porro facilis nihil sint vero odit ea quia deserunt enim animi similique error a iure, vel ipsa dolores, voluptatem nisi placeat? Fuga?</p>
        </div>
      </main>
    </div>
  </>
  )
}

export default AdminProfile
