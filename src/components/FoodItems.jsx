import React, { useContext, useState } from "react";
import { StoreContext } from "./StoreContext.jsx";

const FoodItems = ({ id, name, price, description, image, rating }) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className="w-64  rounded-xl  m-4 flex flex-col  shadow-lg hover:shadow-xl transition-shadow duration-300 ">
      <div className="">
        <img
          className="w-64 h-52 object-cover rounded-t-xl"
          src={image}
          alt={name}
        />
      </div>
      <div >
        {!cartItems[id] ? (
          <button  onClick={()=>addToCart(id)} className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white  mt-2 ml-2 flex  items-start px-4 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            Grab & Go
          </button>
        ) : (
          <div className="flex gap-2 mt-2 ml-2">
            <button
              className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white px-2 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              onClick={() =>removeFromCart(id)}
            >
              -
            </button>
            <span className="text-lg font-semibold">{cartItems[id]}</span>
            <button
              className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white px-2 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              onClick={() =>addToCart(id)}
            >
              +
            </button>
          </div>
        )}
      </div>
      <div className="p-2">
        <p>{name}</p>
        <p className="text-orange-500">{"⭐".repeat(Math.round(rating))}</p>
        <p className="text-sm">{description}</p>
        <p className="text-orange-500 font-bold">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItems;
