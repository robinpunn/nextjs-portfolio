import React from 'react'
import ProjectCard from './ProjectCard'


const Projects = () => {
    {/*Add Projects Here*/}
    const projects = [
        {
            title: 'TradeBot',
            tech: 'HTML/CSS',
            img: '../public/assets/projects/trade.png',
            link: '/tradebot'
        },
        {
            title: 'Headless WordPress',
            tech: 'NextJs/WordPress/GraphQl/Tailwind',
            img: '../public/assets/projects/blog.png',
            link: '/headless'
        },
        {
            title: 'ZeroToMastery',
            tech: 'JavaScript/Node/React/Bootstrap/SQL',
            img: '../public/assets/projects/ztm.png',
            link: '/ztm'
        },
        {
            title: 'freeCodeCamp',
            tech: 'HTML/CSS',
            img: '../public/assets/projects/free.png',
            link: '/fcc'
        },
        {
            title: 'Email Developer',
            tech: 'HTML Email Frameworks',
            img: '../public/assets/projects/email.png',
            link: '/email'
        },
    ]

  return (
    <div id='projects' className='w-full'>
        {/*container*/}
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            {/*text*/}
            <p className='uppercase text-xl tracking-widest'>Projects</p>
            {/*header*/}
            <h2 className='py-4'>What I've Built</h2>
            {/*grid container*/}
            <div className='grid md:grid-cols-2 gap-24'>
              {/*projects placement, cycle through array, pass to ProjectCard component*/}
              {projects.map(project => (
                <ProjectCard title={project.title} tech={project.tech} img={project.img} link={project.link} />
              ))}
            </div>
        </div>
    </div>
  )
}

export default Projects