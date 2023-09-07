import React from "react";
import Image from "next/image";
import githubBanner from "../public/assets/projects/githubBanner.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ztm = () => {
  return (
    <div className="w-full overflow-y-hidden">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          objectFit="cover"
          layout="fill"
          src={githubBanner}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Good First Issues</h2>
          <h3>TypeScript/React/CSS/GitHub API</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 overflow-y-hidden">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="overflow-y-hidden">
            Good First Issues is a website that lists open issues on GitHub with
            the label of "good first issues". I created this site because I
            wanted a quick way to browse open issues for various categories.
            This site was built with TypeScript, React, Vanilla CSS, and the
            GitHub API. There are various categories that can be selected. In
            the GitHub API search query, the selected category label is paired
            with "good first issue" label. This is a quick way for me to scan
            open issues.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://react-github-api-three.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/robinpunn/react-github-api"
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
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vite
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="cursor-pointer hover:text-white hover:scale-105 ease-in duration-300 overflow-y-hidden">
            {"<---"} back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ztm;
