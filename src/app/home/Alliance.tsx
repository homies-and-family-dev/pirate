"use client";

import { motion } from "framer-motion";
import { Building, Award, Clock, Users, Shield, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Alliance() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const achievements = [
        {
            icon: <Clock className="w-6 h-6 text-[#bd8d4c]" />,
            title: "27 años",
            description: "de experiencia en el sector construcción"
        },
        {
            icon: <Building className="w-6 h-6 text-[#bd8d4c]" />,
            title: "Proyectos Exitosos",
            description: "Diseño y creación de proyectos urbanísticos de alta valorización"
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-[#bd8d4c]" />,
            title: "Impacto Regional",
            description: "Contribución significativa al desarrollo del Tolima"
        },
        {
            icon: <Award className="w-6 h-6 text-[#bd8d4c]" />,
            title: "Reconocimiento",
            description: "Trayectoria reconocida en el sector inmobiliario"
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
                        <Shield className="text-[#bd8d4c] absolute -left-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                        <h2 className="text-4xl md:text-5xl font-pirate text-[#8B4513] relative z-10 inline-block">
                            Nuestro Respaldo
                        </h2>
                        <Shield className="text-[#bd8d4c] absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                    </div>
                    <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-4"></div>
                    <p className="text-[#5A3921] mt-4 max-w-2xl mx-auto font-serif">
                        Contamos con el respaldo de aliados estratégicos con amplia experiencia en el sector.
                    </p>
                </motion.div>
                
                {/* Sección principal con logo y descripción */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                    {/* Logo y marco decorativo */}
                    <motion.div 
                        className="w-full md:w-2/5"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 border-8 border-[#8B4513]/10 rounded-xl"></div>
                            <div className="absolute -inset-1 border border-[#bd8d4c]/30 rounded-lg"></div>
                            <div className="bg-white rounded-lg p-8 shadow-lg relative">
                                <div className="relative h-48 w-full">
                                    <Image 
                                        src="/images/logo-pomar.png" 
                                        alt="Constructora EL POMAR" 
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="text-center mt-4">
                                    <h3 className="text-xl font-bold text-[#8B4513]">Constructora EL POMAR</h3>
                                    <p className="text-[#5A3921] text-sm">Nuestro aliado estratégico</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Descripción */}
                    <motion.div 
                        className="w-full md:w-3/5"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="bg-[#f9f4e8] rounded-lg p-8 border-l-4 border-[#bd8d4c] shadow-md relative">
                            <div className="absolute -top-4 -left-4 bg-[#bd8d4c] rounded-full p-2 shadow-md">
                                <Building className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-pirate text-[#8B4513] mb-4">Experiencia y Trayectoria</h3>
                            <p className="text-[#5A3921] font-serif leading-relaxed mb-4">
                                La constructora EL POMAR cuenta con más de 27 años de experiencia en el sector construcción en el departamento
                                del Tolima diseñando y creando proyectos urbanísticos de alta valorización e impacto en el desarrollo regional.
                            </p>
                            <p className="text-[#5A3921] font-serif leading-relaxed">
                                Su amplia trayectoria y conocimiento del mercado inmobiliario garantizan la solidez y viabilidad de Pirate Paradise
                                como proyecto de inversión con alto potencial de crecimiento.
                            </p>
                        </div>
                    </motion.div>
                </div>
                
                {/* Logros y características */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#f5ecd9] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#bd8d4c]/20 group"
                        >
                            <div className="w-16 h-16 mx-auto bg-[#f9f4e8] rounded-full flex items-center justify-center mb-4 border-2 border-[#bd8d4c]/30 group-hover:border-[#bd8d4c] transition-colors duration-300">
                                {achievement.icon}
                            </div>
                            <h3 className="text-xl font-pirate text-[#8B4513] mb-2">{achievement.title}</h3>
                            <p className="text-[#5A3921] font-serif">{achievement.description}</p>
                        </motion.div>
                    ))}
                </div>
                
                {/* Testimonio o cita */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="text-[#bd8d4c] text-5xl font-serif mb-4">&ldquo;</div>
                    <p className="text-[#5A3921] font-serif text-lg italic mb-4">
                        Nuestro compromiso es crear proyectos que no solo generen valor económico, sino que también contribuyan al desarrollo sostenible de la región.
                    </p>
                    <div className="text-[#bd8d4c] text-5xl font-serif">&rdquo;</div>
                    <div className="mt-4 flex items-center justify-center">
                        <div className="w-10 h-10 bg-[#bd8d4c]/20 rounded-full flex items-center justify-center mr-3">
                            <Users className="w-5 h-5 text-[#bd8d4c]" />
                        </div>
                        <p className="text-[#8B4513] font-medium">Equipo Directivo - Constructora EL POMAR</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
