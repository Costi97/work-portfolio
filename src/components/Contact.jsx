import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-slate-300`}>
          Get in touch
        </p>
        <h2 className={styles.sectionHeadText}>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffa62e] to-[#f71b1b]'>Contact.</span>
        </h2>
      </motion.div>

      <div className='flex justify-evenly items-center pt-10'>

        <button
          className='px-6 py-3 rounded-full default-gradient text-slate-100 text-xl'
          onClick={() => {
            window.open("https://www.linkedin.com/in/alberto-costamagna-a63343119/", "_blank");
          }}
        >
          <div className='flex items-center content-center'>
            <FaLinkedin/> &nbsp; LinkedIn
          </div>
        </button>

        <button
         className='px-6 py-3 rounded-full default-gradient flex-col text-slate-100 text-xl'
         onClick={() => {
          window.open("mailto:alberto.costi97@gmail.com", "self");
         }}
        >
          <div className='flex items-center content-center'>
            <MdOutlineEmail/> &nbsp; Contact Me
          </div>
        </button>
        
      </div>
    </section>
  )
}

export default SectionWrapper(Contact, "contact");