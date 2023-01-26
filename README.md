This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  This project was created following the [Code Commerce](https://www.youtube.com/watch?v=CMx51wpd7g4) tutorial on YouTube.

## Getting Started

After cloning this repo

```bash
npm install
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Add your informatin in the intro section
- Replace the text in the <p> tag with your own information
- Replace the links with your own lings:

```js
    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <a href="link to LinkedIn" target='_blank' rel='noreferrer'>
                            <FaLinkedinIn/>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <a href="link to GitHub" target='_blank' rel='noreferrer'>
                            <FaGithub/>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <a href='mailto:your@email.com' target='_blank' rel='noreferrer'>
                            <AiOutlineMail/>
                        </a>
                    </div>
```


## Add your information in the about section
- Add your image to /public/assets/
- Go to /components/About.jsx and import the image:

```js
import profile from '../public/assets/profile.png'
```
- Add your information in the <p> tags located in About.jsx

## create a new project page
- Add an image to /public/assets/projects
- In the pages folder, create a new project. For example: myProject.jsx
- Add an image to /public/assets/projects/myProjectBanner.png
- Use this code in that page:

```js
import React from 'react'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import myProjectImage from '../public/assets/projects/myProjectBanner.png'

const myProject = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' objectFit='cover' layout='fill' src={myProjectImage} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>My Project Title</h2>
                <h3>The Tech Stack I Used</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    Describe your project here
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>
                    <a href="link to your project" target="_blank" rel='noreferrer'>
                        View
                    </a>
                </button>
                <button className='px-8 py-2 mt-4'>
                    <a href="link to the github repo" target="_blank" rel="noreferrer">
                        Code
                    </a>
                </button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-600 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />Tech 1
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />Tech 2
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />Tech 3
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />Tech 4
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />Tech 5
                        </p>
                    </div>
                </div>
            </div>
            <Link href="/#projects">
                <p className='cursor-pointer hover:text-white hover:scale-105 ease-in duration-300'>
                    {"<---"} back
                </p>
            </Link>
        </div>
    </div>
  )
}

export default myProject
```

## Add your project to Project.jsx
- Add in image to /public/assets/projects
- Head to /components/Project.jsx
- At the top of the page import the image:
```js
import nameYourImage from '../public/assets/projects/yourImage.png'
```
- Head to the components Project.jsx to add your own project object to the projects array.

```js
    {
        title: '',
        tech: '',
        img: nameYourImage,
        link: '/myProject'
    },
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
