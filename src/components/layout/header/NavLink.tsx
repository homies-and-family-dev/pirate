"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isMobile?: boolean;
  isDayTime?: boolean;
  style?: "default" | "medieval";
  onClick?: () => void;
}

export default function NavLink({ 
  href, 
  children, 
  className = "", 
  isMobile = false,
  onClick,
  isDayTime = false,
  style = "default"
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  if (style === "medieval") {
    return (
      <Link
        href={href}
        className={`
          ${className}
          relative group
          ${isMobile 
            ? "text-xl font-medieval text-gold/80 hover:text-gold transition-all duration-300 py-3 block w-full tracking-wide uppercase"
            : "text-white/80 hover:text-white transition-all duration-300 font-medieval tracking-wide uppercase px-2 py-1"
          }
          ${isActive ? "text-gold font-medium" : ""}
        `}
        onClick={onClick}
      >
        {/* Desktop version */}
        {!isMobile && (
          <>
            {/* Contenido */}
            <span className="relative z-10">
              {children}
              
              {/* Efecto de subrayado */}
              <span className={`
                absolute -bottom-1 left-0 w-full h-0.5
                bg-gold/80
                transform origin-left scale-x-0 transition-transform duration-300
                ${isActive ? "scale-x-100" : "group-hover:scale-x-100"}
              `}></span>
            </span>
          </>
        )}

        {/* Mobile version */}
        {isMobile && (
          <>
            <span className="relative flex items-center hover:translate-x-1 transition-transform duration-300">
              {/* Text content */}
              <span className="relative">
                {children}
                
                {/* Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300"></span>
              </span>
              
              {/* Active indicator */}
              {isActive && (
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rounded-full"></span>
              )}
            </span>
          </>
        )}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`
        ${className}
        relative group
        ${isMobile 
          ? "text-2xl font-pirate text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/80 hover:from-gold hover:to-gold/90 transition-all duration-300 py-4 block w-full"
          : "text-silver/90 hover:text-gold transition-all duration-300 font-medieval tracking-wide px-4 py-2 rounded-full mx-0.5 relative overflow-hidden"
        }
        ${isActive 
          ? isMobile 
            ? "text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/90" 
            : "text-gold bg-gradient-to-r from-gold/10 to-transparent"
          : ""
        }
        ${isDayTime && !isMobile
          ? "text-[#001220] hover:text-[#001220]/80"
          : isMobile 
            ? "" 
            : "text-silver hover:text-gold"
        }
      `}
      onClick={onClick}
    >
      {/* Desktop version */}
      {!isMobile && (
        <>
          {/* Hover background effect */}
          <span className={`
            absolute inset-0 
            ${isDayTime 
              ? "bg-gradient-to-r from-sky-400/20 to-transparent" 
              : "bg-gradient-to-r from-gold/10 to-transparent"
            } 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
          `}></span>
          
          {/* Active/Hover border effect */}
          <span className={`
            absolute inset-0 rounded-full border
            ${isDayTime 
              ? "border-transparent group-hover:border-[#001220]/20" 
              : "border-transparent group-hover:border-gold/20"
            }
            transition-all duration-300
          `}></span>
          
          {/* Efecto de brillo al hover */}
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-radial from-gold/5 to-transparent"></span>
          
          {/* Texto y contenedor de subrayado */}
          <span className="relative">
            {/* Pequeño destello lateral en hover/active */}
            <span className={`
              absolute -left-1 top-1/2 transform -translate-y-1/2 w-0.5 h-0
              ${isDayTime 
                ? "bg-[#001220]/40" 
                : "bg-gold/40"
              }
              rounded-full
              ${isActive ? "h-3/4" : "group-hover:h-1/2"}
              transition-all duration-300
            `}></span>
            
            {/* Texto */}
            <span className={`
              relative z-10
              ${isActive ? "font-medium" : ""}
            `}>
              {children}
            </span>
            
            {/* Efecto de tesoro bajo el texto en hover/active */}
            <span className={`
              absolute -bottom-1 -right-1 
              w-2 h-2 rounded-full 
              transform scale-0 origin-center
              transition-transform duration-500
              ${isDayTime 
                ? "bg-[#001220]/30" 
                : "bg-gold/30"
              }
              ${isActive ? "scale-100" : "group-hover:scale-100"}
              group-hover:animate-pulse
            `}></span>
            
            {/* Efectos de subrayado */}
            <span className={`
              absolute -bottom-1 left-0 w-full h-0.5
              ${isDayTime 
                ? "bg-gradient-to-r from-[#001220]/80 to-[#001220]/20" 
                : "bg-gradient-to-r from-gold/80 to-gold/20"
              }
              transform origin-left scale-x-0 transition-transform duration-300
              ${isActive ? "scale-x-100" : "group-hover:scale-x-100"}
            `}></span>
            
            <span className={`
              absolute -bottom-2 left-0 w-full h-px
              ${isDayTime 
                ? "bg-gradient-to-r from-[#001220]/40 to-transparent" 
                : "bg-gradient-to-r from-gold/40 to-transparent"
              }
              transform origin-left scale-x-0 transition-transform duration-500 delay-75
              ${isActive ? "scale-x-75" : "group-hover:scale-x-75"}
            `}></span>
          </span>
        </>
      )}

      {/* Mobile version with pirate theme enhancements */}
      {isMobile && (
        <>
          <span className="relative flex items-center group-hover:translate-x-1 transition-transform duration-300">
            {/* Text content */}
            <span className="relative">
              {children}
              
              {/* Animated underline */}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-gold/60 to-gold/20 group-hover:w-full transition-all duration-300 delay-100"></span>
            </span>
            
            {/* Left glow effect */}
            <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full blur-sm"></span>
            
            {/* Right ship trail effect - appears on hover */}
            <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-0 opacity-0 group-hover:opacity-100 group-hover:w-4 transition-all duration-500">
              <span className="absolute top-0 right-0 text-xs text-gold/40 transform rotate-90">{'{'}</span>
              <span className="absolute bottom-0 right-0 text-xs text-gold/40 transform -rotate-90">{'}'}</span>
            </span>
            
            {/* Active indicator */}
            {isActive && (
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rounded-full animate-pulse-fast opacity-80"></span>
            )}
          </span>
        </>
      )}
    </Link>
  );
}
