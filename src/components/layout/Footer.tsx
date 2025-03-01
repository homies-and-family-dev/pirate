export default function Footer() {
  return (
    <footer className="bg-gradient-to-b bg-[#000000] text-silver py-12 relative">
      {/* Elementos decorativos para transición desde la sección anterior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-10">
        {/* Línea decorativa dorada */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-50 mt-4"></div>
        
        {/* Elemento decorativo que simula la continuación desde Ubication */}
        <div className="hidden md:flex items-center justify-center w-full">
          <div className="w-16 h-16 bg-[url('/images/compass-rose-small.png')] bg-contain bg-no-repeat opacity-10 animate-spin-slow transform -translate-y-8"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Logo del barco pirata */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <img src="/images/pirate-ship.png" alt="Barco Pirata" className="w-32 h-32 opacity-30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-8">
          {/* Columna 1 */}
          <div className="text-center md:text-left transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-pirate mb-4 text-gold">
              <span className="mr-2">🏴‍☠️</span>
              El Tesoro del Código
            </h3>
            <p className="text-gray-400 font-serif italic">
              &quot;Navegando por los mares digitales desde 2024&quot;
            </p>
            <div className="mt-4 p-4 bg-opacity-20 bg-gray-800 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-300">
                ¡Únete a nuestra tripulación de desarrolladores intrépidos!
              </p>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-pirate mb-4 text-gold">
              <span className="mr-2">⚓</span>
              Rutas de Navegación
            </h3>
            <ul className="space-y-3">
              {['Inicio', 'La Tripulación', 'El Mapa', 'Tesoros', 'Bitácora'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="group flex items-center justify-center space-x-2 text-gray-300 hover:text-gold transition-all duration-300"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">🗡️</span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="text-center md:text-right transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-pirate mb-4 text-gold">
              <span className="mr-2">🗺️</span>
              El Pergamino Social
            </h3>
            <p className="text-gray-400 mb-4 font-serif italic">
              Síguenos en los siete mares digitales
            </p>
            <div className="flex justify-center md:justify-end space-x-6 mt-4">
              {[
                { icon: '⚔️', label: 'Twitter' },
                { icon: '🏴‍☠️', label: 'Discord' },
                { icon: '🗡️', label: 'GitHub' },
                { icon: '🎯', label: 'LinkedIn' }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="group relative"
                  title={social.label}
                >
                  <span className="text-2xl hover:scale-125 inline-block transition-transform duration-300">
                    {social.icon}
                  </span>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-gold transition-opacity duration-300">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center relative">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-20"></div>
          <p className="text-gray-400 font-serif">
            &copy; {new Date().getFullYear()} 
            <span className="text-gold mx-2">⚓</span> 
            La Tripulación del Código Negro 
            <span className="text-gold mx-2">⚓</span> 
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
