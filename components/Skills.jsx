import React from 'react'
import SkillCard from './SkillCard'
import skills from './SkillsMap'

const Skills = () => {
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