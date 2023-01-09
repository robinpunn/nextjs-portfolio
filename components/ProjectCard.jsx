import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({title,tech,description,img,link}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 group hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <Image className="rounded-xl group-hover:opacity-10" src={img} alt='/'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
            <p className='pb-4 pt-2 text-white text-center'>{description}</p>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                <Link href={link}>More Info</Link>
            </p>
        </div>
    </div>
  )
}

export default ProjectCard