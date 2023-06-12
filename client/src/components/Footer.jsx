import React from "react";
import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex flex-col items-center justify-center p-4 gradient-bg-footer">
    <div className="w-full max-w-6xl flex justify-between items-center my-4">
      <div className="flex flex-1 justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap mt-5">
        <p className="text-white text-base cursor-pointer">Explore</p>
        <p className="text-white text-base cursor-pointer">Trade</p>
        <p className="text-white text-base cursor-pointer">Learn</p>
        <p className="text-white text-base cursor-pointer">Wallet</p>
      </div>
    </div>

    <div className="flex flex-col items-center mt-5">
      <p className="text-white text-sm">Come join us and experience the unexpected miracle</p>
      <p className="text-white text-sm font-medium mt-2"></p>
    </div>

    <div className="w-full h-px bg-gray-400 mt-5" />

    <div className="w-full max-w-6xl flex justify-between items-center mt-3">
      <p className="text-white text-xs">Made with ❤️ by CryptoEnthusiasts.</p>
    </div>
  </div>
);

export default Footer;
