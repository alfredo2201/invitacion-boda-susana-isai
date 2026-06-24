import { useState, useEffect, useRef } from 'react';
import { AnimatePresence,motion, useInView } from 'framer-motion';
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
                    days:    Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours:   Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };
        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 28 },
        show:   { opacity: 1, y: 0 }
    };

    return (
        <section className="w-full bg-[#24384b] pt-10 pb-14 px-4 sm:px-8">
            <div ref={ref}>

                {/* Título */}
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-white luxurious-script-regular text-[50px] text-center"
                >
                    Solo Falta...
                </motion.h1>

                {/* Contador */}
                <div className="flex justify-center w-full mb-10">
                    <div className="grid grid-cols-4 w-full max-w-xs sm:max-w-sm md:max-w-md playfair-display-main">
                        {[
                            { value: timeLeft.days,    label: 'Días'     },
                            { value: timeLeft.hours,   label: 'Horas'    },
                            { value: timeLeft.minutes, label: 'Minutos'  },
                            { value: timeLeft.seconds, label: 'Segundos' }
                        ].map((item, index) => (
                            <div className="flex" key={item.label}>
                                <motion.div
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate={isInView ? "show" : "hidden"}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.15 + index * 0.1,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="flex flex-col w-7/8"
                                >
                                    <div className="text-center">
                                        <AnimatePresence mode="popLayout">
                                            <motion.div
                                                key={item.value}
                                                initial={{ opacity: 0, y: -14 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{   opacity: 0, y:  14 }}
                                                transition={{ duration: 0.22, ease: [0.34, 1.56, 0.64, 1] }}
                                                className="text-[clamp(28px,7vw,56px)] md:text-6xl text-white mb-1 md:mb-2"
                                            >
                                                {String(item.value).padStart(2, '0')}
                                            </motion.div>
                                        </AnimatePresence>
                                        <div className="text-[12px] uppercase tracking-widest text-white">
                                            {item.label}
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="w-1/8 self-center">
                                    {item.label !== 'Segundos' && (
                                        <>
                                            <p className="text-[clamp(20px,5vw,35px)] text-white leading-none">:</p>
                                            <br />
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Calendario */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full max-w-xs sm:max-w-sm mx-auto bg-[#FFFBF2]"
                >
                    <h1 className="luxurious-script-regular text-[clamp(32px,9vw,45px)] text-center pt-3">
                        Octubre
                    </h1>

                    {/* Cabecera días */}
                    <div className="grid grid-cols-7 h-7 sm:h-8 uppercase text-center playfair-display-main items-center px-1 sm:px-2">
                        {['Lun','Mar','Mie','Jue','Vie','Sab','Dom'].map(d => (
                            <p key={d} className="text-[clamp(11px,2vw,11px)]">{d}</p>
                        ))}
                    </div>

                    <div className="mx-2 border border-[#24384b]" />

                    {/* Semanas */}
                    {[
                        [null, null, null, 1, 2, 3, 4],
                        [5, 6, 7, 8, 9, 10, 11],
                        [12, 13, 14, 15, 16, 17, 18],
                        [19, 20, 21, 22, 23, '❤', 25],
                        [26, 27, 28, 29, 30, 31, null],
                    ].map((week, wi) => (
                        <div
                            key={wi}
                            className="mt-2 grid grid-cols-7 h-7 sm:h-8 text-center playfair-display-main items-center px-1 sm:px-2"
                        >
                            {week.map((day, di) => (
                                <div key={di} className="flex justify-center items-center">
                                    {day === '❤' ? (
                                        <motion.svg
                                            animate={{ scale: [1, 1.25, 1, 1.15, 1] }}
                                            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-[clamp(20px,5vw,36px)] h-[clamp(20px,5vw,36px)] text-[#24384b] fill-current cursor-pointer"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </motion.svg>
                                    ) : (
                                        <p className="text-[clamp(15px,3vw,20px)] uppercase">
                                            {day ?? ''}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>

                {/* Frase final */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-white mt-10 px-4 sm:px-8 md:px-16 text-center tracking-[.25em] playfair-display-main text-[12px]"
                >
                    NOS ENCONTRAMOS, NOS ELEGIMOS Y HOY QUEREMOS COMPARTIR NUESTRA FELICIDAD CON USTEDES...
                </motion.p>

            </div>
        </section>
    );
}