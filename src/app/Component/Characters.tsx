"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/Component/Carousel";

const CharacterSections = () => {
  const characterLinks = [
    "All Products",
    "PVC Scale Figure",
    "Nendoroids",
    "In-stock Figures",
    "Pre-Order Figures",
    "Rare Items",
  ];

  return (
    <div className="px-4 md:px-32 mx-auto h-full">
      <section className="flex flex-col-reverse md:flex-row px-6 md:px-10 rounded-xl justify-between gap-8 py-16 bg-gradient-to-b from-[#a1d5ef] to-gray-200">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-sans md:text-6xl text-black font-bold leading-tight mb-8">
            <span>Buy your favorite</span>
            <br />
            <span>character action</span>
            <br />
            <span>figures here</span>
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Search for action figures"
              className="px-5 py-3 bg-white w-full sm:w-[300px] rounded-md shadow-md focus:outline-none"
            />
            <button className="bg-[#fc5b37] px-6 py-3 text-white rounded-md font-semibold shadow-md">
              Search
            </button>
          </div>

          <p className="text-gray-600 max-w-sm text-sm md:text-base">
            The most complete action figures. More than 1000 collectible action
            figures ready to collect.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/images/Screenshot_from_2025-05-10_00-11-11-removebg-preview.png"
            alt="Anime Characters"
            width={400}
            className="relative md:bottom-10 object-contain"
          />
        </div>
      </section>

      <div className="mt-10">
        <Carousel className="w-full">
          <CarouselContent>
            {characterLinks.map((item, index) => (
              <CarouselItem
              data-aos="fade-left"
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="bg-white border-r-2 border-gray-500 text-center text-gray-500 font-medium text-sm md:text-base">
                  {item}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center mt-10 justify-between">
               <CarouselPrevious className="relative left-16" />
       
               <CarouselNext className="relative right-16"/>
               </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CharacterSections;
