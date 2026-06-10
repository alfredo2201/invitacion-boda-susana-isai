import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AudioPlayer } from 'react-audio-play';
import cancion from '../assets/Cancion.mp3'

export default function InitialSection({ initialOpacity, initialScale }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });  
        
    return (
        <motion.section className='bg-[#FFFBF2] w-full h-200'
            style={{ opacity: initialOpacity, scale: initialScale }}>

            <div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center bg-[#24384b] w-full h-4/6 flex flex-col items-center"
            >

                <h1 className='text-white text-[80px] luxurious-script-regular '>Nuestra Boda</h1>

                <p className='-translate-y-7 text-white text-[16px] playfair-display-main tracking-[.15em]'>ISA&Iacute; & SUSANA</p>

                <img src="" alt="" className='w-60 h-60' />

                <div className='pt-5'>
                    <p className='text-white text-[12px] playfair-display-main px-2 tracking-[.25em]'>PORQUE T&Uacute; HAS SIDO PARTE DE NUESTRA </p>
                    <p className='text-white text-[12px] playfair-display-main px-2 tracking-[.25em]'>HISTORIA, QUEREMOS QUE EST&Eacute;S EN </p>
                    <p className='text-white text-[12px] playfair-display-main px-2 tracking-[.25em]'>NUESTRO MEJOR CAP&Iacute;TULO</p>
                </div>


            </div>
            <div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center w-full h-2/6 flex flex-col items-center py-3"
            >
                <div className='h-1/2'>
                    <img src="" alt="" className='w-25 h-25' />
                </div>

                <div className='w-2/3 h-1/2 bg-gray-500'>
                    <div className='w-full h-1/2 bg-[#24384b] flex items-center'>
                        <p className='text-white text-[12px] playfair-display-main px-10 tracking-[.1em]'>DA PLAY PARA ESCUCHAR NUESTRA CANCI&Oacute;N</p>
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
        </motion.section>
    )

}