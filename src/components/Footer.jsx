import { motion } from 'framer-motion';
import { WEDDING_CONFIG } from '../constant';
// ============================================
// FOOTER
// ============================================
export function Footer() {
  return (
    <footer className="py-5 px-6 text-dark text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-lg font-light leading-relaxed">
            Con amor y gratitud, esperamos compartir este día especial contigo
          </p>

          <p className="text-[50px] luxurious-script-regular">
            {WEDDING_CONFIG.groom} & {WEDDING_CONFIG.bride}
          </p>

          <p className="text-sm text-dark/60">
            {new Date(WEDDING_CONFIG.date).getFullYear()}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}