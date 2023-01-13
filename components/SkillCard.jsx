import React from 'react'
import Image from 'next/image'

const SkillCard = ({name,img}) => {
  return (
    <div className='p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        {/*skill card styling*/}
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            {/*skills image container*/}
            <div className='m-auto'>
                {/*skills image*/}
                <Image
                src={img}
                alt={name}
                width={100}
                height={100}
                />
            </div>
            {/*skills text*/}
            <div className='flex flex-col items-center justify-center'>
                <h3 key={name}>{name}</h3>
            </div>
        </div>
    </div>
  )
}

export default SkillCard