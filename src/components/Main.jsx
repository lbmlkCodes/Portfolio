import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import imgedit from '../assets/imgedit.png'
//import img2 from '../assets/img2.jpg'

const Main = () => {
  return (
    <div id= 'main'>
        <img className='w-full h-screen object-cover scale-x-[-1]' src="https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start ' >
            <h1 className='sm:text-5xl text-4xl font-bold text-center  text-[#001b5e]'>I'm Lebamlak</h1>
            <h2 className='flex sm:text-3xl text-2xl p-4 text-[#001b5e]'>I'm a
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Coder',
        2000,
        'Computer Scientest',
        2000,
        'Tech Enthusiast',
        2000,
      ]}
      wrapper="div"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
      repeat={Infinity}
    />   
    
             </h2>

             <div className='flex justify-between pt-4 max-w-[60px] w-full rounded-lg'>
                <FaLinkedinIn className='courser-pointer text-[#001b5e]' size={25}/>
                <FaGithub className='courser-pointer text-[#001b5e]' size={25}/>
               
             </div>
             <div className='flex rounded-lg  pt-6 px-15 max-w-[400px]'>
             <img className='flex md:justify-end md:flex-row pt-6 px-8 max-w-[400px] rounded-sm' src={imgedit} alt="profile" />

             </div>

        </div>

        </div>
    </div>
  )
}

export default Main