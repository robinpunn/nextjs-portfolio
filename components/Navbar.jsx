import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed w-full h-20 shadow-xl z-50'>
      {/* div contains navbar items: logo, links, <med screen: hamburger*/}
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        {/*logo*/}
        <Image
          width={125}
          height={125}
          src="/../public/assets/logo.png"
          alt="logo"
        />
        {/*div to hold links and humberger menu <med screens*/}
        <div>
          <ul className='hidden md:flex'>
              <li className='ml-10 font-extrabold text-sm uppercase p-1 hover:bg-violet-800 hover:text-white hover:scale-125 hover:rounded-lg ease-in duration-300'>
                <Link href='/'>
                  Home
                </Link>
              </li>
              <li className='ml-10 font-extrabold text-sm uppercase p-1 hover:bg-violet-800 hover:text-white hover:scale-125 hover:rounded-lg ease-in duration-300'>
                <Link href='/'>
                  About
                </Link>
              </li>
              <li className='ml-10 font-extrabold text-sm uppercase p-1 hover:bg-violet-800 hover:text-white hover:scale-125 hover:rounded-lg ease-in duration-300'>
                <Link href='/'>
                  Skills
                </Link>
                </li>
              <li className='ml-10 font-extrabold text-sm uppercase p-1 hover:bg-violet-800 hover:text-white hover:scale-125 hover:rounded-lg ease-in duration-300'>
                <Link href='/'>
                  Projects
                </Link>
              </li>
              <li className='ml-10 font-extrabold text-sm uppercase p-1 hover:bg-violet-800 hover:text-white hover:scale-125 hover:rounded-lg ease-in duration-300'>
                <Link href='/'>
                  Contact
                </Link>
              </li>
            </ul>
            {/*hamburger menu*/}
            <div onClick={handleNav} className='md:hidden'>
              <AiOutlineMenu size={25}/>
            </div>
        </div>
      </div>
      {/*overlay when hamburger menu is selected*/}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        {/*sidebar menu*/}
        <div className={nav
                        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-slate-400 p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
              }
        >
          <div>
            {/*sidebar logo*/}
            <div className='flex w-full items-center justify-between'>
              <Image
                src="/../public/assets/logo.png"
                alt="/"
                width={50}
                height={50}
              />
              {/*close sidebar*/}
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            {/*statement*/}
            <div className='border-b border-gray-500 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Learn and Build Everyday
              </p>
            </div>
          </div>
          {/*menu and contact*/}
          <div className='py-4 flex flex-col'>
            {/*menu*/}
            <ul className='uppercase'>
              <li className='mb-8 text-sm'>
                <Link href='/'>
                  Home
                </Link>
              </li>
              <li className='my-8 text-sm'>
                <Link href='/'>
                  About
                </Link>
              </li>
              <li className='my-8 text-sm'>
                <Link href='/'>
                  Skills
                </Link>
              </li>
              <li className='my-8 text-sm'>
                <Link href='/'>
                  Projects
                </Link>
              </li>
              <li className='my-8 text-sm'>
                <Link href='/'>
                  Contact
                </Link>
              </li>
            </ul>
            {/*contact*/}
            <div className='pt-10 sm:pt-40'>
              <p className='uppercase tracking-wide'>Get in touch with me</p>
              <div className='flex items center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                  <FaLinkedinIn/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                  <FaGithub/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                  <AiOutlineMail/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar