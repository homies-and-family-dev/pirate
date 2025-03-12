"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Anchor, Compass, Maximize } from "lucide-react";
import { GalleryImage } from "@/types/GalleryTypes";
import { galleryImages } from "@/data/GalleryImage";
import Image from "next/image";
import Separator from "@/components/ui/Separator";

// Tipos para los componentes
type ImageModalProps = {
    isOpen: boolean;
    image: string | null;
    title: string;
    onClose: (e: React.MouseEvent) => void;
};

type DecorativeTitleProps = {
    title: string;
};

type GalleryItemProps = {
    image: GalleryImage;
    onClick: () => void;
};

// Componente para el título decorativo
const DecorativeTitle = ({ title }: DecorativeTitleProps) => {
    return (
        <div className="text-center mb-8 md:mb-12 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-64 h-2 bg-gradient-to-r from-transparent via-[#bd8d4c]/50 to-transparent"></div>
            <div className="inline-block relative">
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-[#bd8d4c] rounded-full items-center justify-center transform -rotate-12 hidden md:flex bg-[#0c0c0c]/80">
                    <Anchor className="w-6 h-6 text-[#bd8d4c]" />
                </div>
                <h2 className="text-3xl md:text-5xl font-pirate text-[#bd8d4c] relative z-10 inline-block uppercase px-2 md:px-6 drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    {title}
                </h2>
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-[#bd8d4c] rounded-full items-center justify-center transform rotate-12 hidden md:flex bg-[#0c0c0c]/80">
                    <Compass className="w-6 h-6 text-[#bd8d4c]" />
                </div>
            </div>
            <div className="h-1 w-32 md:w-48 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-4"></div>
            <p className="text-[#bd8d4c]/80 mt-2 font-serif italic text-sm md:text-base">
            Descubre las amenidades de este exclusivo proyecto
            </p>
        </div>
    );
};

// Componente para cada elemento de la galería
const GalleryItem = ({ image, onClick }: GalleryItemProps) => {
    return (
        <motion.div 
            className="relative overflow-hidden rounded-lg border-2 border-[#bd8d4c]/30 group cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            onClick={onClick}
        >
            {/* Fondo de pergamino */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/pergamino.jpg"
                    alt="Fondo de pergamino"
                    fill
                    className="object-cover opacity-90"
                />
                
                {/* Bordes enrollados del pergamino */}
                <div className="absolute left-0 top-0 bottom-0 w-[20px] bg-[url('/images/pergamino.jpg')] bg-cover shadow-[inset_-5px_0px_5px_rgba(0,0,0,0.2)] rounded-l-lg z-5"></div>
                <div className="absolute right-0 top-0 bottom-0 w-[20px] bg-[url('/images/pergamino.jpg')] bg-cover shadow-[inset_5px_0px_5px_rgba(0,0,0,0.2)] rounded-r-lg z-5"></div>
                <div className="absolute top-0 left-0 right-0 h-[15px] bg-[url('/images/pergamino.jpg')] bg-cover shadow-[inset_0px_-5px_5px_rgba(0,0,0,0.2)] rounded-t-lg z-5"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[15px] bg-[url('/images/pergamino.jpg')] bg-cover shadow-[inset_0px_5px_5px_rgba(0,0,0,0.2)] rounded-b-lg z-5"></div>
            </div>
            
            {/* Imagen */}
            <div className="aspect-square relative">
                <Image
                    src={image.imagePath}
                    alt={image.title}
                    fill
                    className="object-cover z-10"
                />
                
                {/* Overlay con título y botón de ampliar */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 z-20 flex flex-col justify-between p-3">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-end">
                        <div className="bg-black/70 p-2 rounded-full border border-[#bd8d4c]/50">
                            <Maximize size={18} className="text-[#bd8d4c]" />
                        </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 p-2 rounded-md border border-[#bd8d4c]/50">
                        <h3 className="text-[#bd8d4c] font-pirate text-sm md:text-base">{image.title}</h3>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Componente para el modal de imagen ampliada
const ImageModal = ({ 
    isOpen, 
    image, 
    title, 
    onClose
}: ImageModalProps) => {
    if (!isOpen || !image) return null;
    
    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    className="relative max-w-5xl max-h-[90vh] w-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative">
                        {/* Marco exterior plateado/gris */}
                        <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-b from-gray-300 via-white to-gray-300 rounded-xl z-0"></div>
                        <div className="absolute -inset-3 md:-inset-5 bg-[#0c0c0c] rounded-lg z-1"></div>
                        
                        {/* Marco dorado interior */}
                        <div className="absolute -inset-2 md:-inset-4 border-2 md:border-4 border-[#bd8d4c] rounded-xl z-2"></div>
                        
                        {/* Fondo blanco para el contenido */}
                        <div className="absolute inset-0 bg-white rounded-lg z-5"></div>
                        
                        {/* Capa de color para el modal */}
                        <div className="absolute inset-0 bg-black/50 z-10 rounded-lg"></div>
                        
                        {/* Contenido */}
                        <div className="relative z-20 p-2 md:p-4">
                            <div className="relative w-full h-[60vh] md:h-[80vh] rounded-lg overflow-hidden">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="absolute inset-0 z-10 object-contain"
                                />
                            </div>
                            
                            <button 
                                className="absolute top-2 right-2 md:top-4 md:right-4 bg-black/70 text-[#bd8d4c] p-1.5 md:p-2 rounded-full hover:bg-black/90 hover:text-[#ffd700] transition-all duration-300 border border-[#bd8d4c]/50 hover:border-[#ffd700] z-30 cursor-pointer transform hover:scale-110"
                                onClick={onClose}
                                aria-label="Cerrar vista ampliada"
                            >
                                <X size={16} className="md:hidden" />
                                <X size={20} className="hidden md:block" />
                            </button>
                            
                            <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 bg-[#0c0c0c] px-4 py-1 z-30 pointer-events-none border border-[#bd8d4c]/50 rounded-md">
                                <span className="text-sm md:text-base text-[#bd8d4c] font-pirate">{title}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// Componente principal
export default function Amenities() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string>("");

    const openModal = (image: GalleryImage) => {
        setSelectedImage(image.imagePath);
        setSelectedTitle(image.title);
    };

    const closeModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedImage(null);
    };

    return (
        <>
        <Separator />
        <section id="galeria" className="py-12 md:py-20 overflow-hidden bg-[#0c0c0c] relative">
            {/* Elementos decorativos de fondo - solo visibles en desktop */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none hidden md:block">
                <div className="absolute top-10 left-10">
                    <Anchor className="w-40 h-40 text-[#bd8d4c]" />
                </div>
                <div className="absolute bottom-10 right-10">
                    <Compass className="w-40 h-40 text-[#bd8d4c]" />
                </div>
            </div>
            
            <div className="container mx-auto px-4 relative z-20">
                <DecorativeTitle title="Tesoros del Paraíso" />
                
                {/* Galería tipo grilla */}
                <div className="relative mb-10 md:mb-16 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {galleryImages.map((image) => (
                            <GalleryItem 
                                key={image.id} 
                                image={image} 
                                onClick={() => openModal(image)} 
                            />
                        ))}
                    </div>
                </div>
                
                {/* Modal para ver imagen ampliada */}
                <ImageModal 
                    isOpen={!!selectedImage} 
                    image={selectedImage} 
                    title={selectedTitle} 
                    onClose={closeModal} 
                />
            </div>
        </section>
        </>
    );
}
