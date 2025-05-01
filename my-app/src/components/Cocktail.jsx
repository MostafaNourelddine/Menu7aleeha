import React from "react";
function Cocktail() {
  return (
    <div className="mt-10">
      <div
        className="flex flex-col items-center p-6 bg-[#fddeda]"
        style={{
          backgroundImage: `url('/white1.png')`,
          backgroundSize: "cover", // cover full width
          backgroundPosition: "top center", // center the background horizontally
          width: "100%",
        }}
      >
        {/* Section Title */}
        <div className="flex flex-col items-center">
          {/* Top section: Image + Cocktail Title */}
          <div className="flex items-center justify-center gap-6 w-full">
            <img
              src="/cocktail.png"
              alt="Cocktails"
              className="w-60 h-auto mt-6 md:mt-0"
            />
            <div className="flex flex-col items-center md:items-start mt-[4rem]">
              <h2
                style={{ fontFamily: "'Rakkas', cursive" }}
                className="text-4xl text-[#f6869d] lowercase tracking-wide"
              >
                cocktail
              </h2>
              <div className="h-1 w-20 bg-[#f6869d] mt-2"></div>
            </div>
          </div>

          {/* Prices and Names section */}
          <div className="flex flex-wrap justify-center gap-10 mt-10 w-full max-w-5xl">
            {/* Item 1 */}
            <div
              className="flex flex-col items-center"
              style={{ fontFamily: "'Rakkas', cursive" }}
            >
              <div className="bg-[#fddeda] text-[#f6869d] w-36 h-10 flex items-center justify-center rounded-full text-2xl">
                كوكتيل شقف
              </div>
              <div className="flex flex-col mt-2 text-[#f6869d] text-lg">
                <p>وسط 300</p>
                <p>كبير 400</p>
              </div>
            </div>

            {/* Item 2 */}
            <div
              className="flex flex-col items-center"
              style={{ fontFamily: "'Rakkas', cursive" }}
            >
              <div className="bg-[#fddeda] text-[#f6869d] w-36 h-10 flex items-center justify-center rounded-full text-2xl">
                أفوكا
              </div>
              <div className="flex flex-col mt-2 text-[#f6869d] text-lg">
                <p>وسط 400</p>
                <p>كبير 500</p>
              </div>
            </div>

            {/* Item 3 */}
            <div
              className="flex flex-col items-center"
              style={{ fontFamily: "'Rakkas', cursive" }}
            >
              <div className="bg-[#fddeda] text-[#f6869d] w-36 h-10 flex items-center justify-center rounded-full text-2xl">
                صحن قشطة
              </div>
              <div className="flex flex-col mt-2 text-[#f6869d] text-lg">
                <p>وسط 400</p>
                <p>كبير 700</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start mt-[4rem]">
        <div className="flex items-center justify-center gap-6 w-full">
          <div className="flex flex-col items-center md:items-start mt-[4rem]">
            <h2
              style={{ fontFamily: "'Rakkas', cursive" }}
              className="text-4xl text-[#f6869d] lowercase tracking-wide"
            >
              ice Cream
            </h2>
            <div className="h-1 w-20 bg-[#f6869d] mt-2"></div>
          </div>
          <img
            src="/icecream2.png"
            alt="Cocktails"
            className="w-52 h-auto mt-6 md:mt-0"
          />
        </div>
        <div
          style={{ fontFamily: "'Rakkas', cursive" }}
          className="bg-white text-[#f6869d] mt-8 w-36 h-10 flex items-center justify-center rounded-full text-2xl"
        >
          {" "}
          3 ball
        </div>

        <div
          style={{ fontFamily: "'Rakkas', cursive" }}
          className="flex flex-col mt-2 text-[#f6869d] text-xl"
        >
          <p> 100</p>
        </div>
        <div
          style={{ fontFamily: "'Rakkas', cursive" }}
          className="bg-white text-[#f6869d] mt-8 w-36 h-10 flex items-center justify-center rounded-full text-2xl"
        >
          {" "}
          1 kg
        </div>

        <div
          style={{ fontFamily: "'Rakkas', cursive" }}
          className="flex flex-col mt-2 text-[#f6869d] text-xl"
        >
          <p> 1,000,000</p>
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
