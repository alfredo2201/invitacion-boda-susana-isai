import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { WEDDING_CONFIG } from '../constant';
import sello from '../assets/sello.webp'

export function RSVPSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [nombres, setNombres] = useState(['']); // lista de nombres
  const [touched, setTouched] = useState(false);

  // Agrega un campo nuevo vacío
  const agregarNombre = () => {
    if (nombres.length >= 10) return; // máximo 10 personas
    setNombres([...nombres, '']);
  };

  // Actualiza el nombre en la posición index
  const actualizarNombre = (index, valor) => {
    const nuevos = [...nombres];
    nuevos[index] = valor;
    setNombres(nuevos);
    setTouched(false);
  };

  // Elimina el campo en la posición index
  const eliminarNombre = (index) => {
    if (nombres.length === 1) return; // mínimo 1 campo
    setNombres(nombres.filter((_, i) => i !== index));
  };

  // Valida que al menos el primer nombre esté lleno
  const nombresValidos = nombres.filter(n => n.trim() !== '');
  const hasError = touched && nombresValidos.length === 0;

  const buildMessage = (persona) => {
    const lista = nombresValidos
      .map(n => `• ${n.trim()}`)
      .join('\n');

    // ✅ Emojis como unicode directo, sin encodeURIComponent en ellos
    const mensaje =
      `¡Hola ${persona}! \uD83D\uDC4B\u2728\n\n` +
      `Con mucho gusto confirmamos nuestra asistencia a tu boda \uD83D\uDC92\u2764\uFE0F\n\n` +
      `Los nombres de las personas que asistirán son:\n` +
      `${lista}\n\n` +
      `Estamos muy felices de acompañarlos en este día tan especial y celebrar junto a ustedes. ` +
      `¡Nos vemos pronto! \uD83E\uDD0D\u2728`;

    return encodeURIComponent(mensaje);
  };

  const handleRSVPNovia = () => {
    setTouched(true);
    if (nombresValidos.length === 0) return;
    window.open(`https://wa.me/${WEDDING_CONFIG.rsvpWhatsAppNovia}?text=${buildMessage('Susana')}`, '_blank');
  };

  const handleRSVPNovio = () => {
    setTouched(true);
    if (nombresValidos.length === 0) return;
    window.open(`https://wa.me/${WEDDING_CONFIG.rsvpWhatsApp}?text=${buildMessage('Isai')}`, '_blank');
  };

  return (
    <section ref={ref} className="py-10 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='flex flex-col items-center'
        >
          <h2 className="text-[60px] luxurious-script-regular text-[#2C2C2C]">
            Confirma tu Asistencia
          </h2>
          <div className="w-45 h-[1px] bg-[#8B7355] mx-auto mb-5" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-md text-[#6B6B6B] playfair-display-main leading-relaxed"
          >
            Por favor confirma tu asistencia antes del 1 de Septiembre.
          </motion.p>

          <img src={sello} alt="" className='h-30 w-30 translate-y-15' />

          <div className='flex flex-col w-full lg:w-1/2 bg-[#24384b] px-15 pt-20 pb-8 justify-center items-center gap-2'>
            <h1 className='playfair-display-main uppercase text-white text-md'>
              Será un honor contar con tu presencia
            </h1>
            <p className='luxurious-script-regular text-white text-[35px]'>¡Te Esperamos!</p>
            <p className='playfair-display-main text-white text-sm'>
              Haz clic en el botón de abajo y confirma tu asistencia
            </p>

            {/* ── Lista de nombres ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full flex flex-col gap-3 mt-3"
            >
              <label className="playfair-display-main text-white/70 text-xs tracking-[.15em] uppercase text-left">
                Nombres de los asistentes
              </label>

              <AnimatePresence>
                {nombres.map((nombre, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10, height: 0 }}
                    transition={{ duration: 0.22 }}
                    className="flex items-center gap-2"
                  >
                    {/* Número */}
                    <span className="playfair-display-main text-white/40 text-xs w-4 shrink-0">
                      {index + 1}.
                    </span>

                    {/* Input */}
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => actualizarNombre(index, e.target.value)}
                      placeholder={`Nombre ${index + 1}`}
                      className={`
                        flex-1 bg-transparent border-b py-1.5 px-0
                        text-white placeholder-white/25
                        playfair-display-main text-sm tracking-wide
                        outline-none transition-colors duration-300
                        ${hasError && index === 0
                          ? 'border-red-400'
                          : 'border-white/30 focus:border-[#8B7355]'
                        }
                      `}
                    />

                    {/* Botón eliminar */}
                    {nombres.length > 1 && (
                      <motion.button
                        onClick={() => eliminarNombre(index)}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white/30 hover:text-red-400 transition-colors shrink-0 cursor-pointer"
                        aria-label="Eliminar nombre"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </motion.button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>


              {/* Botón agregar persona */}
              {nombres.length < 10 && (
                <motion.button
                  onClick={agregarNombre}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors cursor-pointer self-start"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="playfair-display-main text-xs tracking-[.12em] uppercase">
                    Agregar persona
                    {nombres.length > 1 && (
                      <span className="ml-1 opacity-50">({nombres.length}/10)</span>
                    )}
                  </span>
                </motion.button>
              )}
              {/* Error */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: hasError ? 1 : 0 }}
                className="text-red-400 text-xs playfair-display-main text-left"
              >
                Por favor escribe al menos un nombre.
              </motion.p>
            </motion.div>

            {/* ── Botones WhatsApp ── */}
            <motion.button
              onClick={handleRSVPNovia}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full items-center gap-3 bg-[#8B7355] text-white py-1 rounded-xl text-sm playfair-display-main tracking-[.15em] uppercase hover:bg-[#6F5A42] transition-all shadow-xl hover:shadow-2xl hover:cursor-pointer mt-3"
            >
              Confirmar con la novia
            </motion.button>

            <motion.button
              onClick={handleRSVPNovio}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full items-center gap-3 bg-[#8B7355] text-white py-1 rounded-xl text-sm playfair-display-main tracking-[.15em] uppercase hover:bg-[#6F5A42] transition-all shadow-xl hover:shadow-2xl hover:cursor-pointer"
            >
              Confirmar con el novio
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}