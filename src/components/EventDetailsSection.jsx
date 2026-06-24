import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WEDDING_CONFIG } from '../constant';
import church from '../assets/church.svg'
import rings from '../assets/rings.svg'
// ============================================
// DETALLES DEL EVENTO
// ============================================
export function EventDetailsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directionsUrlLocal = `https://www.google.com/maps/dir/?api=1&destination=${WEDDING_CONFIG.venue.coordinates.lat},${WEDDING_CONFIG.venue.coordinates.lng}`;
  const directionsUrlChurch = `https://www.google.com/maps/dir/?api=1&destination=${WEDDING_CONFIG.church.coordinates.lat},${WEDDING_CONFIG.church.coordinates.lng}`;


  return (
    <section ref={ref} className="py-15 bg-[#FFFBF2] ">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-1 gap-8">

          <motion.div
            key={'ceremonia'}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
            className=" rounded-2xl text-center flex flex-col items-center"
          >

            <motion.div className='w-full h-auto p-5 flex flex-col'>
              <img src={church} alt="" className='h-30 w-30 self-center' />
              <h3 className="text-[85px] text-[#2C2C2C] luxurious-script-regular">
                Ceremonia Religiosa
              </h3>

              <div className="text-xl text-[#2C2C2C] font-light leading-relaxed py-2">
                <span className='playfair-display-main text-[30px]'>6:00 PM</span>
                <br />
                <p className='uppercase playfair-display-main text-[17px]'>Iglesia de Dios Templo "La Hermosa"</p>
                <span className='explora-regular text-[30px]'>Basconcobe, Son.</span>
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
                  className="inline-flex items-center text-[20px] border-1 playfair-display-main text-dark rounded-lg py-1 px-9 font-medium hover:bg-[#24384b] hover:text-white transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Ver ubicaci&oacute;n
                </a>
              </motion.div>

            </motion.div>

            <motion.div className='w-full h-auto p-5 flex flex-col mt-8'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <img src={rings} alt="" className='h-30 w-30 self-center' />
              <h3 className="text-[85px] text-[#2C2C2C] luxurious-script-regular">
                Recepci&oacute;n
              </h3>

              <motion.div className="text-xl text-[#2C2C2C] font-light leading-relaxed py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className='playfair-display-main text-[30px]'>7:30 PM</span>
                <br />
                <p className='uppercase playfair-display-main text-[17px]'>Sal&oacute;n de Eventos "Omar"</p>
                <span className='explora-regular text-[30px]'>Basconcobe, Son.</span>
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
                  className="inline-flex items-center text-[20px] border-1 playfair-display-main text-dark  rounded-lg p-1 px-9 font-medium hover:bg-[#24384b] hover:text-white transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Ver ubicaci&oacute;n
                </a>
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
