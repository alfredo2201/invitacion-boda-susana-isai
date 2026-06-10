import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { WEDDING_CONFIG } from '../constant';
// ============================================
// RSVP (Confirmación)
// ============================================

export function RSVPSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleRSVP = () => {
    const message = encodeURIComponent(
      `¡Hola! Confirmo mi asistencia para 2 personas a la boda de ${WEDDING_CONFIG.groom} y ${WEDDING_CONFIG.bride} 💒`
    );
    window.open(`https://wa.me/${WEDDING_CONFIG.rsvpWhatsApp}?text=${message}`, '_blank');
  };

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-br from-white to-[#F5F1EA] relative overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B7355] rounded-full opacity-5 blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif text-[#2C2C2C] mb-6">
            Confirma tu Asistencia
          </h2>
          <div className="w-24 h-[1px] bg-[#8B7355] mx-auto mb-12" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#6B6B6B] font-light mb-12 leading-relaxed"
          >
            Tu presencia es el mejor regalo. Por favor confirma tu asistencia para que podamos preparar todo con amor.
          </motion.p>

          <motion.button
            onClick={handleRSVP}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#8B7355] text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-[#6F5A42] transition-all shadow-xl hover:shadow-2xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Confirmar por WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
