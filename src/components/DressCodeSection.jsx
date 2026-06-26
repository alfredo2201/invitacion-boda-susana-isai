import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import DressCarrousell from './DressCarrousel';

const PHOTOS_WOMAN = [
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432410/WhatsApp_Image_2026-06-25_at_16.38.14_bax14q.jpg", alt: "Foto 1" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432410/WhatsApp_Image_2026-06-25_at_16.38.14_3_ptd8js.jpg", alt: "Foto 8" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432410/WhatsApp_Image_2026-06-25_at_16.38.14_2_ji52f2.jpg", alt: "Foto 3" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432409/WhatsApp_Image_2026-06-25_at_16.38.14_1_lxsl0c.jpg", alt: "Foto 5" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432409/WhatsApp_Image_2026-06-25_at_16.38.13_gvtrhb.jpg", alt: "Foto 7" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432408/WhatsApp_Image_2026-06-25_at_16.38.13_1_ljmgfw.jpg", alt: "Foto 2" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432408/WhatsApp_Image_2026-06-25_at_16.38.12_idm33b.jpg", alt: "Foto 4" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432408/WhatsApp_Image_2026-06-25_at_16.38.12_1_r66nm0.jpg", alt: "Foto 6" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432408/WhatsApp_Image_2026-06-25_at_16.38.11_1_fxrh0a.jpg", alt: "Foto 9" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432408/WhatsApp_Image_2026-06-25_at_16.38.11_by7fpm.jpg", alt: "Foto 10" },
];

const PHOTOS_GENTELMAN = [
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432328/WhatsApp_Image_2026-06-25_at_16.38.58_1_unbsi1.jpg", alt: "Foto 1" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432328/WhatsApp_Image_2026-06-25_at_16.38.59_1_fcvkqv.jpg", alt: "Foto 8" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432327/WhatsApp_Image_2026-06-25_at_16.38.59_okdtcy.jpg", alt: "Foto 3" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432327/WhatsApp_Image_2026-06-25_at_16.38.58_xgiruu.jpg", alt: "Foto 5" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432327/WhatsApp_Image_2026-06-25_at_16.38.58_2_kp2gbg.jpg", alt: "Foto 7" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432327/WhatsApp_Image_2026-06-25_at_16.38.57_j0pciy.jpg", alt: "Foto 2" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432327/WhatsApp_Image_2026-06-25_at_16.38.56_hvblm6.jpg", alt: "Foto 4" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432326/WhatsApp_Image_2026-06-25_at_16.39.00_vdgfps.jpg", alt: "Foto 6" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782432326/WhatsApp_Image_2026-06-25_at_16.38.56_1_hujcjz.jpg", alt: "Foto 6" },
];

export default function DressCode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <section ref={ref} className="py-10 px-6 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[85px]  luxurious-script-regular text-[#2C2C2C] ">
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
            className='text-xl px-10 pb-2 text-dark leading-6 playfair-display-main'>
            FORMAL
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-md px-10 text-dark leading-6 playfair-display-main"
          >
            El blanco está reservado para la novia,
            ¡nos encantará verte en otros colores
          </motion.p>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-lg px-1 pb-2 text-dark leading-6 playfair-display-main mt-10'>
            IDEAS PARA LAS MUJERES
          </motion.h4>
          <DressCarrousell photos={PHOTOS_WOMAN}></DressCarrousell>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-lg px-1 pb-2 text-dark leading-6 playfair-display-main mt-10'>
            IDEAS PARA LOS CABALLEROS
          </motion.h4>
          <DressCarrousell photos={PHOTOS_GENTELMAN}></DressCarrousell>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-5 inline-block "
          >
            <motion.p
              className='text-black/50 playfair-display-main mb-3'>
              No Usar:
            </motion.p>
            <motion.div

              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-block w-10 h-10 bg-[#24384b] rounded-full mx-1" />

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="inline-block w-10 h-10 bg-white rounded-full mr-1" />

            <motion.div

              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-block w-10 h-10 bg-[#4F82BD] rounded-full" />

            <motion.div

              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="inline-block w-10 h-10 bg-pink-500 rounded-full mx-1" />


            <motion.div

              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="inline-block w-10 h-10 bg-[#FF0000] rounded-full mx-1" />


          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}






