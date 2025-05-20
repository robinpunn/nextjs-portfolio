import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import logo from "../public/assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#94A3B8");
  const [linkColor, setLinkColor] = useState("rgb(109 40 217)");
  const router = useRouter();

  useEffect(() => {
    function handleScroll() {
      if (
        router.asPath === "/chess" ||
        router.asPath === "/headless" ||
        router.asPath === "/fantasy" ||
        router.asPath === "/fcc" ||
        router.asPath === "/github" ||
        router.asPath === "/todo"
      ) {
        if (window.scrollY >= 98) {
          if (window.innerWidth <= 460) {
            setNavBg("#CBD5E1");
            setLinkColor("rgb(109 40 217)");
          } else {
            setNavBg("#94A3B8");
            setLinkColor("rgb(109 40 217)");
          }
        } else {
          setNavBg("transparent");
          setLinkColor("rgb(148 163 184)");
        }
      } else {
        if (window.innerWidth <= 460) {
          setNavBg("#CBD5E1");
          setLinkColor("rgb(109 40 217)");
        } else {
          setNavBg("#94A3B8");
          setLinkColor("rgb(109 40 217)");
        }
      }
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNavBg("#CBD5E1");
      } else {
        setNavBg("#94A3B8");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      {/* div contains navbar items: logo, links, <med screen: hamburger*/}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/*logo*/}
        <Link href="/">
          <Image width={125} height={125} src={logo} alt="logo" />
        </Link>
        {/*div to hold links and humberger menu < med screens*/}
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 font-extrabold text-sm uppercase p-1  hover:text-white hover:scale-125 hover:rounded-lg ease-in duration-300">
              <Link href="/">Home</Link>
            </li>
	    {/*<li className="ml-10 font-extrabold text-sm uppercase p-1  hover:text-white hover:scale-125 hover:rounded-lg ease-in duration-300">
              <Link href="/#about">About</Link>
            </li>*/}
            <li className="ml-10 font-extrabold text-sm uppercase p-1  hover:text-white hover:scale-125 hover:rounded-lg ease-in duration-300">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 font-extrabold text-sm uppercase p-1  hover:text-white hover:scale-125 hover:rounded-lg ease-in duration-300">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 font-extrabold text-sm uppercase p-1  hover:text-white hover:scale-125 hover:rounded-lg ease-in duration-300">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/*hamburger menu*/}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/*overlay when hamburger menu is selected*/}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/*sidebar menu*/}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-slate-400 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            {/*sidebar logo*/}
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={logo} alt="/" width={50} height={50} />
              </Link>
              {/*close sidebar*/}
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            {/*statement*/}
            <div className="border-b border-gray-500 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Learn and Build Everyday
              </p>
            </div>
          </div>
          {/*menu and contact*/}
          <div className="py-4 flex flex-col">
            {/*menu*/}
            <ul className="uppercase">
              <li onClick={() => setNav(false)} className="mb-8 text-sm">
                <Link href="/">Home</Link>
              </li>
              <li onClick={() => setNav(false)} className="my-8 text-sm">
                <Link href="/#about">About</Link>
              </li>
              <li onClick={() => setNav(false)} className="my-8 text-sm">
                <Link href="/#skills">Skills</Link>
              </li>
              <li onClick={() => setNav(false)} className="my-8 text-sm">
                <Link href="/#projects">Projects</Link>
              </li>
              <li onClick={() => setNav(false)} className="my-8 text-sm">
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
            {/*contact*/}
            <div className="pt-10 sm:pt-40">
              <p className="uppercase tracking-wide">Get in touch with me</p>
              <div className="flex items center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                  <a
                    href="https://linkedin.com/in/robin-punnoose"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                  <a
                    href="https://github.com/robinpunn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                  <a
                    href="mailto:robin.punnoose@protonmail.com"
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
      </div>
    </div>
  );
};

export default Navbar;
