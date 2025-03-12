"use client";

import { motion } from "framer-motion";
import { Shield, Building } from "lucide-react";
import Image from "next/image";
import React from "react";
import SeparatorTop from "@/components/ui/SeparatorTop";
// Tipo para las empresas aliadas
type AlliancePartner = {
    id: string;
    name: string;
    logo: string;
    role: string;
    description: string;
};

export default function Alliance() {
    // Lista de empresas aliadas
    const partners: AlliancePartner[] = [
        {
            id: "pomar",
            name: "Constructora EL POMAR",
            logo: "/images/logos/logopomar.webp",
            role: "Desarrollo y Construcción",
            description: "27 años de experiencia en construcción en Tolima."
        },
        {
            id: "monteazul",
            name: "MonteAzul Group",
            logo: "/images/logos/logomonteazul.png",
            role: "Respaldo Financiero",
            description: "Solidez económica para proyectos inmobiliarios."
        },
        {
            id: "homies",
            name: "Homies and family",
            logo: "/images/logos/homies.webp",
            role: "Diseño Arquitectónico",
            description: "Especialistas en espacios náuticos y residenciales."
        },
        {
            id: "familygrill",
            name: "Family Grill",
            logo: "/images/logos/logofamilygrill.png",
            role: "Gestión Ambiental",
            description: "Sostenibilidad para proyectos turísticos."
        }
    ];

    return (
        <>
        <SeparatorTop />
        <section id="alliance" className="py-12 overflow-hidden bg-gradient-to-b from-[#e4d4b9] to-[#efe1cb] relative">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-12 z-10 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-full h-12 z-10 opacity-30"></div>
            
            <div className="container mx-auto px-4 relative z-20">
                {/* Título principal con decoración */}
                <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-block relative">
                        <Shield className="text-[#bd8d4c] absolute -left-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                        <h2 className="text-4xl md:text-5xl font-pirate text-[#8B4513] relative z-10 inline-block">
                            Nuestros Aliados
                        </h2>
                        <Shield className="text-[#bd8d4c] absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                    </div>
                    <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-4"></div>
                    <p className="text-[#5A3921] mt-4 max-w-2xl mx-auto font-serif">
                        Respaldo de aliados estratégicos con experiencia en diversos sectores.
                    </p>
                </motion.div>
                
                {/* Grid de aliados */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {partners.map((partner, index) => (
                        <motion.div 
                            key={partner.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-md overflow-hidden border border-[#bd8d4c]/20 hover:shadow-lg transition-all duration-300 hover:border-[#bd8d4c]/50 group"
                        >
                            <div className="relative h-48 w-full bg-[#f9f4e8] border-b border-[#bd8d4c]/20">
                                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#bd8d4c] rounded-tl-lg z-10"></div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#bd8d4c] rounded-tr-lg z-10"></div>
                                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#bd8d4c] rounded-bl-lg z-10"></div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#bd8d4c] rounded-br-lg z-10"></div>
                                <Image 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center mb-2">
                                    <Building className="w-4 h-4 text-[#bd8d4c] mr-2 flex-shrink-0" />
                                    <h3 className="text-lg font-bold text-[#8B4513] truncate">{partner.name}</h3>
                                </div>
                                <p className="text-[#bd8d4c] text-sm font-medium mb-2">{partner.role}</p>
                                <p className="text-[#5A3921] text-sm">{partner.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Nota de cierre */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-center mt-8 max-w-2xl mx-auto"
                >
                    <p className="text-[#5A3921] text-sm italic">
                        Aliados estratégicos que garantizan la excelencia en cada aspecto de Pirate Paradise.
                    </p>
                </motion.div>
            </div>
        </section>
        </>
    );
}
