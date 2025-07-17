import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../StoreContext";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const {cartItems} = useContext(StoreContext);

const totalQuantity = Object.values(cartItems).reduce((sum, quantity) => sum + quantity, 0);



  return (
    <nav className="navbar font-outfit sticky top-0 w-full flex flex-wrap items-center justify-between px-6 py-4 md:px-10 bg-white shadow-md">


      {/* Logo Section */}
      <div className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl text-orange-500 font-bold">
        <img className="h-8 w-8 sm:h-10 sm:w-10" src={assets.logo} alt="logo" />
        <h1>PineCafe</h1>
      </div>

      {/* Menu Items - Hidden on Small Screens, Visible on Medium+ */}
      <ul className="hidden md:flex gap-5 text-lg md:text-xl">
        <Link
          to="/"
        
          onClick={() => setMenu("home")}
          className={`hover:text-orange-500 cursor-pointer border-b-2 border-transparent ${
            menu === "home" ? "border-b-orange-500" : ""
          }`}
        >
          Home
        </Link>
        <a href="#ExploreMenu"
          onClick={() => setMenu("menu")}
          className={`hover:text-orange-500 cursor-pointer border-b-2 border-transparent ${
            menu === "menu" ? "border-b-orange-500" : ""
          }`}
        >
          Menu
        </a>
        <a
          href="#MobileApp"
          onClick={() => setMenu("Mob-app")}
          className={`hover:text-orange-500 cursor-pointer border-b-2 border-transparent ${
            menu === "Mob-app" ? "border-b-orange-500" : ""
          }`}
        >
          Mob-App
        </a>
        <a
          href="#Footer"
          onClick={() => setMenu("Contact-us")}
          className={`hover:text-orange-500 cursor-pointer border-b-2 border-transparent ${
            menu === "Contact-us" ? "border-b-orange-500" : ""
          }`}
        >
          Contact Us
        </a>
      </ul>

      {/* Right Navigation Icons & Button */}
      <div className="flex items-center gap-4">
        <img
          className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer"
          src={assets.search}
          alt="search"
        />

        <div className="relative cursor-pointer">
          <Link to='/cart'><img
            className="h-8 w-8 sm:h-10 sm:w-10"
            src={assets.cart}
            alt="cart"
          /></Link>
          <div className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
            {totalQuantity}
          </div>
        </div>

        {/* Sign Up Button - Adjust size for small screens */}
        <button onClick={()=>{setShowLogin(true)}} className="hidden sm:block px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 cursor-pointer">
          Sign In
        </button>

        {/* Hamburger Menu - Visible on Small Screens */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer">
          <div className="w-6 h-1 bg-gray-600"></div>
          <div className="w-6 h-1 bg-gray-600"></div>
          <div className="w-6 h-1 bg-gray-600"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
