"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Crown } from "lucide-react";
import NavLink from "./NavLink";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevenir scroll cuando el menú móvil está abierto
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-lg"
          : "bg-gradient-to-b from-black/70 via-black/40 to-transparent"
      } py-4`}
    >
      {/* Elementos decorativos del header */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden">
            <Crown className="w-7 h-7 md:w-8 md:h-8 text-gold group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="flex flex-col ml-1">
            <span className="text-xl md:text-2xl font-medieval text-white tracking-wide">
              Pirate Paradise
            </span>
            <span className="text-xs md:text-sm tracking-wide font-medieval text-gold/70">
              Invierte en tu futuro
            </span>
          </div>
        </Link>

        {/* Desktop Navigation estilo medieval */}
        <nav className="hidden md:flex items-center space-x-8">
          {["HOME", "Ubicación", "Eventos", "Blog", "Galeria", "Tienda"].map((item) => (
            <NavLink 
              key={item} 
              href={`/${item.toLowerCase().replace(/ /g, '-')}`} 
              style="medieval"
            >
              {item}
            </NavLink>
          ))}
          
          {/* Botón de membership similar a la imagen */}
          <Link
            href="/become-a-member"
            className="flex items-center justify-center px-6 py-2 bg-transparent border border-gold text-gold hover:bg-gold/10 transition-colors duration-300 font-medieval tracking-wide text-sm rounded-none"
          >
            <Crown className="w-4 h-4 mr-2" />
            Quiero invertir
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all duration-300 group"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-gold transition-colors duration-300" />
          ) : (
            <Menu size={24} className="text-gold transition-colors duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Pantalla completa */}
      <div 
        className={`
          fixed inset-0 z-40 
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          transition-opacity duration-500
        `}
      >
        {/* Fondo medieval oscuro */}
        <div className={`
          absolute inset-0 bg-black/95 backdrop-blur-lg
          ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}
          transition-opacity duration-500
        `}>
          {/* Textura medieval */}
          <div className="absolute inset-0 bg-[url('/images/texture-dark.png')] opacity-20"></div>
          
          {/* Decoraciones medievales */}
          <div className="absolute inset-0 border-8 border-gold/5 m-8"></div>
        </div>

        {/* Contenido del menú móvil */}
        <div className={`
          relative h-full flex flex-col items-center justify-center p-8
          transform transition-transform duration-500
          ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-24'}
        `}>
          <nav className="flex flex-col items-center space-y-6 py-10">
            {/* Título del menú */}
            <div className="relative mb-8">
              <h2 className="text-3xl font-medieval text-gold">
                NAVIGATION
              </h2>
              <div className="mt-2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            </div>
            
            {/* Enlaces de navegación */}
            <div className="grid grid-cols-1 gap-6 w-full max-w-xs">
              {[
                "HOME", "ABOUT US", "EVENTS", "BLOG", "GALLERY", "SHOP", "BECOME A MEMBER"
              ].map((item, index) => (
                <div 
                  key={item}
                  className="transform transition-transform duration-500"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <NavLink 
                    href={`/${item.toLowerCase().replace(/ /g, '-')}`} 
                    isMobile={true}
                    style="medieval" 
                    onClick={closeMobileMenu}
                  >
                    {item}
                  </NavLink>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
