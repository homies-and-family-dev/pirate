"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Anchor, Compass } from "lucide-react";
import { GalleryImage } from "@/types/GalleryTypes";
import { galleryImages } from "@/data/GalleryImage";
import Image from "next/image";
// Tipos para los componentes
type OrnamentalFrameProps = {
    children: React.ReactNode;
    isModal?: boolean;
};

type NavigationButtonProps = {
    direction: 'prev' | 'next';
    onClick: (e?: React.MouseEvent) => void;
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

// Componente para el marco ornamentado
const OrnamentalFrame = ({ children, isModal = false }: OrnamentalFrameProps) => {
    return (
        <div className="relative">
            {/* Marco exterior plateado/gris */}
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-b from-gray-300 via-white to-gray-300 rounded-xl z-0"></div>
            <div className="absolute -inset-3 md:-inset-5 bg-[#0c0c0c] rounded-lg z-1"></div>
            
            {/* Marco dorado interior */}
            <div className="absolute -inset-2 md:-inset-4 border-2 md:border-4 border-[#bd8d4c] rounded-xl z-2"></div>
            
            {/* Fondo blanco para el contenido */}
            <div className="absolute inset-0 bg-white rounded-lg z-5"></div>
            
            {/* Capa de color para el modal */}
            {isModal && (
                <div className="absolute inset-0 bg-black/50 z-10 rounded-lg"></div>
            )}
            
            {/* Contenido */}
            <div className="relative z-20 p-2 md:p-4">
                {children}
            </div>
        </div>
    );
};

// Componente para los botones de navegación
const NavigationButton = ({ 
    direction, 
    onClick 
}: NavigationButtonProps) => {
    const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
    const position = direction === 'prev' ? 'left-2 md:left-4' : 'right-2 md:right-4';
    
    return (
        <div className={`absolute inset-y-0 ${position} flex items-center z-30`}>
            <button 
                className={`w-8 h-8 md:w-10 md:h-10 bg-[#0c0c0c]/80 text-[#bd8d4c] rounded-full hover:bg-[#0c0c0c] hover:text-[#ffd700] transition-all duration-300 flex items-center justify-center border-2 border-[#bd8d4c]/70 hover:border-[#ffd700] cursor-pointer transform hover:scale-110 shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
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
        <div className="flex justify-center gap-2 md:gap-3 mt-4 mb-2 relative z-20">
            {images.map((image, index) => (
                <div
                    key={image.id}
                    className={`relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0 overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                        currentIndex === index 
                            ? 'ring-2 ring-[#bd8d4c] scale-110 border border-[#ffd700]' 
                            : 'ring-1 ring-[#bd8d4c]/30 hover:ring-[#bd8d4c]/70 border border-[#bd8d4c]/30'
                    } rounded-md`}
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
        <div className="relative h-[250px] md:h-[400px] rounded-lg overflow-hidden border border-[#bd8d4c]/30">
            {/* Fondo de pergamino */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/pergamino.jpg"
                    alt="Fondo de pergamino"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                
                {/* Bordes enrollados del pergamino */}
                <div className="absolute left-0 top-0 bottom-0 w-[40px] md:w-[60px] bg-[url('/images/pergamino.jpg')] bg-cover shadow-[inset_-10px_0px_10px_rgba(0,0,0,0.2)] rounded-l-lg z-5"></div>
                <div className="absolute right-0 top-0 bottom-0 w-[40px] md:w-[60px] bg-[url('/images/pergamino.jpg')] bg-cover shadow-[inset_10px_0px_10px_rgba(0,0,0,0.2)] rounded-r-lg z-5"></div>
                <div className="absolute top-0 left-0 right-0 h-[20px] md:h-[30px] bg-[url('/images/pergamino.jpg')] bg-cover shadow-[inset_0px_-10px_10px_rgba(0,0,0,0.2)] rounded-t-lg z-5"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[20px] md:h-[30px] bg-[url('/images/pergamino.jpg')] bg-cover shadow-[inset_0px_10px_10px_rgba(0,0,0,0.2)] rounded-b-lg z-5"></div>
            </div>
            
            <Image
                src={image.imagePath}
                alt={image.title}
                fill
                className="absolute inset-0 z-10 object-cover"
                onClick={onOpen}
            />
            
            <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4 z-20">
                <NavigationButton direction="prev" onClick={onPrev} />
                <NavigationButton direction="next" onClick={onNext} />
            </div>
            
            <div className="absolute z-20 bottom-2 md:bottom-4 right-2 md:right-4">
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
                        
                        <NavigationButton direction="prev" onClick={onPrev} />
                        <NavigationButton direction="next" onClick={onNext} />
                        
                        <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 bg-[#0c0c0c] px-4 py-1 z-30 pointer-events-none border border-[#bd8d4c]/50 rounded-md">
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
                Descubre los tesoros que aguardan en nuestro paraíso pirata
            </p>
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
                
                <div className="relative mb-10 md:mb-16 max-w-4xl mx-auto">
                    <OrnamentalFrame>
                        <div className="relative">
                            {/* Título de la imagen - adaptado para móvil */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-black px-4 py-1 z-30 pointer-events-none border border-[#bd8d4c] rounded-md">
                                <span className="text-sm md:text-base text-[#bd8d4c] font-pirate">{galleryImages[currentIndex].title}</span>
                            </div>
                            
                            <MainImage 
                                image={galleryImages[currentIndex]} 
                                onPrev={handlePrevImage} 
                                onNext={handleNextImage} 
                                onOpen={openModal} 
                            />
                            
                            {/* Indicadores de posición */}
                            <div className="flex justify-center mt-2">
                                <div className="flex items-center space-x-1 bg-black px-3 py-1 rounded-full border border-[#bd8d4c]/30">
                                    {galleryImages.map((_, idx) => (
                                        <div 
                                            key={idx} 
                                            className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full ${idx === currentIndex ? 'bg-[#bd8d4c]' : 'bg-[#bd8d4c]/30'}`}
                                        ></div>
                                    ))}
                                </div>
                            </div>
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
