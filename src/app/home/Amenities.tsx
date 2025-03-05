"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Anchor, Ship, Waves, Sunset, Utensils, Wifi } from "lucide-react";
import Image from "next/image";

export default function Amenities() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const constraintsRef = useRef(null);

    const amenities = [
        {
            title: "Muelle Privado",
            icon: <Anchor className="w-6 h-6 text-[#bd8d4c]" />,
            description: "Acceso exclusivo al agua con embarcadero para actividades acuáticas",
            image: "/images/renders/amenity1.jpg"
        },
        {
            title: "Vistas Panorámicas",
            icon: <Sunset className="w-6 h-6 text-[#bd8d4c]" />,
            description: "Impresionantes vistas a la represa y paisajes naturales",
            image: "/images/renders/amenity2.jpg"
        },
        {
            title: "Restaurante Gourmet",
            icon: <Utensils className="w-6 h-6 text-[#bd8d4c]" />,
            description: "Experiencia gastronómica con platos exclusivos y temáticos",
            image: "/images/renders/amenity3.jpg"
        },
        {
            title: "Navegación",
            icon: <Ship className="w-6 h-6 text-[#bd8d4c]" />,
            description: "Paseos en barco y actividades náuticas para toda la familia",
            image: "/images/renders/amenity4.jpg"
        },
        {
            title: "Piscina Infinity",
            icon: <Waves className="w-6 h-6 text-[#bd8d4c]" />,
            description: "Piscina con borde infinito y vistas espectaculares",
            image: "/images/renders/amenity5.jpg"
        },
        {
            title: "Conectividad",
            icon: <Wifi className="w-6 h-6 text-[#bd8d4c]" />,
            description: "WiFi de alta velocidad en todas las instalaciones",
            image: "/images/renders/amenity6.jpg"
        }
    ];

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % amenities.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + amenities.length) % amenities.length);
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Variants for the 3D carousel animation
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? -30 : 30,
            z: -100
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            z: 0,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 30 : -30,
            z: -100,
            transition: {
                duration: 0.5
            }
        })
    };

    // Variants for the amenity cards
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5
            }
        })
    };

    return (
        <section className="py-20 overflow-hidden bg-gradient-to-b from-[#e4d4b9] to-[#efe1cb] relative">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-12 z-10 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-full h-12 z-10 opacity-30"></div>
            
            <div className="container mx-auto px-4 relative z-20">
                {/* Título principal con decoración */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-block relative">
                        <Anchor className="text-[#bd8d4c] absolute -left-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                        <h2 className="text-4xl md:text-5xl font-pirate text-[#8B4513] relative z-10 inline-block">
                            Amenidades
                        </h2>
                        <Anchor className="text-[#bd8d4c] absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-70 rotate-90" size={24} />
                    </div>
                    <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-4"></div>
                    <p className="text-[#5A3921] mt-4 max-w-2xl mx-auto font-serif">
                        Descubre las exclusivas comodidades que Pirate Paradise ofrece para una experiencia inolvidable.
                    </p>
                </motion.div>
                
                {/* Galería 3D con Framer Motion */}
                <div className="relative h-[500px] mb-16 perspective-1000">
                    <motion.div 
                        ref={constraintsRef}
                        className="w-full h-full flex items-center justify-center"
                    >
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute w-full max-w-4xl mx-auto"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#f5ecd9] border-2 border-[#bd8d4c]/30">
                                    <div className="relative h-[350px] w-full">
                                        <div className="absolute inset-0 bg-black/20 z-10"></div>
                                        <div className="absolute top-4 left-4 bg-[#bd8d4c]/80 text-white px-4 py-2 rounded-full z-20 flex items-center">
                                            {amenities[currentIndex].icon}
                                            <span className="ml-2 font-medium">{amenities[currentIndex].title}</span>
                                        </div>
                                        <Image
                                            src={amenities[currentIndex].image}
                                            alt={amenities[currentIndex].title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-pirate text-[#8B4513] mb-2">{amenities[currentIndex].title}</h3>
                                        <p className="text-[#5A3921] font-serif">{amenities[currentIndex].description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                    
                    {/* Controles de navegación */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#bd8d4c]/80 hover:bg-[#bd8d4c] text-white rounded-full p-2 z-30 transition-colors duration-300"
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#bd8d4c]/80 hover:bg-[#bd8d4c] text-white rounded-full p-2 z-30 transition-colors duration-300"
                        aria-label="Siguiente"
                    >
                        <ChevronRight size={24} />
                    </button>
                    
                    {/* Indicadores */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                        {amenities.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                    index === currentIndex ? "bg-[#bd8d4c]" : "bg-[#bd8d4c]/30"
                                }`}
                                aria-label={`Ir a la diapositiva ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Grid de amenidades adicionales */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {amenities.map((amenity, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-[#f5ecd9] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#bd8d4c]/20 flex items-center group"
                        >
                            <div className="w-12 h-12 bg-[#f9f4e8] rounded-full flex items-center justify-center mr-4 border border-[#bd8d4c]/30 group-hover:border-[#bd8d4c] transition-colors duration-300">
                                {amenity.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-pirate text-[#8B4513]">{amenity.title}</h3>
                                <p className="text-sm text-[#5A3921] font-serif">{amenity.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
