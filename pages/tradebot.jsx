import React from 'react'
import Image from 'next/image'
import tradeBanner from '../public/assets/projects/tradeBanner.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const tradebot = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' objectFit='cover' layout='fill' src={tradeBanner} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>TradeBot</h2>
                <h3>HTML/CSS</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    This is a landing page for a fictional automated trading service.
                    This project was made following the Academind CSS class.
                    This project incorporates both basic and advanced features of CSS.
                    CSS Flexbox and CSS Grid are used to structure the pages.
                    This project uses CSS variables.
                    Transitions, transforms, and animations are also used.
                    The use of modals incorporates JavaScript, but the majority of this project is HTML and CSS.
                    This project was built with a mobile first approach and incorporates media queries for larger screens.
                    Emphasis was also placed on responsiveness so sizing was defined by relative units.
                    The purpose of this project was to show the power of vanilla CSS.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>
                    <a href="https://robinpunn.github.io/css-trade-bot/" target="_blank" rel='noreferrer'>
                        View
                    </a>
                </button>
                <button className='px-8 py-2 mt-4'>
                    <a href="https://github.com/robinpunn/css-trade-bot" target="_blank" rel="noreferrer">
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
                            <RiRadioButtonFill className='pr-1' />CSS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />JavaScript
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill className='pr-1' />GitHub Pages
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

export default tradebot