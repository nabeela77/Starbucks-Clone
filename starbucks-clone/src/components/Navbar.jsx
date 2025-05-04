import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="mx-auto px-10 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/starbucks-logo.png"
            alt="Starbucks Logo"
            className="w-10 h-10 cursor-pointer"
            aria-label="logo"
          />
          <ul className="flex font-bold space-x-6">
            <li className="hover:text-black cursor-pointer">Menu</li>
            <li className="hover:text-black cursor-pointer">Rewards</li>
            <li className="hover:text-black cursor-pointer">Gift Cards</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <span className="flex flex-row mr-6 cursor-pointer hover:text-green-900 space-x-1   font-bold pt-0">
            <a>
              {" "}
              <MapPinIcon className="w-5 h-5  items-start space-x-1 mr-2" />
            </a>{" "}
            {"  "}Find a store
          </span>
          <button className="text-sm border border-black rounded-4xl font-semibold hover:text-black">
            Sign in
          </button>
          <button className="text-sm font-semibold rounded-4xl bg-black text-white hover:bg-gray-800">
            Join now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
