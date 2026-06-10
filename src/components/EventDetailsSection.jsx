import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WEDDING_CONFIG } from '../constant';
import fotoLocal from '../assets/local.PNG'
// ============================================
// DETALLES DEL EVENTO
// ============================================
export function EventDetailsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directionsUrlLocal = `https://www.google.com/maps/dir/?api=1&destination=${WEDDING_CONFIG.venue.coordinates.lat},${WEDDING_CONFIG.venue.coordinates.lng}`;
  const directionsUrlChurch = `https://www.google.com/maps/dir/?api=1&destination=${WEDDING_CONFIG.church.coordinates.lat},${WEDDING_CONFIG.church.coordinates.lng}`;


  return (
    <section ref={ref} className="py-15 bg-[#B29155]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-[80px] imperial-script-regular md:text-6xl font-serif text-[#2C2C2C]">
            Donde y cuando
          </h2>
          <div className="w-24 h-[1px] bg-[#8B7355] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            key={'ceremonia'}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
            className="p-5 rounded-2xl text-center"
          >

            <div className='w-full h-auto p-5 flex flex-col'>
              <h3 className="text-[28px] text-[#2C2C2C] mb-3 ibm-plex-serif-medium">
                Ceremonia Religiosa
              </h3>
              <div className='px-10'>
                <img
                  className=' rounded-2xl'
                  src="https://img.freepik.com/foto-gratis/dentro-catedral_1361-213.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>


              <div className="text-xl text-[#2C2C2C] font-light leading-relaxed py-2">
                <p className='font-bold inline'>Cuando: </p>
                <span>24 de Octubre de 2026 18:00 hrs</span>
                <br />
                <p className='font-bold inline'>Direccion: </p>
                <span>Heriberto Fonseca Ríos, 85287 Basconcobe, Son.</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center mt-10"
              >
                <a
                  href={directionsUrlChurch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#8B7355] text-white px-10 py-4 rounded-full font-medium hover:bg-[#6F5A42] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Abrir en Google Maps
                </a>
              </motion.div>

            </div>

            <motion.div className='w-full h-auto p-5 flex flex-col'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <h3 className="text-[28px] text-[#2C2C2C] mb-3 ibm-plex-serif-medium">
                Local de Fiesta
              </h3>
              <div className='px-10'>
                <img
                  className=' rounded-2xl'
                  src={fotoLocal} alt="" />
              </div>


              <motion.div className="text-xl text-[#2C2C2C] font-light leading-relaxed py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className='font-bold inline'>Cuando: </p>
                <span>24 de Octubre de 2026 19:30 hrs</span>
                <br />
                <p className='font-bold inline'>Direccion: </p>
                <span>Heriberto Fonseca Ríos, 85287 Basconcobe, Son.</span>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center mt-10"
              >
                <a
                  href={directionsUrlLocal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#8B7355] text-white px-10 py-4 rounded-full font-medium hover:bg-[#6F5A42] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Abrir en Google Maps
                </a>
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
