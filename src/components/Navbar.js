// src/components/Navbar.jsx
import { useState } from "react";
import { Search, User,  ShoppingCart, Menu, X } from "lucide-react";
import logo from "../assets/logos/m-logo.jpg"; // ✅ import path
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#d2232a] text-white">
      {/* Top Offer Bar */}
      {/* <div className="bg-[#a9171e] text-center text-xs sm:text-sm py-2 px-2">
        Get EXTRA 10% OFF on{" "}
        <span className="underline font-semibold">
          WEBSITE EXCLUSIVE BESTSELLER MATTRESSES
        </span>{" "}
        on prepaid payments. Use code: <b>PREPAID10</b>
      </div> */}

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        {/* <h1 className="text-3xl font-extrabold">Ortho Sleepy</h1> */}
       {/* <h1 className="text-2xl font-extrabold tracking-wide">
  <span className="text-[#F47C20]">ORTHO</span>
  <span className="text-[#2A9A9F] ml-2">SLEEPY</span>
    <p className="text-sm text-gray-600 mt-1">Orthopedic Mattress</p>

</h1> */}
{/* <div className="bg-white text-center py-4 shadow-md">
  <h1 className="text-2xl font-extrabold tracking-wide">
    <span className="text-[#F47C20]">ORTHO</span>
    <span className="text-[#2A9A9F] ml-2">SLEEPY</span>
  </h1>
  <p className="text-sm text-gray-700 mt-0">Orthopedic Mattress</p>
</div> */}




        {/* <img src={logo} alt="Logo" className="h-[60px] w-auto mb-4" /> */}
         <div className="flex-shrink-0">
              <img
                src={logo}
                alt="ortho sleepy"
                style={{ width: "120px", height: "60px", objectPosition: "cover", borderRadius: "8px" }}
              />
          </div>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden md:flex items-center bg-[#b71c1c] rounded-full px-4 py-2 w-1/2">
          <input
            type="text"
            placeholder="Search Products"
            className="bg-transparent outline-none text-white flex-grow placeholder-white"
          />
          <Search size={20} className="text-white" />
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <User className="cursor-pointer" />
          {/* <div className="relative">
            <Heart className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-white text-[#d2232a] rounded-full text-xs font-bold px-1">
              0
            </span>
          </div> */}
          <div className="relative">
            <ShoppingCart className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-white text-[#d2232a] rounded-full text-xs font-bold px-1">
              0
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#b71c1c] text-white flex flex-col items-center py-4 space-y-3">
          <div className="flex items-center bg-[#a9171e] rounded-full px-3 py-2 w-11/12">
            <input
              type="text"
              placeholder="Search Products"
              className="bg-transparent outline-none text-white flex-grow placeholder-white"
            />
            <Search size={20} className="text-white" />
          </div>

          <div className="flex space-x-6">
            <User className="cursor-pointer" />
            {/* <Heart className="cursor-pointer" /> */}
            <ShoppingCart className="cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
}
