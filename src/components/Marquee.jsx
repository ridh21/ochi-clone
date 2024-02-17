import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div className='w-full py-10 rounded-t-3xl bg-emerald-900'>
      <div className='text border-t-2 border-b-2 overflow-hidden border-zinc-300 flex gap-10 whitespace-nowrap'>
        <motion.div
          animate={{ x: ['0%', '-100%'] }}
          transition={{ ease: 'linear', duration: 80, loop: Infinity }}
          className='flex space-x-10'
        >
          {[...Array(10)].map((_, index) => (
            <h1
              key={index}
              className='text-[25vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase -mb-[15vh] pt-10 font-semibold'
            >
              We are ochi
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
