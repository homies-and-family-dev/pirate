"use client";

import { motion } from "framer-motion";
import { Users, Gift, Coins, Award, Compass, Anchor, Ship, Utensils, Waves } from "lucide-react";
import Link from "next/link";

export default function Engagement() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const referralBenefits = [
        {
            icon: <Coins className="w-10 h-10 text-[#bd8d4c]" />,
            title: "Comisión por Hospedaje",
            description: "Recibe un 5% de comisión por cada referido que reserve una estancia en nuestras cabañas.",
            highlight: "5%"
        },
        {
            icon: <Utensils className="w-10 h-10 text-[#bd8d4c]" />,
            title: "Descuentos en Restaurante",
            description: "Disfruta de un 15% de descuento en nuestro restaurante temático para ti y tus acompañantes.",
            highlight: "15%"
        },
        {
            icon: <Waves className="w-10 h-10 text-[#bd8d4c]" />,
            title: "Club Náutico",
            description: "Obtén un 20% de descuento en todas las actividades acuáticas y alquiler de equipos.",
            highlight: "20%"
        },
        {
            icon: <Compass className="w-10 h-10 text-[#bd8d4c]" />,
            title: "Tours y Excursiones",
            description: "Accede a un 10% de descuento en tours guiados y excursiones temáticas.",
            highlight: "10%"
        }
    ];

    return (
        <section id="programa" className="py-16 overflow-hidden bg-gradient-to-b from-[#e4d4b9] to-[#efe1cb] relative">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-12 z-10 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-full h-12 z-10 opacity-30"></div>
            
            {/* Elementos decorativos */}
            <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
                <Ship className="w-32 h-32 text-[#8B4513]" />
            </div>
            <div className="absolute bottom-20 left-10 opacity-10 hidden lg:block">
                <Anchor className="w-32 h-32 text-[#8B4513]" />
            </div>
            
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
                        <Users className="text-[#bd8d4c] absolute -left-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                        <h2 className="text-4xl md:text-5xl font-pirate text-[#8B4513] relative z-10 inline-block">
                            Programa de Referidos
                        </h2>
                        <Gift className="text-[#bd8d4c] absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                    </div>
                    <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-4"></div>
                    <p className="text-[#5A3921] mt-4 max-w-2xl mx-auto font-serif">
                        Comparte la experiencia pirata con tus amigos y familiares y recibe recompensas exclusivas por cada referido.
                    </p>
                </motion.div>
                
                <div className="max-w-6xl mx-auto">
                    {/* Beneficios principales */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={fadeIn}
                        className="mb-16"
                    >
                        <h3 className="text-2xl font-pirate text-[#8B4513] mb-8 text-center flex items-center justify-center">
                            <Award className="w-6 h-6 mr-2 text-[#bd8d4c]" />
                            Beneficios Inmediatos
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {referralBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="bg-[#f5ecd9] rounded-xl p-6 shadow-lg border border-[#bd8d4c]/20 text-center hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
                                >
                                    <div className="absolute -right-6 -top-6 w-20 h-20 bg-[#bd8d4c]/10 rounded-full group-hover:bg-[#bd8d4c]/20 transition-colors duration-300"></div>
                                    
                                    <div className="w-20 h-20 mx-auto bg-[#f9f4e8] rounded-full flex items-center justify-center mb-4 border-2 border-[#bd8d4c]/30 group-hover:border-[#bd8d4c] transition-colors duration-300 relative z-10">
                                        {benefit.icon}
                                    </div>
                                    
                                    <h4 className="text-xl font-pirate text-[#8B4513] mb-2 relative z-10">{benefit.title}</h4>
                                    
                                    <div className="text-3xl font-bold text-[#bd8d4c] my-3 relative z-10">
                                        {benefit.highlight}
                                    </div>
                                    
                                    <p className="text-[#5A3921] text-sm font-serif relative z-10">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    
                    {/* Llamada a la acción */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        variants={fadeIn}
                        className="text-center"
                    >
                        <div className="max-w-3xl mx-auto bg-[#f5ecd9]/80 p-8 rounded-xl border border-[#bd8d4c]/30 shadow-lg relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#bd8d4c]/10 rounded-full"></div>
                            <div className="absolute -left-10 -top-10 w-32 h-32 bg-[#bd8d4c]/10 rounded-full"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-2xl font-pirate text-[#8B4513] mb-4">¿Listo para empezar a referir?</h3>
                                <p className="text-[#5A3921] mb-6 font-serif">
                                    Únete a nuestro programa de referidos y comienza a disfrutar de beneficios exclusivos mientras compartes la experiencia pirata con tus seres queridos.
                                </p>
                                <Link 
                                    href="/#contacto"
                                    className="inline-flex items-center bg-[#bd8d4c] hover:bg-[#a57a3b] text-white px-8 py-3 text-lg font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                >
                                    <Users className="w-5 h-5 mr-2" />
                                    Contactar para Referir
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
