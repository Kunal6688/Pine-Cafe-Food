import React from "react";
import appStore from "../assets/appStore.png";
import playStore from "../assets/playStore.png";

const MobileApp = () => {
  return (
    <div id="MobileApp" className="flex flex-col items-center px-6 py-16">
      {/* Heading with Responsive Scaling */}
      <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
        For a Better Experience, Download Our App
      </p>

      {/* Store Icons */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
        <img className="w-40 md:w-48 lg:w-52 cursor-pointer transition-transform hover:scale-105" src={playStore} alt="Play Store" />
        <img className="w-40 md:w-48 lg:w-52 cursor-pointer transition-transform hover:scale-105" src={appStore} alt="App Store" />
      </div>
    </div>
  );
};

export default MobileApp;
