import React from "react";
import Image from "next/image";
import profile from "../public/assets/profile.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 mt-80 xsm:mt-0"
    >
      {/*grid container*/}
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        {/*first grid element spanning 2 columns*/}
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-700 font-medium">
            My interest in blockchain technology motivated me to explore
            programming languages. Learning more about web and blockchain
            development has become my favorite hobby.
          </p>
          <p className="py-2 text-gray-700 font-medium">
            My goal as a developer is to grow every day. I enjoy learning the
            low level details of a language as well as exploring libraries and
            frameworks. Using the approach of reading documentation with trial
            and error helps refine my development process. I enjoy challenging
            myself by leaving the comfort zone of familiar tools. Exploring
            uncharted territories often leads to errors. I find debugging and
            creating solutions extremely rewarding.{" "}
          </p>
          <p className="py-2 text-gray-700 font-medium">
            I love to write. I'm always practicing to create better copy.
          </p>
          <p className="py-2 text-gray-700 font-medium">
            I love reading history and smart contract audit reports.
          </p>
        </div>
        {/*second grid element image*/}
        <div className="w-full h-auto p-4 m-auto shadow-xl shadow-gray-700 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            width={500}
            height={500}
            src={profile}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
