import { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import image1 from '../assets/pedida_1.png'
import image2 from '../assets/pedida_2.jpg'
import image3 from '../assets/pedida_5.jpg'
import image4 from '../assets/pedida_4.jpg'
import { motion } from 'framer-motion';
// ============================================
// SECCIÓN 1
// Galeria y poner musica
// ============================================
export function HeroSection() {

    const slides = [
        {
            id: 1,
            image: image1,
        },
        {
            id: 2,
            image: image2,
        },
        {
            id: 3,
            image: image3,
        },
        {
            id: 4,
            image: image4,
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
            className="relative h-screen flex items-center justify-between overflow-hidden"
        >
            {/* Fondo con gradiente suave */}
            <div className="absolute h-230 w-full group">
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
