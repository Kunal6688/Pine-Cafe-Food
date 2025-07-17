import React from "react";

const Header = () => {
  return (
    <div className="header bg-[url('/header.jpg')] bg-cover bg-center rounded-4xl m-6 sm:m-10 md:m-16 lg:m-20 flex flex-col items-start text-white px-4 py-12 sm:px-8 md:px-16 lg:py-20">
      <h2 className="text-3xl sm:text-4xl md:text-6xl w-full sm:w-2/3 md:w-1/2">
        Order your favourite food here!
      </h2>
      <p className="hidden sm:block text-lg md:text-2xl mt-4 w-full sm:w-3/4 md:w-2/3 mb-6">

        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <a href="#ExploreMenu">
      <button className=" cursor-pointer bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg">
        View Menu
      </button>
      </a>
    </div>
  );
};

export default Header;
