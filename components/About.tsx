import React from 'react'
import Image from 'next/image'
import profile from '../public/assets/profile.png'

const About = () => {
  return (
    <div id="about" className='w-full md:h-screen p-2 flex items-center py-16 mt-80 xsm:mt-0'>
        {/*grid container*/}
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            {/*first grid element spanning 2 columns*/}
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-700'>I'm a former healthcare worker that has worked as a pharmacy technician and a registered nurse</p>
                <p className='py-2 text-gray-700'>My interest in blockchain technology motivated me to explore programming languages. I enjoy filling my time with different ways to learn about web and blockchain development.</p>
                <p className='py-2 text-gray-700'>My goal as a developer is to continue my growth. Exploring frameworks and libraries I haven't used before helps to strengthen my foundation. Using the approach of reading documentation with trial and error helps refine my development process. Learning what works and which frameworks and libraries work well together makes future development easier. I enjoy challenging myself by leaving the comfort zone of familiar tools.  Exploring uncharted territories often leads to errors.  Debugging and finding solutions to errors is an extremely rewarding proccess. </p>
            </div>
            {/*second grid element image*/}
            <div className='w-full h-auto p-4 m-auto shadow-xl shadow-gray-700 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300'>
              <Image
                  className='rounded-xl'
                  width={500}
                  height={500}
                  src={profile}
                  alt="profile"
              />
            </div>
        </div>
    </div>
  )
}

export default About