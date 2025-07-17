import React from "react";
import { menuList } from "../assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div id="ExploreMenu" className="m-6 sm:m-10 md:m-16 lg:m-20">
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl text-start">Explore our menu</h1>
      <p className="mt-3 mb-3 w-full sm:w-3/4 md:w-1/2 text-lg sm:text-xl text-start">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>

      {/* Scrollable Menu List */}
      <div className="menu-container cursor-pointer flex overflow-x-auto whitespace-nowrap gap-6 p-4 scroll-smooth">
        {menuList.map((item, index) => (
          <div onClick={()=>setCategory((prev)=>prev==item.name?"All":item.name)} key={index} className="menu-item flex flex-col items-center w-40 shrink-0">
            <img src={item.image} alt={item.name} className="rounded-full w-28 h-28 sm:w-32 sm:h-32 object-cover" />
            <h2 className={`text-center mt-2 text-lg sm:text-xl ${category==item.name?"text-orange-500":""}`}>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
