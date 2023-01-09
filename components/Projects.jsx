import React from 'react'
import ProjectCard from './ProjectCard'


const Projects = () => {
    {/*Add Projects Here*/}
    const projects = [
        {
            title: 'TradeBot',
            tech: 'HTML/CSS',
            img: '/../public/assets/projects/trade.png',
            link: '/'
        },
        {
            title: 'NextJs Blog',
            tech: 'NextJs/WordPress/GraphQl/Tailwind',
            img: '/../public/assets/projects/blog.png',
            link: '/'
        },
        {
            title: 'ZTM Portfolio',
            tech: 'JavaScript/Node/React/Bootstrap/SQL',
            img: '/../public/assets/projects/ztm.png',
            link: '/'
        },
        {
            title: 'freeCodeCamp Portfolio',
            tech: 'HTML/CSS',
            img: '/../public/assets/projects/free.png',
            link: '/'
        },
        {
            title: 'Email Developer Portfolio',
            tech: 'HTML Email Frameworks',
            img: '/../public/assets/projects/email.png',
            link: '/'
        },
    ]

  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
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