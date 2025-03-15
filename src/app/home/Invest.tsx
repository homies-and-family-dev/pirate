import Image from "next/image";
import Link from "next/link";
import { CoinsIcon, Anchor, Clock, TrendingUp, BarChart3, Percent, Users, MapPin, Tag, Ticket } from "lucide-react";

// Componente para los separadores decorativos
const PirateDivider = () => (
  <div className="flex items-center justify-center w-full my-8 md:my-12">
    <div className="h-px bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent w-1/3"></div>
    <div className="mx-4">
      <Anchor className="w-8 h-8 text-[#bd8d4c] rotate-45" />
    </div>
    <div className="h-px bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent w-1/3"></div>
  </div>
);

// Componente para las tarjetas de inversión
interface InvestmentOptionProps {
  title: string;
  price: string;
  period: string;
  description: string;
  isHighlighted?: boolean;
}

const InvestmentOption = ({ title, price, period, description, isHighlighted = false }: InvestmentOptionProps) => (
  <div className={`
    relative border-2 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 h-full
    ${isHighlighted 
      ? 'border-[#ffd700] bg-gradient-to-b from-black to-[#1a1a1a]' 
      : 'border-[#bd8d4c] bg-black'
    }
  `}>
    {isHighlighted && (
      <div className="absolute top-0 right-0 bg-[#ffd700] text-black font-bold py-1 px-4 rounded-bl-lg uppercase text-xs">
        Recomendado
      </div>
    )}
    
    <div className="p-5 md:p-6 lg:p-8 flex flex-col h-full">
      <h3 className="text-xl md:text-2xl font-spectral text-[#f2e0c8] mb-3 uppercase">{title}</h3>
      
      <div className="flex items-baseline mb-4">
        <span className="text-2xl md:text-3xl lg:text-4xl font-title text-[#bd8d4c] font-bold">{price}</span>
        <span className="text-[#f2e0c8]/70 ml-2">{period}</span>
      </div>
      
      <p className="text-[#f2e0c8]/80 mb-6 flex-grow">{description}</p>
      
      <Link 
        href="/#contacto" 
        className="block w-full text-center uppercase bg-transparent border-2 border-[#bd8d4c] hover:bg-[#bd8d4c] text-[#f2e0c8] px-4 md:px-6 py-2 md:py-3 font-medium rounded-full transition-colors duration-300 mt-auto"
      >
        <CoinsIcon className="w-5 h-5 mr-2 inline-block" />
        Invertir ahora
      </Link>
    </div>
  </div>
);

export default function Invest() {
  return (
    <section id="financiamiento" className="py-20 md:py-28 bg-black relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10 z-0">
        <Image 
          src="/images/map-bg.jpg" 
          alt="Mapa del tesoro" 
          fill 
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-spectral text-[#f2e0c8] mb-4">Invierte en el Tesoro Pirata</h2>
          <p className="text-xl text-[#f2e0c8]/80 max-w-3xl mx-auto">
            Únete a nuestra tripulación y obtén una parte del botín con estas opciones de inversión exclusivas
          </p>
        </div>
        
        <PirateDivider />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <InvestmentOption 
            title="Pago Inmediato" 
            price="$13.900.000" 
            period="COP"
            description="Conviértete en accionista de inmediato con un único pago. La opción más económica para unirte a nuestra tripulación."
          />
          
          <InvestmentOption 
            title="Financiado 6 Meses" 
            price="$14.900.000" 
            period="COP"
            description="Divide tu inversión en 6 cuotas mensuales 100% sin intereses para facilitar tu entrada a esta aventura pirata."
            isHighlighted={true}
          />
          
          <InvestmentOption 
            title="Financiado 12 Meses" 
            price="$15.900.000" 
            period="COP"
            description="La opción más flexible con 12 cuotas mensuales 100% sin intereses para que puedas unirte sin preocupaciones a nuestro tesoro."
          />
        </div>
        
        <PirateDivider />
        
        {/* Proyección de retorno de inversión */}
        <div id="rentabilidad" className="bg-[#0d0d0d] border-2 border-[#bd8d4c]/30 rounded-xl p-6 md:p-8 max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl font-spectral text-[#bd8d4c] mb-6 text-center">Proyección del Proyecto</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/50 rounded-lg p-5 border border-[#bd8d4c]/20">
              <div className="flex items-center mb-4">
                <div className="bg-[#bd8d4c]/20 p-3 rounded-full mr-3">
                  <BarChart3 className="w-6 h-6 text-[#bd8d4c]" />
                </div>
                <h4 className="text-lg font-spectral text-[#f2e0c8]">Ocupación Proyectada</h4>
              </div>
              <p className="text-[#f2e0c8]/70">Escenario conservador con <span className="text-[#bd8d4c] font-bold">ocupación moderada</span> para el cálculo de rentabilidad, con potencial de crecimiento según la temporada.</p>
            </div>
            
            <div className="bg-black/50 rounded-lg p-5 border border-[#bd8d4c]/20">
              <div className="flex items-center mb-4">
                <div className="bg-[#bd8d4c]/20 p-3 rounded-full mr-3">
                  <Percent className="w-6 h-6 text-[#bd8d4c]" />
                </div>
                <h4 className="text-lg font-spectral text-[#f2e0c8]">Retorno de Inversión</h4>
              </div>
              <p className="text-[#f2e0c8]/70">Disfruta de un <span className="text-[#bd8d4c] font-bold">atractivo retorno</span> sobre tu inversión a partir del inicio de operaciones, con proyecciones favorables a largo plazo.</p>
            </div>
          </div>
          
          <div className="mt-8 p-5 bg-[#bd8d4c]/10 rounded-lg border border-[#bd8d4c]/30">
            <h4 className="text-lg font-spectral text-[#bd8d4c] mb-3 text-center">Línea de Tiempo Estimada del Proyecto</h4>
            <p className="text-center text-[#f2e0c8]/70 text-sm mb-4 italic">Los tiempos pueden variar según factores externos y condiciones del mercado</p>
            
            {/* Línea de tiempo para escritorio */}
            <div className="relative hidden md:block">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#bd8d4c]/30 -translate-y-1/2"></div>
              
              <div className="flex justify-between relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-[#bd8d4c] mb-2"></div>
                  <p className="text-[#f2e0c8] text-sm font-bold">Inversión</p>
                  <p className="text-[#f2e0c8]/70 text-xs">Inicio</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-[#bd8d4c]/70 mb-2"></div>
                  <p className="text-[#f2e0c8] text-sm font-bold">Construcción</p>
                  <p className="text-[#f2e0c8]/70 text-xs">Año 1</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-[#bd8d4c]/70 mb-2"></div>
                  <p className="text-[#f2e0c8] text-sm font-bold">Apertura</p>
                  <p className="text-[#f2e0c8]/70 text-xs">Año 2</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-[#ffd700] mb-2"></div>
                  <p className="text-[#f2e0c8] text-sm font-bold">Rentabilidad</p>
                  <p className="text-[#f2e0c8]/70 text-xs">Vitalicia</p>
                </div>
              </div>
            </div>
            
            {/* Línea de tiempo para móvil */}
            <div className="md:hidden">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-[#bd8d4c]/30"></div>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#bd8d4c] mr-4 relative z-10"></div>
                    <div>
                      <p className="text-[#f2e0c8] font-bold">Inversión</p>
                      <p className="text-[#f2e0c8]/70 text-sm">Inicio</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#bd8d4c]/70 mr-4 relative z-10"></div>
                    <div>
                      <p className="text-[#f2e0c8] font-bold">Construcción</p>
                      <p className="text-[#f2e0c8]/70 text-sm">Año 1</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#bd8d4c]/70 mr-4 relative z-10"></div>
                    <div>
                      <p className="text-[#f2e0c8] font-bold">Apertura</p>
                      <p className="text-[#f2e0c8]/70 text-sm">Año 2</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffd700] mr-4 relative z-10"></div>
                    <div>
                      <p className="text-[#f2e0c8] font-bold">Rentabilidad</p>
                      <p className="text-[#f2e0c8]/70 text-sm">Vitalicia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#0d0d0d] border-2 border-[#bd8d4c]/30 rounded-xl p-6 md:p-8 max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-spectral text-[#f2e0c8] mb-4 text-center">Beneficios del Tesoro</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start">
              <div className="bg-[#bd8d4c]/20 p-3 rounded-full mr-4">
                <TrendingUp className="w-6 h-6 text-[#bd8d4c]" />
              </div>
              <div>
                <h4 className="text-lg font-spectral text-[#f2e0c8] mb-2">Rentabilidad Atractiva</h4>
                <p className="text-[#f2e0c8]/70">Disfruta de un retorno favorable sobre tu inversión con proyecciones de crecimiento a largo plazo.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#bd8d4c]/20 p-3 rounded-full mr-4">
                <Users className="w-6 h-6 text-[#bd8d4c]" />
              </div>
              <div>
                <h4 className="text-lg font-spectral text-[#f2e0c8] mb-2">Parte de la SAS</h4>
                <p className="text-[#f2e0c8]/70">Conviértete en accionista de la Sociedad por Acciones Simplificada, con todos los beneficios legales que esto conlleva.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#bd8d4c]/20 p-3 rounded-full mr-4">
                <MapPin className="w-6 h-6 text-[#bd8d4c]" />
              </div>
              <div>
                <h4 className="text-lg font-spectral text-[#f2e0c8] mb-2">Propiedad del Terreno</h4>
                <p className="text-[#f2e0c8]/70">Sé propietario de una parte del terreno, con potencial de valorización en esta zona turística en desarrollo.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#bd8d4c]/20 p-3 rounded-full mr-4">
                <Tag className="w-6 h-6 text-[#bd8d4c]" />
              </div>
              <div>
                <h4 className="text-lg font-spectral text-[#f2e0c8] mb-2">Descuentos Exclusivos</h4>
                <p className="text-[#f2e0c8]/70">Accede a descuentos especiales en todos los servicios y atracciones del complejo como accionista.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#bd8d4c]/20 p-3 rounded-full mr-4">
                <Ticket className="w-6 h-6 text-[#bd8d4c]" />
              </div>
              <div>
                <h4 className="text-lg font-spectral text-[#f2e0c8] mb-2">Reservas</h4>
                <p className="text-[#f2e0c8]/70">Disfruta de disponibilidad para reservar atracciones, eventos y alojamiento.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#bd8d4c]/20 p-3 rounded-full mr-4">
                <Clock className="w-6 h-6 text-[#bd8d4c]" />
              </div>
              <div>
                <h4 className="text-lg font-spectral text-[#f2e0c8] mb-2">Valorización Constante</h4>
                <p className="text-[#f2e0c8]/70">El valor de tu acción aumentará con el tiempo y el desarrollo del proyecto en esta zona de alto potencial.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/#contacto" 
              className="inline-block uppercase bg-[#bd8d4c] hover:bg-[#d4a35a] text-black px-8 py-3 font-bold rounded-full transition-colors duration-300 shadow-lg shadow-[#bd8d4c]/20"
            >
              <CoinsIcon className="w-5 h-5 mr-2 inline-block" />
              Asegura tu tesoro hoy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
