import React from 'react';
import { CardData } from '../Data/CardData';
import { motion } from 'framer-motion';

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
};

const textAnimate = {
  offscreen: { y: 100, opacity: 1 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
};

export const Card = () => {
  return (
    <>
      {CardData.map((data) => (
        <div className="wrapper" key={data.h2}>
          <motion.div
            className="card"
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.div className="img" variants={imageAnimate}>
              {data.image}
            </motion.div>

            <motion.h2 variants={textAnimate}>{data.h2}</motion.h2>

            <motion.p variants={textAnimate}>{data.p}</motion.p>
          </motion.div>
        </div>
      ))}
    </>
  );
};
