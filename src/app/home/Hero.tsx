"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  }, []);

  return (
    <section className="min-h-[90vh] relative bg-linear-gradient-to-b from-[#00000055] to-[#000000] overflow-hidden flex flex-col items-center justify-center">
      {/* Carrusel de imágenes de fondo */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0,0,0,0.3), rgba(0, 0, 0, 1)), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentImage === index ? 1 : 0,
            zIndex: 0,
          }}
        />
      ))}
      
      {/* Contenido principal - Adaptado al estilo de la imagen de referencia */}
      <div className="container mx-auto px-4 z-40 text-center py-24">
        {/* Elementos decorativos dorados similar a la imagen de referencia */}
        <div className="relative mx-auto max-w-4xl">
        
          {/* Título con formato similar a "KINGS AND QUEENS" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mb-8"
          >
            <h1 className="text-5xl md:text-8xl font-medieval uppercase text-white tracking-wide leading-none mb-2">
              Pirate Paradise
            </h1>
          </motion.div>
        </div>
        
        {/* Subtítulo similar al de la imagen de referencia */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <p className="text-white text-sm md:text-base font-serif leading-relaxed">
            Invierte en acciones de alto rendimiento
            <br className="hidden md:block" />
            En Prado Tolima
          </p>
        </motion.div>
      </div>
    </section>
  );
}
