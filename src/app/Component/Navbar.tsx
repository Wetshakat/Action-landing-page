"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Button } from "@/app/Component/Button"; 
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navBarLinks = [
    { title: "Home", href: "/" },
    { title: "Shop", href: "/shop" },
    { title: "Pre-Orders", href: "/preorders" },
    { title: "Cart", href: "/cart" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-white px-6 md:px-32 py-4 sticky top-0 left-0 z-50 shadow-sm">
      <div className="flex justify-between items-center mx-auto">
        <Link href="/">
          <div className="text-3xl cursor-pointer font-bold text-black">
            Yuu<span className="text-[#fc5b37]">Jou.</span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-6 text-lg font-bold">
          {navBarLinks.map((link, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                pathname === link.href
                  ? "text-[#fc5b37] border-b-2 border-[#fc5b37]"
                  : "text-gray-500 hover:text-[#fc5b37]"
              } transition-all duration-200`}
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4 text-gray-500 text-lg font-bold">
          <span className="text-gray-600">Sign in</span>
          <Button variant="default" size="sm">
            Register
          </Button>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col gap-4 text-lg font-bold">
            {navBarLinks.map((link, index) => (
              <li
                key={index}
                className={`text-gray-500 ${
                  pathname === link.href ? "text-[#fc5b37]" : ""
                } hover:text-[#fc5b37] transition-all`}
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-2">
            <span className="text-gray-600">Sign in</span>
            <Button className="bg-[#fc5b37] text-white" size="sm">
              Register
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
