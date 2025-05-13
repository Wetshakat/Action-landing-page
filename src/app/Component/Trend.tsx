"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/app/Component/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/Component/Carousel";

const Trendinds = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <div>
      <div className="text-center mx-auto mt-10">
        <h2 className="text-xl sm:text-2xl mb-2 md:text-3xl text-black font-bold">
          Trending this Month 🔥
        </h2>
        <p className="text-gray-500">
          Discover what's hot from the Fake Store!
        </p>
      </div>

      <div className="px-4 sm:px-6 md:px-16 lg:px-32 mt-10 py-10">
        <Carousel className="w-full">
          <CarouselContent className="flex gap-4">
            {products.map((item, index) => (
              <CarouselItem
                key={index}
                className="w-[20%] min-w-[200px] max-w-[300px] flex-shrink-0"
              >
                <div className="bg-white rounded-xl shadow-md p-4 h-full flex flex-col justify-between">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[150px] object-contain mb-4"
                  />
                  <h3 className="text-sm  text-gray-900 font-semibold">{item.title}</h3>
                  <p className="text-xs text-gray-700 truncate">
                    {item.category}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <Button className="text-xs px-3 py-1">Pre-Order</Button>
                    <span className="text-sm  text-gray-700 font-bold">${item.price}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center mt-6 justify-between">
            <CarouselPrevious className="relative left-4" />
            <CarouselNext className="relative right-4" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Trendinds;
