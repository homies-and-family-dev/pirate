"use client";

import { motion } from "framer-motion";
import { Home, Droplets, Bed, Bath, Loader2, ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SeparatorTop from "@/components/ui/SeparatorTop";
import { useState, useEffect } from "react";

export default function Areas() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    // Estado para controlar la imagen modal
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [imageError, setImageError] = useState(false);
    
    // Estado para controlar qué imagen se muestra en cada cabaña
    const [activeImages, setActiveImages] = useState<{[key: string]: boolean}>({
        tipo1: true, // true = mostrar plano, false = mostrar render
        tipo2: true,
        tipo3: true
    });

    // Efecto para manejar la tecla Escape para cerrar el modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        
        // Bloquear el scroll cuando el modal está abierto
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [showModal]);

    // Resetear el estado de error cuando cambia la imagen modal
    useEffect(() => {
        setImageError(false);
    }, [modalImage]);

    const cabinTypes = [
        {
            id: "tipo1",
            name: "Cabaña Tipo 1",
            bedrooms: 1,
            bathrooms: 1,
            features: ["Área de estar exterior", "Vista a la represa", "Cocina integrada", "Sala de estar"],
            description: "Diseño moderno con amplios espacios abiertos, ideal para parejas o familias pequeñas.",
            imagePath: "/images/renders/cabaniatipo12.jpg",
            floorPlanPath: "/images/renders/cabaniatipo1.jpg"
        },
        {
            id: "tipo2",
            name: "Cabaña Tipo 2",
            bedrooms: 2,
            bathrooms: 2,
            features: ["Piscina privada", "Área de descanso exterior", "Área de BBQ", "Sala-comedor integrado"],
            description: "Espacios versátiles con piscina privada y amplias áreas sociales para disfrutar en familia.",
            imagePath: "/images/renders/cabaniatipo22.jpg",
            floorPlanPath: "/images/renders/cabaniatipo2.jpg"
        },
        {
            id: "tipo3",
            name: "Cabaña Tipo 3",
            bedrooms: 3,
            bathrooms: 2,
            features: ["Jacuzzi", "Vista a la represa", "Estudio/oficina", "Vestidor principal"],
            description: "Nuestra opción más exclusiva con acabados premium y vistas panorámicas al lago.",
            imagePath: "/images/renders/cabaniatipo33.jpg",
            floorPlanPath: "/images/renders/cabaniatipo3.jpg"
        }
    ];

    // Función para alternar entre plano y render
    const toggleImage = (cabinId: string) => {
        setActiveImages(prev => ({
            ...prev,
            [cabinId]: !prev[cabinId]
        }));
    };

    // Función para abrir el modal con la imagen seleccionada
    const openModal = (imagePath: string, title: string) => {
        setIsLoading(true);
        setImageError(false);
        
        // Asegurarse de que la ruta de la imagen comience con "/"
        const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
        setModalImage(normalizedPath);
        setModalTitle(title);
        setShowModal(true);
    };

    // Función para manejar la carga completa de la imagen
    const handleImageLoad = () => {
        setIsLoading(false);
    };

    // Función para manejar errores de carga de imagen
    const handleImageError = () => {
        console.error("Error al cargar la imagen:", modalImage);
        setIsLoading(false);
        setImageError(true);
    };

    return (
        <>
        <SeparatorTop />
        <section id="modelos" className="py-16 overflow-hidden bg-gradient-to-b from-[#e4d4b9] to-[#efe1cb] relative">
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
                        <Home className="text-[#bd8d4c] absolute -left-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                        <h2 className="text-4xl md:text-5xl font-spectral text-[#8B4513] relative z-10 inline-block">
                            Nuestras Cabañas
                        </h2>
                        <Home className="text-[#bd8d4c] absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-70 rotate-180" size={24} />
                    </div>
                    <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-4"></div>
                    <p className="text-[#5A3921] mt-4 max-w-2xl mx-auto font-montserrat">
                        Descubre nuestros exclusivos modelos de cabañas, diseñados para ofrecer confort, privacidad y una experiencia única en contacto con la naturaleza.
                    </p>
                </motion.div>
                
                {/* Cabañas - Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cabinTypes.map((cabin, index) => (
                        <motion.div 
                            key={cabin.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            variants={fadeIn}
                            className="bg-[#f5ecd9] rounded-xl overflow-hidden border border-[#bd8d4c]/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Imagen principal con overlay */}
                            <div 
                                className="relative h-56 overflow-hidden cursor-pointer"
                                onClick={() => openModal(
                                    activeImages[cabin.id] ? cabin.floorPlanPath : cabin.imagePath, 
                                    cabin.name
                                )}
                            >
                                <Image 
                                    src={activeImages[cabin.id] ? cabin.floorPlanPath : cabin.imagePath} 
                                    alt={activeImages[cabin.id] ? `Plano de ${cabin.name}` : cabin.name} 
                                    width={600} 
                                    height={400} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                    <div className="p-4 text-white">
                                        <h3 className="text-xl font-spectral">{cabin.name}</h3>
                                        <p className="text-sm opacity-80">{activeImages[cabin.id] ? "Plano arquitectónico" : "Vista exterior"}</p>
                                    </div>
                                </div>
                                
                                {/* Imagen pequeña superpuesta (ahora clickeable) */}
                                <div 
                                    className="absolute -bottom-2 -right-2 w-24 h-24 rounded-lg overflow-hidden border-2 border-[#bd8d4c]/50 shadow-md cursor-pointer transition-transform duration-300 hover:scale-110 hover:border-[#bd8d4c]"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Evitar que se propague al contenedor padre
                                        toggleImage(cabin.id);
                                    }}
                                >
                                    <Image 
                                        src={activeImages[cabin.id] ? cabin.imagePath : cabin.floorPlanPath} 
                                        alt={activeImages[cabin.id] ? cabin.name : `Plano de ${cabin.name}`} 
                                        width={200} 
                                        height={200} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            
                            {/* Información */}
                            <div className="p-4">
                                <p className="text-[#5A3921] text-sm mb-3 font-montserrat">{cabin.description}</p>
                                
                                <div className="grid grid-cols-3 gap-2 mb-3 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Bed className="w-4 h-4 text-[#bd8d4c]" />
                                        <span className="text-[#5A3921]">{cabin.bedrooms} Hab.</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Bath className="w-4 h-4 text-[#bd8d4c]" />
                                        <span className="text-[#5A3921]">{cabin.bathrooms} Baños</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Droplets className="w-4 h-4 text-[#bd8d4c]" />
                                        <span className="text-[#5A3921]">Jacuzzi</span>
                                    </div>
                                </div>
                                
                                <div className="mb-4">
                                    <h4 className="text-[#8B4513] font-medium text-sm mb-2">Características:</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {cabin.features.map((feature, i) => (
                                            <span 
                                                key={i} 
                                                className="bg-[#bd8d4c]/10 text-[#8B4513] text-xs px-2 py-1 rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Llamada a la acción */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <Link 
                        href="/#contacto"
                        className="inline-flex items-center bg-[#bd8d4c] hover:bg-[#a57a3b] text-white px-6 py-2 text-base font-medium rounded-full transition-colors duration-300"
                    >
                        Ver todas las cabañas
                    </Link>
                </motion.div>
            </div>
        </section>

        {/* Modal para previsualizar imágenes */}
        {showModal && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
                <div className="relative max-w-4xl w-full bg-[#0d0d0d]/90 rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <div className="absolute top-2 right-2 z-10">
                        <button 
                            className="bg-[#bd8d4c] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#a57a3b] transition-colors"
                            onClick={() => setShowModal(false)}
                        >
                            ✕
                        </button>
                    </div>
                    <div className="p-2">
                        <div className="relative aspect-video overflow-hidden rounded-lg flex items-center justify-center">
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                                    <Loader2 className="w-10 h-10 text-[#bd8d4c] animate-spin" />
                                </div>
                            )}
                            
                            {imageError ? (
                                <div className="flex flex-col items-center justify-center text-[#f2e0c8] p-8">
                                    <ImageIcon className="w-16 h-16 text-[#bd8d4c] mb-4" />
                                    <p>No se pudo cargar la imagen</p>
                                    <button 
                                        className="mt-4 px-4 py-2 bg-[#bd8d4c] text-white rounded-full text-sm hover:bg-[#a57a3b] transition-colors"
                                        onClick={() => setImageError(false)}
                                    >
                                        Intentar de nuevo
                                    </button>
                                </div>
                            ) : (
                                modalImage && (
                                    <div className="relative w-full h-full">
                                        <Image 
                                            src={modalImage} 
                                            alt={modalTitle} 
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                                            priority
                                            className="object-contain"
                                            onLoad={handleImageLoad}
                                            onError={handleImageError}
                                        />
                                    </div>
                                )
                            )}
                        </div>
                        <div className="text-center py-3 text-[#f2e0c8]">
                            <h3 className="text-xl font-spectral">{modalTitle}</h3>
                            <p className="text-sm opacity-70 mt-1">
                                {modalImage?.includes('floorPlan') || modalImage?.includes('cabaniatipo1.jpg') || modalImage?.includes('cabaniatipo2.jpg') || modalImage?.includes('cabaniatipo3.jpg') 
                                    ? "Plano arquitectónico" 
                                    : "Vista exterior"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}
