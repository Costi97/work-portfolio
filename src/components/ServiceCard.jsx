import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

function ServiceCard({ index, title, icon }) {
  return (
    <Tilt className='xs:w-[250px] w-40'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full default-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-black rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default ServiceCard;