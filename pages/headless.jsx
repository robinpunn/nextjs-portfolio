import React from 'react'
import Image from 'next/image'
import blogBanner from '../public/assets/projects/blogBanner.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const headless = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' objectFit='cover' layout='fill' src={blogBanner} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Nextjs Headless WordPress Blog</h2>
                <h3>Nextjs/Tailwind</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    I created a WordPress blog to document important topics I learned on my self taught journey.
                    After learning the basics of web development, I decided to implement NextJs with my WordPress blog.
                    WordPress is a content management system designed to be a 'no-code' solution.
                    A content management system is 'headless' when it provides back end functionality leaving the front-end tast to a different technology.
                    This project uses NextJs as the front-end while WordPress functions as the back-end.
                    Vercel provided the template used for this project.
                    Tailwind is used as the CSS framework to apply styling.
                    GraphQL is used to pull information from WordPress.
                    This headless NextJs blog highlights how different technologies can work together to create a working product.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                <button className='px-8 py-2 mt-4'>Code</button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-600 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />NextJs
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />TailwindCss
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />WordPress
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill className='pr-1' />GraphQL
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

export default headless