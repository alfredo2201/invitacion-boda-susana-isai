import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ProgramSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <section>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
            </motion.div>

        </section>
    )

}