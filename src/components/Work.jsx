import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Skills from "./Skills";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Hospital Management System",
      decription:
        "A full-stack web application to manage hospital operations including patient registration, doctor appointments, and admin control.It features secure role-based login for patients, doctors, and admins, built using Django, React, and JWT authentication.",
      image: project1,
      link: "#",
    },
    {
      id: 2,
      title: "Instagram Login Page",
      decription:"A responsive front-end clone of Instagram's login page built using HTML, CSS.Focused on modern UI design, mobile responsiveness, and pixel-perfect layout replication",
      image: project2,
      link: "#",
    },
    {
      id: 3,
      title: "TravelBloom",
      decription:"A responsive travel website for exploring destinations, booking trips, and viewing packages with a user-friendly interface.Built using HTML, CSS, and JavaScript, focusing on modern design and smooth user experience.",
      image: project3,
      link: "#",
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div id="work" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-x-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl text-white underline font-bold text-center mb-12 "
        >
          My Work
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12 text-gray-400 text-center"
        >
          My work reflects practical learning through real projects and certifications, showcasing growth in creativity, problem-solving, and technical skills.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {projects.map((pro) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: pro.id * 0.2, duration: 0.5 }}
              key={pro.id}
              className="bg-gray-900 shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={pro.image}
                alt=""
                className="w-full h-48 object-cover "
              />
              <div className=" p-6">
                <h3 className="text-xl text-white font-semibold mb-2">
                  {pro.title}
                </h3>
                <p className="text-slate-400 mb-4 ">{pro.decription}</p>
                <button className="border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition">
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Skills />
      </motion.div>
    </div>
  );
};

export default Work;
