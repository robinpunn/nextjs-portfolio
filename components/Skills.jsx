import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
    {/*add skills here*/}
    const skills = [
        { name: 'HTML', img: '../public/assets/skills/html1.png' },
        { name: 'CSS', img: '../public/assets/skills/css1.png' },
        { name: 'JavaScript', img: '../public/assets/skills/javascript.png' },
        { name: 'Nodejs', img: '../public/assets/skills/node.png'},
        { name: 'React', img: '../public/assets/skills/react1.png'},
        { name: 'NextJs', img: '../public/assets/skills/nextjs.png'},
        { name: 'SQL', img: '../public/assets/skills/react.png'},
        { name: 'Github', img: '../public/assets/skills/github.png'},
        { name: 'Bootstrap', img: '../public/assets/skills/bootstrap.png'},
        { name: 'Tailwind', img: '../public/assets/skills/tailwind1.png'},
        { name: 'Figma', img: '../public/assets/skills/figma.png'},
        { name: 'WordPress', img: '../public/assets/skills/wordpress.png'},
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
                    <SkillCard key={skill.img} name={skill.name} img={skill.img} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills