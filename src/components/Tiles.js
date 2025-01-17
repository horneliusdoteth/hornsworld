import React from "react";

function Tiles({ projects }) {
  return (
    <div className="min-h-screen w-full flex items-start justify-center pt-20 px-4 select-none">
      <div className="hidden sm:grid sm:grid-cols-3 sm:gap-8 sm:place-items-center w-full max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full
              max-w-md
              h-96
              border border-[#9e9491]
              rounded-lg
              overflow-hidden
              shadow-[2px_2px_6px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]
              hover:shadow-[4px_4px_12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]
              transform-gpu
              transition
              duration-300
              hover:-translate-y-3
              hover:scale-105
              flex
              flex-col
            "
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-center">
              <h2 className="text-lg sm:text-xl font-semibold text-White mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-Horn">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div
        className="
          sm:hidden
          flex
          space-x-4
          overflow-x-auto
          snap-x
          snap-mandatory
          w-full
          max-w-7xl
          mx-auto
          scroll-smooth
          touch-pan-x
        "
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              snap-center
              flex-shrink-0
              w-96
              border border-Gray
              rounded-xl
              shadow-lg
              hover:shadow-2xl
              overflow-hidden
              transform-gpu
              transition
              duration-300
              hover:-translate-y-3
              hover:scale-105
              flex
              flex-col
            "
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-center">
              <h2 className="text-base sm:text-lg font-semibold text-White mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-Horn">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Tiles;
