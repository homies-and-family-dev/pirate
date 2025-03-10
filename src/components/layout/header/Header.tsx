"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CoinsIcon, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determinar si el usuario ha scrolleado lo suficiente para cambiar el estilo
      setIsScrolled(currentScrollY > 50);
      
      // Determinar la dirección del scroll
      if (currentScrollY < lastScrollY) {
        // Scrolling up - mostrar el header
        setIsVisible(true);
      } else if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        // Scrolling down y ha pasado el umbral - ocultar el header
        setIsVisible(false);
      }
      
      // Actualizar la posición del último scroll
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/#ubicacion", label: "Ubicación", shortLabel: "Ubicación" },
    { href: "/#rentabilidad", label: "Rentabilidad", shortLabel: "Rentabilidad" },
    { href: "/#modelos", label: "Modelos de negocio", shortLabel: "Modelos" },
    { href: "/#financiamiento", label: "Financiación", shortLabel: "Financiación" },
    { href: "/#galeria", label: "Galería", shortLabel: "Galería" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-500
        ${isScrolled
          ? "bg-black/90 backdrop-blur-lg shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-black/80 via-black/50 to-transparent"
        }
        ${isVisible 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-full opacity-0"
        }
      `}
    >
      <div className="relative">
        {/* Border frame */}
        <div className="mx-4 sm:mx-6 md:mx-0 2xl:mx-20">
          <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 2xl:px-20 py-1 relative">
            <Link href="/" className="relative group z-10 flex-shrink-0">
              <Image 
                src="/images/logo.png" 
                alt="Pirate Paradise Logo" 
                width={64} 
                height={64}
                className="w-full h-full max-w-16 md:max-w-20 transform group-hover:scale-110 transition-transform duration-300"
              />  
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block flex-grow mx-4 lg:mx-8">
              <ul className="flex items-center justify-center flex-wrap gap-x-4 lg:gap-x-8 xl:gap-x-12 gap-y-2 text-[#f2e0c8] transition-colors duration-300 uppercase text-sm lg:text-base font-medium">
                {navLinks.map((link, index) => (
                  <li key={index} className="whitespace-nowrap">
                    <Link 
                      href={link.href} 
                      className="relative group z-10 hover:text-[#bd8d4c] transition-colors duration-300 py-2 block"
                      title={link.label}
                    >
                      {link.shortLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link 
              href="/#contacto" 
              className="hidden uppercase md:flex items-center bg-transparent border-2 border-[#bd8d4c] hover:bg-[#bd8d4c] text-[#f2e0c8] px-4 lg:px-6 py-2 text-sm lg:text-base font-medium rounded-full transition-colors duration-300 flex-shrink-0 whitespace-nowrap"
            >
              <CoinsIcon className="w-5 h-5 mr-2" />
              Invertir
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden  text-[#f2e0c8] z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
            
            {/* Mobile Menu Overlay */}
            <div 
              className={`
                fixed inset-0 h-screen w-full bg-black z-40 
                transition-all duration-500 ease-in-out
                flex flex-col
                ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                md:hidden
              `}
            >
              <div className="flex flex-col items-center justify-center h-full w-full">
                <ul className="flex flex-col items-center gap-8 text-[#f2e0c8] uppercase text-xl font-medium">
                  {navLinks.map((link, index) => (
                    <li key={index} className="w-full text-center">
                      <Link 
                        href={link.href} 
                        className="relative group z-10 hover:text-[#bd8d4c] transition-colors duration-300 block py-2"
                        onClick={closeMenu}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-8 w-full text-center">
                    <Link 
                      href="/#contacto" 
                      className="flex items-center justify-center bg-transparent border-2 border-[#bd8d4c] hover:bg-[#bd8d4c] text-[#f2e0c8] px-6 py-3 text-lg font-medium rounded-full transition-colors duration-300 mx-auto"
                      onClick={closeMenu}
                    >
                      <CoinsIcon className="w-6 h-6 mr-2" />
                      Invertir
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
