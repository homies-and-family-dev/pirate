"use client";

import { motion } from "framer-motion";
import { Home, Droplets, Bed, Bath, Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Areas() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const cabinTypes = [
        {
            id: "tipo1",
            name: "Cabaña Tipo 1",
            area: "120 m²",
            bedrooms: 2,
            bathrooms: 2,
            features: ["Terraza privada", "Vista al lago", "Cocina integrada", "Sala de estar"],
            description: "Diseño moderno con amplios espacios abiertos, ideal para parejas o familias pequeñas.",
            imagePath: "/images/renders/CABAÑA TIPO 1 IMAGEN 1.jpg",
            floorPlanPath: "/images/renders/CABAÑA TIPO 1 IMAGEN 7.jpg"
        },
        {
            id: "tipo2",
            name: "Cabaña Tipo 2",
            area: "150 m²",
            bedrooms: 3,
            bathrooms: 2,
            features: ["Piscina privada", "Terraza ampliada", "Área de BBQ", "Sala-comedor integrado"],
            description: "Espacios versátiles con piscina privada y amplias áreas sociales para disfrutar en familia.",
            imagePath: "/images/renders/CABAÑA TIPO 2 IMAGEN 1.jpg",
            floorPlanPath: "/images/renders/CABAÑA TIPO 2 IMAGEN 7.jpg"
        },
        {
            id: "tipo3",
            name: "Cabaña Tipo 3",
            area: "180 m²",
            bedrooms: 3,
            bathrooms: 3,
            features: ["Piscina infinita", "Terraza panorámica", "Estudio/oficina", "Vestidor principal"],
            description: "Nuestra opción más exclusiva con acabados premium y vistas panorámicas al lago.",
            imagePath: "/images/renders/CABAÑA TIPO 3 IMAGEN 1.jpg",
            floorPlanPath: "/images/renders/CABAÑA TIPO 3 IMAGEN 7.jpg"
        }
    ];

    return (
        <section className="py-16 overflow-hidden bg-gradient-to-b from-[#e4d4b9] to-[#efe1cb] relative">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-12 z-10 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-full h-12 z-10 opacity-30"></div>
            
            <div className="container mx-auto px-4 relative z-20">
                {/* Título principal con decoración */}
                <motion.div 
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-block relative">
                        <Home className="text-[#bd8d4c] absolute -left-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                        <h2 className="text-4xl md:text-5xl font-pirate text-[#8B4513] relative z-10 inline-block">
                            Nuestras Cabañas
                        </h2>
                        <Home className="text-[#bd8d4c] absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-70 rotate-180" size={24} />
                    </div>
                    <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-4"></div>
                    <p className="text-[#5A3921] mt-4 max-w-2xl mx-auto font-serif">
                        Descubre nuestros exclusivos modelos de cabañas, diseñados para ofrecer confort, privacidad y una experiencia única en contacto con la naturaleza.
                    </p>
                </motion.div>
                
                {/* Cabañas - Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cabinTypes.map((cabin, index) => (
                        <motion.div 
                            key={cabin.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            variants={fadeIn}
                            className="bg-[#f5ecd9] rounded-xl overflow-hidden border border-[#bd8d4c]/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Imagen principal con overlay */}
                            <div className="relative h-56 overflow-hidden">
                                <Image 
                                    src={cabin.floorPlanPath} 
                                    alt={`Plano de ${cabin.name}`} 
                                    width={600} 
                                    height={400} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                    <div className="p-4 text-white">
                                        <h3 className="text-xl font-pirate">{cabin.name}</h3>
                                        <p className="text-sm opacity-80">Plano arquitectónico</p>
                                    </div>
                                </div>
                                
                                {/* Imagen pequeña superpuesta */}
                                <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-lg overflow-hidden border-2 border-[#bd8d4c]/50 shadow-md">
                                    <Image 
                                        src={cabin.imagePath} 
                                        alt={cabin.name} 
                                        width={200} 
                                        height={200} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            
                            {/* Información */}
                            <div className="p-4">
                                <p className="text-[#5A3921] text-sm mb-3 font-serif">{cabin.description}</p>
                                
                                <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Map className="w-4 h-4 text-[#bd8d4c]" />
                                        <span className="text-[#5A3921]">{cabin.area}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Bed className="w-4 h-4 text-[#bd8d4c]" />
                                        <span className="text-[#5A3921]">{cabin.bedrooms} Hab.</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Bath className="w-4 h-4 text-[#bd8d4c]" />
                                        <span className="text-[#5A3921]">{cabin.bathrooms} Baños</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Droplets className="w-4 h-4 text-[#bd8d4c]" />
                                        <span className="text-[#5A3921]">Piscina</span>
                                    </div>
                                </div>
                                
                                <div className="mb-4">
                                    <h4 className="text-[#8B4513] font-medium text-sm mb-2">Características:</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {cabin.features.map((feature, i) => (
                                            <span 
                                                key={i} 
                                                className="bg-[#bd8d4c]/10 text-[#8B4513] text-xs px-2 py-1 rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <Link 
                                    href={`/cabanas/${cabin.id}`}
                                    className="w-full inline-flex items-center justify-center bg-transparent border border-[#bd8d4c] hover:bg-[#bd8d4c] text-[#8B4513] hover:text-[#f5ecd9] px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300"
                                >
                                    Ver detalles
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Llamada a la acción */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <Link 
                        href="/cabanas"
                        className="inline-flex items-center bg-[#bd8d4c] hover:bg-[#a57a3b] text-white px-6 py-2 text-base font-medium rounded-full transition-colors duration-300"
                    >
                        Ver todas las cabañas
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
