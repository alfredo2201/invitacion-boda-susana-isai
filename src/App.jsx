import { useScroll, useTransform } from 'framer-motion';
import { CountdownSection } from './components/CountdownSection'
import { HeroSection } from './components/HeroSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import OurParents from './components/OurParentsSection';
import { RSVPSection } from './components/RSVPSection'
import DressCode from './components/DressCodeSection';
import { VerseSection } from './components/VerseSection';
import GallerySection from './components/GallerySection';
import { Footer } from './components/Footer';
import ProgramSection from './components/ProgramSection';
import GiftSection from './components/GiftSection';
import InitialSection from './components/InitialSection';
import LastCarrousel from './components/LastCarrousel';


// ============================================
// COMPONENTE PRINCIPAL
// ============================================
export default function WeddingInvitation() {
  const { scrollY } = useScroll();
  const initialOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const initialScale = useTransform(scrollY, [0, 300], [1, 0.95]);


  return (
    <div className="relative bg-[#FFFBF2] text-[#2C2C2C] overflow-x-hidden">
      {/* Inicio */}
      <InitialSection initialOpacity={initialOpacity} initialScale={initialScale}></InitialSection>
      <HeroSection />
      {/* Galeria de fotos */}
      <GallerySection></GallerySection>
      {/* Nuestros Padres*/}
      <CountdownSection />
      {/* Lugares*/}
      <EventDetailsSection />
      {/* Dress Code */}
      <OurParents></OurParents>
      {/* Programa */}
      <ProgramSection></ProgramSection>
      {/* Invitacion a la boda */}
      <DressCode></DressCode>
      {/* Regalos */}
      <GiftSection></GiftSection>
      {/* Confirmacion de asistencia */}
      <RSVPSection />
      {/* Galeria de fotos */}
      <LastCarrousel></LastCarrousel>
      <VerseSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

