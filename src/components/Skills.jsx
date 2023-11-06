import React from 'react'
import HTML from '../assets/HTML.svg'
import CSS from '../assets/CSS.svg'
import JavaScript from '../assets/JavaScript.svg'
import react1 from '../assets/react-dark.svg'
import Java from '../assets/Java-Dark.svg'
import Python from '../assets/Python-Dark.svg'

 
const Skills = () => {
  return (
    <div id= 'skills' name = 'skills' className='bg-gray-100'>
        <div className='max-w-[1000px] m-auto'> 
            <p className='text-4xl text-[#001b5e] font-bold py-4 text-center'>Skills</p>
            <p className='py-4 text-center font-semibold'>//These are the tech I've worked with</p>
        
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8'>
        <div className=' shadow-gray-400 m-2 p-4 courser-pointer hover:scale-110 ease-in duration-300'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='py-2'>HTML</p>
        </div>
        <div className=' shadow-gray-400 m-2 p-4 courser-pointer hover:scale-110 ease-in duration-300'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
            <p className='py-2'>CSS</p>
        </div>
        <div className=' shadow-gray-400 m-2 p-4 courser-pointer hover:scale-110 ease-in duration-300'>
            <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
            <p className='py-2'>JavaScript</p>
        </div>
        <div className=' shadow-gray-400 m-2 p-4 courser-pointer hover:scale-110 ease-in duration-300'>
            <img className='w-20 mx-auto' src={react1} alt="HTML icon" />
            <p className='py-2'>React</p>
        </div>
        <div className=' shadow-gray-400 m-2 p-4 courser-pointer hover:scale-110 ease-in duration-300'>
            <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
            <p className='py-2'>Java</p>
        </div>
        <div className=' shadow-gray-400 m-2 p-4 courser-pointer hover:scale-110 ease-in duration-300'>
            <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
            <p className='py-2'>Python</p>
        </div>
        </div>
    </div>
  )
}

export default Skills