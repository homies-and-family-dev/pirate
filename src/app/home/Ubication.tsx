"use client";

import SeparatorTop from "@/components/ui/SeparatorTop";
import { motion } from "framer-motion";
import { MapPin, Sun, Waves, Building, Mountain, Compass, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Ubication() {
  const [showPreview, setShowPreview] = useState(false);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    { icon: <Sun className="text-[#bd8d4c] h-5 w-5 md:h-6 md:w-6" />, text: "Clima excepcional" },
    { icon: <Waves className="text-[#bd8d4c] h-5 w-5 md:h-6 md:w-6" />, text: "Represa Darío Echandía" },
    { icon: <Building className="text-[#bd8d4c] h-5 w-5 md:h-6 md:w-6" />, text: "Proyectos de alto nivel" },
    { icon: <Mountain className="text-[#bd8d4c] h-5 w-5 md:h-6 md:w-6" />, text: "Biodiversidad única" }
  ];
  
  return (
    <>
    <SeparatorTop />
    <section id="ubicacion" className="py-8 md:py-16 overflow-hidden bg-gradient-to-b from-[#e4d4b9] to-[#efe1cb] relative">
      
      <div className="container mx-auto px-4 relative z-20 max-w-6xl">
        {/* Título principal */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-spectral text-[#8B4513] relative z-10 inline-block tracking-wide uppercase">
              Ubicación Estratégica
            </h2>
          </div>
          <div className="h-px w-32 md:w-40 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-3 md:mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Columna izquierda - Información */}
          <motion.div 
            className="space-y-6 md:space-y-8 lg:pr-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            <motion.p variants={fadeIn} className="text-[#5A3921] font-serif text-lg leading-relaxed">
              Clima excepcional lo hace irresistible. Proyecto de alto potencial de 
              valorización en una zona urbanística con paisajes emblemáticos.
            </motion.p>
            
            <motion.div variants={fadeIn} className="relative pl-4 md:pl-6 py-2">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#bd8d4c]/20 via-[#bd8d4c] to-[#bd8d4c]/20"></div>
              <p className="text-[#5A3921] font-serif italic text-base">
                Pirate Paradise es más que un destino turístico, es una oportunidad de inversión 
                en el próspero mercado hotelero y turístico de Colombia.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-[#bd8d4c]/10 hover:border-[#bd8d4c]/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-[#bd8d4c]/5 p-2 md:p-2.5 rounded-full group-hover:bg-[#bd8d4c]/10 transition-colors duration-300 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-[#5A3921] text-sm md:text-base font-medium leading-tight">
                      {feature.text}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeIn} className="pt-2 md:pt-4">
              <a 
                href="#contacto" 
                className="group relative inline-flex items-center justify-center bg-[#8B4513] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#bd8d4c] shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-[url('/images/textures/paper-texture.png')] opacity-10"></div>
                <span className="relative text-base md:text-lg font-spectral tracking-wide z-10 group-hover:scale-105 transition-transform duration-300">
                  ¡Reserva tu espacio ahora!
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Mapa */}
          <motion.div 
            className="relative lg:pl-6 mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Marco del mapa */}
              <div className="absolute -inset-2 md:-inset-3">
                <div className="absolute inset-0 border-2 border-[#bd8d4c]/20 rounded-lg"></div>
                {/* Esquinas decorativas */}
                <div className="absolute -top-1 -left-1 w-4 md:w-6 h-4 md:h-6 border-t-2 border-l-2 border-[#bd8d4c] rounded-tl"></div>
                <div className="absolute -top-1 -right-1 w-4 md:w-6 h-4 md:h-6 border-t-2 border-r-2 border-[#bd8d4c] rounded-tr"></div>
                <div className="absolute -bottom-1 -left-1 w-4 md:w-6 h-4 md:h-6 border-b-2 border-l-2 border-[#bd8d4c] rounded-bl"></div>
                <div className="absolute -bottom-1 -right-1 w-4 md:w-6 h-4 md:h-6 border-b-2 border-r-2 border-[#bd8d4c] rounded-br"></div>
              </div>
              
              {/* Contenedor del mapa */}
              <div 
                className="relative bg-[#E8DDB5] rounded-lg shadow-md overflow-hidden cursor-pointer group"
                onClick={() => setShowPreview(true)}
              >
                <div className="relative w-full overflow-hidden rounded-lg">
                  {/* Mapa */}
                  <div className="relative w-full h-0 pb-[100%]">
                    <Image
                      src="/images/mapa.jpg"
                      alt="Mapa del tesoro"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                  
                  {/* Overlay de hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm md:text-base font-spectral">
                      Ver mapa completo
                    </span>
                  </div>
                  
                  {/* Ubicación con tooltip */}
                  <div className="absolute top-[73%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 z-30 group/marker">
                    <div className="w-6 md:w-8 h-6 md:h-8 bg-[#bd8d4c]/80 rounded-full p-1 md:p-1.5 animate-pulse">
                      <div className="w-full h-full bg-[#bd8d4c] rounded-full flex items-center justify-center">
                        <MapPin className="text-white h-3 md:h-4 w-3 md:w-4" />
                      </div>
                    </div>
                    <div className="w-0 h-0 border-l-[6px] md:border-l-[8px] border-l-transparent border-r-[6px] md:border-r-[8px] border-r-transparent border-t-[8px] md:border-t-[10px] border-t-[#bd8d4c]/80 mx-auto -mt-1"></div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover/marker:opacity-100 transition-all duration-300 pointer-events-none">
                      <div className="bg-white/95 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg shadow-lg whitespace-nowrap">
                        <p className="text-[#5A3921] text-xs md:text-sm font-medium">El Mar interior de Colombia</p>
                        <p className="text-[#bd8d4c] text-xs">Prado, Tolima</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Brújula decorativa */}
                  <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 z-30">
                    <div className="w-8 md:w-10 h-8 md:h-10 bg-[#E8DDB5]/80 rounded-full p-1 md:p-1.5 backdrop-blur-sm">
                      <div className="w-full h-full rounded-full flex items-center justify-center">
                        <Compass className="text-[#8B4513] h-5 md:h-6 w-5 md:w-6" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Título del mapa */}
                <div className="text-center py-3 md:py-4 px-2 md:px-3 bg-[#E8DDB5]/80">
                  <h3 className="font-spectral text-[#8B4513] text-base md:text-lg mb-0.5 md:mb-1">El Mar Interior de Colombia</h3>
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    <div className="h-px w-8 md:w-12 bg-[#bd8d4c]/30"></div>
                    <p className="text-[#5A3921]/70 text-xs md:text-sm font-serif">Prado, Tolima - Colombia</p>
                    <div className="h-px w-8 md:w-12 bg-[#bd8d4c]/30"></div>
                  </div>
                </div>
              </div>
              
              {/* Barcos decorativos */}
              <div className="absolute -bottom-2 md:-bottom-3 -right-2 md:-right-3 w-16 md:w-20 h-16 md:h-20 opacity-20">
                <Image
                  src="/images/barco.png"
                  alt="Barco pirata"
                  fill
                  className="object-contain transform -rotate-12"
                />
              </div>
              <div className="absolute -bottom-2 md:-bottom-3 -left-2 md:-left-3 w-16 md:w-20 h-16 md:h-20 opacity-20">
                <Image
                  src="/images/barco.png" 
                  alt="Barco pirata"
                  fill
                  className="object-contain transform rotate-12"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Modal de previsualización */}
    {showPreview && (
      <motion.div 
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowPreview(false)}
      >
        <button 
          onClick={() => setShowPreview(false)}
          className="absolute top-4 right-4 text-white hover:text-[#bd8d4c] transition-colors duration-300"
        >
          <X size={24} />
        </button>
        <motion.div 
          className="relative w-full max-w-3xl aspect-square"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={e => e.stopPropagation()}
        >
          <Image
            src="/images/mapa.jpg"
            alt="Mapa del tesoro"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </motion.div>
      </motion.div>
    )}
    </>
  );
}

