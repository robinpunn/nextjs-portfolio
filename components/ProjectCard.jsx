import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({title,tech,img,link}) => {
  return (
    // card container
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl group hover:bg-gradient-to-r from-violet-500 to-fuchsia-500' key={img}>
        {/*project image*/}
        <Image
            className="rounded-xl group-hover:opacity-10"
            src={img}
            width={1200}
            height={1000}
            alt={title}
        />
        {/*hover over project information*/}
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center' key={title}>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center' key={tech}>{tech}</p>
            <p className='w-32 h-8 mx-auto text-center rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer' key={link}>
                <Link href={link}>More Info</Link>
            </p>
        </div>
    </div>
  )
}

export default ProjectCard