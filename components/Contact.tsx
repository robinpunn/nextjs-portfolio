import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import contact from "../public/assets/contact.png";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      {/*container*/}
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        {/*text*/}
        <p className="text-xl tracking-widest uppercase">Contact</p>
        {/*title*/}
        <h2 className="py-4">Get In Touch</h2>
        {/*grid container*/}
        <div className="grid lg:grid-cols-1">
          {/*left*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              {/*info div*/}
              <div>
                <h2 className="py-2">Robin Punnoose</h2>
                <p>Full-Stack Web Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me for more information.
                </p>
              </div>
              {/*icons div*/}
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
                    <a
                      href="https://linkedin.com/in/robin-punnoose"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
                    <a
                      href="https://github.com/robinpunn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
                    <a
                      href={`mailto:robin.punnoose@protonmail.com`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineMail />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*right*/}
        </div>
        {/*scroll to top*/}
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="m-auto" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
