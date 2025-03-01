"use client";

import { useEffect, useRef, useState } from "react";

interface MoonProps {
  className?: string;
  size?: number;
  position?: "left" | "right" | "center";
  glow?: boolean;
}

export default function Moon({
  className = "",
  size = 100,
  position = "right",
  glow = true
}: MoonProps) {
  const moonRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    if (!isMounted) return;
    
    const moon = moonRef.current;
    if (!moon) return;
    
    // Configurar posición horizontal
    let horizontalPosition = "50%";
    if (position === "left") horizontalPosition = "20%";
    if (position === "right") horizontalPosition = "80%";
    
    moon.style.left = horizontalPosition;
    
    // Efecto de flotación suave
    const startTime = Date.now();
    let animationFrameId: number;
    
    function animate() {
      const currentTime = Date.now();
      const elapsedTime = (currentTime - startTime) / 1000; // tiempo en segundos
      
      // Movimiento vertical muy sutil
      const verticalMovement = Math.sin(elapsedTime * 0.2) * 5;
      
      // Aplicar transformación
      if (moon) {
        moon.style.transform = `translateY(${verticalMovement}px)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [position, isMounted]);
  
  return (
    <div 
      ref={moonRef}
      className={`absolute top-[10%] pointer-events-none ${className}`}
      style={{ 
        width: size, 
        height: size,
      }}
    >
      {/* Luna */}
      <div className="relative w-full h-full">
        {/* Resplandor de la luna */}
        {glow && (
          <div 
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)`,
              width: `${size * 2}px`,
              height: `${size * 2}px`,
              left: `${-size / 2}px`,
              top: `${-size / 2}px`
            }}
          ></div>
        )}
        
        {/* Luna principal */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(220,220,255,1) 50%, rgba(200,200,240,1) 100%)`,
            boxShadow: `0 0 20px 5px rgba(255,255,255,0.3)`
          }}
        ></div>
        
        {/* Cráteres de la luna */}
        <div className="absolute top-[20%] left-[30%] w-[15%] h-[15%] rounded-full bg-[rgba(200,200,220,0.8)]"></div>
        <div className="absolute top-[50%] left-[60%] w-[20%] h-[20%] rounded-full bg-[rgba(200,200,220,0.8)]"></div>
        <div className="absolute top-[70%] left-[25%] w-[10%] h-[10%] rounded-full bg-[rgba(200,200,220,0.8)]"></div>
      </div>
    </div>
  );
} 