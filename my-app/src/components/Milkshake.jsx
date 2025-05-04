import React from "react";

const Milkshake = () => {
  return (
    <div
      className="flex flex-col items-center mt-10 px-4"
      style={{
        backgroundSize: "cover", // cover full width
        backgroundPosition: "top center", // center the background horizontally
        width: "100%",
      }}
    >
      {/* Top section with image and title */}
      <div className="flex items-center justify-center px-20 ">
        <img
          src="/milkshakes.png"
          alt="Milkshake"
          className="w-52 h-auto mt-6 md:mt-0"
        />
        <div className="flex flex-col items-center md:items-start">
          <h2
            style={{ fontFamily: "'Rakkas', cursive" }}
            className="text-4xl text-[#f6869d] tracking-wide"
          >
            milkshake
          </h2>
          <div className="h-1 w-20 bg-[#f6869d] mt-2"></div>
        </div>
      </div>

      {/* Price under image */}

      {/* Items */}
      <div className="flex flex-wrap justify-around gap-6 mt-10 w-full max-w-4xl">
        {["lotus", "strawberry", "oreo", "nutella", "kinder"].map(
          (item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-32"
              style={{ fontFamily: "'Rakkas', cursive" }}
            >
              <div className="bg-white text-[#f6869d] w-full h-10 flex items-center justify-center rounded-full text-center text-2xl">
                {item}
              </div>
              <p className="text-[#f6869d] text-lg mt-2">250</p>
            </div>
          )
        )}
      </div>

      {/* Add crema */}
      <div
        className="mt-10 flex flex-col items-center"
        style={{ fontFamily: "'Rakkas', cursive" }}
      >
        <p className="text-[#f6869d] text-2xl font-bold">add crema</p>
        <p className="text-[#f6869d] text-xl mt-2">50</p>
      </div>
    </div>
  );
};

export default Milkshake;
