import React from "react";
import Image from "next/image";
import fantasyBanner from "../public/assets/projects/fantasyPaymentsBanner.png";
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
          src={fantasyBanner}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Fantasy Payments</h2>
          <h3>TypeScript/React/CSS/</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 overflow-y-hidden">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="overflow-y-hidden">
            Fantasy Payments is a DApp (decentralized application) deployed on
            the Seoplia Testnetwork. Sepolia is an Ethereum testnetworkt that
            developers use to test out their Ethereum blockchain applications.
            The project was built with Solidity, TypeScript, React, and Vite. It
            was styled with Vanilla CSS. The project also used{" "}
            <a href="https://www.rainbowkit.com/" target="_blank">
              Rainbowkit
            </a>{" "}
            and{" "}
            <a href="https://docs.ethers.org/v6/" target="_blank">
              ethers.js
            </a>{" "}
            for wallet functionality. This was a final project for{" "}
            <a href="https://university.alchemy.com/" target="_blank">
              Alchemy University
            </a>
            . This DApp was created as a means to handle payments for fantasy
            sports leagues. Anyone can add their league and league members to
            handle payments with{" "}
            <a
              href="https://www.coingecko.com/en/coins/ethereum"
              target="_blank"
            >
              Ethereum
            </a>
            . This payment functionality is handled by a smart contract written
            in Solidity.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://blockchain-fantasy-eaur3nc7a-robinpunn.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/robinpunn/blockchain-fantasy"
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
                Solidity
              </p>
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
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Rainbowkit
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Ethers.js
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

export default ztm;
