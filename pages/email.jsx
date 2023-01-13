import React from 'react'
import Image from 'next/image'
import emailBanner from '../public/assets/projects/emailBanner.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const email = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' objectFit='cover' layout='fill' src={emailBanner} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Email Developer Portfolio</h2>
                <h3>HTML/Bootstrap/TailwindCSS/Sass</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    After learning the basics of web development, I learned about email development and created a portfolio.
                    Email development involves many nested tables, minimal CSS, and no JavaScript.
                    I read the documentation for various email frameworks and recreated emails I have received.
                    I used Acorn, which is a minimal framework that offers a simple template.
                    Foundation is a framework that incorporates its own markup langauage and utilizes Sass.
                    Maizzle is a framework that incorporates TailwindCSS.
                    MJML is a framework that incorporates its own markup language.
                    The portfolio website that holds all the projects was created with Bootstrap.
                    Creating an HTML portfolio helped me gain a deeper understanding of HTML and the concept of frameworks.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>
                    <a href="https://robinpunn.github.io/html-portfolio/" target="_blank" rel='noreferrer'>
                        View
                    </a>
                </button>
                <button className='px-8 py-2 mt-4'>
                    <a href="https://github.com/robinpunn/html-portfolio" target="_blank" rel="noreferrer">
                        Code
                    </a>
                </button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-600 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />HTML
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />Bootstrap
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />MJML
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />Foundation
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />Maizzle
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />Acorn
                        </p>
                    </div>
                </div>
            </div>
            <Link href="/#projects">
                <p className='cursor-pointer hover:text-white hover:scale-105 ease-in duration-300'>
                    {"<---"} back
                </p>
            </Link>
        </div>
    </div>
  )
}

export default email