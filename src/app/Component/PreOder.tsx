"use client";

import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/app/Component/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/Component/Carousel";

const PreOrders = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPreOrders = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=10");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching pre-order products:", error);
      }
    };

    fetchPreOrders();
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-32 mt-16 py-10">
      <Carousel className="w-full">
        <CarouselContent>
          {products.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <div data-aos="fade-right" className="p-4 text-gray-800 flex flex-col items-center">
                <div className="bg-gray-50 p-6 rounded-md w-full flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={100}
                    className="mb-4 object-contain h-32"
                  />
                </div>

                <div className="w-full bg-white shadow-md py-6 px-5 mt-4 rounded-lg text-center">
                  <div className="flex items-center justify-between text-sm sm:text-base font-bold mb-2">
                    <h3 className="truncate max-w-[120px]">{item.title}</h3>
                    <p>${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex justify-center gap-1 my-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        size={18}
                        key={i}
                        className="text-amber-300 fill-amber-300"
                      />
                    ))}
                  </div>

                  <Button data-aos="zoom-in" className="w-full mt-3">
                    Pre-Order
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center mt-4 justify-between">
          <CarouselPrevious className="relative left-16" />
          <CarouselNext className="relative right-16" />
        </div>
      </Carousel>
    </div>
  );
};

export default PreOrders;
