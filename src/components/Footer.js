import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/logos/m-logo.jpg"; // ✅ import path

const Footer = () => {
  return (
    <footer className="relative bg-red-500 text-white pt-12 pb-6">
      {/* Main Footer */}
      <div className="grid sm:grid-cols-2  max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
                  <div className="flex items-center justify-center space-x-2 mb-4">

        <div className="text-center">
            <img
              src={logo}
              alt="Logo"
              className="h-14 lg:w-40 mb-4"
            />

            <p className="text-gray-300 flex justify-start">
              Our Promise: <br />
             We started our journey with a mission to deliver quality and innovation..
            </p>
          </div>
        </div>

        {/* Featured Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 uppercase">
            Featured Links
          </h3>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-0.5 bg-red-800"></div>
            <div className="w-2 h-2 bg-red-800 rounded-full"></div>
            <div className="w-10 h-0.5 bg-red-800"></div>
          </div>

          <ul className="space-y-2 justify-start">
            <li>
              <a href="#home" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#how-we-work" className="hover:text-blue-400">
                How We Work
              </a>
            </li>
            <li>
              <a href="#packages" className="hover:text-blue-400">
                Packages
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400">
                Our Projects
              </a>
            </li>
            <li>
              <a href="#proprietor" className="hover:text-blue-400">
                Proprietor Message
              </a>
            </li>
          </ul>
        </div>

        {/* Let's Connect */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 uppercase">
            LET&apos;S CONNECT
          </h3>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-0.5 bg-red-800"></div>
            <div className="w-2 h-2 bg-red-800 rounded-full"></div>
            <div className="w-10 h-0.5 bg-red-800"></div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-3 hover:text-grey-400 transition"
            >
              <div className="bg-light-600 hover:bg-grey-500 text-black p-3 rounded-full">
                <FaFacebookF />
              </div>
              <span>Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-3 hover:text-grey-400 transition"
            >
              <div className="bg-grey-600 hover:bg-grey-500 text-black p-3 rounded-full">
                <FaInstagram />
              </div>
              <span>Instagram</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-3 hover:text-grey-400 transition mr-6"
            >
              <div className="bg-grey-600 hover:bg-grey-500 text-black p-3 rounded-full">
                <FaTwitter />
              </div>
              <span>Twitter</span>
            </a>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 uppercase">GET IN TOUCH</h3>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-0.5 bg-red-800"></div>
            <div className="w-2 h-2 bg-red-800 rounded-full"></div>
            <div className="w-10 h-0.5 bg-red-800"></div>
          </div>

          <div className="space-y-3 text-gray-300">
            <p>
              <FaMapMarkerAlt className="inline mr-2 text-blue-400" />
              Address: 1-floor No.899/3, <br />
              M.E.S Road, muthyala nagar,
              <br />
              Bangalore 560054.
            </p>

            {/* <p>
              <FaPhone className="inline mr-2 text-yellow-400" />
              6362-901-902
            </p> */}
            {/* <p>
              <FaEnvelope className="inline mr-2 text-yellow-400" />
              info@goldenhomesconstructions.com
            </p> */}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-8 pt-4 px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© All Rights Reserved, Ortho Sleep</p>
        <p className="text-blue-400">Designed by Webnsoftware</p>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+918886667150"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </footer>
  );
};

export default Footer;
