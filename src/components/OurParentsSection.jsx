import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import isaiParents from '../assets/padres-isai.jpg'
import susanaParents from '../assets/papas-susana.jpeg'
// import { WEDDING_CONFIG } from '../constant';
// ============================================
// MAPA DE GOOGLE
// ============================================
export default function OurParents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <section ref={ref} className="py-5 px-6 pb-10 bg-[#24384b]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[60px] luxurious-script-regular text-white ">
            Padres 
          </h2>
          <div className="w-40 h-[1px] bg-[#FFFBF2] mx-auto" />
          <h3 className='pt-5 text-sm uppercase text-[#FFFBF2] playfair-display-main text-[#2C2C2C] px-15'>
            ¡Gracias por acompañarnos
            en este día tan especial!
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-10 flex flex-col"
        >
          <div className='w-65 h-65 self-center bg-black/10 rounded-full border-8 border-white shadow-2xl flex items-center justify-center'>
            <img src={susanaParents} alt="not image" className='w-full h-full object-cover rounded-full' />
          </div>
          <br />
          <p className='luxurious-script-regular text-[#FFFBF2] text-[35px]'>
            Sr. Samuel Ruiz
          </p>
          <p className='luxurious-script-regular text-[#FFFBF2] text-[35px]'>
            Sra. Beatriz Yepiz de Ruiz
          </p>

          <p className='playfair-display-main text-[#FFFBF2]'>- Padres de la Novia -</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-10 flex flex-col"
        >
          <div className='w-65 h-65 self-center bg-black/10 rounded-full border-8 border-white shadow-2xl flex items-center justify-center'>
            <img src={isaiParents} alt="not image" className='w-full h-full object-cover rounded-full' />
          </div>
          <br />
          <p className='luxurious-script-regular text-[#FFFBF2] text-[35px]'>
            Sr. Alfredo Perez
          </p>
          <p className='luxurious-script-regular text-[#FFFBF2] text-[35px]'>
            Sra. Maria Ofelia Borbon de Perez
          </p>

          <p className='playfair-display-main text-[#FFFBF2]'>- Padres del Novio -</p>
        </motion.div>
      </div>
    </section>
  );
}
