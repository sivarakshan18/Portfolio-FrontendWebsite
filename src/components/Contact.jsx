import React from 'react';
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';

const Contact = () => {
  // Separate useInView hooks
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: footerRef, inView: footerInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div id='contact'>
      {/* Header */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12'>
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: -100 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className='text-4xl font-bold text-white'
        >
          Let's Discuss Your <span className='text-purple-500'>Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='text-slate-400 mt-4'
        >
          Let's make something new, different, and more meaningful — more visual or conceptual.
        </motion.p>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>

        {/* Contact Info */}
        <div className='space-y-6'>
          {[
            {
              icon: <FaPhone className='text-white w-6 h-6' />,
              title: "Call Me",
              value: "+91 93612 37734",
              delay: 0.2
            },
            {
              icon: <FaEnvelope className='text-white w-6 h-6' />,
              title: "Email",
              value: "Sivarakshan60@gmail.com",
              delay: 0.4
            },
            {
              icon: <FaMapMarkerAlt className='text-white w-6 h-6' />,
              title: "Address",
              value: "Tirunelveli, Tamil Nadu, India",
              delay: 0.6
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              ref={infoRef}
              initial={{ opacity: 0, x: -50 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: item.delay, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className='flex items-center space-x-4'
            >
              <motion.div
                className='bg-purple-500 p-4 rounded-full'
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                {item.icon}
              </motion.div>
              <div>
                <p className='textlg font-medium text-purple-500'>{item.title}</p>
                <p className='text-white'>{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, x: 50 }}
          animate={formInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className='space-y-4 text-white'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <motion.input
              type="text"
              placeholder='Full name'
              whileFocus={{ scale: 1.02 }}
              className='border border-purple-500 bg-gray-900 p-4 rounded-md'
            />
            <motion.input
              type="email"
              placeholder='Your Email'
              whileFocus={{ scale: 1.02 }}
              className='border border-purple-500 bg-gray-900 p-4 rounded-md'
            />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <motion.input
              type="text"
              placeholder='Phone number'
              whileFocus={{ scale: 1.02 }}
              className='border border-purple-500 bg-gray-900 p-4 rounded-md'
            />
            <motion.input
              type="text"
              placeholder='Budget'
              whileFocus={{ scale: 1.02 }}
              className='border border-purple-500 bg-gray-900 p-4 rounded-md'
            />
          </div>
          <motion.textarea
            placeholder='Message'
            whileFocus={{ scale: 1.02 }}
            className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full'
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-200'
          >
            Submit Message
          </motion.button>
        </motion.form>
      </div>

      {/* Footer */}
      <motion.div
        ref={footerRef}
        initial={{ opacity: 0 }}
        animate={footerInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.5 }}
        className='mt-48 flex flex-col md:flex-row justify-between items-center p-5 text-white border-t-2 border-purple-500'
      >
        <p>© 2022. All Rights Reserved</p>
        <p>Siva Coding</p>
        <div className='flex justify-center space-x-4 mt-4 md:mt-0'>
          {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className='hover:text-purple-500 cursor-pointer'
            >
              <Icon className='w-6 h-6' />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
