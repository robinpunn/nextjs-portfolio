import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    {/*Add Projects Here*/}
    const projects = [
        {
            title: 'TradeBot',
            tech: 'HTML/CSS',
            description: 'This is a landing page that used HTML and CSS with minimal JavaScript. It incorporates CSS FLexbox and Grid along with transitions and animations. ',
            img: '/../'
        },

    ]
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
             <ProjectCard />
            </div>
        </div>
    </div>
  )
}

export default Projects