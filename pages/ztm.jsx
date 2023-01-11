import React from 'react'
import Image from 'next/image'
import ztmBanner from '../public/assets/projects/ztmBanner.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const ztm = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' objectFit='cover' layout='fill' src={ztmBanner} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>ZeroToMastery Portfolio</h2>
                <h3>JavaScript/Nodejs/React/Bootstrap/SQL</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    ZeroToMastery in an online learning platform that teaches a variety of web development and web development related topics.
                    I completed the ZeroToMastery Complete Web Developer Course.
                    The course was in depth and taught many important topics related to web development.
                    The course began by teaching the basics of HTML and CSS and moved onto JavaSript.
                    This portfolio includes one of the early projects that were created, a background generator.
                    The course then focused on teaching React.
                    The first React project, Robofriends, is included in this portfolio.
                    The course moves on to cover back-end principles and teaches servers through NodeJs and databases through SQL.
                    The final project incorporates React, NodeJs, and SQL creating an app with both a front-end and a back-end.
                    The portfolio site hosting all of the projects was created with a Gatsby template.
                    The ZTM Web Developer course was an excellent resource to learn the foundations of web development.
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
                            <RiRadioButtonFill className='pr-1' />Bootstrap
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />JavaScript
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />NodeJS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />SQL
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

export default ztm