import React from "react";

function Croissant() {
  return (
    <div
      className="flex flex-col items-center mt-10"
      style={{
        backgroundImage: `url('/white4.png')`, // background image
        backgroundSize: "cover", // cover full width
        backgroundPosition: "top center", // center the background horizontally
        width: "100%",
      }}
    >
      {/* Top Section (Title + Image) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <img
          src="/krwson.jpg"
          alt="Croissant"
          className="w-72 h-auto mt-6 md:mt-0"
        />
        <div className="flex flex-col items-center md:items-start">
          <h2
            style={{ fontFamily: "'Rakkas', cursive" }}
            className="text-5xl text-[#f6869d] lowercase tracking-wide"
          >
            croissant
          </h2>
          <div className="h-1 w-20 bg-[#f6869d] mt-2"></div>
        </div>
      </div>

      {/* Items Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-10 w-full max-w-5xl">
        {[
          { name: "pizza", price: "300" },
          { name: "4 cheese", price: "200" },
          { name: "taxis", price: "200" },
          { name: "حلوم", price: "170" },
          { name: "فقدوان", price: "170" },
          { name: "عكاوي", price: "170" },
          { name: "قشقوان ومرتدلا", price: "200" },
          { name: "cheetos", price: "170" },
          { name: "قشقوان وجبنه", price: "220" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-32"
            style={{ fontFamily: "'Rakkas', cursive" }}
          >
            <div className="bg-[#fde7eb] text-[#f6869d] w-full h-10 flex items-center justify-center rounded-full text-2xl text-center">
              {item.name}
            </div>
            <p className="text-[#f6869d] text-xl mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Croissant;
