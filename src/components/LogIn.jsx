import React, { useState } from "react";
import close from "../assets/close.png";

const LogIn = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 px-4">
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h1 className=" text-black  text-xl font-bold py-1 px-3 rounded-md">{currentState}</h1>
          <img
            className="w-6 h-6 cursor-pointer transition-transform hover:scale-110"
            onClick={() => setShowLogin(false)}
            src={close}
            alt="close"
          />
        </div>

        {/* Input Fields */}
        <div className="mt-4 flex flex-col gap-3">
          {currentState === "Sign Up" && (
            <input className="p-2 border rounded-md focus:ring-2 focus:ring-orange-500" type="text" placeholder="Your Name" required />
          )}
          <input className="p-2 border rounded-md focus:ring-2 focus:ring-orange-500" type="email" placeholder="Your Email" required />
          <input className="p-2 border rounded-md focus:ring-2 focus:ring-orange-500" type="password" placeholder="Password" required />
        </div>

        {/* Submit Button */}
        <button className="mt-4 bg-orange-500 text-white p-2 rounded-md font-semibold hover:bg-orange-600 transition">
          {currentState === "Sign Up" ? "Create Account" : "Log In"}
        </button>

        {/* Terms Checkbox */}
        <div className="mt-3 flex items-center gap-2">
          <input type="checkbox" required className="accent-orange-500" />
          <p className="text-sm">Accept terms & conditions</p>
        </div>

        {/* Toggle Links */}
        <p className="mt-3 text-sm text-gray-600">
          {currentState === "Log In" ? (
            <>Create a new account? <span onClick={() => setCurrentState("Sign Up")} className="text-orange-500 cursor-pointer hover:underline">Sign Up</span></>
          ) : (
            <>Already have an account? <span onClick={() => setCurrentState("Log In")} className="text-orange-500 cursor-pointer hover:underline">Log In</span></>
          )}
        </p>
      </form>
    </div>
  );
};

export default LogIn;
