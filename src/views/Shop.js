import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import UserLeftPannel from "../component/userPannel/UserLeftPannel";

const Shop = () => {
  const [products, allProducts] = useState([]);

  const fetchData = async () => {
    try {
      const allData = await axios.get("http://localhost:3001/product");
      allProducts(allData.data.createdProduct);
      toast.success("welcome to WLC shop");
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mx-auto w-screen h-screen overflow-hidden bg-slate-200">
        <main className="flex md:flex-row lg:flex-row">
          <div className="w-72 rounded-md h-full">
            {" "}
            <UserLeftPannel />
          </div>
          <div className="flex flex-wrap h-screen gap-12 overflow-scroll scroll-smooth-no-scrollbar p-16">
            {products.map((product) => {
              return (
                <div
                  key={product._id}
                  className="max-w-sm rounded overflow-hidden shadow-lg"
                >
                  <div className="w-full h-36 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="px-6 py-2 bg-gray-300">
                    <div className="font-bold text-xl mb-2">{product.name}</div>
                    <p className="text-gray-700 text-base mb-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="px-6 py-2 bg-gray-300">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      {product.price}
                    </span>{" "}
                     
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>{" "}
        </main>
      </div>
    </div>
  );
};

export default Shop;
