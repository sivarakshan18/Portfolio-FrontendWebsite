import React from 'react'
import {motion} from "motion/react";

const Skills = () => {
 const skills = [
  "JavaScript",
  "Python",
  "React.js",
  "Node.js",
  "Django",
  "HTML5",
  "CSS3",
  "MongoDB",
  "MySQL",
  "Git&GitHub",
  "ML",
  "API",
  "Java"
];

  const skillsList=[...skills,...skills];
  const scrollVarient1={
    animate:{
      x:[0,-2000],
      transition:{
        x:{
          repeat :Infinity,
          repeatType:"loop",
          duration:15,
          ease:"linear"
        }
      }
    }
  }
  const scrollVarient2={
    animate:{
      x:[-2000,0],
      transition:{
        x:{
          repeat :Infinity,
          repeatType:"loop",
          duration:15,
          ease:"linear"
        }
      }
    }
  }
  return (
    <div className=' text-white py-16 '>
         <div className='container mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8'>Skills I've learned</h2>
          <div className='overflow-hidden relative w-full '>
            <motion.div
             variants={scrollVarient1}
             animate="animate"
             className=' whitespace-nowraps flex space-x-10'>
              {
                skillsList.map((company,index)=>(
                  <div key={index}
                  className=' text-lg bg-gray-800 px-7 py-3 rounded-full inline-block '
                  >
                          {company}
                  </div>
                ))
              }
            </motion.div>
          </div>
          <div className=' overflow-hidden relative w-full mt-5'>
          <motion.div
           variants={scrollVarient2}
             animate="animate"
           className=' whitespace-nowraps flex space-x-10'>
          {
                skillsList.map((company,index)=>(
                  <div key={index}
                  className='text-lg bg-gray-800 px-7 py-3 rounded-full inline-block '

                  >
                          {company}
                  </div>
                ))
              }
          </motion.div>
          </div>
         </div>
    </div>
  )
}

export default Skills