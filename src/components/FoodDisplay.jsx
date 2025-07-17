import React, { useContext } from "react";
import FoodItems from "./FoodItems";
import { StoreContext } from "./StoreContext.jsx";

const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20">
      <hr className="border-t-3 border-gray-300" />
      <div className="pt-5">
        <h2 className="text-2xl sm:text-4xl  mb-5 text-start">Top dishes near you</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
{food_list.map((item, index) => {
  if (category === "All" || category === item.category) {
    return (
      <FoodItems
        key={index}
        id={item.id}
        name={item.name}
        price={item.price}
        description={item.description}
        image={item.image}
        rating={item.rating}
      />
    );
  }
  return null;
})}
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
