import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import suit from '../assets/suit.png'
import dress from '../assets/dress.png'

export default function DressCode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-10 px-6 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[60px] md:text-6xl imperial-script-regular text-[#2C2C2C] ">
          Dress Code
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-xl md:text-2xl px-10 pb-2 text-dark leading-6 ibm-plex-serif-regular'>
            FORMAL
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-md md:text-2xl px-10 text-dark leading-6 "
          >
            El blanco está reservado para la novia,
            ¡nos encantará verte en otros colores
          </motion.p>

          <motion.div
          className='w-full flex justify-center pt-10'
          >
             <motion.img
              src={suit}
              className='h-50'
            />
            <motion.img
              src={dress}
              className='h-50'
            />
           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-5 inline-block "
          >
            <motion.p
              className='text-black/50'>
              No Usar:
            </motion.p>
            <motion.div

              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-block w-10 h-10 bg-green-500 rounded-full mx-1" />

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="inline-block w-10 h-10 bg-red-500 rounded-full mr-1" />

            <motion.div

              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-block w-10 h-10 bg-blue-500 rounded-full" />

            <motion.div

              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="inline-block w-10 h-10 bg-pink-500 rounded-full mx-1" />

            {/* <img src={fotoFecha} alt="" /> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}






