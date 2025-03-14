"use client";
import { motion } from "framer-motion";
import { Anchor } from "lucide-react";
import Image from "next/image";
import React from "react";
import Separator from "@/components/ui/Separator";

// Tipo para las empresas aliadas
type AlliancePartner = {
    id: string;
    name: string;
    logo: string;
};

export default function Alliance() {
    // Lista de empresas aliadas
    const partners: AlliancePartner[] = [
        {
            id: "pomar",
            name: "Constructora EL POMAR",
            logo: "/images/logos/logopomar.webp"
        },
        {
            id: "monteazul",
            name: "MonteAzul Group",
            logo: "/images/logos/logomonteazul.png"
        },
        {
            id: "homies",
            name: "Homies and Family",
            logo: "/images/logos/homies.webp"
        },
        {
            id: "familygrill",
            name: "Family Grill",
            logo: "/images/logos/logofamilygrill.png"
        }
    ];

    return (
        <>
        <Separator />
        <section id="alliance" className="py-16 overflow-hidden bg-black relative">
            
            {/* Elementos decorativos temáticos */}
            <div className="absolute top-1/4 right-8 opacity-10 hidden lg:block">
                <Anchor className="w-40 h-40 text-[#bd8d4c]" />
            </div>
            <div className="absolute bottom-1/4 left-8 opacity-10 hidden lg:block">
                <Anchor className="w-40 h-40 text-[#bd8d4c] rotate-12" />
            </div>
            
            <div className="container mx-auto px-4 relative z-20 pt-8">
                {/* Título principal con decoración */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-block relative">
                        
                        <h2 className="text-4xl md:text-5xl font-spectral text-[#bd8d4c] relative z-10 inline-block tracking-wider">
                            Nuestros Aliados
                        </h2>
                    </div>
                    <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-4"></div>
                </motion.div>
                
                {/* Grid de aliados - Solo logos */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {partners.map((partner, index) => (
                        <motion.div 
                            key={partner.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Marco decorativo */}
                            <div className="absolute inset-0 border border-[#bd8d4c]/60 rounded-lg"></div>
                            <div className="absolute top-0 left-0 w-8 h-8">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#bd8d4c]"></div>
                                <div className="absolute top-0 left-0 h-full w-[2px] bg-[#bd8d4c]"></div>
                            </div>
                            <div className="absolute top-0 right-0 w-8 h-8">
                                <div className="absolute top-0 right-0 w-full h-[2px] bg-[#bd8d4c]"></div>
                                <div className="absolute top-0 right-0 h-full w-[2px] bg-[#bd8d4c]"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-8 h-8">
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#bd8d4c]"></div>
                                <div className="absolute bottom-0 left-0 h-full w-[2px] bg-[#bd8d4c]"></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-8 h-8">
                                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-[#bd8d4c]"></div>
                                <div className="absolute bottom-0 right-0 h-full w-[2px] bg-[#bd8d4c]"></div>
                            </div>
                            
                            {/* Contenido */}
                            <div className="bg-[#f9f4e8] rounded-lg overflow-hidden h-40 sm:h-48 flex items-center justify-center p-6 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(189,141,76,0.3)]">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image 
                                        src={partner.logo} 
                                        alt={partner.name}
                                        fill
                                        sizes="(max-width: 768px) 40vw, 20vw"
                                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}
