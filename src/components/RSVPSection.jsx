import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { WEDDING_CONFIG } from '../constant';
import sello from '../assets/sello.webp'
// ============================================
// RSVP (Confirmación)
// ============================================

export function RSVPSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleRSVP = () => {
    const message = encodeURIComponent(
      `¡Hola! Confirmo mi asistencia para 2 personas a la boda de ${WEDDING_CONFIG.groom} y ${WEDDING_CONFIG.bride} 💒`
    );
    window.open(`https://wa.me/${WEDDING_CONFIG.rsvpWhatsApp}?text=${message}`, '_blank');
  };

  return (
    <section ref={ref} className="py-10 px-6 relative overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96  rounded-full opacity-5 blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='flex flex-col items-center'
        >
          <h2 className="text-[70px] luxurious-script-regular text-[#2C2C2C]">
            Confirma tu Asistencia
          </h2>
          <div className="w-45 h-[1px] bg-[#8B7355] mx-auto mb-5" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#6B6B6B] playfair-display-main leading-relaxed"
          >
            Por favor confirma tu asistencia antes del 1 de Agosto.
          </motion.p>
          <img src={sello} alt="" className='h-30 w-30 translate-y-15' />
          <div className='flex flex-col w-full lg:w-1/2 bg-[#24384b] px-15 pt-20 pb-8 justify-center items-center gap-2'>
            <h1 className='playfair-display-main uppercase text-white text-md'>Ser&aacute; un honor contar con tu presencia</h1>
            <p className='luxurious-script-regular text-white text-[35px]'>¡Te Esperamos!</p>
            <motion.button
              onClick={handleRSVP}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-2/3 items-center gap-3 bg-[#8B7355] text-white py-1 rounded-xl text-md playfair-display-main tracking-[.15em] uppercase hover:bg-[#6F5A42] transition-all shadow-xl hover:shadow-2xl hover:cursor-pointer"
            >
              Confirmar
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
