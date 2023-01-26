import React from 'react'
import ProjectCard from './ProjectCard'
import trade from '../public/assets/projects/trade.png'
import blog from '../public/assets/projects/blog.png'
import ztm from '../public/assets/projects/ztm.png'
import free from '../public/assets/projects/free.png'
import email from '../public/assets/projects/email.png'
import todo from '../public/assets/projects/todo.png'


const Projects = () => {
    {/*Add Projects Here*/}
    const projects = [
        {
            title: 'Headless WordPress',
            tech: 'NextJs/WordPress/GraphQl/Tailwind',
            img: blog,
            link: '/headless'
        },
        {
            title: 'Todo App',
            tech: 'React/Vanilla CSS',
            img: todo,
            link: '/todo'
        },
        {
            title: 'TradeBot',
            tech: 'HTML/CSS',
            img: trade,
            link: '/tradebot'
        },
        {
            title: 'ZeroToMastery',
            tech: 'JavaScript/Node/React/Bootstrap/SQL',
            img: ztm,
            link: '/ztm'
        },
        {
            title: 'freeCodeCamp',
            tech: 'HTML/CSS',
            img: free,
            link: '/fcc'
        },
        {
            title: 'Email Developer',
            tech: 'HTML Email Frameworks',
            img: email,
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