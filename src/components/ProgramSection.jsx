import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import church from '../assets/church-2.svg'
import recepcion from '../assets/recepcion.svg'
import novios from '../assets/novios.svg'
import dinner from '../assets/dinner.svg'
import people from '../assets/people.svg'

export default function ProgramSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <section>
            <div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center my-3 flex flex-col justify-center items-center"
            >
                <h1 className='luxurious-script-regular text-[60px]'>Itinerario</h1>
                <p className='playfair-display-main -translate-y-5 uppercase text-md'>Los detalles del gran d&iacute;a</p>
                <div className='grid grid-cols-3 mt-7 w-50'>
                    {/* Columna izquierda */}
                    <div className='flex flex-col gap-10 text-right '>
                        <div className='h-15'>
                           <img src={church} alt="" className='h-13' />
                        </div>
                        <div className='h-15'>
                            <p className='playfair-display-main text-md'>18:30 hrs</p>
                            <span className='playfair-display-main text-md'>Recepción</span>
                        </div>
                        <div className='h-15'>
                           <img src={novios} alt="" className='h-13' />
                        </div>
                        <div className='h-15'>
                            <p className='playfair-display-main text-md'>22:00 hrs</p>
                            <span className='playfair-display-main text-md'>Cena</span>
                        </div>
                    </div>

                    {/* Columna central */}
                    <div className='relative grid grid-cols-1 justify-items-center items-center gap-10'>
                        {/* Línea vertical */}
                        <div className='absolute top-0 bottom-0 w-[1px] bg-gray-300 '></div>

                        {/* Puntos */}
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className='relative z-10 w-3 h-3 rounded-full bg-black flex justify-center'
                            >
                                <motion.svg                                    
                                    className="w-2 text-white fill-current cursor-pointer"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </motion.svg>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-10 text-left '>
                        <div className='h-15 text-right'>                            
                             <p className='playfair-display-main text-md'>17:30 hrs</p>
                            <span className='playfair-display-main text-md'>Ceremonia</span>
                        </div>
                        <div className='h-15'>
                            <img src={recepcion} alt="" className='h-13' />
                        </div>
                        <div className='h-15'>                            
                             <p className='playfair-display-main text-md'>19:00 hrs</p>
                            <span className='playfair-display-main text-md'>Entrada</span>
                        </div>
                        <div className='h-15'>
                            <img src={dinner} alt="" className='h-15' />
                        </div>
                    </div>
                </div>
                <img src={""} alt="" />
                <div className='w-3/4 lg:w-1/3 h-18 border-1 border-[#B8B5A7] self-center mt-10 rounded-lg flex items-center justify-center'>
                    <div className='w-1/6 h-full justify-center items-center flex'>
                        <img src={people} alt="" className='h-8' />
                    </div>
                    <div className='w-5/6'>
                        <p className='playfair-display-main text-md text-left'>Toda la informacion organizada para que solo te preocupes por disfrutar</p>
                    </div>
                </div>
            </div>
        </section>
    )

}