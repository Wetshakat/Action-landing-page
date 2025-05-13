"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/Component/Carousel";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const MostPopular = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=6");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 md:px-16 lg:px-32 mt-10 py-10 gap-4">
        <h2
          data-aos="fade-left"
          className="text-xl sm:text-2xl md:text-3xl font-bold text-black"
        >
          Most Popular Action Figures This Week
        </h2>
        <p
          data-aos="fade-right"
          className="text-gray-500"
        >
          Explore the hottest action figures in the market today, all curated just for you.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="px-4 sm:px-6 md:px-16 lg:px-32 py-10">
        <Carousel className="w-full">
          <CarouselContent>
            {products.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-[85%] sm:basis-1/2 md:basis-1/3"
              >
                <div
                  data-aos="fade-up"
                  className="p-4 flex flex-col items-center"
                >
                  <div className="bg-gray-100 p-6 rounded-md w-full flex justify-center">
                    <img
                      src={item.image || "/images/default.png"}
                      alt={item.title || "Product Image"}
                      width={120}
                      height={120}
                      className="object-contain h-32"
                    />
                  </div>

                  <div className="w-full bg-white shadow-md py-6 px-5 mt-4 rounded-lg">
                    <h3 className="text-sm md:text-lg font-bold mb-2 text-black">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {item.description?.slice(0, 80)}...
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-between items-center mt-4">
            <CarouselPrevious className="relative left-4" />
            <CarouselNext className="relative right-4" />
          </div>
        </Carousel>
      </div>

      {/* Bottom Banner Image */}
      <img
        data-aos="fade-down"
        className="object-contain w-full px-4 sm:px-6 md:px-16 lg:px-32 mt-4 py-10"
        src="/images/frame.png"
        alt="Promotional Banner"
      />
    </div>
  );
};

export default MostPopular;
