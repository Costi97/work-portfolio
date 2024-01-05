import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ServiceCard from './ServiceCard';

const About = () => {
  return (
    <section className='flex min-h-screen flex-col container mx-auto px-12 py-4'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-slate-300`}>
          Introduciton
        </p>
        <h2 className={styles.sectionHeadText}>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffa62e] to-[#f71b1b]'>Overview.</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[17px] max-w-3xl leading-[30px] text-slate-100'
      >
        Highly accomplished Full Stack Engineer with a proven track record in designing and
        deploying sophisticated software solutions for international clients.<br/> Proficient in a
        diverse range of programming languages and frameworks, with a keen emphasis on
        delivering top-tier, scalable applications. Committed to maintaining the highest
        standards of quality in every project. <br/> Always ready to learn something new.
      </motion.p>

      <div className='mt-20 flex items-center justify-center flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </section>
  )
}

export default About