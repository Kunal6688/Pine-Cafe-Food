import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{

    const[cartItems,setCartItems] = useState({});

    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prevItems) => ({
                ...prevItems,
                [itemId]: 1 // Initialize with a count of 1
            }));
        }
        else{
            setCartItems((prevItems) => ({
                ...prevItems,
                [itemId]: prevItems[itemId] + 1 // Increment the count
            }));
        }
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prevItems)=>({prevItems, [itemId]: prevItems[itemId] - 1}));
    }


    useEffect(() => { 
        console.log("Cart items updated:", cartItems);},[cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart

        // Define any state or functions you want to provide to the context
    };


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;