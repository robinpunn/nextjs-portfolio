import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image width={100} height={100} src="/../public/assets/logo.png" alt="logo"/>
        </div>
    </div>
  )
}
