"use client";

import { motion } from "framer-motion";
import { Building, Award, Clock, Users, Shield, TrendingUp, Anchor, Compass, Star, Briefcase } from "lucide-react";
import Image from "next/image";
import React from "react";

// Tipo para las empresas aliadas
type AlliancePartner = {
    id: string;
    name: string;
    logo: string;
    description: string;
    role: string;
    achievements: {
        icon: React.ReactNode;
        title: string;
        description: string;
    }[];
};

export default function Alliance() {
    // Lista de empresas aliadas
    const partners: AlliancePartner[] = [
        {
            id: "pomar",
            name: "Constructora EL POMAR",
            logo: "/images/logo-pomar.png",
            role: "Desarrollo y Construcción",
            description: "27 años de experiencia en construcción en Tolima. Especialistas en proyectos urbanísticos de alta valorización con impacto regional.",
            achievements: [
                {
                    icon: <Clock className="w-6 h-6 text-[#bd8d4c]" />,
                    title: "27 años",
                    description: "Experiencia en construcción"
                },
                {
                    icon: <Building className="w-6 h-6 text-[#bd8d4c]" />,
                    title: "Proyectos",
                    description: "Alta valorización"
                }
            ]
        },
        {
            id: "financiera",
            name: "Grupo Financiero Caribe",
            logo: "/images/logo-financiera.png",
            role: "Respaldo Financiero",
            description: "Solidez económica y experiencia en estructuración financiera de proyectos inmobiliarios de gran envergadura.",
            achievements: [
                {
                    icon: <Briefcase className="w-6 h-6 text-[#bd8d4c]" />,
                    title: "Solidez",
                    description: "Respaldo económico"
                },
                {
                    icon: <Star className="w-6 h-6 text-[#bd8d4c]" />,
                    title: "Calificación AAA",
                    description: "Máxima calificación"
                }
            ]
        },
        {
            id: "arquitectos",
            name: "Estudio Náutico",
            logo: "/images/logo-arquitectos.png",
            role: "Diseño Arquitectónico",
            description: "Especialistas en diseño de espacios náuticos y residenciales de lujo, con enfoque en funcionalidad y estética.",
            achievements: [
                {
                    icon: <Compass className="w-6 h-6 text-[#bd8d4c]" />,
                    title: "Innovación",
                    description: "Arquitectura náutica"
                },
                {
                    icon: <Award className="w-6 h-6 text-[#bd8d4c]" />,
                    title: "Premios",
                    description: "Reconocimiento internacional"
                }
            ]
        },
        {
            id: "ambiental",
            name: "EcoDesarrollo",
            logo: "/images/logo-ambiental.png",
            role: "Gestión Ambiental",
            description: "Consultora en sostenibilidad para proyectos turísticos, garantizando desarrollo responsable y bajo impacto ambiental.",
            achievements: [
                {
                    icon: <TrendingUp className="w-6 h-6 text-[#bd8d4c]" />,
                    title: "Sostenibilidad",
                    description: "Certificación ambiental"
                },
                {
                    icon: <Anchor className="w-6 h-6 text-[#bd8d4c]" />,
                    title: "Protección",
                    description: "Ecosistemas marinos"
                }
            ]
        }
    ];

    return (
        <section id="alliance" className="py-16 overflow-hidden bg-gradient-to-b from-[#e4d4b9] to-[#efe1cb] relative">
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
                
                {/* Carrusel de logos de aliados */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-6 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {partners.map((partner) => (
                        <div 
                            key={partner.id}
                            className="bg-white rounded-lg p-4 shadow-md border border-[#bd8d4c]/20 w-40 h-40 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 hover:border-[#bd8d4c]/50"
                        >
                            <div className="relative h-20 w-full mb-2">
                                <Image 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-[#8B4513] text-center text-sm font-medium">{partner.name}</p>
                            <p className="text-[#5A3921] text-center text-xs">{partner.role}</p>
                        </div>
                    ))}
                </motion.div>
                
                {/* Sección detallada de cada aliado */}
                {partners.map((partner, index) => (
                    <motion.div 
                        key={partner.id}
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-12 last:mb-0`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                    >
                        {/* Logo y marco decorativo */}
                        <div className="w-full md:w-2/5">
                            <div className="relative">
                                <div className="absolute -inset-4 border-8 border-[#8B4513]/10 rounded-xl"></div>
                                <div className="absolute -inset-1 border border-[#bd8d4c]/30 rounded-lg"></div>
                                <div className="bg-white rounded-lg p-6 shadow-lg relative">
                                    <div className="relative h-40 w-full">
                                        <Image 
                                            src={partner.logo} 
                                            alt={partner.name} 
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="text-center mt-3">
                                        <h3 className="text-xl font-bold text-[#8B4513]">{partner.name}</h3>
                                        <p className="text-[#5A3921] text-sm">{partner.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Descripción y logros */}
                        <div className="w-full md:w-3/5">
                            <div className="bg-[#f9f4e8] rounded-lg p-6 border-l-4 border-[#bd8d4c] shadow-md relative">
                                <div className="absolute -top-4 -left-4 bg-[#bd8d4c] rounded-full p-2 shadow-md">
                                    <Building className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-pirate text-[#8B4513] mb-3">Experiencia</h3>
                                <p className="text-[#5A3921] font-serif leading-relaxed mb-4">
                                    {partner.description}
                                </p>
                                
                                {/* Logros específicos */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {partner.achievements.map((achievement, idx) => (
                                        <div 
                                            key={idx}
                                            className="bg-white rounded-lg p-3 shadow-sm border border-[#bd8d4c]/10 flex items-start gap-3"
                                        >
                                            <div className="w-8 h-8 bg-[#f5ecd9] rounded-full flex items-center justify-center flex-shrink-0 border border-[#bd8d4c]/30">
                                                {achievement.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-[#8B4513] font-bold text-sm">{achievement.title}</h4>
                                                <p className="text-[#5A3921] text-xs">{achievement.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
                
                {/* Testimonio o cita */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="max-w-2xl mx-auto text-center mt-10"
                >
                    <div className="text-[#bd8d4c] text-4xl font-serif mb-2">&ldquo;</div>
                    <p className="text-[#5A3921] font-serif text-base italic mb-2">
                        Aliados estratégicos que garantizan excelencia en cada aspecto de Pirate Paradise.
                    </p>
                    <div className="text-[#bd8d4c] text-4xl font-serif">&rdquo;</div>
                    <div className="mt-3 flex items-center justify-center">
                        <div className="w-8 h-8 bg-[#bd8d4c]/20 rounded-full flex items-center justify-center mr-2">
                            <Users className="w-4 h-4 text-[#bd8d4c]" />
                        </div>
                        <p className="text-[#8B4513] font-medium text-sm">Equipo Directivo - Pirate Paradise</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
