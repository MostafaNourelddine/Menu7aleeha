import React from "react";

const Smoothies = () => {
  return (
    <div className="flex flex-col items-center mt-10 px-4">
      {/* Top section with image and title */}
      <div className="flex items-center justify-center px-20  ">
        <div className="flex flex-col items-center md:items-start">
          <h2
            style={{ fontFamily: "'Rakkas', cursive" }}
            className="text-4xl text-[#f6869d] tracking-wide mt-[2rem]"
          >
            smoothies
          </h2>
          <div className="h-1 w-20 bg-[#f6869d] mt-2"></div>
        </div>
        <img
          src="/smoothies.png"
          alt="Smoothies"
          className="w-52 h-auto mt-6 md:mt-0"
        />
      </div>

      {/* Items */}
      <div className="flex flex-wrap justify-around gap-6 mt-10 w-full max-w-4xl">
        {[
          { name: "passion", price: "250" },
          { name: "strawberry", price: "250" },
          { name: "mango", price: "250" },
          { name: "passion orange", price: "200" },
          { name: "mango strawberry", price: "250" },
          { name: "mango passion", price: "250" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-36"
            style={{ fontFamily: "'Rakkas', cursive" }}
          >
            <div className=" leading-none bg-[#fddeda] text-[#f6869d] w-full h-10 flex items-center justify-center rounded-full text-center text-2xl md:text-2xl px-2">
              {item.name}
            </div>
            <p className="text-[#f6869d] text-lg mt-2">{item.price}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h2
          style={{ fontFamily: "'Rakkas', cursive" }}
          className="text-4xl text-[#f6869d] tracking-wide mt-[2rem]"
        >
          Energy Drinks
        </h2>
        <div className="h-1 w-20 bg-[#f6869d] mt-2"></div>
      </div>
      <div
        className="flex flex-col items-center w-36 mt-8"
        style={{ fontFamily: "'Rakkas', cursive" }}
      >
        <div className=" leading-none bg-[#fddeda] text-[#f6869d] w-full h-10 flex items-center justify-center rounded-full text-center text-2xl md:text-2xl px-2">
          Boom Boom(Syrup)
        </div>
        <p className="text-[#f6869d] text-lg mt-2">200</p>
      </div>
      <div
        className="flex flex-col items-center w-36 mt-8"
        style={{ fontFamily: "'Rakkas', cursive" }}
      >
        <div className=" leading-none bg-[#fddeda] text-[#f6869d] w-full h-10 flex items-center justify-center rounded-full text-center text-2xl md:text-2xl px-2">
          Dark Blue(Syrup)
        </div>
        <p className="text-[#f6869d] text-lg mt-2">180</p>
      </div>
    </div>
  );
};

export default Smoothies;
