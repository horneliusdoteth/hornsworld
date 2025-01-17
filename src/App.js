import React from "react";
import Tiles from "./components/Tiles";

function App() {
  const twitterURL = "https://x.com/horneliusdoteth";
  const twitterImage = "/images/sealuminati_1.png";
  const projects = [
    {
      title: "Hatched Detector",
      description: "A detection tool to help prevent prospective Omnia Egg buyers from getting rugged",
      link: "https://hatcheddetector.com/",
      imageUrl: "/images/Fire.gif",
    },
    {
      title: "sealuminati",
      description: "A Sappy Seal derivative building on Monad.",
      link: "https://x.com/sealuminati",
      imageUrl: "/images/sealuminati_1.png",
    },
    {
      title: "Soon",
      description: "The one stop shop.",
      link: "",
      imageUrl: "/images/lostallcontrol.webp",
    },
  ];

  return (
    <div
      className="
        min-h-screen
        w-screen
        bg-Bg
        /* Mobile-first background: cover */
        bg-cover
        /* For screens ≥640px: switch to contain */
        sm:bg-contain  
        bg-center
        bg-no-repeat
        font-orbitron
        overflow-hidden
      "
      style={{ backgroundImage: 'url("/images/hornelius_transparent.png")' }}
    >
<div className="flex items-center justify-center gap-4 pt-10 mb-10 select-none">
        <h1 className="font-teko font-extrabold text-6xl sm:text-8xl text-Horn/40 text-center">
          Horns World
        </h1>

        {/* Twitter avatar */}
        <a
          href={twitterURL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-16 h-16 rounded-full overflow-hidden shadow-md hover:shadow-xl transition-shadow -translate-y-2 opacity-80"
        >
          <img
            src={twitterImage}
            alt="My Twitter Profile"
            className="w-full h-full object-cover"
          />
        </a>
      </div>

      <Tiles projects={projects} />
    </div>
  );
}

export default App;
