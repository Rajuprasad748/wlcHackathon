import React  from "react";


const Feed = ({newses}) => {

  return (
    <div>
      <h1 className="text-4xl font-bold p-4 border-l-4 border-solid border-l-black mx-2 my-4">Latest Updates...</h1>
      <div className="relative w-[80vw] h-screen overflow-y-scroll flex flex-wrap gap-4 scroll-smooth-no-scrollbar pb-20">

        {newses ? newses.map((news) => (
          <div key={news._id} className="text-gray-800 w-[24%] h-[50vh] p-4">
            <div className="flex flex-col" >
              <div className="overflow-hidden w-full h-[25vh]">
                <img
                  src={news.imageSrc}
                  alt={news.heading}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 bg-gray-200">
                <h1 className="text-3xl font-semibold my-2 tracking-tight">{news.heading}</h1>
                <p>{news.description}<span className="cursor-pointer text-black font-medium">.....Read more</span></p>
              </div>
            </div>
          </div>
        )) : '' }
      </div>
    </div>
  );
};

export default Feed;
