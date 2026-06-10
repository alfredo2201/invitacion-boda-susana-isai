import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WEDDING_CONFIG } from '../constant';
// ============================================
// VERSÍCULO BÍBLICO
// ============================================
export function VerseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 text-white relative overflow-hidden">
     

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <svg className="w-12 h-12 text-white/40 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-light leading-relaxed mb-6 italic"
          >
            {WEDDING_CONFIG.verse.text}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm tracking-widest uppercase text-white/80"
          >
            {WEDDING_CONFIG.verse.reference}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}