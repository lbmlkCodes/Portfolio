import React from 'react'
import Workitem from '../components/Workitem'

const data = [
  {
    year: 2023,
    title: 'AVELA', 
    duration: '2 years',
    details: '	Committed to K- 12 outreach to give students from underrepresented groups in STEM an introduction to the field and possible careers. Designed technical content such as code, hardware, and other physical components for workshops and classes'

  },
  {
    year: 2022,
    title: 'AfricaTown (Student Teacher)', 
    duration: '1 years',
    details: 'Experienced in teaching young students the fundamentals of programming using Python. Developed lesson plans and teaching materials to engage students and facilitate their understanding of programming concepts. •	Utilized hands-on, project-based teaching methodologies to foster a love of programming and technology'

  },
  {
    year: 2016,
    title: 'Precision machine (Sno-Isle) ', 
    duration: '1 years',
    details: 'Operated and maintained precision machinery, ensuing high accuracy and precision. Utilized a meticulous approach to machine maintenance to achieve longevity. •	Worked with a range of precision machinery, including CNC mills and lathes, and optical inspection equipment'

  },
  {
    year: 2019,
    title: 'MPFS Academic Mentor ', 
    duration: '1 years',
    details: 'Guided first year pre-engineering student with resources and educational advice. Arranged weekly one-on-one meetings to provide personalized support on coursework. Provided constructive feedback and advice on coursework, projects, and other related assignments'

  },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] py-4'>Work</h1>
      {data.map((item,idx) => (
        <Workitem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
      ))
      }
    </div>
  );
};

export default Work;