import React from "react";

function CroissantChoco() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {/* Title Section */}
      <div className="text-center">
        <h2
          style={{ fontFamily: "'Rakkas', cursive" }}
          className="text-5xl text-[#f6869d] lowercase tracking-wide"
        >
          croissant
        </h2>
        <h2
          style={{ fontFamily: "'Rakkas', cursive" }}
          className="text-5xl text-[#f6869d] lowercase tracking-wide mt-2"
        >
          choco
        </h2>
        <div className="h-1 w-20 bg-[#f6869d] mx-auto mt-2"></div>
      </div>

      {/* Items Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 w-full max-w-5xl">
        {/* Item 1 */}
        <div
          className="flex flex-col items-center w-24"
          style={{ fontFamily: "'Rakkas', cursive" }}
        >
          <div className="bg-[#fddeda]  text-[#f6869d] w-full h-8 flex items-center justify-center rounded-full text-center text-2xl">
            nutella
          </div>
          <p className="text-[#f6869d] text-xl mt-2">170</p>
        </div>

        {/* Item 2 */}
        <div
          className="flex flex-col items-center w-24"
          style={{ fontFamily: "'Rakkas', cursive" }}
        >
          <div className="bg-[#fddeda] text-[#f6869d] w-full h-8 flex items-center justify-center rounded-full text-center text-2xl">
            lotus
          </div>
          <p className="text-[#f6869d] text-xl mt-2">170</p>
        </div>

        {/* Item 3 */}
        <div
          className="flex flex-col items-center w-24"
          style={{ fontFamily: "'Rakkas', cursive" }}
        >
          <div className="bg-[#fddeda] text-[#f6869d] w-full h-8 flex items-center justify-center rounded-full text-center text-2xl">
            oreo
          </div>
          <p className="text-[#f6869d] text-xl mt-2">170</p>
        </div>

        {/* Item 4 */}
        <div
          className="flex flex-col items-center w-24"
          style={{ fontFamily: "'Rakkas', cursive" }}
        >
          <div className="bg-[#fddeda] text-[#f6869d] w-full h-8 flex items-center justify-center rounded-full text-center text-2xl">
            kinder
          </div>
          <p className="text-[#f6869d] text-xl mt-2">170</p>
        </div>

        {/* Single Item Centered */}
        <div
          className="flex flex-col items-center w-24"
          style={{ fontFamily: "'Rakkas', cursive" }}
        >
          <div className="bg-[#fddeda] text-[#f6869d] w-full h-8 flex items-center justify-center rounded-full text-center text-2xl">
            pistachio
          </div>
          <p className="text-[#f6869d] text-xl mt-2">200</p>
        </div>
      </div>
    </div>
  );
}

export default CroissantChoco;
