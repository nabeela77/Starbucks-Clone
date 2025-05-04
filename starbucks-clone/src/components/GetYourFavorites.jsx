import React, { useState } from "react";

const rewards = [
  {
    stars: 25,
    title: "Customize your drink",
    description:
      "Make your drink just right with an extra espresso shot or a dash of your favorite syrup.",
    image: "/25.png",
  },
  {
    stars: 100,
    title: "Brewed coffee, bakery item & more",
    description:
      "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
    image: "/100.png",
  },
  {
    stars: 200,
    title: "Handcrafted drink or hot breakfast",
    description:
      "Turn good mornings great with a handcrafted drink, breakfast sandwich or oatmeal.",
    image: "/200.png",
  },
  {
    stars: 300,
    title: "Sandwich, protein box or at-home coffee",
    description:
      "Enjoy a PM pick-me-up with a lunch sandwich, protein box or Starbucks VIA Instant®.",
    image: "/300.png",
  },
  {
    stars: 400,
    title: "Select Starbucks® merchandise",
    description: "Take home a signature cup, drink tumbler or merch up to $20.",
    image: "/400.png",
  },
];

export default function GetYourFavorites() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-5  md:py-9 text-center">
      <div className="pt-10 " style={{ backgroundColor: "var(--bggyf)" }}>
        <h2
          className=" font-black text-black text-3xl pb-3 md:pb-7 "
          tabIndex="-1"
        >
          Get your favorites for free
        </h2>

        {/* Tab List */}
        <div
          className="flex text-2xl font-semibold justify-center "
          role="tablist"
          aria-label="Reward levels"
        >
          {rewards.map((reward, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeTab === index}
              onClick={() => setActiveTab(index)}
              className={` pt-2 pb-3 flex text-md text-2xl font-semibold relative ${
                activeTab === index ? "border-b-4 border-green-900" : ""
              }`}
            >
              {reward.stars}
              <span aria-hidden="true" className="text-xs pt-1 text-yellow-500">
                ★
              </span>
              <span className="sr-only">Stars</span>
            </button>
          ))}
        </div>

        {/* Active Tab Panel */}
        <div className="py-3 " style={{ backgroundColor: "var(--bggyfimg)" }}>
          <div className="md:flex justify-center items-center">
            <div className="md:flex justify-start items-center space-x-4 p-4">
              {/* Image Section */}
              <div className="w-full max-w-xs aspect-[4/3] overflow-hidden mb-0">
                {" "}
                {/* Removed bottom margin */}
                <img
                  src={rewards[activeTab].image}
                  alt={rewards[activeTab].title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Section */}
              <div className="md:w-1/2">
                <h3
                  className="text-3xl !text-left font-semibold pb-2"
                  tabIndex="-1"
                >
                  {" "}
                  {/* Reduced padding bottom */}
                  {rewards[activeTab].title}
                </h3>
                <p className="text-center md:text-left">
                  {rewards[activeTab].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
