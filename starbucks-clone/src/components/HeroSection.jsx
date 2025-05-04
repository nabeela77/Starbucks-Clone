import React from "react";
const HeroSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch justify-between px-0 py-0">
      {/* Text Content */}
      <div className="md:w-1/2 mb-10 md:mb-0 text-left  bg-amber-50/100 py-2 px-4 md:px-16 flex flex-col justify-center ">
        <h1 className="text-emerald-900 md:text-5xl font-bold mb-6 pt-10 leading-tight ">
          It's a great day for <br />
          free coffee
        </h1>
        <p className="ext-emerald-900 text-md mb-6">
          Sign up and start enjoying the perks of Starbucks
          <sup className="text-xxxs">®</sup> Rewards.
        </p>
        <button className="bg-green-700 text-white  px-6 py-2  items-center  font-semibold   rounded-full hover:bg-green-800 transition inline-flex w-fit">
          Join now
        </button>
        <p className="text-black mt-6 text-md mb-6 ">
          It's even better{" "}
          <a className="text-black underline hover:no-underline">
            with the app
          </a>
        </p>
      </div>

      <div className="md:w-1/2  h-auto  ">
        <img
          src="rewards-hero.png"
          alt="Starbucks Hero"
          className="w-full h-full object-cover "
        />
      </div>
    </section>
  );
};

export default HeroSection;
