import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AudioPlayer } from 'react-audio-play';
import cancion from '../assets/Cancion.mp3'


export default function InitialSection({ initialOpacity, initialScale }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className='bg-[#FFFBF2] w-full h-auto'
        >

            <motion.div
                ref={ref}
                className="text-center w-full h-155 flex flex-col items-center justify-center relative bg-cover bg-center"
                style={{
                    opacity: initialOpacity,
                    scale: initialScale,
                    backgroundImage:
                        "url('https://res.cloudinary.com/dazthovzk/image/upload/v1782262146/Foto_1_ued7fh.jpg')"
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Overlay oscuro para mejorar legibilidad */}
                <div className="absolute inset-0 bg-[#24384b]/50"></div>

                <div className="relative h-full grid grid-cols-1 place-content-between pb-15 pt-10">
                    <div>
                        <h1 className="text-white text-[70px] luxurious-script-regular">
                            Nuestra Boda
                        </h1>

                        <p className="-translate-y-7 text-white text-[16px] playfair-display-main tracking-[.15em]">
                            ISAÍ & SUSANA
                        </p>
                    </div>


                    <div className="pt-5">
                        <p className="text-white text-[11px] playfair-display-main tracking-[.25em] px-10">
                            PORQUE TÚ HAS SIDO PARTE DE NUESTRA HISTORIA, QUEREMOS QUE ESTÉS EN NUESTRO MEJOR CAPÍTULO
                        </p>
                    </div>
                </div>
            </motion.div>
            <div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center w-full flex flex-col items-center py-3"
            >
                <div className='h-1/2'>
                    <img src='https://res.cloudinary.com/dazthovzk/image/upload/v1782262313/anillos-de-boda_q5gmpx.png' alt="" className='w-25 h-25 ' />
                </div>

                <div className='w-85 bg-gray-500'>
                    <div className='w-full h-15 bg-[#24384b] flex items-center'>
                        <p className='text-white text-[11px] playfair-display-main px-10 tracking-[.1em]'>DA PLAY PARA ESCUCHAR NUESTRA CANCI&Oacute;N</p>
                    </div>
                    <AudioPlayer src={cancion}
                        color="#ffffff"
                        sliderColor="#24384b"
                        volume={50}
                        volumePlacement='top'
                        style={{ background: "#999999", borderRadius: "0", padding: "30px" }}
                        className='.custom-style'
                    />
                </div>
            </div>
        </section>
    )

}