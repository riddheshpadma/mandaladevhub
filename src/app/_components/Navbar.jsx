"use client"; // Ensure this runs on the client side

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 text-[#5D2340] z-50 bg-[#FDF2F8]">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/assets/BrandLogoMD.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        <li className="navItems">
          <Link href="/">Home</Link>
        </li>
        <li className="navItems">
          <Link href="/services">Services</Link>
        </li>
        <li className="navItems">
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className="navItems">
          <Link href="/aboutus">About Us</Link>
        </li>
        <li className="navItems">
          <Link href="/contact">Contact</Link>
        </li>
        <Link href="/getstarted">
          <li className="navItems bg-[#5F213F] text-white">
            <button>Get Quote</button>
          </li>
        </Link>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setNavbar(!navbar)}>
          {navbar ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-[#5f213f]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-primaryColor text-white shadow-lg transform transition-transform duration-300 ${
          navbar ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close Button */}
          <button className="self-end mb-6" onClick={() => setNavbar(false)}>
            <AiOutlineClose size={30} className="text-white" />
          </button>

          <ul className="space-y-6 text-lg">
            <li className="mobile-navigation-item">
              <Link href="/" onClick={() => setNavbar(false)}>
                Home
              </Link>
            </li>
            <li className="mobile-navigation-item">
              <Link href="/services" onClick={() => setNavbar(false)}>
                Services
              </Link>
            </li>
            <li className="mobile-navigation-item">
              <Link href="/blogs" onClick={() => setNavbar(false)}>
                Blogs
              </Link>
            </li>
            <li className="mobile-navigation-item">
              <Link href="/aboutus" onClick={() => setNavbar(false)}>
                About Us
              </Link>
            </li>
            <li className="mobile-navigation-item">
              <Link href="/contact" onClick={() => setNavbar(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
