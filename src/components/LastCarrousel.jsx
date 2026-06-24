import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================
// EDITA AQUÍ TUS FOTOS
// ============================================
const PHOTOS = [
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782265896/WhatsApp_Image_2026-06-23_at_17.43.16_tx6acv.jpg", alt: "Foto 1" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782274426/IMG_2996_v2tadb.jpg", alt: "Foto 8" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782274216/WhatsApp_Image_2026-06-23_at_19.54.40_huqoei.jpg", alt: "Foto 3" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782265892/WhatsApp_Image_2026-06-23_at_17.43.12_iy109x.jpg", alt: "Foto 5" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782274429/IMG_2963_xlpota.jpg", alt: "Foto 7" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782274216/WhatsApp_Image_2026-06-23_at_19.54.40_2_cv3da2.jpg", alt: "Foto 2" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782265892/WhatsApp_Image_2026-06-23_at_17.43.13_fgpoms.jpg", alt: "Foto 4" },
  { src: "https://res.cloudinary.com/dazthovzk/image/upload/v1782274427/IMG_2928_y2jkyg.jpg", alt: "Foto 6" }
   ,

];

export default function LastCarousel({ photos = PHOTOS, autoPlay = true, interval = 4000 }) {
  const [current, setCurrent]   = useState(0);
  const [direction, setDirection] = useState(1); // 1 = derecha, -1 = izquierda
  const timerRef  = useRef(null);
//   const dragStart = useRef(null);
  const total     = photos.length;

  const goTo = useCallback((index, dir = 1) => {
    setDirection(dir);
    setCurrent((index + total) % total);
  }, [total]);

  const prev = () => goTo(current - 1, -1);
  const next = () => goTo(current + 1,  1);

  // Autoplay
  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(() => goTo(current + 1, 1), interval);
    return () => clearInterval(timerRef.current);
  }, [current, autoPlay, interval, goTo]);

  // Variantes del slide
  const variants = {
    enter:  (dir) => ({ x: dir > 0 ?  '100%' : '-100%', opacity: 0   }),
    center:          ({ x: 0,                             opacity: 1   }),
    exit:   (dir) => ({ x: dir > 0 ? '-100%' :  '100%', opacity: 0   }),
  };

  // Swipe / drag
  const onDragEnd = (_, info) => {
    const threshold = 50;
    if      (info.offset.x <  -threshold) next();
    else if (info.offset.x >   threshold) prev();
  };

  return (
    <div className="relative w-full overflow-hidden bg-black select-none">

      {/* Track con AnimatePresence */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.08}
          onDragEnd={onDragEnd}
          className="w-full"
        >
          <div className="relative">
            <img
              src={photos[current].src}
              alt={photos[current].alt}
              className="w-full h-[420px] sm:h-[520px] object-cover pointer-events-none"
              draggable={false}
            />
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Botón anterior */}
      <motion.button
        onClick={prev}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm
                   border border-white/20 text-white flex items-center justify-center
                   hover:bg-white/30 transition-colors"
        aria-label="Foto anterior"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      {/* Botón siguiente */}
      <motion.button
        onClick={next}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm
                   border border-white/20 text-white flex items-center justify-center
                   hover:bg-white/30 transition-colors"
        aria-label="Foto siguiente"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Contador */}
      <div className="absolute bottom-3 right-4 z-10 text-white/70 text-xs tracking-widest">
        {current + 1} / {total}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {photos.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            animate={{ scale: i === current ? 1.4 : 1, opacity: i === current ? 1 : 0.4 }}
            transition={{ duration: 0.25 }}
            className="w-[6px] h-[6px] rounded-full bg-white p-0 border-none cursor-pointer"
            aria-label={`Ir a foto ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
}