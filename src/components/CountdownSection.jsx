import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WEDDING_CONFIG } from '../constant';

export function CountdownSection() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });


    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(WEDDING_CONFIG.date) - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="pt-10 p-2 h-200 w-full bg-[#24384b]">


            <div className=''>
                <h1 className='text-white luxurious-script-regular text-[50px] text-center  '>
                    Solo Falta...
                </h1>

                <div className='flex justify-center w-full'>
                    <div className="grid grid-cols-4 md:grid-cols-4 w-full playfair-display-main ">
                        {[
                            { value: timeLeft.days, label: 'Días' },
                            { value: timeLeft.hours, label: 'Horas' },
                            { value: timeLeft.minutes, label: 'Minutos' },
                            { value: timeLeft.seconds, label: 'Segundos' }
                        ].map((item, index) => (
                            <div className='flex' key={item.label}>
                                <div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className='flex flex-col w-7/8'
                                >
                                    <div className='justify-center text-center'>
                                        <motion.div
                                            key={item.value}
                                            initial={{ scale: 1 }}
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 0.3 }}
                                            className="text-5xl md:text-6xl text-white mb-2"
                                        >
                                            {String(item.value).padStart(2, '0')}
                                        </motion.div>
                                        <div className="text-sm uppercase tracking-widest text-white">
                                            {item.label}
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/8 self-center'>
                                    {item.label !== 'Segundos' && (
                                        <>
                                            <p className='text-[35px] text-white'>:</p>
                                            <br />
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Calendario */}
                <motion.div className='mt-15 w-full h-80 bg-[#FFFBF2]'>
                    <h1 className='luxurious-script-regular text-[45px] text-center'>Octubre</h1>
                    <motion.div className='grid grid-cols-7 h-8 uppercase text-center playfair-display-main items-center'>
                        <p>Lun</p>
                        <p>Mar</p>
                        <p>Mie</p>
                        <p>Jue</p>
                        <p>Vie</p>
                        <p>Sab</p>
                        <p>Dom</p>
                    </motion.div>
                    <motion.div className='mx-2 border border-[#24384b]'></motion.div>
                    <motion.div className='mt-3 grid grid-cols-7 h-8 uppercase text-center playfair-display-main items-center'>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                    </motion.div>
                    <motion.div className='mt-2 grid grid-cols-7 h-8 uppercase text-center playfair-display-main items-center'>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                    </motion.div>
                    <motion.div className='mt-2 grid grid-cols-7 h-8 uppercase text-center playfair-display-main items-center'>
                        <p>12</p>
                        <p>13</p>
                        <p>14</p>
                        <p>15</p>
                        <p>16</p>
                        <p>17</p>
                        <p>18</p>
                    </motion.div>
                    <motion.div className='mt-2 grid grid-cols-7 h-8 uppercase text-center playfair-display-main items-center'>
                        <p>19</p>
                        <p>20</p>
                        <p>21</p>
                        <p>22</p>
                        <p>23</p>
                        <p className='flex justify-center'>
                            <svg
                                class="w-9 h-9 text-[#24384b] fill-current animate-pulse cursor-pointer hover:scale-110 transition duration-300"
                                viewBox="0 0 24 24"
                                
                            >
                                
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </p>
                        <p>25</p>
                    </motion.div>
                    <motion.div className='mt-2 grid grid-cols-7 h-8 uppercase text-center playfair-display-main items-center'>
                        <p>26</p>
                        <p>27</p>
                        <p>28</p>
                        <p>29</p>
                        <p>30</p>
                        <p>31</p>

                    </motion.div>
                </motion.div>
                <p className='text-white mt-10 px-3 text-center tracking-[.05em] playfair-display-main'
                >NOS ENCONTRAMOS, NOS ELEGIMOS Y HOY QUEREMOS COMPARTIR NUESTRA FELICIDAD CON USTEDES...</p>
            </div>
        </section>
    );
}