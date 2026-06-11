import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function ProgramSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <section>
            <div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center my-3"
            >
                <h1 className='luxurious-script-regular text-[50px]'>Itinerario</h1>
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

                    {/* Columna derecha */}
                    <div />
                </div>
            </div>
        </section>
    )

}