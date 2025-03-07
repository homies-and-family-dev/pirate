"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Anchor, Compass } from "lucide-react";
import { GalleryImage } from "@/types/GalleryTypes";
import { galleryImages } from "@/data/GalleryImage";
import Image from "next/image";
// Tipos para los componentes
type CornerDecorationsProps = {
    isModal?: boolean;
};

type OrnamentalFrameProps = {
    children: React.ReactNode;
    isModal?: boolean;
};

type NavigationButtonProps = {
    direction: 'prev' | 'next';
    onClick: (e?: React.MouseEvent) => void;
    isModal?: boolean;
};

type ThumbnailGalleryProps = {
    images: GalleryImage[];
    currentIndex: number;
    onSelect: (index: number) => void;
};

type MainImageProps = {
    image: GalleryImage;
    onPrev: (e?: React.MouseEvent) => void;
    onNext: (e?: React.MouseEvent) => void;
    onOpen: () => void;
};

type ImageModalProps = {
    isOpen: boolean;
    image: string | null;
    title: string;
    onClose: (e: React.MouseEvent) => void;
    onPrev: (e?: React.MouseEvent) => void;
    onNext: (e?: React.MouseEvent) => void;
};

type DecorativeTitleProps = {
    title: string;
};

// Componente para las esquinas decorativas
const CornerDecorations = ({ isModal = false }: CornerDecorationsProps) => {
    const size = isModal ? "w-4 h-4 md:w-8 md:h-8" : "w-4 h-4 md:w-6 md:h-6";
    
    return (
        <>
            <div className={`absolute -top-1 -left-1 ${size} border-t-2 border-l-2 border-[#bd8d4c] rounded-tl-lg z-30 pointer-events-none`}></div>
            <div className={`absolute -top-1 -right-1 ${size} border-t-2 border-r-2 border-[#bd8d4c] rounded-tr-lg z-30 pointer-events-none`}></div>
            <div className={`absolute -bottom-1 -left-1 ${size} border-b-2 border-l-2 border-[#bd8d4c] rounded-bl-lg z-30 pointer-events-none`}></div>
            <div className={`absolute -bottom-1 -right-1 ${size} border-b-2 border-r-2 border-[#bd8d4c] rounded-br-lg z-30 pointer-events-none`}></div>
        </>
    );
};

// Componente para el marco ornamentado
const OrnamentalFrame = ({ children, isModal = false }: OrnamentalFrameProps) => {
    return (
        <div className="relative">
            <div className={`absolute -inset-2 md:-inset-4 ${isModal ? 'border-2 md:border-4 border-[#bd8d4c]/20' : 'bg-[#0c0c0c] border-2 md:border-4 border-[#bd8d4c]/20'} rounded-xl z-0`}></div>
            <div className={`absolute -inset-1 md:-inset-2 ${isModal ? 'border' : 'bg-[#0c0c0c] border'} border-[#bd8d4c]/40 rounded-lg z-5`}></div>
            <div className="absolute inset-0 border-4 md:border-8 border-[#bd8d4c]/30 rounded-lg z-10 pointer-events-none"></div>
            <div className="absolute inset-0 border-[1px] border-[#bd8d4c] rounded-lg z-20 pointer-events-none"></div>
            <CornerDecorations isModal={isModal} />
            {children}
        </div>
    );
};

// Componente para los botones de navegación
const NavigationButton = ({ 
    direction, 
    onClick, 
    isModal = false 
}: NavigationButtonProps) => {
    const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
    const position = direction === 'prev' ? 'left-2 md:left-4' : 'right-2 md:right-4';
    
    return (
        <div className={`absolute inset-y-0 ${position} flex items-center z-30`}>
            <button 
                className={`w-8 h-8 md:w-10 md:h-10 bg-black/${isModal ? '70' : '50'} text-[#bd8d4c] rounded-full hover:bg-black/80 hover:text-[#ffd700] transition-all duration-300 flex items-center justify-center border border-[#bd8d4c]/50 hover:border-[#ffd700] cursor-pointer transform hover:scale-110`}
                onClick={onClick}
                aria-label={direction === 'prev' ? "Imagen anterior" : "Imagen siguiente"}
            >
                <Icon size={16} className="md:hidden" />
                <Icon size={20} className="hidden md:block" />
            </button>
        </div>
    );
};

// Componente para las miniaturas
const ThumbnailGallery = ({ 
    images, 
    currentIndex, 
    onSelect 
}: ThumbnailGalleryProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-2 md:mb-4 relative z-20">
            {images.map((image, index) => (
                <div
                    key={image.id}
                    className={`relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 overflow-hidden rounded-full cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                        currentIndex === index ? 'ring-2 ring-[#bd8d4c] scale-110' : 'ring-1 ring-[#bd8d4c]/30 hover:ring-[#bd8d4c]/70'
                    }`}
                    onClick={() => onSelect(index)}
                >
                    <Image
                        src={image.imagePath}
                        alt={image.title}
                        fill
                        className="absolute inset-0 z-10 object-cover"
                    />
                    <div className={`absolute inset-0 bg-black/30 ${currentIndex === index ? 'opacity-0' : 'opacity-50'} hover:opacity-0 transition-opacity duration-300`}></div>
                </div>
            ))}
        </div>
    );
};

// Componente para la imagen principal
const MainImage = ({ 
    image, 
    onPrev, 
    onNext, 
    onOpen 
}: MainImageProps) => {
    return (
        <div className="relative h-[250px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
                src={image.imagePath}
                alt={image.title}
                fill
                className="absolute inset-0 z-10 object-cover"
                onClick={onOpen}
            />
            <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4">
                <NavigationButton direction="prev" onClick={onPrev} />
                <NavigationButton direction="next" onClick={onNext} />
            </div>
            
            <div className="absolute z-10 bottom-2 md:bottom-4 right-2 md:right-4">
                <button 
                    className="bg-black/70 text-[#bd8d4c] px-3 py-1 md:px-4 md:py-2 rounded-sm hover:bg-black/90 hover:text-[#ffd700] transition-all duration-300 text-xs md:text-sm border border-[#bd8d4c]/50 hover:border-[#ffd700] font-pirate cursor-pointer transform hover:scale-105"
                    onClick={onOpen}
                >
                    Ampliar Mapa
                </button>
            </div>
        </div>
    );
};

// Componente para el modal de imagen ampliada
const ImageModal = ({ 
    isOpen, 
    image, 
    title, 
    onClose, 
    onPrev, 
    onNext 
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
                    <OrnamentalFrame isModal={true}>
                        <div className="relative w-full h-[60vh] md:h-[80vh] rounded-lg overflow-hidden">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="absolute inset-0 z-10 object-cover"
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
                        
                        <NavigationButton direction="prev" onClick={onPrev} isModal={true} />
                        <NavigationButton direction="next" onClick={onNext} isModal={true} />
                        
                        <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 bg-black px-2 md:px-4 z-30 pointer-events-none">
                            <span className="text-sm md:text-base text-[#bd8d4c] font-pirate">{title}</span>
                        </div>
                    </OrnamentalFrame>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// Componente para el título decorativo
const DecorativeTitle = ({ title }: DecorativeTitleProps) => {
    return (
        <div className="text-center mb-6 md:mb-10 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-64 h-2 bg-gradient-to-r from-transparent via-[#bd8d4c]/50 to-transparent"></div>
            <div className="inline-block relative">
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-[#bd8d4c] rounded-full items-center justify-center transform -rotate-12 hidden md:flex">
                    <Anchor className="w-6 h-6 text-[#bd8d4c]" />
                </div>
                <h2 className="text-3xl md:text-5xl font-pirate text-[#bd8d4c] relative z-10 inline-block uppercase px-2 md:px-6">
                    {title}
                </h2>
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-[#bd8d4c] rounded-full items-center justify-center transform rotate-12 hidden md:flex">
                    <Compass className="w-6 h-6 text-[#bd8d4c]" />
                </div>
            </div>
        </div>
    );
};

// Componente principal
export default function Amenities() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalIndex, setModalIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setCurrentIndex(index);
    };

    const handlePrevImage = (e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setCurrentIndex(newIndex);
    };

    const handleNextImage = (e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        const newIndex = (currentIndex + 1) % galleryImages.length;
        setCurrentIndex(newIndex);
    };

    const handleModalPrevImage = (e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        const newIndex = (modalIndex - 1 + galleryImages.length) % galleryImages.length;
        setModalIndex(newIndex);
        setSelectedImage(galleryImages[newIndex].imagePath);
    };

    const handleModalNextImage = (e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        const newIndex = (modalIndex + 1) % galleryImages.length;
        setModalIndex(newIndex);
        setSelectedImage(galleryImages[newIndex].imagePath);
    };

    const openModal = () => {
        setModalIndex(currentIndex);
        setSelectedImage(galleryImages[currentIndex].imagePath);
    };

    const closeModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedImage(null);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage) {
                // Modal navigation
                if (e.key === 'ArrowLeft') {
                    handleModalPrevImage();
                } else if (e.key === 'ArrowRight') {
                    handleModalNextImage();
                } else if (e.key === 'Escape') {
                    setSelectedImage(null);
                }
            } else {
                // Main gallery navigation
                if (e.key === 'ArrowLeft') {
                    handlePrevImage();
                } else if (e.key === 'ArrowRight') {
                    handleNextImage();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, modalIndex, selectedImage]);

    return (
        <section id="galeria" className="py-8 md:py-16 overflow-hidden bg-[#0c0c0c] relative">
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
                
                <div className="relative mb-6 md:mb-8 max-w-4xl mx-auto">
                    <OrnamentalFrame>
                        <div className="relative mb-4 md:mb-8">
                            {/* Título de la imagen - adaptado para móvil */}
                            <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 bg-[#0c0c0c] px-2 md:px-4 z-30 pointer-events-none">
                                <span className="text-sm md:text-base text-[#bd8d4c] font-pirate">{galleryImages[currentIndex].title}</span>
                            </div>
                            
                            {/* Indicadores de posición - adaptados para móvil */}
                            <div className="absolute -bottom-2 md:-bottom-3 left-1/2 -translate-x-1/2 bg-[#0c0c0c] px-2 md:px-4 z-30 pointer-events-none">
                                <div className="flex items-center space-x-1">
                                    {galleryImages.map((_, idx) => (
                                        <div 
                                            key={idx} 
                                            className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full ${idx === currentIndex ? 'bg-[#bd8d4c]' : 'bg-[#bd8d4c]/30'}`}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                            
                            <MainImage 
                                image={galleryImages[currentIndex]} 
                                onPrev={handlePrevImage} 
                                onNext={handleNextImage} 
                                onOpen={openModal} 
                            />
                        </div>
                        
                        <ThumbnailGallery 
                            images={galleryImages} 
                            currentIndex={currentIndex} 
                            onSelect={handleImageClick} 
                        />
                    </OrnamentalFrame>
                </div>
                
                <ImageModal 
                    isOpen={!!selectedImage} 
                    image={selectedImage} 
                    title={galleryImages[modalIndex].title} 
                    onClose={closeModal} 
                    onPrev={handleModalPrevImage} 
                    onNext={handleModalNextImage} 
                />
            </div>
        </section>
    );
}
