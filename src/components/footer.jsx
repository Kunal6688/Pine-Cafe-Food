import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div id="Footer" className="footer flex flex-wrap justify-between p-10 sm:p-16 md:p-20 bg-neutral-800 text-amber-50">
      <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
        <div className="flex items-center justify-center md:justify-start gap-3 text-xl sm:text-2xl md:text-4xl text-orange-500 font-bold">
          <img
            className="h-8 w-8 sm:h-10 sm:w-10"
            src={assets.logo}
            alt="logo"
          />
          <h1>PineCafe</h1>
        </div>
        <p className="mt-2 text-sm sm:text-base">
          Welcome to Pine Café, where every sip feels like home. Indulge in
          handcrafted brews, delicious bites, and a cozy ambiance designed for
          moments of joy. Whether you're here to work, relax, or catch up with
          friends, we’ve got the perfect spot for you. Come for the coffee, stay
          for the warmth!
        </p>
      </div>

      {/* Company Links */}
      <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-lg sm:text-xl font-semibold mb-2">COMPANY</h1>
        <ul className="flex flex-col gap-2 cursor-pointer text-sm sm:text-base">
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="w-full md:w-1/4 text-center md:text-left">
        <h1 className="text-lg sm:text-xl font-semibold mb-2">GET IN TOUCH</h1>
        <ul className="flex flex-col gap-2 cursor-pointer text-sm sm:text-base">
          <li>+91 7851464562</li>
          <li>contact@pinecafe.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
