import "./App.css";
import React from "react";
import Juice from "./components/Juice.jsx";
import Cocktail from "./components/Cocktail.jsx";
import Milkshake from "./components/Milkshake.jsx";
import Smoothies from "./components/Smoothies.jsx";
import Crepe from "./components/Crepe.jsx";
import Croissant from "./components/Croissant.jsx";
import CroissantChoco from "./components/CroissantChoco.jsx";
import Kunafa from "./components/Kunafa.jsx";
function App() {
  return (
    <div
      className="App "
      style={{
        backgroundImage: `url('/bgbg.png')`,
        backgroundRepeat: "repeat-y", // repeat vertically
        backgroundSize: "cover", // cover full width
        backgroundPosition: "top center", // center the background horizontally
        width: "100%",
        minHeight: "100vh", // optional: make it at least full screen height
      }}
    >
      <div className="flex flex-col justify-center items-center mt-10">
        <img
          src="/logo.png"
          alt="Cocktails"
          className="w-52 h-auto mt-6 md:mt-0"
        />
        <img
          src="/typo.png"
          alt="Cocktails"
          className="w-52 h-auto mt-6 md:mt-0"
        />
      </div>
      <Juice />
      <Cocktail />
      <Smoothies />
      <Milkshake />
      <Crepe />
      <Croissant />
      <CroissantChoco />
      <Kunafa />

      <div className="flex justify-center items-center mt-20 pb-20">
        <div
          className="text-[#f6869d] bg-white text-4xl font-bold px-10 py-4 rounded-full shadow-lg tracking-wider"
          style={{ fontFamily: "'Rakkas', cursive" }}
        >
          +961 81 932 692
        </div>
      </div>
    </div>
  );
}

export default App;
