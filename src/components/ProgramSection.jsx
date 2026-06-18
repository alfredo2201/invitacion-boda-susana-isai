import { useRef } from 'react';
import { useInView } from 'framer-motion';
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
                <h1 className='luxurious-script-regular text-[50px]'>Itinerario</h1>
                <p className='playfair-display-main -translate-y-5'>Los detalles del gran d&iacute;a</p>
                <div className='grid grid-cols-3'>
                    {/* Columna izquierda */}
                    <div className='flex flex-col gap-10 text-right pr-4'>
                        <div className='h-15'>
                            <p className='playfair-display-main text-[15px]'>18:00 hrs</p>
                            <span className='playfair-display-main text-[15px]'>Ceremonia</span>
                        </div>
                        <div className='h-15'>
                            <p className='playfair-display-main text-[15px]'>19:00 hrs</p>
                            <span className='playfair-display-main text-[15px]'>Recepción</span>
                        </div>
                        <div className='h-15'>
                            <p className='playfair-display-main text-[15px]'>20:00 hrs</p>
                            <span className='playfair-display-main text-[15px]'>Llegada</span>
                        </div>
                        <div className='h-15'>
                            <p className='playfair-display-main text-[15px]'>22:00 hrs</p>
                            <span className='playfair-display-main text-[15px]'>Cena</span>
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
                                className='relative z-10 w-3 h-3 rounded-full bg-black'
                            />
                        ))}
                    </div>
                    <div className='flex flex-col gap-10 text-left pr-4'>
                        <div className='h-15'>
                            <img src={church} alt="" className='h-13' />
                        </div>
                        <div className='h-15'>
                            <img src={recepcion} alt="" className='h-13' />
                        </div>
                        <div className='h-15'>
                            <img src={novios} alt="" className='h-13' />
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
                        <p className='playfair-display-main text-[13px] text-left'>Toda la informacion organizada para que solo te preocupes por disfrutar</p>
                    </div>
                </div>
            </div>
        </section>
    )

}