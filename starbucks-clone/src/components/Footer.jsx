import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="h-15 w-full"></div>
      <div className="w-full h-px bg-gray-300 my-4"></div>
      <div className="flex flex-row text-left px-12 py-10 w-3/4">
        <div className="w-1/5 ">
          <h2 className="pb-12 text-lg font-medium text-gray-900">About Us</h2>
          <a className="pb-1 block hover:text-black hover:font-medium">
            Our Company
          </a>
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Our Coffee
          </a>
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            About Starbucks
          </a>
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Starbucks Archive
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Investor Relations
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Customer Service
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Contact Us
          </a>{" "}
          <br />
        </div>
        <div className="w-1/5">
          <h2 className="pb-12 text-lg font-medium text-gray-900">Careers</h2>
          <a className="pb-1 block hover:text-black hover:font-medium">
            Culture and Values
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Belonging at Starbucks
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            College Achievement Plan
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Alumni Community
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            U.S. Careers
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            International Careers
          </a>{" "}
          <br />
        </div>
        <div className="w-1/5">
          <h2 className="pb-12 text-lg font-medium text-gray-900">
            Socail Impact
          </h2>
          <a className="pb-1 block hover:text-black hover:font-medium">
            Communities
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Starbucks Foundation
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Sustainability
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Environmental and Social Impact Reporting
          </a>{" "}
          <br />
        </div>
        <div className="w-1/5">
          <h2 className="pb-12 text-lg font-medium text-gray-900">
            For Business Partners
          </h2>
          <a className="pb-1 block hover:text-black hover:font-medium">
            Landlord Support Center
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Suppliers
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Corporate Gift Card Sales
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Office and Foodservice Coffee
          </a>{" "}
          <br />
        </div>
        <div className="w-1/5">
          <h2 className="pb-12 text-lg font-medium text-gray-900">
            Order and Pickup
          </h2>
          <a className="pb-1 block hover:text-black hover:font-medium">
            Order on the App
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Order on the Web
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Delivery
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Order and Pick Up Options
          </a>{" "}
          <br />
          <a className="pb-1 block hover:text-black hover:font-medium">
            Explore and Find Coffee for Home
          </a>{" "}
          <br />
        </div>
      </div>
      <div className="w-full pl-10 pr-10 h-px bg-gray-300 my-4"></div>
      <div className="flex flex-row py-10 pl-10  gap-4">
        <img
          src="spotify-icon.png"
          alt="spotify"
          className="w-8 h-8 cursor-pointer transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(107,114,128,0.5)]"
        />

        <img
          src="/fb-icon.png"
          alt="facebook"
          className="w-8 h-8 cursor-pointer transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(107,114,128,0.5)]"
        />
        <img
          src="/pinterest-icon.png"
          alt="pinterest"
          className="w-8 h-8 cursor-pointer transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(107,114,128,0.5)]"
        />
        <img
          src="/Instagram-icon.png"
          alt="instagram"
          className="w-8 h-8 cursor-pointer transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(107,114,128,0.5)]"
        />
        <img
          src="/youtube-icon.png"
          alt="youtube"
          className="w-8 h-8 cursor-pointer transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(107,114,128,0.5)]"
        />
        <img
          src="/x-icon.png"
          alt="x"
          className="w-8 h-8 cursor-pointer transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(107,114,128,0.5)]"
        />
      </div>
      <ul className=" pl-10 text-left">
        <li className="cursor-pointer pb-6 hover:underline">Privacy Notice</li>
        <li className="cursor-pointer pb-6 hover:underline">
          Consumer Health Privacy Notice
        </li>
        <li className="cursor-pointer pb-6 hover:underline"> Terms of Use</li>
        <li className="cursor-pointer pb-6 hover:underline">
          {" "}
          Do Not Share My Personal Information
        </li>
        <li className="cursor-pointer pb-12 hover:underline">
          {" "}
          CA Supply Chain Act
        </li>
        <li className="cursor-pointer pb-6 hover:underline">EditSign</li>
        <li className="cursor-pointer pb-6 hover:underline">Accessibility</li>
        <li className="cursor-pointer pb-6 hover:underline">
          {" "}
          Cookie Preferences
        </li>
        <li className="pb-30 pt-4 text-gray-600 text-xs">
          © 2025 Starbucks Coffee Company. All rights reserved.
        </li>
      </ul>
    </div>
  );
};

export default Footer;
//
//
//
//
//
//
//
//
