import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function DressCarrousell({ photos, autoPlay = true, interval = 4000 }) {
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
    enter:  (dir) => ({ y: dir > 0 ?  '100%' : '-100%', opacity: 0   }),
    center:          ({ y: 0,                             opacity: 1   }),
    exit:   (dir) => ({ y: dir > 0 ? '-100%' :  '100%', opacity: 0   }),
  };

  // Swipe / drag
  const onDragEnd = (_, info) => {
    const threshold = 50;
    if      (info.offset.y <  -threshold) next();
    else if (info.offset.y >   threshold) prev();
  };

  return (
    <div className="relative w-full overflow-hidden bg-black select-none rounded-4xl">

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
          drag='y'
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