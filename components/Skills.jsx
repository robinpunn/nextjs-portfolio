import React from 'react'
import SkillCard from './SkillCard'
import html from '../public/assets/skills/html1.png'
import css from '../public/assets/skills/css1.png'
import js from '../public/assets/skills/javascript.png'
import node from '../public/assets/skills/node.png'
import react from '../public/assets/skills/react1.png'
import next from '../public/assets/skills/nextjs.png'
import sql from '../public/assets/skills/sql.png'
import git from '../public/assets/skills/github.png'
import boot from '../public/assets/skills/bootstrap.png'
import tail from '../public/assets/skills/tailwind1.png'
import figma from '../public/assets/skills/figma.png'
import word from '../public/assets/skills/wordpress.png'

const Skills = () => {
    {/*add skills here*/}
    const skills = [
        { name: 'HTML', img: html},
        { name: 'CSS', img: css},
        { name: 'JavaScript', img: js},
        { name: 'Nodejs', img: node},
        { name: 'React', img: react},
        { name: 'NextJs', img: next},
        { name: 'SQL', img: sql },
        { name: 'Github', img: git},
        { name: 'Bootstrap', img: boot},
        { name: 'Tailwind', img: tail},
        { name: 'Figma', img: figma},
        { name: 'WordPress', img: word},
    ]

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        {/*container*/}
        <div className='max-w-[1240px] flex flex-col justify-center h-full mx-auto'>
            {/*text*/}
            <p className='uppercase text-xl tracking-widest'>Skills</p>
            {/*title*/}
            <h2 className='py-4'>What I Can Do</h2>
            {/*skills container*/}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/*skills placement, cycle through array, pass to SkillCards component*/}
                {skills.map(skill => (
                    <SkillCard name={skill.name} img={skill.img} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills