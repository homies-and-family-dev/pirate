"use client";

import { motion } from "framer-motion";
import { Coins, CreditCard, Percent, TrendingUp, CheckCircle, DollarSign } from "lucide-react";
import Link from "next/link";

export default function Financement() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const financingOptions = [
        {
            title: "Paquete de 6",
            pricePerAction: "13.900.000",
            totalValue: "83.400.000",
            icon: <Coins className="w-8 h-8 text-[#bd8d4c]" />,
            features: [
                "Financiado a 12 meses",
                "Retorno de inversión estimado",
                "Documentación legal incluida",
                "Asesoría personalizada"
            ]
        },
        {
            title: "Paquete de 12",
            pricePerAction: "12.900.000",
            totalValue: "154.800.000",
            icon: <TrendingUp className="w-8 h-8 text-[#bd8d4c]" />,
            features: [
                "Financiado a 12 meses",
                "Retorno de inversión estimado",
                "Documentación legal incluida",
                "Asesoría personalizada",
                "Beneficios exclusivos"
            ],
            recommended: true
        },
        {
            title: "Paquete de 18",
            pricePerAction: "11.900.000",
            totalValue: "214.200.000",
            icon: <DollarSign className="w-8 h-8 text-[#bd8d4c]" />,
            features: [
                "Financiado a 12 meses",
                "Retorno de inversión estimado",
                "Documentación legal incluida",
                "Asesoría personalizada",
                "Beneficios exclusivos",
                "Prioridad en selección de ubicación"
            ]
        }
    ];

    return (
        <section id="financiamiento" className="py-20 overflow-hidden bg-gradient-to-b from-[#e4d4b9] to-[#efe1cb] relative">
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
                        <Coins className="text-[#bd8d4c] absolute -left-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                        <h2 className="text-4xl md:text-5xl font-pirate text-[#8B4513] relative z-10 inline-block">
                            Paquetes de Inversión
                        </h2>
                        <Coins className="text-[#bd8d4c] absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                    </div>
                    <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-4"></div>
                    <p className="text-[#5A3921] mt-4 max-w-2xl mx-auto font-serif">
                        Invierte en Pirate Paradise con nuestros planes de financiamiento flexibles y adaptados a tus necesidades.
                    </p>
                </motion.div>
                
                {/* Tarjetas de opciones de financiamiento */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {financingOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            variants={fadeIn}
                            className={`relative rounded-lg overflow-hidden shadow-lg ${
                                option.recommended 
                                    ? "bg-[#f9f4e8] border-2 border-[#bd8d4c] transform scale-105 z-10" 
                                    : "bg-[#f5ecd9] border border-[#bd8d4c]/30"
                            }`}
                        >
                            {option.recommended && (
                                <div className="absolute top-0 right-0 bg-[#bd8d4c] text-white px-4 py-1 text-sm font-medium">
                                    Recomendado
                                </div>
                            )}
                            
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#f9f4e8] rounded-full flex items-center justify-center mr-4 border border-[#bd8d4c]/30">
                                        {option.icon}
                                    </div>
                                    <h3 className="text-2xl font-pirate text-[#8B4513]">{option.title}</h3>
                                </div>
                                
                                <div className="mb-6">
                                    <div className="flex items-baseline">
                                        <span className="text-[#bd8d4c] text-lg">$</span>
                                        <span className="text-3xl font-bold text-[#8B4513]">{option.pricePerAction}</span>
                                        <span className="text-[#5A3921] ml-1">COP</span>
                                    </div>
                                    <p className="text-sm text-[#5A3921]">cada acción</p>
                                    
                                    <div className="mt-4 pt-4 border-t border-[#bd8d4c]/20">
                                        <div className="flex items-baseline">
                                            <span className="text-[#bd8d4c] text-lg">$</span>
                                            <span className="text-2xl font-bold text-[#8B4513]">{option.totalValue}</span>
                                            <span className="text-[#5A3921] ml-1">COP</span>
                                        </div>
                                        <p className="text-sm text-[#5A3921]">Valor Total</p>
                                    </div>
                                </div>
                                
                                <ul className="space-y-2 mb-6">
                                    {option.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-[#bd8d4c] mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-[#5A3921]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <Link 
                                    href="/#contacto" 
                                    className={`block text-center py-3 px-4 rounded-full transition-colors duration-300 ${
                                        option.recommended 
                                            ? "bg-[#bd8d4c] text-white hover:bg-[#a67a3e]" 
                                            : "bg-transparent border-2 border-[#bd8d4c] text-[#8B4513] hover:bg-[#bd8d4c] hover:text-white"
                                    }`}
                                >
                                    Invertir Ahora
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Promoción de descuento */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="bg-[#8B4513]/10 rounded-lg p-6 border-l-4 border-[#bd8d4c] max-w-3xl mx-auto"
                >
                    <div className="flex items-center">
                        <div className="w-16 h-16 bg-[#bd8d4c]/20 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                            <Percent className="w-8 h-8 text-[#bd8d4c]" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-pirate text-[#8B4513] mb-2">Recibe un <span className="font-bold">10%</span> de descuento</h3>
                            <p className="text-[#5A3921] font-serif">
                                Aprovecha esta oportunidad única pagando de contado y obtén un <span className="font-bold">10%</span> de descuento en cualquiera de nuestros paquetes de inversión.
                            </p>
                        </div>
                    </div>
                </motion.div>
                
                {/* Botón de contacto */}
                <motion.div 
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                >
                    <Link 
                        href="/#contacto" 
                        className="inline-flex items-center bg-transparent border-2 border-[#bd8d4c] hover:bg-[#bd8d4c] text-[#8B4513] hover:text-[#f5ecd9] px-8 py-3 text-lg font-medium rounded-full transition-colors duration-300"
                    >
                        <CreditCard className="w-5 h-5 mr-2" />
                        Consultar Opciones de Financiamiento
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
