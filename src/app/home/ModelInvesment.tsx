"use client";

import { motion } from "framer-motion";
import { Coins, Ship, Map, Utensils, Anchor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ModelInvesment() {

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const businessModels = [
        {
            id: "cabanas",
            title: "Cabañas de lujo",
            description: "Alojamientos exclusivos sobre el agua con vistas panorámicas a la represa y acceso directo a actividades acuáticas.",
            icon: <Ship className="w-10 h-10 text-[#bd8d4c]" />,
            imagePath: "/images/renders/cabania.jpg",
        },
        {
            id: "restaurante",
            title: "Restaurante Mar Mediterráneo",
            description: "Gastronomía exclusiva en un ambiente pirata con vistas privilegiadas y experiencias culinarias únicas.",
            icon: <Utensils className="w-10 h-10 text-[#bd8d4c]" />,
            imagePath: "/images/renders/gastrobar.jpg",
        },
        {
            id: "eventos",
            title: "Centro de Eventos",
            description: "Espacios versátiles para celebraciones, reuniones corporativas y eventos especiales con temática pirata.",
            icon: <Map className="w-10 h-10 text-[#bd8d4c]" />,
            imagePath: "/images/renders/eventos.jpg",
        },
        {
            id: "inversion",
            title: "Propiedad del terreno",
            description: "Oportunidades de inversión en propiedades con alto potencial de valorización en una zona turística en desarrollo.",
            icon: <Coins className="w-10 h-10 text-[#bd8d4c]" />,
            imagePath: "/images/renders/propiedad2.jpg",
        },
        {
            id: "nautico",
            title: "Club Náutico",
            description: "Disfruta de deportes acuáticos, paseos en bote y actividades exclusivas para miembros en nuestras instalaciones de primera clase.",
            icon: <Anchor className="w-10 h-10 text-[#bd8d4c]" />,
            imagePath: "/images/renders/clubnautico.jpg",
        }
    ];

    return (
        <section id="modelos" className="py-20 overflow-hidden bg-black relative">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-12 z-10 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-full h-12 z-10 opacity-30"></div>
            
            {/* Elementos decorativos */}
            <div className="absolute top-20 left-10 opacity-10 hidden lg:block">
                <Ship className="w-32 h-32 text-[#bd8d4c]" />
            </div>
            <div className="absolute bottom-20 right-10 opacity-10 hidden lg:block">
                <Anchor className="w-32 h-32 text-[#bd8d4c]" />
            </div>
            
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
                        <Ship className="text-[#bd8d4c] absolute -left-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                        <h2 className="text-4xl md:text-5xl font-pirate text-[#bd8d4c] relative z-10 inline-block">
                            Modelos de Negocio
                        </h2>
                        <Ship className="text-[#bd8d4c] absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-70 rotate-180" size={24} />
                    </div>
                    <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-4"></div>
                    <p className="text-white mt-4 max-w-2xl mx-auto font-serif">
                        Pirate Paradise ofrece diversas oportunidades de inversión adaptadas a diferentes perfiles y objetivos.
                    </p>
                </motion.div>
                
                {/* Grid de modelos de negocio */}
                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {businessModels.map((model, index) => (
                        <motion.div
                            key={model.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            variants={fadeIn}
                            className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group h-full"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image 
                                    src={model.imagePath} 
                                    alt={model.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 to-black/60 opacity-80 group-hover:opacity-70 transition-opacity duration-500`}></div>
                                
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                    <div className={`w-20 h-20 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border-2 border-[#bd8d4c] group-hover:border-[#bd8d4c] transition-colors duration-300`}>
                                        {model.icon}
                                    </div>
                                    <h3 className={`text-2xl font-pirate hover:text-[#bd8d4c] text-[#C0C0C0] mb-2 group-hover:text-[#bd8d4c] transition-colors duration-300`}>{model.title}</h3>
                                </div>
                            </div>
                            
                            <div className="bg-[#111] p-6 border-t border-[#bd8d4c]/20">
                                <p className="text-[#C0C0C0] font-serif">{model.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Llamada a la acción */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <div className="max-w-3xl mx-auto bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-[#bd8d4c]/30 shadow-lg">
                        <h3 className="text-2xl font-pirate text-[#bd8d4c] mb-4">¿Interesado en invertir?</h3>
                        <p className="text-[#C0C0C0] mb-6 font-serif">
                            Descubre cómo puedes formar parte de este exclusivo proyecto y obtener rendimientos atractivos mientras disfrutas de un paraíso pirata.
                        </p>
                        <Link 
                            href="/#contacto"
                            className="inline-flex items-center bg-[#bd8d4c] hover:bg-[#a57a3b] text-black px-8 py-3 text-lg font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            <Coins className="w-5 h-5 mr-2" />
                            Solicitar Información
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
