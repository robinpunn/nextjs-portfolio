import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Intro = () => {
  return (
    <div id='intro' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='mt-80 xsm:mt-0'>
                <p className='uppercase text-sm tracking-wide text-gray-700'>
                    Learn and Build Everday
                </p>
                <h1 className='py-4 text-gray-800'>
                    Hi, I'm <span className='text-violet-800'>Robin</span>
                </h1>
                <h1 className='py-2 text-gray-800'>
                    An Aspiring Full Stack Web Developer
                </h1>
                <p className='py-4 text-gray-700  max-w-[70%] mx-auto'>
                    I'm a self taught web developer that strives to learn more and keep building.
                    I like learning new front-end frameworks by reading documentation and buidling projects.
                    I learn more about the back-end by experimenting with different server and databse combinations.
                    As I learn more, I revisit old projects to see how they can be improved.
                    I'm also learning as much as I can about blockchain technology and web3.
                    I'm currently exploring Ethereum and compatible layer 2 blockchains to learn Solidity and smart contract development.
                    I document everything I learn in my blog.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FaLinkedinIn/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro
