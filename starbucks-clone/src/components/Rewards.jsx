import React from "react";

const Rewards = () => {
  return (
    <div style={{ backgroundColor: "#d3e9e3" }}>
      <div className="item-centre py-15">
        <h1 className="pb-5 font-black text-3xl">Keep the Rewards Coming</h1>
        <p className="pb-3">
          The Rewards don't stop at your morning coffee. Join Starbucks® Rewards
          and unlock perks from our partners, all while earning more Stars.
        </p>
      </div>
      <div className="flex flex-row pl-20">
        <div>
          <img
            src="/delta-skymiles.png"
            alt="delta skymiles"
            className="w-80 pl-40 h-auto pb-10"
          />
          <p className="pl-4 pr-4">
            <a className="text-green-700 underline hover:no-underline">
              Link your Delta SkyMiles®{" "}
            </a>{" "}
            and Starbucks® Rewards accounts to earn miles on Starbucks Card
            reloads of $25 or more, plus Double Stars on travel days.1
          </p>
        </div>
        <div>
          <img
            src="/bank-of-america.png"
            alt="bank of america reward"
            className="w-80 pl-40 h-auto pb-10"
          />
          <p className="pl-4 pr-4">
            <a className="text-green-700 underline hover:no-underline">
              Link your Bank of America
            </a>{" "}
            eligible card and Starbucks® Rewards account to earn 2% Cash Back
            and Bonus Stars on qualifying Starbucks in-app purchases.2
          </p>
        </div>
        <div className="pr-20">
          <img
            src="/marriott-logo.png"
            alt="marriott rewards"
            className="w-80 pl-40 h-auto pb-10"
          />
          <p className="pl-4 pr-4">
            <a className="text-green-700 underline hover:no-underline">
              Link your Marriott Bonvoy®
            </a>{" "}
            and Starbucks® Rewards accounts to earn Double Stars during eligible
            stays, points during any Marriott Bonvoy Week and more.3
          </p>
        </div>
      </div>
      <div className="pt-15 pb-20">
        <button className="  text-sm  rounded-4xl font-semibold bg-green-800 text-white hover:opacity-80">
          Join Starbucks® Rewards{" "}
        </button>
      </div>
    </div>
  );
};

export default Rewards;
