import React from "react";
import Image from "next/image";
import chessBanner from "../public/assets/projects/chessBanner.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const chess = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          objectFit="cover"
          layout="fill"
          src={chessBanner}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Chess Vision Game</h2>
          <h3>React/Vite/Vanilla CSS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a chess vision game created with React and styled with
            vanilla css. The game is responsive and adjusts for mobile screens.
            A random square is chosen and flashes on the middle of the board.
            The player has to pick the correct square to earn a point. The game
            lasts for 30 seconds. High score is saved using local storage. The
            app was developed with Vite and hosted through GitHub pages.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://robinpunn.github.io/react-chess-vision/"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/robinpunn/react-chess-vision"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-600 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vite
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="cursor-pointer hover:text-white hover:scale-105 ease-in duration-300">
            {"<---"} back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default chess;
