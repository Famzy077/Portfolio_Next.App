'use client'
import React from 'react'
// import './style.module.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import ProfileImage from './Images/profile.png'
import Image from 'next/image';
import NextJsimg from './Images/NextJs.png'
import { faPlane, faHeadphones, faDollar, faComputer, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import Tailwindimg from './Images/tailwind.png'
import Reactimg from './Images/React.png'
import Nodeimg from './Images/NodeJs.png'
import Typescriptimg from './Images/Typescript.png'
import Pythonimg from './Images/Python.png'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';
import HealthCare from './Images/healthcare.png'
const Home = () => {
    const [readMore, setReadMove] = useState(false)
    const handleReadMore = () => {
        setReadMove(!readMore)
    }
    const [isAll, setAll] = useState('')
    const handleAll = () => {
        
        // check.localeCompare()
    }
  return (
    <>
        <header className='header bg-white mb-16 text-black mx-[12rem] rounded-full mt-9 sticky top-4 z-20'>
            <main className='flex justify-between items-center p-3'>
                <div className='flex logo_box items-center gap-4'>
                    <div className=' md:w-[60px] w-[50px] h-[50px] md:h-[60px] place-items-center place-content-center rounded-full bg-black'>
                        <h1 className='text-white text-2xl md:text-3xl font-semibold cursor-pointercls'>AF</h1>
                    </div>
                    <h2 className='akin text-center text-2xl md:text-4xl font-semibold'>Akinola Femi</h2>
                </div>
                <div className='flex p-2 md:p-4 rounded-full px-3 md:px-7 bg-black gap-3 relative mr-8'>
                    <h1 className='text-white text-xl md:text-2xl font-semibold pr-4'>Menu</h1>
                    <div className=' bg-blue-800 absolute left-[4.3rem] md:left-24 p-[0.6rem] md:p-3 top-[0.2rem] md:top-1 rounded-full cursor-pointer'>
                        <FontAwesomeIcon className='text-white w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-2xl' icon={faBars} />
                    </div>
                </div>
            </main>
        </header>

        <section className='section1 h-[fit-content] p-2 md:p-5 overflow-x-hidden'>
            <div className='nameBox m-20 mb-6 md-10 md:mx-[16rem] rounded-[4rem] p-4 border-4 border-blue-800'>
                <h1 className='nameh1 text-blue-700 font-bold text-6xl flex justify-around'><span className='text-white'>I′m</span>Akinola <span>Femi</span></h1>
            </div>
            <main className='text-center my-5 text-xl md:text-2xl'>
                <h1>A Software Engineer | Web Developer with <span className='bg-blue-800 rounded-full px-2 capitalize'>1.5 years experience</span></h1>
            </main>
            <div className='mt-3 text-center m'>
                <button className='border-2 px-4 border-blue-800 text-blue-800 p-2 rounded-2xl mr-3 hover:text-white hover:bg-blue-800'>Resume</button>
                <button className='bg-blue-800 p-2 rounded-2xl border-2 border-blue-800 hover:bg-transparent px-4 hover:border-blue-800'>Hire me</button>
            </div>
            <section className='flex gap-0 md:gap-6 justify-center p-1 md:p-4'>
                <div className='mt-10 relative'>
                    <div className='bg-white w-[90px] md:w-[170px] absolute top-[3rem] left-[2rem] md:left-[-1rem] rounded-full p-1 md:p-2 pr-0 md:pr-5 pl-3 flex items-center text-black gap-2 md:gap-4 font-semibold'>
                        <Image className='w-[1.2rem] md:w-[3rem]' src={NextJsimg} alt="skills-img" />
                        <h1 className='text-xs md:text-xl'>NextJs</h1>
                    </div>
                    <div className='bg-white w-[90px] md:w-[170px] absolute md:top-[11.5rem] top-[7rem] right-[-5.5rem] md:right-[-5.5rem] skillIcon rounded-full p-1 md:p-2 pr-0 md:pr-5 pl-1 md:pl-3 flex items-center text-black gap-1 md:gap-4 font-semibold'>
                        <Image className='w-[1.2rem] md:w-[3rem]' src={Tailwindimg} alt="skills-img" />
                        <h1 className='text-xs md:text-xl'>Tailwind</h1>
                    </div>
                    <div className='bg-white  w-[90px] md:w-[170px] absolute md:top-[20em] top-[11rem] right-[-7.5rem] md:left-[-1rem] rounded-full p-1 md:p-2 pr-0 md:pr-5 pl-3 flex items-center text-black gap-2 md:gap-4 font-semibold'>
                        <Image src={Reactimg} className='w-[1.2rem] md:w-[3rem]' alt='skills-img'/>
                        <h1 className='text-xs md:text-xl'>ReactJs</h1>
                    </div>
                </div>
                <div className="imageBox w-[60rem] md:w-[auto] mt-10 flex justify-center">
                    <Image className='w-[300px] md:w-[100%]' src={ProfileImage} alt="profileImage" />
                </div>
                <div className='mt-10 relative'>
                    <div className='bg-white w-[100px] md:w-[200px] absolute top-[3rem] right-[2rem] md:right-[-2rem] rounded-full p-1 md:p-2 pr-5 pl-3 flex items-center text-black gap-1 md:gap-4 font-semibold'>
                        <Image className='rounded-full w-[1.2rem] md:w-[3rem]' src={Typescriptimg} alt="skills-img" />
                        <h1 className='text-xs md:text-xl'>TypeScript</h1>
                    </div>
                    <div className='bg-white w-[90px] md:w-[200px] absolute md:top-[11.5rem] top-[7rem] left-[-6rem] md:left-[-7rem] rounded-full p-1 pr-2 md:pr-5 pl-3 flex items-center text-black gap-1 md:gap-4 font-semibold'>
                        <Image className='rounded-full w-[1.2rem] md:w-[3rem]' src={Nodeimg} alt="skills-img" />
                        <h1 className='text-xs md:text-xl'>NodeJs</h1>
                    </div>
                    <div className='bg-white w-[90px] md:w-[200px] absolute md:top-[20em] top-[11rem] left-[-7.5rem] md:left-[-9rem] skillIcon rounded-full md:p-2 p-1 pr-2 md:pr-5 pl-3 flex items-center text-black gap-2 md:gap-4 font-semibold'>
                        <Image className='rounded-full w-[1.2rem] md:w-[3rem]' src={Pythonimg} alt="skills-img" />
                        <h1 className='text-xs md:text-xl'>Python</h1>
                    </div>
                </div>
            </section>
        </section>

        <div className='section2 my-9 mx-3 md:mx-16 p-7'>
            <h1 className='text-4xl md:text-7xl font-semibold text-center text-blue-400'>About me</h1>
            <h1 className='text-4xl md:text-7xl font-semibold text-center translate-x-1 md:translate-x-2 translate-y-[-2.4rem] md:translate-y-[-3.9rem]'>About me</h1>

            <main className='md:flex  gap-[40px] justify-between'>
                <div className='w-[100%]'>
                    <div className='flex items-center gap-5 mb-10'>
                        <Image className='rounded-full border-4 border-blue-600 w-[4rem] h-[4rem] object-fill' src={ProfileImage} alt='love-picture'/>
                        <h1 className='text-3xl text-blue-800 font-extrabold'>I love</h1>
                    </div>
                    <div className='md:flex md:flex-wrap gap-4 items-center'>
                        <div className='flex bg-blue-100 p-2 items-center gap-4 text-2xl md:text-3xl font-semibold px-5 rounded-full text-blue-800 md:mb-0 mb-4'>
                            <FontAwesomeIcon className='w-[2rem]' icon={faHeadphones} />
                            <h2>Music</h2>
                        </div>
                        <div className='flex bg-blue-100 p-2 items-center gap-4 text-2xl md:text-3xl font-semibold px-5 rounded-full text-blue-800  md:mt-0 mt-4'>
                            <FontAwesomeIcon className='w-[2rem]' icon={faPlane}/>
                            <h2>Vacation Trip</h2>
                        </div>
                    </div>
                    <div className='md:flex md:flex-wrap mt-4 gap-4 translate-x-4'>
                        <div className='flex bg-blue-100 p-2 items-center gap-4 text-2xl md:text-3xl font-semibold px-5 rounded-full text-blue-800 md:mb-0 mb-4'>
                            <FontAwesomeIcon className='w-[2rem]' icon={faComputer}/>
                            <h2>Coding</h2>
                        </div>
                        <div className='flex bg-blue-100 p-2 items-center gap-4 text-2xl md:text-3xl font-semibold px-5 rounded-full text-blue-800 md:mt-0 mt-4'>
                            <FontAwesomeIcon className='w-[1.4rem]' icon={faDollar}/>
                            <h2>Money</h2>
                        </div>
                    </div>
                </div>

                <div className='flex w-[100%] items-center  m-15 md:mt-0 mt-[5rem] gap-5'>
                    <div className='bg-blue-500 h-[13rem] place-content-center rounded-2xl text-center p-3 w-[100%]'>
                        <h1 className='font-extrabold text-6xl text-blue-800'>1.5</h1>
                        <p className='text text-xl md:text-2xl'>Years Experience</p>
                    </div>
                    <div className='bg-blue-500 h-[13rem] place-content-center rounded-2xl text-center p-3 w-[100%]'>
                        <h1 className='font-extrabold text-6xl text-blue-800'>10+</h1>
                        <p className='text-xl text md:text-2xl'>Projects Completed</p>
                    </div>
                </div>
            </main>
        </div>
        <section className='p-7'>
            <div className='bg-blue-950 aboutText p-10 rounded-2xl font-sans'>
                <p className='my-5 text-2xl'>I&apos;m Akinola Femi, A highly skilled full-stack developer with a focus on JavaScript, Python, React, and Node.js, passionate about transforming the African technology industry through innovative solutions. </p>
                
                {readMore && (
                    <div>
                        <p className='my-5 text-2xl'>With hands-on experience in backend development using Node.js, frontend expertise in Next.js and TypeScript, and contributions to fintech, I consistently deliver high-quality, scalable applications.</p>
                        <p className='my-5 text-2xl'>Additionally, I create motivational content on LinkedIn and some other social medials to inspire junior developers, empowering them with resources, guidance, and practical advice to grow in their careers.</p>
                        <p className='my-5 text-2xl'>My diverse experience in business management and technology gives me a unique perspective on driving impactful projects.</p>
                    </div>
                )}
            </div>
            <div onClick={handleReadMore} className='text-center my-5 text-3xl flex place-content-center'>
                <button onClick={handleReadMore} className="flex items-center border-2 border-blue-800 text-blue-800 p-2 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={readMore ? faEyeSlash : faEye} className="mr-2" />
                    {readMore ? 'Show Less' : 'Read More'}
                </button>
            </div>
        </section>
        <section>
            <h1 className='text-blue-600 text-3xl md:text-6xl text-center mt-10 font-semibold'>Works</h1>
            <h1 className='text-blue-800 text-3xl md:text-6xl text-center mb-10 translate-y-[-3.3rem] font-semibold'>Works</h1>
            <main className='place-content-center gap-10 md:gap-26 flex my-10 cursor-pointer'>
                <button onClick={handleAll} className='bg-blue-100 font-semi text-2xl md:text-4xl font-semibold text-blue-800 px-3 md:px-9 p-1 hover:text-white hover:bg-blue-800 transition-all rounded-xl shadow shadow-slate-100'>All</button>
                <button className='border-2 bg-blue-100 font-semi border-blue-800 text-2xl md:text-4xl font-semibold text-blue-800 px-3 md:px-9 p-1 hover:text-white hover:bg-blue-800 transition-all rounded-xl'>Frontend</button>
                <button className='border-2 bg-blue-100 font-semi border-blue-800 text-2xl md:text-4xl font-semibold text-blue-800 cursor-pointer px-3 md:px-9 p-1 hover:text-white hover:bg-blue-800 transition-all rounded-xl'>Backend</button>
            </main>
            <div className='project m-10 gap-5'>
                <div className='p-5 bg-blue-950 rounded-3xl'>
                    <div className='mt-10 mb-2'>
                        <Image className='rounded-2xl' src={HealthCare} alt='project-image'/>
                    </div>
                    <div>
                        <h1>HealthCare: Health Care Website</h1>
                        <p>Project Category</p>
                        <h2><FontAwesomeIcon icon={faBriefcase} />React</h2>
                        <h2><FontAwesomeIcon icon={faBriefcase} />Frontend</h2>
                        <p><Link href='#'>GitHub</Link></p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={HealthCare} alt='project-image'/>
                    </div>
                    <div>
                        <h1>HealthCare</h1>
                        <p><Link href='#'>GitHub</Link></p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={HealthCare} alt='project-image'/>
                    </div>
                    <div>
                        <h1>HealthCare</h1>
                        <p><Link href='#'>GitHub</Link></p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={HealthCare} alt='project-image'/>
                    </div>
                    <div>
                        <h1>HealthCare</h1>
                        <p><Link href='#'>GitHub</Link></p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={HealthCare} alt='project-image'/>
                    </div>
                    <div>
                        <h1>HealthCare</h1>
                        <p><Link href='#'>GitHub</Link></p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={HealthCare} alt='project-image'/>
                    </div>
                    <div>
                        <h1>HealthCare</h1>
                        <p><Link href='#'>GitHub</Link></p>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Home
