import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        {/*container*/}
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            {/*text*/}
            <p className='text-xl tracking-widest uppercase'>Contact</p>
            {/*title*/}
            <h2 className='py-4'>Get In Touch</h2>
            {/*grid container*/}
            <div className='grid lg:grid-cols-5 gap-8'>
                {/*left*/}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        {/*image div*/}
                        <div>
                            <Image
                                className='rounded-xl hover:scale-105 ease-in duration-300'
                                src="/../public/assets/contact.png"
                                width={1200}
                                height={1000}
                                alt="/"
                            />
                        </div>
                        {/*info div*/}
                        <div>
                            <h2 className='py-2'>Robin Punnoose</h2>
                            <p>Full-Stack Web Developer</p>
                            <p className='py-4'>I am available for freelance or full-time positions. Contact me for more information.</p>
                        </div>
                        {/*icons div*/}
                        <div>
                        <p className='uppercase pt-8'>Connect With Me</p>
                        <div className='flex items-center justify-between py-4'>
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
                {/*right*/}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-600 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            {/*name and number*/}
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-600'
                                        type="text"
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-600'
                                        type="text"
                                    />
                                </div>
                            </div>
                            {/*email*/}
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input
                                    className='border-2 rounded-lg p-3 flex border-gray-600'
                                    type="email"
                                />
                            </div>
                            {/*message subject*/}
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input
                                     className='border-2 rounded-lg p-3 flex border-gray-600'
                                     type="text"
                                 />
                            </div>
                            {/*message field*/}
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-400' rows='10'></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4 hover:bg-purple-900 ease-in duration-500'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            {/*scroll to top*/}
            <div className='flex justify-center py-12'>
                <Link href="/">
                    <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='m-auto' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact