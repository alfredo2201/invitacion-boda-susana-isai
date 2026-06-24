import { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from 'framer-motion';
// ============================================
// SECCIÓN 1
// Galeria y poner musica
// ============================================
export function HeroSection() {

    const slides = [
        {
            id: 1,
            image: 'https://res.cloudinary.com/dazthovzk/image/upload/v1782265899/WhatsApp_Image_2026-06-23_at_17.43.12_1_gu5ldb.jpg',
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/dazthovzk/image/upload/v1782265899/WhatsApp_Image_2026-06-23_at_17.43.11_lmbuen.jpg",
        },
        {
            id: 3,
            image: 'https://res.cloudinary.com/dazthovzk/image/upload/v1782265898/WhatsApp_Image_2026-06-23_at_17.43.18_kl8viw.jpg',
        },
        {
            id: 4,
            image: 'https://res.cloudinary.com/dazthovzk/image/upload/v1782265895/WhatsApp_Image_2026-06-23_at_17.43.16_3_bfdiyf.jpg',
        },
        {
            id: 5,
            image: 'https://res.cloudinary.com/dazthovzk/image/upload/v1782265894/WhatsApp_Image_2026-06-23_at_17.43.15_mrccmi.jpg',
        },
        {
            id: 6,
            image: 'https://res.cloudinary.com/dazthovzk/image/upload/v1782265893/WhatsApp_Image_2026-06-23_at_17.43.15_1_whdegt.jpg',
        },
                {
            id: 7,
            image: 'https://res.cloudinary.com/dazthovzk/image/upload/v1782265891/WhatsApp_Image_2026-06-23_at_17.43.12_2_higsqx.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);



    const previousSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    return (
        <motion.section
            className="relative h-130 flex items-center justify-between overflow-hidden"
        >
            {/* Fondo con gradiente suave */}
            <div className="absolute h-full w-full group">
                <div
                    className="w-full h-full bg-center bg-cover duration-500 relative overflow-hidden brightness-50"
                    style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                >
                </div>

                {/* Left Arrow */}
                <div className="absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all duration-300">
                    <BsChevronLeft
                        onClick={previousSlide}
                        size={30}
                        className="hover:scale-110 transition-all duration-300 -translate-x-1"
                    />
                </div>

                {/* Right Arrow */}
                <div className="absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all duration-300">
                    <BsChevronRight
                        onClick={nextSlide}
                        size={30}
                        className="hover:scale-110 transition-all duration-300 translate-x-1"
                    />
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"}`}
                        ></button>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
