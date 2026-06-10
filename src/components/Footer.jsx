import { motion } from 'framer-motion';
import { WEDDING_CONFIG } from '../constant';
// ============================================
// FOOTER
// ============================================
export function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#2C2C2C] text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-lg font-light mb-4 leading-relaxed">
            Con amor y gratitud, esperamos compartir este día especial contigo
          </p>

          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-12 h-[1px] bg-white/30" />
            <svg className="w-6 h-6 text-[#8B7355]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="w-12 h-[1px] bg-white/30" />
          </div>

          <p className="text-3xl font-serif mb-2">
            {WEDDING_CONFIG.groom} & {WEDDING_CONFIG.bride}
          </p>

          <p className="text-sm text-white/60 mt-6">
            {new Date(WEDDING_CONFIG.date).getFullYear()}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}