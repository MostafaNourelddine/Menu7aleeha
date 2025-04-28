import React from "react";
function Juice() {
  return (
    <div>
      <div
        className="flex flex-col items-center p-6 bg-[#fddeda]"
        style={{
          backgroundImage: `url('/white.png')`,
          backgroundSize: "cover", // cover full width
          backgroundPosition: "top center", // center the background horizontally
          width: "100%",
        }}
      >
        {/* Section Title */}
        <div className="flex space-between  items-center">
          <div className="flex flex-col items-center md:items-start">
            <h2
              style={{ fontFamily: "'Rakkas', cursive" }}
              className="text-4xl  text-[#f6869d] lowercase font-[cursive] tracking-wide "
            >
              Juices
            </h2>
            <div className="h-1 w-20 bg-[#f6869d] mt-2"></div>
          </div>

          <img
            src="/juice.png"
            alt="Juices"
            className="w-48 h-auto mt-6 md:mt-0"
          />
        </div>

        {/* Items */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 w-full max-w-5xl">
          {[
            "تفاح",
            "أفوكا",
            "كوكتيل",
            "جزر",
            "فريز",
            "ليموناضة",
            "ليمون",
            "فريز وموز وحليب",
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-32"
              style={{ fontFamily: "'Rakkas', cursive" }}
            >
              <div className="leading-none bg-[#fddeda] text-[#f6869d] w-full h-10 flex items-center justify-center rounded-full   text-center text-3xl">
                {item}
              </div>
              <p className="text-[#f6869d]  text-xl mt-2">200</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Juice;
