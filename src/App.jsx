import { useScroll, useTransform } from 'framer-motion';
import { CountdownSection } from './components/CountdownSection'
import { HeroSection } from './components/HeroSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import  OurParents  from './components/OurParentsSection';
import { RSVPSection } from './components/RSVPSection'
import  DressCode  from './components/DressCodeSection';
import { VerseSection } from './components/VerseSection';
import GallerySection from './components/GallerySection';
import { Footer } from './components/Footer';
import ProgramSection from './components/ProgramSection';
import GiftSection from './components/GiftSection';
import InitialSection from './components/InitialSection';


// ============================================
// COMPONENTE PRINCIPAL
// ============================================
export default function WeddingInvitation() {
  const { scrollY } = useScroll();
  const initialOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const initialScale = useTransform(scrollY, [0, 300], [1, 0.95]);


  return (
    <div className="relative bg-white text-[#2C2C2C] overflow-x-hidden">
      {/* 
        Formato para la invitacion
        Seccion 1 -> Inicio
        - Poner una galeria de fotos de nosotros
        - Icono para ponerle play a la cancion
        Seccion 2 -> Galeria de fotos
        - de 3 a 4 fotos de nosotros
        Seccion 3 -> Nuestros padres
        - Foto de nuestros papas
        - Texto de agradecimiento
        Seccino 4 -> Invitacion a la boda
        - Frase: "es un honor para nosotros hacerte parte de esta gran celebración......"
        - Cuenta regresiva
        - Fecha 
        Seccion 5 -> Lugares
        - Ceremonia
          - Lugar
          - Hora
          - Frase de lo importante que esten en nuestra ceremonia
        - Fiesta
          - Lugar
          - Hora         
        Seccion 6 -> Dress code (codigo de vestimenta)
        - Codigo para caballeros
        - Codigo para damas
        Seccion 10 -> Programa
        - Que cosa se hara
        - Hora a la que se hara        
        Seccion 7 -> Regalos
        - Mesa de regalo Amazon
        - Efectivo
        - Tarjeta para tranferencias
        - Puede llevar su regalo a la fiesta
        Seccion 8 -> Confirmacion asistencia
        - Formulario para confirmacion
        - Boton para Whatsapp.
        Seccion 9 -> Sesion de fotos
        - Carrusel de fotos
      
      */}

      

      {/* Inicio */}
      <InitialSection initialOpacity={initialOpacity} initialScale={initialScale}></InitialSection>
      <HeroSection/>
      {/* Galeria de fotos */}
      <GallerySection></GallerySection>
      {/* Nuestros Padres*/}
      <CountdownSection />
      {/* Lugares*/}
      <EventDetailsSection />
      {/* Dress Code */}
      <OurParents></OurParents>
      {/* Invitacion a la boda */}
      <DressCode></DressCode>
      {/* Programa */}
      <ProgramSection></ProgramSection>
      {/* Regalos */}
      <GiftSection></GiftSection>
      {/* Confirmacion de asistencia */}
      <RSVPSection />
      {/* Galeria de fotos */}
      <VerseSection />      
      {/* Footer */}
      <Footer />
    </div>
  );
}

