import React from "react";

const EarnStarsSection = () => {
  return (
    <div className="w-auto h-auto" style={{ backgroundColor: "#f1f0ea" }}>
      <div>
        <h1 className="font-black text-3xl py-10">
          Cash or card, you earn Stars
        </h1>
        <p className="pb-10">
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to <br />
          (really delicious) Rewards.
        </p>
      </div>
      <div className="flex flex-row pl-20 ">
        <div className="flex flex-col w-70">
          <h1 className="text-lg font-black text-left pb-2">
            1<span className="text-xs">★</span> per dollar
          </h1>
          <p className="text-sm text-left">Pay as you go</p>
        </div>
        <div className="flex items-start gap-4 w-full pl-6 text-left">
          <img src="/1A.png" alt="scan & pay" className="w-30 h-auto" />
          <div className="w-1/2">
            {" "}
            <h2 className="text-lg font-semibold pb-5">
              Scan and pay separately
            </h2>
            <p>Use cash or credit/debit card at the register.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 w-full text-left">
          <img src="/1B.png" alt="Save payment" className="w-30 h-auto" />
          <div className="w-1/2">
            <h2 className="text-lg font-semibold pb-5">
              Save payment in the app
            </h2>
            <p>
              Check-out faster by saving a credit/debit card or PayPal to your
              account. You’ll be able to order ahead or scan and pay at the
              register in one step.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gray-300 my-4"></div>

      <div className="flex flex-row pt-10 pl-20 ">
        <div className="flex flex-col w-70">
          <h1 className="text-lg font-black text-left pb-2">
            2<span className="text-xs">★</span> per dollar
          </h1>
          <p className="text-sm text-left">Add funds in the app</p>
        </div>
        <div className="flex items-start gap-4 w-full pl-6 text-left">
          <img src="/2A.png" alt="preload" className="w-30 h-auto" />
          <div className="w-1/2">
            {" "}
            <h2 className="text-lg font-semibold pb-5">Preload</h2>
            <p>
              To save time and earn Stars twice as fast, add money to your
              digital Starbucks Card using any payment option. Scan and pay in
              one step or order ahead in the app.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 w-full text-left">
          <img src="/2B.png" alt="register gift card" className="w-30 h-auto" />
          <div className="w-1/2">
            <h2 className="text-lg font-semibold pb-5">
              Register your gift card
            </h2>
            <p>
              Then use it to pay through the app. You can even consolidate
              balances from multiple cards in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnStarsSection;
