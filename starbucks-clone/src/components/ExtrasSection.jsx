import React from "react";

const ExtrasSection = () => {
  return (
    <div className="px-4 mt-4 pb-20">
      <div>
        <h1 className="font-black text-3xl pb-6">Endless Extras</h1>
        <p className="pb-10 text-center">
          Joining Starbucks® Rewards means unlocking access to benefits like
          quick and easy ordering,
          <br /> tasty Rewards and—yes, free coffee.
        </p>
      </div>
      <div className="flex flex-row mx-10 pb-6">
        <div className=" mx-14 ">
          <img
            src="/1-fun-freebies.jpg"
            alt="fun freebies"
            className="w-32 mx-auto h-auto pb-10 justify-between"
          />
          <h2 className="pb-6 font-black text-lg">Fun freebies</h2>
          <p>
            Not only can you earn free food, drinks and more, look forward to a
            birthday treat on us. <br />
            <span className="underline hover:no-underline cursor-pointer text-green-900 mt-4 block">
              {" "}
              Learn more.{" "}
            </span>
          </p>
        </div>
        <div className=" mx-14 ">
          <img
            src="/2-order-and-pay-ahead.jpg"
            alt="Order & pay ahead"
            className="w-32  mx-auto h-auto pb-10 justify-between"
          />
          <h2 className="pb-6 font-black text-lg">Order & pay ahead</h2>
          <p>
            Master the art of ordering ahead with saved favorites and payment
            methods.
            <br />
            <span className="underline hover:no-underline cursor-pointer text-green-900 mt-4 block">
              {" "}
              Learn more.{" "}
            </span>
          </p>
        </div>
        <div className=" mx-14 ">
          <img
            src="/3-get-to-free-faster.jpg"
            alt="Get to free faster"
            className="w-32  mx-auto h-auto pb-10 justify-between"
          />
          <h2 className="pb-6 font-black text-lg"> Get to free faster</h2>
          <p>
            Earn Stars even quicker with Bonus Star challenges, Double Star Days
            and exciting games.
            <br />
            <span className="underline hover:no-underline cursor-pointer text-green-900 mt-4 block">
              {" "}
              Learn more.{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtrasSection;
