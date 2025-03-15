'use client';
import Clarity from '@microsoft/clarity';
import { useEffect } from 'react';

declare global {
  interface Window {
    clarity: {
      (method: string, ...args: unknown[]): void;
      q?: unknown[];
    };
  }
}

const ClarityScript = () => {
  useEffect(() => {
    try {
      // Inicializar Clarity con el ID del proyecto
      Clarity.init(process.env.CLARITY_PROJECT_ID || 'nilxnrkx7u');
      // Configurar eventos personalizados para el seguimiento de navegación
      const trackPageView = () => {
        Clarity.setTag("page_path", window.location.pathname);
        Clarity.event("page_view");
      };

      // Trackear la vista de página inicial
      trackPageView();

      // Configurar el consentimiento de cookies (si es necesario)
      Clarity.consent(true);

    } catch (error) {
      console.error('Error initializing Clarity:', error);
    }
  }, []);

  return null;
};

export default ClarityScript; 