import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ProjectCard from './ProjectCard';

const Works = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-slate-300`}>
          My projects
        </p>
        <h2 className={styles.sectionHeadText}>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffa62e] to-[#f71b1b]'>Projects.</span>
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-slate-100 text-[17px] max-w-3xl leading-[30px]'
        >
          My project..... da cambiare ciaoasopasodpasodasdjdjklsdjflkdsjfksdfjjkhdsfjkdsfsdfjkjhsdfkjsdfhjksdfhkjsdfkjsdfkj
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>

    </section>
  )
}

export default SectionWrapper(Works, "");