"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle, MessageCircle, ArrowRight, Anchor } from "lucide-react";
import confetti from "canvas-confetti";

export default function GraciasPage() {
    // Número de WhatsApp con prefijo de Colombia
    const phoneNumber = "573213540517";
    const whatsappMessage = encodeURIComponent("¡Hola! Estoy interesado en invertir en acciones de Pirate Paradise. ¿Podrían brindarme más información?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Lanzar confeti cuando se carga la página
    useEffect(() => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        
        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };
        
        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            
            if (timeLeft <= 0) {
                return clearInterval(interval);
            }
            
            const particleCount = 50 * (timeLeft / duration);
            
            // Lanzar confeti desde diferentes ángulos
            confetti({
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#bd8d4c', '#f2e0c8', '#8B4513'],
                shapes: ['circle', 'square'],
                gravity: randomInRange(0.4, 0.6),
                scalar: randomInRange(0.8, 1.2),
                drift: randomInRange(-0.4, 0.4)
            });
            
            confetti({
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#bd8d4c', '#f2e0c8', '#8B4513'],
                shapes: ['circle', 'square'],
                gravity: randomInRange(0.4, 0.6),
                scalar: randomInRange(0.8, 1.2),
                drift: randomInRange(-0.4, 0.4)
            });
        }, 250);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] flex items-center justify-center py-8 px-3 sm:py-12 sm:px-6 lg:px-8 relative overflow-hidden">
                        
            {/* Elementos decorativos */}
            <div className="absolute top-10 left-10 opacity-20 hidden lg:block">
                <Anchor className="w-32 h-32 text-[#bd8d4c]" />
            </div>
            <div className="absolute bottom-10 right-10 opacity-20 hidden lg:block">
                <Anchor className="w-32 h-32 text-[#bd8d4c] rotate-45" />
            </div>
            
            <div className="max-w-3xl w-full bg-black/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border-2 border-[#bd8d4c]/30 relative z-10">
                {/* Borde decorativo superior */}
                <div className="h-2 bg-gradient-to-r from-[#bd8d4c]/30 via-[#bd8d4c] to-[#bd8d4c]/30"></div>
                
                <div className="p-5 sm:p-8 md:p-12">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#bd8d4c]/20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                            <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#bd8d4c]" />
                        </div>
                        
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-spectral text-[#f2e0c8] mb-3 sm:mb-4">
                            ¡Felicidades, Marinero!
                        </h1>
                        
                        <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mb-4 sm:mb-6"></div>
                        
                        <p className="text-lg sm:text-xl text-[#f2e0c8]/80 mb-6 sm:mb-8 max-w-xl">
                            Has registrado tus datos exitosamente en nuestro sistema. Tu viaje hacia el tesoro de Pirate Paradise ha comenzado.
                        </p>
                        
                        <div className="bg-[#bd8d4c]/10 rounded-lg p-4 sm:p-6 border border-[#bd8d4c]/30 mb-6 sm:mb-8 w-full max-w-lg">
                            <h2 className="text-lg sm:text-xl font-spectral text-[#bd8d4c] mb-3 sm:mb-4 flex items-center justify-center">
                                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                                Asesoría Inmediata
                            </h2>
                            <p className="text-sm sm:text-base text-[#f2e0c8]/70 mb-4 sm:mb-6">
                                Si deseas recibir asesoría inmediata por parte de nuestros expertos en inversiones, contáctanos ahora a través de WhatsApp.
                            </p>
                            
                            <Link 
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full text-sm sm:text-base"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm.029 18.88a7.947 7.947 0 0 1-3.76-.954l-4.17 1.094 1.116-4.063A7.9 7.9 0 0 1 4.11 12c0-4.368 3.582-7.95 7.95-7.95 4.367 0 7.95 3.582 7.95 7.95 0 4.367-3.583 7.95-7.95 7.95z" fillRule="nonzero"/>
                                </svg>
                                Contactar por WhatsApp
                            </Link>
                        </div>
                        
                        <Link 
                            href="/"
                            className="flex items-center text-[#bd8d4c] hover:text-[#f2e0c8] transition-colors duration-300 text-sm sm:text-base"
                        >
                            Volver al inicio
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}