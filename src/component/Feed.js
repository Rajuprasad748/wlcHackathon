import React from "react";

const Feed = () => {
  const newses = [
    {
      id: 1,
      imageSrc: "https://images.unsplash.com/photo-1723754165998-305df32c501e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
      heading: "Beautiful Sunset",
      description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt, aliquam qui laboriosam eum debitis nostrum ratione tenetur eligendi totam cupiditate iusto. Velit obcaecati expedita placeat dolorem aspernatur minus commodi saepe ullam harum neque reiciendis vero tenetur officia illum animi doloribus nisi tempora, ut eius corrupti culpa at? Ipsam, qui! Earum distinctio fuga dolorem ipsum nulla, animi numquam libero debitis, iusto eum consequatur laborum, culpa mollitia corporis voluptatem corrupti quidem accusantium commodi voluptas quas nisi cupiditate reiciendis? Iure sequi, illum officiis excepturi veritatis officia inventore, fugiat quae aliquid omnis harum eius minima corrupti temporibus nisi magni deserunt, dignissimos obcaecati.',
    },
    {
      id: 2,
      imageSrc: "https://images.unsplash.com/photo-1724752286363-846076c705a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
      heading: "Cozy Cafe",
      description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt, aliquam qui laboriosam eum debitis nostrum ratione tenetur eligendi totam cupiditate iusto. Velit obcaecati expedita placeat dolorem aspernatur minus commodi saepe ullam harum neque reiciendis vero tenetur officia illum animi doloribus nisi tempora, ut eius corrupti culpa at? Ipsam, qui! Earum distinctio fuga dolorem ipsum nulla, animi numquam libero debitis, iusto eum consequatur laborum, culpa mollitia corporis voluptatem corrupti quidem accusantium commodi voluptas quas nisi cupiditate reiciendis? Iure sequi, illum officiis excepturi veritatis officia inventore, fugiat quae aliquid omnis harum eius minima corrupti temporibus nisi magni deserunt, dignissimos obcaecati.',
    },
    {
      id: 3,
      imageSrc: "https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
      heading: "Hiking Adventure",
      description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt, aliquam qui laboriosam eum debitis nostrum ratione tenetur eligendi totam cupiditate iusto. Velit obcaecati expedita placeat dolorem aspernatur minus commodi saepe ullam harum neque reiciendis vero tenetur officia illum animi doloribus nisi tempora, ut eius corrupti culpa at? Ipsam, qui! Earum distinctio fuga dolorem ipsum nulla, animi numquam libero debitis, iusto eum consequatur laborum, culpa mollitia corporis voluptatem corrupti quidem accusantium commodi voluptas quas nisi cupiditate reiciendis? Iure sequi, illum officiis excepturi veritatis officia inventore, fugiat quae aliquid omnis harum eius minima corrupti temporibus nisi magni deserunt, dignissimos obcaecati.',
    },
    {
      id: 4,
      imageSrc: "https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
      heading: "Beautiful Sunset",
      description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt, aliquam qui laboriosam eum debitis nostrum ratione tenetur eligendi totam cupiditate iusto. Velit obcaecati expedita placeat dolorem aspernatur minus commodi saepe ullam harum neque reiciendis vero tenetur officia illum animi doloribus nisi tempora, ut eius corrupti culpa at? Ipsam, qui! Earum distinctio fuga dolorem ipsum nulla, animi numquam libero debitis, iusto eum consequatur laborum, culpa mollitia corporis voluptatem corrupti quidem accusantium commodi voluptas quas nisi cupiditate reiciendis? Iure sequi, illum officiis excepturi veritatis officia inventore, fugiat quae aliquid omnis harum eius minima corrupti temporibus nisi magni deserunt, dignissimos obcaecati.',
    },
    {
      id: 5,
      imageSrc: "https://plus.unsplash.com/premium_photo-1721315652258-d390f957dc20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
      heading: "Cozy Cafe",
      description: "Relaxing with a good book.",
    },
    {
      id: 6,
      imageSrc: "https://images.unsplash.com/photo-1723743809756-d8576dc3fe59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D",
      heading: "Hiking Adventure",
      description: "Exploring the great outdoors.",
    },
  ];

  return (
    <div>
      <div class="relative w-full h-screen overflow-y-scroll flex flex-col gap-4">
          {newses.map((news) => (
              <div key={news.id}>
                <div className="bg-blue-400 text-white flex">
              <div className="overflow-hidden h-[40vh] w-[30vw]">
                <img
                  src={news.imageSrc}
                  alt={news.heading}
                  class="object-cover w-full h-full"
                />
              </div>
              <div class=" h-[40vh] w-full p-8">
                <h1 className="text-3xl font-semibold">{news.heading}</h1>
                <p>{news.description}</p>
              </div>
            </div>
          </div>
          ))}
        </div>
    </div>
  );
};

export default Feed;
