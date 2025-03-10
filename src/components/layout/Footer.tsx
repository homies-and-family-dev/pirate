import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-silver py-12 relative">
      {/* Elementos decorativos para transición desde la sección anterior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-10">
        
        {/* Elemento decorativo que simula la continuación desde Ubication */}
        <div className="hidden md:flex items-center justify-center w-full">
          <div className="w-16 h-16 bg-[url('/images/compass-rose-small.png')] bg-contain bg-no-repeat opacity-20 animate-spin-slow transform -translate-y-8"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Logo del proyecto */}

        <div className="flex flex-wrap justify-center gap-8 border-b border-[#bd8d4c]/20 pb-8">
          {/* Columna 1: Sobre el proyecto */}
          <div className="flex justify-center items-center rounded-full mb-8">
            <Image src="/images/logo.png" alt="Pirate Paradise" width={150} height={150} className="" />
          </div>
          <div className="w-full max-w-sm text-center md:text-left">
            <h3 className="text-xl font-pirate mb-4 text-[#bd8d4c]">
              <span className="mr-2">🏴‍☠️</span>
              Pirate Paradise
            </h3>
            <p className="text-gray-300 font-serif mb-4">
              Un exclusivo proyecto residencial con vista al mar, inspirado en la temática pirata que combina lujo, aventura y confort.
            </p>
            <div className="mt-4 p-4 bg-[#0c0c0c]/80 rounded-lg border border-[#bd8d4c]/20">
              <p className="text-sm text-gray-300">
                ¡Asegura tu lugar en este paraíso pirata y vive la experiencia de un verdadero tesoro inmobiliario!
              </p>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-pirate mb-4 text-[#bd8d4c]">
              <span className="mr-2">⚓</span>
              Navega por el Sitio
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Amenidades', path: '/#galeria' },
                { name: 'Ubicación', path: '/#ubicacion' },
                { name: 'Aliados', path: '/#alliance' },
                { name: 'Contacto', path: '/#contacto' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path} 
                    className="group flex items-center space-x-2 text-gray-300 hover:text-[#ffd700] transition-all duration-300"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">🗡️</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Información de contacto */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-pirate mb-4 text-[#bd8d4c]">
              <span className="mr-2">🗺️</span>
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} className="text-[#bd8d4c]" />
                <span>(+57) 321 456 7890</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-[#bd8d4c]" />
                <span>info@pirateparadise.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} className="text-[#bd8d4c]" />
                <span>Represa de Prado, Tolima, Colombia</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Clock size={16} className="text-[#bd8d4c]" />
                <span>Lun - Sáb: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes sociales */}
          <div className="max-w-sm text-center md:text-left">
            <h3 className="text-xl font-pirate mb-4 text-[#bd8d4c]">
              <span className="mr-2">🏴‍☠️</span>
              Síguenos
            </h3>
            <p className="text-gray-300 mb-4 font-serif">
              Mantente al día con nuestras novedades y avances del proyecto
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              <a href="#" className="bg-[#0c0c0c] p-2 rounded-full border border-[#bd8d4c]/30 hover:border-[#ffd700] transition-all duration-300 group">
                <Facebook size={20} className="text-[#bd8d4c] group-hover:text-[#ffd700]" />
              </a>
              <a href="#" className="bg-[#0c0c0c] p-2 rounded-full border border-[#bd8d4c]/30 hover:border-[#ffd700] transition-all duration-300 group">
                <Instagram size={20} className="text-[#bd8d4c] group-hover:text-[#ffd700]" />
              </a>
              <a href="#" className="bg-[#0c0c0c] p-2 rounded-full border border-[#bd8d4c]/30 hover:border-[#ffd700] transition-all duration-300 group">
                <Twitter size={20} className="text-[#bd8d4c] group-hover:text-[#ffd700]" />
              </a>
            </div>
            
            <div className="mt-6 p-3 bg-[#0c0c0c]/80 rounded-lg border border-[#bd8d4c]/20">
              <p className="text-sm text-gray-300">
                Suscríbete a nuestro boletín para recibir información exclusiva
              </p>
              <div className="mt-2 flex">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="bg-black/50 text-white px-3 py-2 rounded-l-md border border-[#bd8d4c]/30 focus:outline-none focus:border-[#ffd700] w-full"
                />
                <button className="bg-[#bd8d4c] hover:bg-[#ffd700] text-black px-3 py-2 rounded-r-md transition-colors duration-300">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 text-center relative">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent opacity-20"></div>
          <p className="text-gray-400 font-serif">
            &copy; {new Date().getFullYear()} 
            <span className="text-[#bd8d4c] mx-2">⚓</span> 
            Pirate Paradise 
            <span className="text-[#bd8d4c] mx-2">⚓</span> 
            Todos los derechos reservados
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Diseñado con <span className="text-[#bd8d4c]">❤</span> por Equipo Pirata
          </p>
        </div>
      </div>
    </footer>
  );
}
