import React from "react";

const TermsAndConditions = () => {
  return (
    <div
      className=" px-5 py-10 text-sm "
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div className="flex flex-row mx-10 ">
        <p className="text-left pb-10">
          At participating stores. Restrictions apply. <br /> <br />
          <span className="text-xs align-super">1</span>Excludes taxes and
          gratuities. At participating stores. Some restrictions apply. Flights
          purchased close to departure may not earn double Stars. Stars and
          miles may not be earned on purchases of alcohol, Starbucks Cards and
          Starbucks Card reloads. For details, visit{" "}
          <a className="text-green-700 underline hover:no-underline">
            deltastarbucks.com/terms .↩{" "}
          </a>{" "}
          <br /> <br />
          <span className="text-xs align-super">2</span>At participating stores
          only. Some restrictions apply. Linked Card members will earn 2% Cash
          Back on the full purchase price of every Qualifying Purchase. Extra
          Star offer excludes taxes and tips. Stars may not be earned on
          purchases of alcohol or on reloads of Starbucks Cards that are not
          registered. For details, visit{" "}
          <a className="text-green-700 underline hover:no-underline">
            Terms and Conditions
          </a>
          . Bank of America, N.A. Member FDIC.↩ <br /> <br />
          <span className="text-xs align-super">3</span>Individuals must link
          loyalty program accounts to participate in offer. Members with linked
          accounts will earn: (a) double Starbucks Rewards Stars on Qualifying
          Starbucks Transactions during Eligible Stays at Participating Marriott
          Bonvoy Hotels, excluding stays at Homes & Villas by Marriott Bonvoy
          and The Ritz-Carlton Yacht Collection, and (b) earn 100 Marriott
          Bonvoy Points upon completion of 3 Qualifying Starbucks Transactions
          during Marriott Bonvoy Week. Qualifying Starbucks Transactions must be
          made at U.S. participating Starbucks stores and exclude purchases of
          alcoholic beverages, Starbucks Card eGifts and physical Starbucks
          gift. To earn Double Stars, the applicable stay must qualify as an
          Eligible Stay at a Participating Marriott Bonvoy® Hotel under offer
          terms and conditions. Other restrictions and exclusions apply. For
          full offer terms and conditions, visit{" "}
          <a className="text-green-700 underline hover:no-underline">
            Starbucks.com/MarriottBonvoy .
          </a>{" "}
          Marriott Bonvoy® and its affiliated brands and hotels are the
          registered trademarks and/or service marks of Marriott International,
          Inc. and its affiliates. Used under license from Marriott
          International, Inc.↩
        </p>
      </div>
      <div className="flex flex-row mx-10 ">
        <div className="w-1/2 mr-10">
          <h2 className="text-left pb-5 font-semibold text-gray-600 text-opacity:80">
            EARNING STARS
          </h2>
          <p className="text-left pb-5 ">
            Stars cannot be earned on purchases of alcohol, Starbucks Cards or
            Starbucks Card reloads. Earn 1 Star per $1 spent when you scan your
            member barcode in the app, then pay with cash, credit/debit cards or
            mobile wallets at participating stores. You can also earn 1 Star per
            $1 spent when you link a payment method and pay directly through the
            app. Earn 2 Stars per $1 spent when you load funds and pay with your
            digital Starbucks Card in the app. You can also earn 2 Stars per $1
            spent when you pay in-person at a participating store with your
            registered physical Starbucks Card or scan your member barcode in
            the app, and then use any physical Starbucks Card (regardless of
            whether it is registered) to complete the purchase.
          </p>
          <h2 className="text-left pb-5 font-semibold text-gray-600 text-opacity:80">
            BENEFITS
          </h2>
          <p className="text-left ">
            Free refills available during same in-store visit only. To qualify
            for the Birthday Reward, you must have made at least one
            Star-earning transaction.
          </p>
        </div>
        <div className="w-1/2">
          <h2 className="text-left pb-5 font-semibold text-gray-600 text-opacity:80">
            TERMS OF USE
          </h2>
          <p className="text-left pb-5 ">
            For full program details visit{" "}
            <a className="text-green-700 underline hover:no-underline">
              {" "}
              starbucks.com/rewards/terms
            </a>{" "}
            . Starbucks® Rewards benefits are available at participating
            Starbucks stores. Not all stores have the ability to honor Rewards
            at this time. Visit the{" "}
            <a className="text-green-700 underline hover:no-underline">
              Starbucks Store Locator
            </a>{" "}
            and search for locations honoring “Redeem Rewards”.
          </p>
          <h2 className="text-left pb-5 font-semibold text-gray-600 text-opacity:80">
            REDEEMING REWARDS
          </h2>
          <p className="text-left">
            Rewards cannot be redeemed for alcoholic beverages or multi-serve
            items. You pay the difference for any beverage customization over $1
            and/or merchandise item over $20. Not all stores honor tiered
            Rewards. Select stores redeem 200 Stars for free food or drink items
            only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
