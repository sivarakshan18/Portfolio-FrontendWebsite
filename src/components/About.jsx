import React from "react";
import about from "../assets/about.png";
import {motion} from "motion/react";
import { useInView } from "react-intersection-observer";
const About = () => {
    const {ref,inView}=useInView({
        triggerOnce:true,
        threshold:0.1,
    })
  return (
    <div id="about" className="text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
        ref={ref}
        initial={{opacity:0,y:100}}
        animate={inView ? {opacity:1,y:0}:{opacity:0,y:100}}
        transition={{delay:0.1,duration:0.5}}
        className="text-3xl md:text-4xl font-bold mb-8 underline">
          About Me
        </motion.h2>
        <motion.p
         ref={ref}
         initial={{opacity:0,y:100}}
         animate={inView ? {opacity:1,y:0}:{}}
         transition={{delay:0.5,duration:0.5}}
         className="mb-12 text-gray-400 text-center">
         I’m a Computer Science student passionate about building efficient and user-friendly web applications.
         
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <motion.div 
            ref={ref}
            initial={{opacity:0,x:-100}}
            animate={inView ? {opacity:1,x:0}:{}}
            transition={{delay:0.6,duration:0.5}}
          className="mb-8 md:mb-0 md:mr-8 flex justify-center">
           <img src={about} alt="" className="w-[80%] sm:w-[80%] md:w-[60%]" />

          </motion.div>
          <motion.p
           ref={ref}
           initial={{opacity:0,x:100}}
           animate={inView ? {opacity:1,x:0}:{}}
           transition={{delay:0.6,duration:0.5}}
           className="md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl">
   We are a team of passionate developers and designers dedicated to creating innovative, user-centric digital solutions. With a strong foundation in modern technologies and a focus on quality, we strive to bring ideas to life through clean code, thoughtful design, and seamless user experiences.
          </motion.p>
        </div>
        <div className="flex flex-col sm:flex-row justify-around items-center mt-1 space-y-6 sm:space-y-0">
          <motion.div 
           ref={ref}
           initial={{opacity:0}}
           animate={inView ? {opacity:1}:{}}
           transition={{delay:1.2,duration:0.3}}
          className="text-center">
            <h3 className=" text-3xl md:text-8xl font-bold md:my-6 text-purple-500">
              5+
            </h3>
            <motion.p 
             ref={ref}
             initial={{opacity:0,y:100}}
             animate={inView ? {opacity:1,y:0}:{}}
             transition={{delay:1.7,duration:0.5}}
            className="text-sm sm:text-base text-gray-300 ">
               Projects I have Made
            </motion.p>
          </motion.div>

          <motion.div
           ref={ref}
           initial={{opacity:0}}
           animate={inView ? {opacity:1}:{}}
           transition={{delay:1.4,duration:0.3}}
          >
            <h3 className=" text-3xl md:text-8xl font-bold md:my-6 text-purple-500">
              4+
            </h3>
            <motion.p
              ref={ref}
              initial={{opacity:0,y:100}}
              animate={inView ? {opacity:1,y:0}:{}}
              transition={{delay:1.8,duration:0.5}}
             className="text-sm sm:text-base text-gray-300 ">
             Certifications Earned
            </motion.p>
          </motion.div>
          <motion.div
           ref={ref}
           initial={{opacity:0}}
           animate={inView ? {opacity:1}:{}}
           transition={{delay:1.6,duration:0.3}}
          >
            <h3 className=" text-3xl md:text-8xl font-bold md:my-6 text-purple-500">
              6+
            </h3>
            <motion.p
              ref={ref}
              initial={{opacity:0,y:100}}
              animate={inView ? {opacity:1,y:0}:{}}
              transition={{delay:1.9,duration:0.5}}
             className="text-sm sm:text-base text-gray-300 ">
            Skills I’ve Learned So Far
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
