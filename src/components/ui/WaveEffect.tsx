"use client";

import { useEffect, useRef, useState } from "react";

interface WaveEffectProps {
  className?: string;
  color?: string;
  height?: number;
  speed?: number;
  opacity?: number;
}

export default function WaveEffect({
  className = "",
  color = "rgba(0, 50, 100, 0.3)",
  height = 100,
  speed = 10,
  opacity = 0.2
}: WaveEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    if (!isMounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let time = 0;
    
    // Ajustar el tamaño del canvas al tamaño de la ventana
    const handleResize = () => {
      if (!canvas) return;
      
      const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
      canvas.width = windowWidth;
      canvas.height = height;
      
      // Reiniciar la animación cuando cambia el tamaño
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animate();
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    function animate() {
      if (!ctx || !canvas) return;
      
      time += 0.005 * speed;
      
      // Limpiar el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dibujar múltiples capas de olas
      drawWave(ctx, canvas.width, canvas.height, time, 0.5, color, opacity);
      drawWave(ctx, canvas.width, canvas.height, time * 0.8, 0.3, color, opacity * 0.7);
      drawWave(ctx, canvas.width, canvas.height, time * 1.2, 0.2, color, opacity * 0.5);
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    function drawWave(
      ctx: CanvasRenderingContext2D, 
      width: number, 
      height: number, 
      time: number, 
      amplitude: number,
      color: string,
      opacity: number
    ) {
      ctx.save();
      
      const wavelength = width / 2;
      const frequency = 2 * Math.PI / wavelength;
      const waveHeight = height * amplitude;
      
      ctx.beginPath();
      ctx.moveTo(0, height);
      
      // Dibujar la ola
      for (let x = 0; x <= width; x += 5) {
        const y = height - waveHeight * Math.sin(frequency * x + time);
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(width, height);
      ctx.closePath();
      
      // Aplicar un gradiente para dar profundidad
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, color.replace(/[\d.]+\)$/g, `${opacity * 1.5})`));
      gradient.addColorStop(1, color.replace(/[\d.]+\)$/g, `${opacity * 0.5})`));
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      ctx.restore();
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, height, speed, opacity, isMounted]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`absolute bottom-0 left-0 right-0 pointer-events-none ${className}`}
      style={{ zIndex: 5 }}
    />
  );
} 