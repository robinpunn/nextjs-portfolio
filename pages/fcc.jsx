import React from 'react'
import Image from 'next/image'
import fccBanner from '../public/assets/projects/fccBanner.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const fcc = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' objectFit='cover' layout='fill' src={fccBanner} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>freeCodeCamp Portfolio</h2>
                <h3>HTML/CSS/JavaScript</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    I used the online learning platform freeCodeCamp to learn the basics of HTML, CSS, and JavaScript.
                    This portfolio contains the projects that were required for the design certification.
                    I also completed the JavaScript certification which involved 5 challenges.
                    The first website in this portfolio is a tribute website that focuses mainly on HTML structure.
                    The second project in the portfolio is a survey which focuses on HTML forms.
                    The third project in the portfolio is a landing page that incorporates links and more modern website aesthetics.
                    The fourth project is a documentation page that incorporates more CSS.
                    The final project is the actual portfolio page that holds all the other projects.
                    freeCodeCamp was an excellent resource to learn the basics of web development.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                <button className='px-8 py-2 mt-4'>Code</button>
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
                    </div>
                </div>
            </div>
            <Link href="/#projects">
                <p className='underline cursor-pointer hover:text-white hover:scale-105 ease-in duration-300'> {"<---"} back</p>
            </Link>
        </div>
    </div>
  )
}

export default fcc