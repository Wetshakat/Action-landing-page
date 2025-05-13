import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MessageCircleIcon } from "lucide-react"


const Footer = () => {

  const sounds = ["Faq", "Feedback"];
  const terms = ["Privacy Policy"]
  const visits = ["Jl. jendral sudirman 3 blok 4 no 34, Laweyan, laweyan, kota surakarta. phone: (0271)2222123"]
  return (
    <div className='bg-[#222222] w-full'>
         <div className=' px-6 md:px-32 gap-8 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
         <div className="flex flex-col gap-4">
          <span className='text-xl cursor-pointer font-bold text-white'>
            Yuu<span className="text-[#fc5b37]">Jou.</span>
            </span>
          <p className='text-white'>
            Make you fantasy come true</p>

        <div className='flex items-center gap-2'>
      <FaFacebook 
      className='text-white text-2xl'/>
      <FaInstagram 
      className='text-white text-2xl'/>
      <MessageCircleIcon 
      className='text-white text-2xl'/>
        </div>

    
        </div>
        <ul
        className='text-white flex flex-col gap-4'
        >
          <h1
          className='text-lg font-medium'
          >Sound your idea</h1>
          {sounds.map((item, index) => (
            <li

            key={index}
            className="relative text-white cursor-pointer transition-all duration-300 ease-in-out 
             hover:text-[#fc5b37] 
             before:content-[''] before:absolute before:bottom-0 before:left-0 
             before:w-0 before:h-[2px] before:bg-[#fc5b37] 
             before:transition-all before:duration-300 
             hover:before:w-16"
            >
              {item}
            </li>
          ))}
        </ul>
        <ul
        className='text-white flex flex-col gap-4'
        >
          <h1
          className='text-lg font-medium'
          >
          Terms and services
          </h1>
          {terms.map((item, index) => (
              <li

              key={index}
              className="relative text-white cursor-pointer transition-all duration-300 ease-in-out 
               hover:text-[#fc5b37] 
               before:content-[''] before:absolute before:bottom-0 before:left-0 
               before:w-0 before:h-[2px] before:bg-[#fc5b37] 
               before:transition-all before:duration-300 
               hover:before:w-16"
              >
                {item}
              </li>
          ))}
        </ul>
        <ul
        className='text-white flex flex-col gap-4'
        >
          <h1
          className='text-lg font-medium'
          >
    Visit Yuujou
          </h1>
          {visits.map((item, index) => (
            <li
            key={index}
            className='text-sm '
            >
              {item}
            </li>
          ))}
        </ul>
         </div>

    </div>
  )
}

export default Footer
