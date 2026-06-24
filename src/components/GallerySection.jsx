import { motion } from 'framer-motion';
// import { WEDDING_CONFIG } from '../constant';

export default function GallerySection() {
    return (
        <section ref={null}>
            <div
                className=" w-full text-center bg-[#FFFBF2]"
            >
                {/* <h1 className='pt-12 ibm-plex-serif-light text-[35px]'>¡NOS CASAMOS!</h1>
                <p className='pb-10 text-[20px] px-10 ibm-plex-serif-regular'>Y queremos que vivas este momento tan especial junto a nosotros</p> */}
                {/* Contenido */}
                <div className=" z-10 text-center -translate-y-6 px-6 max-w-5xl mx-auto ">
                    <motion.div
                        className=''
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="mb-8">
                            <motion.div
                                className="inline-block"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                            >

                            </motion.div>
                        </div>

                        <div className='flex flex-col justify-center items-center text-center'>
                            <motion.div className="flex ">
                                <motion.h1
                                    className="self-start luxurious-script-regular text-[70px] md:text-8xl lg:text-9xl text-dark tracking-tight  px-6 rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.4 }}
                                >
                                    Save

                                </motion.h1>

                                <span className="translate-y-1 text-[70px] text-[#C79628] luxurious-script-regular">The</span>


                                <motion.h1
                                    className=" self-end luxurious-script-regular text-[70px] md:text-8xl lg:text-9xl text-dark tracking-tight  px-6 rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.4 }}
                                >
                                    Date
                                </motion.h1>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

            </div>

        </section>
    )
}