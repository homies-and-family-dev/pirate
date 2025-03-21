"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Imágenes para el carrusel
  const backgroundImages = [
    '/images/renders/cabania4.jpg',
    '/images/renders/cabania2.jpg',
    '/images/renders/cabania3.jpg',
    '/images/renders/cabanias.jpg',
  ];

  // Cambiar la imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => 
        prevImage === backgroundImages.length - 1 ? 0 : prevImage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="min-h-[90vh] relative bg-linear-gradient-to-b from-[#00000055] from-30% to-[#000000] overflow-hidden flex flex-col items-center justify-center">
      {/* Carrusel de imágenes de fondo */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0,0,0,0.7), rgba(0, 0, 0, 0.9)), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentImage === index ? 1 : 0,
            zIndex: 0,
          }}
        />
      ))}
      
      {/* Contenido principal */}
      <div className="container mx-auto px-4 z-40 text-center py-24">
        <div className="relative mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mb-12"
          >
            <h1 className="text-4xl md:text-7xl font-medium text-white tracking-wide leading-tight mb-6 drop-shadow-lg">
              Pirate Paradise
              <span className="block text-2xl md:text-4xl font-medium text-[#f2e0c8] tracking-wide mt-4">
                Tu Oportunidad de Inversión en el Mar Interior de Colombia
              </span>
            </h1>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-white text-base md:text-lg font-serif leading-relaxed drop-shadow-lg">
            Conviértete en accionista desde 13.9M COP con financiamiento flexible a 6 y 12 meses. 
            Disfruta de rentabilidad vitalicia, descuentos exclusivos en servicios y beneficios como propietario 
            del terreno en el primer proyecto turístico de lujo en Prado, Tolima.
          </p>
        </motion.div>
        <Link 
          href="/#contacto" 
          className="inline-block bg-[#bd8d4c] border-2 border-[#bd8d4c] hover:bg-[#bd8d4c] text-white px-8 py-3 text-base md:text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 drop-shadow-lg"
          aria-label="Solicitar más información sobre Pirate Paradise"
        >
          Reserva tu Acción Ahora
        </Link>
      </div>
    </section>
  );
}
