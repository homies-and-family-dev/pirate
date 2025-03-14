"use client";

import { motion } from "framer-motion";
import { Users, Gift, Coins, Award, Anchor, Ship, Utensils, Waves } from "lucide-react";
import Link from "next/link";

export default function Engagement() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const referralBenefits = [
        {
            icon: <Coins className="w-10 h-10 text-[#bd8d4c]" />,
            title: "Descuento por Hospedaje",
            description: "Recibe un 25% de descuento en temporada alta y un 40% en temporada baja como accionista.",
            highlight: "25% y 40%"
        },
        {
            icon: <Utensils className="w-10 h-10 text-[#bd8d4c]" />,
            title: "Descuentos en Restaurante",
            description: "Disfruta de un 25% de descuento en nuestro restaurante temático.",
            highlight: "25%"
        },
        {
            icon: <Waves className="w-10 h-10 text-[#bd8d4c]" />,
            title: "Club Náutico",
            description: "Obtén un 50% de descuento motor y un 70% no motor en las actividades acuáticas.",
            highlight: "50% y 70%"
        }
    ];

    return (
        <section id="programa" className="py-10 sm:py-16 overflow-hidden bg-gradient-to-b from-[#e4d4b9] to-[#efe1cb] relative">
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
                    className="text-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-block relative">
                        <Users className="text-[#bd8d4c] absolute -left-8 sm:-left-10 top-1/2 transform -translate-y-1/2 opacity-70 hidden sm:block" size={24} />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-spectral text-[#8B4513] relative z-10 inline-block">
                            Beneficios exclusivos
                        </h2>
                        <Gift className="text-[#bd8d4c] absolute -right-8 sm:-right-10 top-1/2 transform -translate-y-1/2 opacity-70 hidden sm:block" size={24} />
                    </div>
                    <div className="h-1 w-36 sm:w-48 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-3 sm:mt-4"></div>
                    <p className="text-[#5A3921] mt-3 sm:mt-4 max-w-2xl mx-auto font-montserrat text-sm sm:text-base">
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
                        className="mb-10 sm:mb-16"
                    >
                        <h3 className="text-xl sm:text-2xl font-spectral text-[#8B4513] mb-6 sm:mb-8 text-center flex items-center justify-center">
                            <Award className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-[#bd8d4c]" />
                            Beneficios Inmediatos
                        </h3>
                        
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                            {referralBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="bg-[#f5ecd9] rounded-xl p-4 sm:p-6 shadow-lg border border-[#bd8d4c]/20 text-center hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group flex-1 min-w-[250px] sm:min-w-[280px] max-w-[320px]"
                                >
                                    <div className="absolute -right-6 -top-6 w-16 sm:w-20 h-16 sm:h-20 bg-[#bd8d4c]/10 rounded-full group-hover:bg-[#bd8d4c]/20 transition-colors duration-300"></div>
                                    
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-[#f9f4e8] rounded-full flex items-center justify-center mb-3 sm:mb-4 border-2 border-[#bd8d4c]/30 group-hover:border-[#bd8d4c] transition-colors duration-300 relative z-10">
                                        {benefit.icon}
                                    </div>
                                    
                                    <h4 className="text-lg sm:text-xl font-spectral text-[#8B4513] mb-2 relative z-10">{benefit.title}</h4>
                                    
                                    <div className="text-2xl sm:text-3xl font-bold text-[#bd8d4c] my-2 sm:my-3 relative z-10">
                                        {benefit.highlight}
                                    </div>
                                    
                                    <p className="text-[#5A3921] text-xs sm:text-sm font-montserrat relative z-10">
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
                        <div className="max-w-3xl mx-auto bg-[#f5ecd9]/80 p-5 sm:p-8 rounded-xl border border-[#bd8d4c]/30 shadow-lg relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#bd8d4c]/10 rounded-full"></div>
                            <div className="absolute -left-10 -top-10 w-24 sm:w-32 h-24 sm:h-32 bg-[#bd8d4c]/10 rounded-full"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-xl sm:text-2xl font-spectral text-[#8B4513] mb-3 sm:mb-4">¿Listo para empezar a referir?</h3>
                                <p className="text-[#5A3921] mb-5 sm:mb-6 font-montserrat text-sm sm:text-base">
                                    Únete a nuestro programa de referidos y comienza a disfrutar de beneficios exclusivos mientras compartes la experiencia pirata con tus seres queridos.
                                </p>
                                <Link 
                                    href="/#contacto"
                                    className="inline-flex items-center bg-[#bd8d4c] hover:bg-[#a57a3b] text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-lg font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                >
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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
