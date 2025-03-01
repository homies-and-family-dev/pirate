"use client";

import { motion } from "framer-motion";
import { MapPin, Sun, Waves, Building, Mountain, Star } from "lucide-react";

export default function Ubication() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-[#e4d4b9] to-[#efe1cb]">
      
      <div className="container mx-auto px-4 relative z-10">
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
            {/* Título con ilustración */}
            <div className="relative mb-6">
              <h2 className="text-3xl md:text-4xl font-pirate text-[#8B4513] mb-2 relative z-10">
                Ubicación Estratégica
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-gold via-gold/60 to-transparent mb-6"></div>
              
            </div>
            
            <motion.p variants={fadeIn} className="text-[#5A3921] mb-6 font-serif">
              A más de 2 km al borde de la imponente &ldquo;Represa Darío Echandía&rdquo;, su 
              clima excepcional lo hace irresistible. Proyecto de alto potencial de 
              valorización en una zona urbanística con paisajes emblemáticos de 
              una biodiversidad única en Colombia.
            </motion.p>
            
            <motion.p variants={fadeIn} className="text-[#5A3921] mb-6 font-serif italic bg-[#8B4513]/5 p-3 rounded-lg border-l-2 border-gold/50">
              Pirate Paradise es más que un destino turístico, es una oportunidad de inversión 
              emocionante en el próspero mercado hotelero y turístico de Colombia.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex items-center mb-6 bg-[#8B4513]/10 p-3 rounded-lg border border-[#8B4513]/20">
              <MapPin className="text-gold mr-3" size={20} />
              <span className="text-[#5A3921] font-medium">
                Ubicado en &ldquo;El Mar interior de Colombia&rdquo;, Prado-Tolima
              </span>
            </motion.div>
            
            <ul className="space-y-4 mb-8">
              {[
                { 
                  icon: <Sun className="text-gold h-5 w-5" />, 
                  text: "Clima excepcional durante todo el año"
                },
                { 
                  icon: <Waves className="text-gold h-5 w-5" />, 
                  text: "Al borde de la Represa Darío Echandía" 
                },
                { 
                  icon: <Building className="text-gold h-5 w-5" />, 
                  text: "Rodeado de proyectos campestres de alto nivel" 
                },
                { 
                  icon: <Mountain className="text-gold h-5 w-5" />, 
                  text: "Paisajes emblemáticos de biodiversidad única" 
                },
                { 
                  icon: <Star className="text-gold h-5 w-5" />, 
                  text: "Alto potencial de valorización inmobiliaria" 
                }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={fadeIn}
                  className="flex items-start bg-[#8B4513]/5 p-3 rounded-lg border-l-2 border-gold/50"
                >
                  <div className="mr-3 mt-0.5">{item.icon}</div>
                  <span className="text-[#5A3921]">{item.text}</span>
                </motion.li>
              ))}
            </ul>
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
              {/* Bordes estilizados del mapa */}
              <div className="absolute inset-0 border-8 border-[#8B4513]/30 rounded-lg"></div>
              <div className="absolute inset-4 border border-[#8B4513]/10 rounded-md"></div>
              
              {/* Mapa con efecto de sombra */}
              <div className="relative p-2 bg-[#E8DDB5] rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.2)] overflow-hidden">
                <div className="aspect-[4/3] w-full relative overflow-hidden rounded-md">
                  {/* Capa de mapa actual */}
                  <div className="w-full h-full bg-[url('/images/map-placeholder.jpg')] bg-cover bg-center relative z-10 rounded-md"></div>
                  
                  {/* Efectos decorativos */}
                  <div className="absolute inset-0 bg-[url('/images/map-compass.png')] bg-no-repeat bg-center opacity-10 z-20"></div>
                  <div className="absolute inset-0 shadow-inner"></div>
                  
                  {/* Marcador de ubicación */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <div className="w-8 h-8 bg-gold/80 rounded-full p-1 animate-pulse-slow">
                      <div className="w-full h-full bg-gold rounded-full"></div>
                    </div>
                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-gold/80 mx-auto -mt-1"></div>
                  </div>
                </div>
                
                {/* Título del mapa */}
                <div className="text-center mt-4 mb-2">
                  <h3 className="font-pirate text-[#8B4513] text-xl">El Mar Interior de Colombia</h3>
                  <p className="text-[#5A3921]/70 text-sm font-serif">Prado, Tolima - Colombia</p>
                </div>
              </div>
              
              {/* Adornos decorativos */}
              <img 
                src="/images/compass-rose.png" 
                alt="Rosa de los vientos" 
                className="absolute -bottom-10 -right-10 w-24 h-24 opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

