import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../components/StoreContext";
import left from "../../assets/left.png";

const Cart = () => {
  const navigate = useNavigate();
  const deliveryFee = 20;
  const { cartItems, food_list, setCartItems, removeFromCart } =
    useContext(StoreContext);

  // Function to increase item quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // Function to decrease item quantity
  const decreaseQuantity = (id) => {
    if (cartItems[id] > 1) {
      setCartItems((prev) => ({
        ...prev,
        [id]: prev[id] - 1,
      }));
    } else {
      removeFromCart(id); // Remove item if quantity reaches 0
    }
  };

  // Calculate Total Price
  const totalPrice = food_list.reduce((sum, item) => {
    return cartItems[item.id] ? sum + item.price * cartItems[item.id] : sum;
  }, 0);

  return (
    <div className="p-4 sm:p-2">
      {/* Back Button */}
      <div
        className="flex items-center text-xl gap-2 mb-4 cursor-pointer"
        onClick={() => window.history.back()}
      >
        <img className="w-5 h-5" src={left} alt="" />
        <p>Back to menu</p>
      </div>

      {/* Cart Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-5 overflow-x-auto">
        {/* Table Headers */}
        <div className="grid grid-cols-6 sm:grid-cols-3 text-center font-semibold border-b pb-2 text-sm md:text-base">
          <p>Item</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr className="my-2" />

        {/* Cart Items */}
        {food_list.map((item, index) => {
          if (cartItems[item.id]) {
            return (
              <div
                key={index}
                className="grid grid-cols-6 sm:grid-cols-3 items-center text-center py-3 border-b last:border-none text-sm md:text-base"
              >
                {/* Item Image */}
                <img
                  className="w-14 md:w-16 h-14 md:h-16 object-cover mx-auto rounded-md"
                  src={item.image}
                  alt={item.name}
                />

                {/* Item Details */}
                <p className="font-medium">{item.name}</p>
                <p className="text-green-600 font-semibold">₹{item.price}</p>

                {/* Quantity Controls */}
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="cursor-pointer px-1 sm:px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <p>{cartItems[item.id]}</p>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="cursor-pointer px-1 sm:px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>

                {/* Total Price */}
                <p className="text-blue-600 font-semibold">
                  ₹{(item.price * cartItems[item.id]).toFixed(2)}
                </p>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="cursor-pointer text-red-500 hover:text-red-700 transition-colors"
                >
                  Remove
                </button>
              </div>
            );
          }
        })}

        {/* Cart Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 py-10 px-4">
  {/* Left Section */}
  <div className="flex flex-col gap-3 w-full md:w-1/2">
    <p className="text-2xl font-semibold">Card Totals</p>
    <div className="text-gray-400 flex justify-between">
      <p>Subtotal</p>
      <p>₹
      {totalPrice}</p>
    </div>
    <hr />
    <div className="text-gray-400 flex justify-between">
      <p>Delivery Fee</p>
      <p>₹
      {deliveryFee}</p>
    </div>
    <hr />
    <div className="flex justify-between font-medium">
      <p>Total</p>
      <p>₹
      {totalPrice + deliveryFee}</p>
    </div>
    <button className="cursor-pointer text-sm bg-orange-400 w-full sm:w-1/2 text-white p-2 rounded" onClick={()=>navigate('/order')}>
      PROCEED TO CHECKOUT
    </button>
  </div>

  {/* Right Section */}
  <div className="flex flex-col gap-3 w-full md:w-1/3">
    <p className="text-gray-400">If you have a promo code, enter it here</p>
    <form className="flex gap-2 flex-col sm:flex-row" >
      <input
        className="bg-gray-200 h-10 text-black p-2 text-sm w-full sm:w-auto flex-1"
        placeholder="Promo code"
        type="text"
      />
      <button className="p-2 h-10 bg-black cursor-pointer text-white rounded sm:min-w-fit">
        Apply
      </button>
    </form>
  </div>
</div>

      </div>
    </div>
  );
};

export default Cart;
