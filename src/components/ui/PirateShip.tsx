"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface PirateShipProps {
  className?: string;
  size?: number;
  speed?: number;
  position?: "left" | "right";
}

export default function PirateShip({
  className = "",
  size = 120,
  speed = 1,
  position = "right"
}: PirateShipProps) {
  const shipRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    if (!isMounted) return;
    
    const ship = shipRef.current;
    if (!ship) return;
    
    let startTime = Date.now();
    let animationFrameId: number;
    
    // Posición inicial
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
    const startX = position === "right" ? windowWidth + size : -size;
    const endX = position === "right" ? -size : windowWidth + size;
    
    // Duración del viaje en milisegundos (ajustada por velocidad)
    const duration = (40000 / speed) * (windowWidth / 1000);
    
    function animate() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      // Calcular la posición horizontal
      const progress = (elapsedTime % duration) / duration;
      const x = startX + (endX - startX) * progress;
      
      // Calcular el movimiento vertical (simulando olas)
      const verticalMovement = Math.sin(progress * Math.PI * 8) * 10;
      const rotation = Math.sin(progress * Math.PI * 8) * 3;
      
      // Aplicar transformaciones
      if (ship) {
        ship.style.transform = `translateX(${x}px) translateY(${verticalMovement}px) rotate(${rotation}deg)`;
      }
      
      // Reiniciar cuando el barco sale completamente de la pantalla
      if ((position === "right" && x < -size) || (position === "left" && x > windowWidth + size)) {
        startTime = Date.now();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size, speed, position, isMounted]);
  
  return (
    <div 
      ref={shipRef}
      className={`absolute bottom-20 pointer-events-none ${className}`}
      style={{ 
        width: size, 
        height: size,
        transform: `translateX(${position === "right" ? "100vw" : "-100%"})`
      }}
    >
      <Image
        src="/images/barco.png"
        alt="Pirate Ship"
        width={size}
        height={size}
        className={`w-full h-full object-contain ${position === "left" ? "scale-x-[-1]" : ""}`}
      />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
        <div className="w-4 h-8 relative overflow-hidden">
          <div className="w-full h-full bg-black animate-wave-flag"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="w-2 h-2">
              <Image
                src="/images/skull.png"
                alt="Pirate Flag"
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 