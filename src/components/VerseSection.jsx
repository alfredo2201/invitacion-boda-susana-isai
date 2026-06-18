import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ============================================
// VERSÍCULO BÍBLICO
// ============================================
export function VerseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-15 px-6 text-white bg-[#24384b] relative overflow-hidden">
     

      <div className="max-w-xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className='luxurious-script-regular text-[60px] md:text-6xl'>Recomendaciones</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-md md:text-lg font-light leading-relaxed italic"
          >
            
            Seguir las indicaciones del personal de la boda                              
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-md md:text-lg font-light leading-relaxed italic"
          >            
            Ser puntual
          </motion.p>
        
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl  playfair-display-main uppercase text-white mt-7"
          >
            Sin ni&ntilde;os
          </motion.p>
                    <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-md md:text-lg font-light leading-relaxed italic"
          >            
            Un evento para adultos est&aacute; en camino. !Asi que preparense para una noche llena de diversi&oacute;n! Dejemos a los ni&ntilde;os en casa esta vez.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}