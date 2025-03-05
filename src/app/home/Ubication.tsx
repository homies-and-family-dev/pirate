"use client";

import { motion } from "framer-motion";
import { MapPin, Sun, Waves, Building, Mountain, Anchor, Compass } from "lucide-react";

export default function Ubication() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-[#e4d4b9] to-[#efe1cb] relative">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-12 z-10 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 z-10 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        {/* Título principal con decoración */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block relative">
            <Anchor className="text-[#bd8d4c] absolute -left-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
            <h2 className="text-4xl md:text-5xl font-pirate text-[#8B4513] relative z-10 inline-block">
              Ubicación Estratégica
            </h2>
            <Anchor className="text-[#bd8d4c] absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-70 rotate-90" size={24} />
          </div>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-4"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Columna izquierda */}
          <motion.div 
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            <motion.p variants={fadeIn} className="text-[#5A3921] mb-6 font-serif text-lg">
              A más de 2 km al borde de la imponente &ldquo;Represa Darío Echandía&rdquo;, su 
              clima excepcional lo hace irresistible. Proyecto de alto potencial de 
              valorización en una zona urbanística con paisajes emblemáticos.
            </motion.p>
            
            <motion.div variants={fadeIn} className="relative mb-8 p-5 bg-[#8B4513]/5 rounded-lg border-l-4 border-[#bd8d4c]">
              <div className="absolute -top-3 -left-3">
                <Compass className="text-[#bd8d4c] h-6 w-6" />
              </div>
              <p className="text-[#5A3921] font-serif italic">
                Pirate Paradise es más que un destino turístico, es una oportunidad de inversión 
                en el próspero mercado hotelero y turístico de Colombia.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex items-center mb-6 p-4 bg-[#bd8d4c]/10 rounded-lg border border-[#bd8d4c]/30 shadow-sm">
              <MapPin className="text-[#bd8d4c] mr-3" size={24} />
              <span className="text-[#5A3921] font-medium">
                Ubicado en &ldquo;El Mar interior de Colombia&rdquo;, Prado-Tolima
              </span>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { 
                  icon: <Sun className="text-[#bd8d4c] h-5 w-5" />, 
                  text: "Clima excepcional" 
                },
                { 
                  icon: <Waves className="text-[#bd8d4c] h-5 w-5" />, 
                  text: "Represa Darío Echandía" 
                },
                { 
                  icon: <Building className="text-[#bd8d4c] h-5 w-5" />, 
                  text: "Proyectos de alto nivel" 
                },
                { 
                  icon: <Mountain className="text-[#bd8d4c] h-5 w-5" />, 
                  text: "Biodiversidad única" 
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="flex items-start p-3 rounded-lg bg-[#8B4513]/5 hover:bg-[#8B4513]/10 transition-colors duration-300 border-l-2 border-[#bd8d4c]/50"
                >
                  <div className="mr-3 mt-0.5 bg-[#bd8d4c]/10 p-2 rounded-full">{item.icon}</div>
                  <span className="text-[#5A3921]">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Columna derecha - Mapa */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Marco estilizado del mapa */}
              <div className="absolute -inset-4 border-8 border-[#8B4513]/20 rounded-xl"></div>
              <div className="absolute -inset-1 border border-[#bd8d4c]/30 rounded-lg"></div>
              
              {/* Mapa con efecto de sombra */}
              <div className="relative p-4 bg-[#E8DDB5] rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.25)] overflow-hidden transform rotate-1">
                <div className="aspect-[4/3] w-full relative overflow-hidden rounded-md">
                  {/* Capa de mapa actual */}
                  <div className="w-full h-full bg-[url('/images/map-placeholder.jpg')] bg-cover bg-center relative z-10 rounded-md"></div>
                  
                  {/* Efectos decorativos */}
                  <div className="absolute inset-0 bg-[url('/images/map-compass.png')] bg-no-repeat bg-center opacity-10 z-20"></div>
                  <div className="absolute inset-0 shadow-inner"></div>
                  
                  {/* Marcador de ubicación */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <div className="w-10 h-10 bg-[#bd8d4c]/80 rounded-full p-1 animate-pulse">
                      <div className="w-full h-full bg-[#bd8d4c] rounded-full flex items-center justify-center">
                        <Anchor className="text-white h-5 w-5" />
                      </div>
                    </div>
                    <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-[#bd8d4c]/80 mx-auto -mt-1"></div>
                  </div>
                  
                  {/* Brújula decorativa */}
                  <div className="absolute bottom-4 right-4 z-30">
                    <div className="w-16 h-16 bg-[#E8DDB5]/80 rounded-full p-1 backdrop-blur-sm">
                      <div className="w-full h-full rounded-full flex items-center justify-center">
                        <Compass className="text-[#8B4513] h-10 w-10" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Título del mapa */}
                <div className="text-center mt-6 mb-2">
                  <h3 className="font-pirate text-[#8B4513] text-2xl">El Mar Interior de Colombia</h3>
                  <div className="flex items-center justify-center mt-2">
                    <div className="h-px w-8 bg-[#bd8d4c]/50"></div>
                    <p className="text-[#5A3921]/70 text-sm font-serif mx-2">Prado, Tolima - Colombia</p>
                    <div className="h-px w-8 bg-[#bd8d4c]/50"></div>
                  </div>
                </div>
              </div>
              
              {/* Adornos decorativos */}
              <img 
                src="/images/compass-rose.png" 
                alt="Rosa de los vientos" 
                className="absolute -bottom-10 -right-10 w-28 h-28 opacity-20"
              />
              
              {/* Barco decorativo */}
              <div className="absolute -bottom-6 -left-6 w-16 h-16 opacity-30 transform -rotate-12">
                <img 
                  src="/images/barco.png" 
                  alt="Barco pirata" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

