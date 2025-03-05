"use client";

import { motion } from "framer-motion";
import { Coins, Ship, Compass, Map, Building } from "lucide-react";
import Link from "next/link";

export default function ModelInvesment() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const businessModels = [
        {
            icon: <Ship className="w-12 h-12 text-[#bd8d4c]" />,
            title: "Cabañas Flotantes",
            description: "Alojamientos exclusivos sobre el agua con vistas panorámicas a la represa y acceso directo a actividades acuáticas."
        },
        {
            icon: <Compass className="w-12 h-12 text-[#bd8d4c]" />,
            title: "Aventura Pirata",
            description: "Experiencias temáticas para familias y grupos, incluyendo búsquedas del tesoro, navegación y actividades recreativas."
        },
        {
            icon: <Building className="w-12 h-12 text-[#bd8d4c]" />,
            title: "Restaurante Temático",
            description: "Gastronomía exclusiva en un ambiente pirata con vistas privilegiadas y experiencias culinarias únicas."
        },
        {
            icon: <Map className="w-12 h-12 text-[#bd8d4c]" />,
            title: "Centro de Eventos",
            description: "Espacios versátiles para celebraciones, reuniones corporativas y eventos especiales con temática pirata."
        },
        {
            icon: <Coins className="w-12 h-12 text-[#bd8d4c]" />,
            title: "Inversión Inmobiliaria",
            description: "Oportunidades de inversión en propiedades con alto potencial de valorización en una zona turística en desarrollo."
        }
    ];

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
                        <Ship className="text-[#bd8d4c] absolute -left-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                        <h2 className="text-4xl md:text-5xl font-pirate text-[#8B4513] relative z-10 inline-block">
                            Modelos de Negocio
                        </h2>
                        <Ship className="text-[#bd8d4c] absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-70 rotate-180" size={24} />
                    </div>
                    <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-4"></div>
                    <p className="text-[#5A3921] mt-4 max-w-2xl mx-auto font-serif">
                        Pirate Paradise ofrece diversas oportunidades de inversión adaptadas a diferentes perfiles y objetivos.
                    </p>
                </motion.div>
                
                {/* Grid de modelos de negocio */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {businessModels.map((model, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            variants={fadeIn}
                            className="bg-[#f5ecd9] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#bd8d4c]/20 group"
                        >
                            <div className="w-24 h-24 mx-auto bg-[#f9f4e8] rounded-full flex items-center justify-center mb-4 border-2 border-[#bd8d4c]/30 group-hover:border-[#bd8d4c] transition-colors duration-300">
                                {model.icon}
                            </div>
                            <h3 className="text-xl font-pirate text-[#8B4513] mb-3">{model.title}</h3>
                            <p className="text-[#5A3921] font-serif">{model.description}</p>
                        </motion.div>
                    ))}
                </div>
                
                {/* Botón de acción */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <Link 
                        href="/" 
                        className="inline-flex items-center bg-transparent border-2 border-[#bd8d4c] hover:bg-[#bd8d4c] text-[#8B4513] hover:text-[#f5ecd9] px-8 py-3 text-lg font-medium rounded-full transition-colors duration-300"
                    >
                        <Coins className="w-5 h-5 mr-2" />
                        Ver Todos los Modelos
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
