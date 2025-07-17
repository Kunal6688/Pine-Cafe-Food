import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../components/StoreContext";

const PlaceOrder = () => {
  const navigate = useNavigate();

  const deliveryFee = 20;
  const { cartItems, food_list } = useContext(StoreContext);

  const totalPrice = food_list.reduce((sum, item) => {
    return cartItems[item.id] ? sum + item.price * cartItems[item.id] : sum;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 flex justify-center items-start">
      <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-6xl flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
            Delivery Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="First name" className="input-field w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
            <input type="text" placeholder="Last name" className="input-field w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="Email" placeholder="Email address" className="input-field w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
            <input type="text" placeholder="Street" className="input-field w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="City" className="input-field w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
            <input type="text" placeholder="State" className="input-field w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Zip-code" className="input-field w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
            <input type="text" placeholder="Country" className="input-field w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
          </div>

          <input
            type="text"
            placeholder="Phone number"
            className="input-field w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition mb-6"
          />

          
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Cart Totals */}
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-semibold">Card Totals</p>
            <div className="text-gray-400 flex justify-between">
              <p>Subtotal</p>
              <p>₹{totalPrice}</p>
            </div>
            <hr />
            <div className="text-gray-400 flex justify-between">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee}</p>
            </div>
            <hr />
            <div className="flex justify-between font-medium">
              <p>Total</p>
              <p>₹{totalPrice + deliveryFee}</p>
            </div>
            <button
              type="button"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition duration-200"
              onClick={() => navigate("/order")}
            >
              PROCEED TO PAYMENT
            </button>
          </div>

          {/* Promo Code */}
          <div className="flex flex-col gap-3">
            <p className="text-gray-400">If you have a promo code, enter it here</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                className="bg-gray-200 h-10 text-black p-2 text-sm w-full sm:flex-1 rounded border border-gray-300"
                placeholder="Promo code"
                type="text"
              />
              <button className="p-2 h-10 bg-black cursor-pointer text-white rounded sm:w-fit w-full">
                Apply
              </button>
            </form>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
