import React from "react";

function Crepe() {
  return (
    <div
      className="flex flex-col items-center mt-10"
      style={{
        backgroundImage: `url('/pink.png')`,
        backgroundSize: "cover", // cover full width
        backgroundPosition: "top center", // center the background horizontally
        width: "100%",
      }}
    >
      {/* Top Section (Title + Image) */}
      <div className="flex gap-2 items-center justify-center ">
        <div className="flex flex-col items-center md:items-start">
          <h2
            style={{ fontFamily: "'Rakkas', cursive" }}
            className="text-5xl text-[#f6869d] lowercase tracking-wide"
          >
            crepe
          </h2>
          <div className="h-1 w-20 bg-[#f6869d] mt-2"></div>
        </div>
        <img
          src="/crepe.png"
          alt="Crepe"
          className="w-60 h-auto mt-6 md:mt-0"
        />
      </div>

      {/* Items Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-10 w-full max-w-4xl">
        {[
          { name: "nutella", price: "250" },
          { name: "lotus", price: "300" },
          { name: "oreo", price: "300" },
          { name: "kinder", price: "300" },
          { name: "pistachio", price: "400" },
          { name: "sushi", price: "400" },
          { name: "brownies", price: "400" },
          { name: "pancake", price: "400" },
          { name: "mini pancake", price: "450" },
          { name: "dounats", price: "120" },
          { name: "special", price: "600" },
          { name: "mix", price: "400" },
          { name: "add icecream", price: "50" },
          { name: "add fruites", price: "50" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-32"
            style={{ fontFamily: "'Rakkas', cursive" }}
          >
            <div className="bg-white text-[#f6869d] w-full h-10 flex items-center justify-center rounded-full text-2xl text-center">
              {item.name}
            </div>
            <p className="text-[#f6869d] text-lg mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Crepe;
