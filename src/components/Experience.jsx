import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-slate-300`}>
          What i have done so far
        </p>
        <h2 className={styles.sectionHeadText}>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffa62e] to-[#f71b1b]'>Work Experience.</span>
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default SectionWrapper(Experience, "work");