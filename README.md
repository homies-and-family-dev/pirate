# Pirate Paradise

Sitio web para Pirate Paradise, un proyecto de inversión en Prado, Tolima, Colombia. El sitio ofrece oportunidades de inversión en cabañas, restaurantes, club náutico y más en la hermosa Represa del Río Prado.

## Características

- Diseño responsivo para dispositivos móviles y de escritorio
- Menú de navegación inmersivo para móviles
- Header transparente que se vuelve fijo al desplazarse
- Sección Hero con video de fondo
- Sección de ubicación con mapa
- Tema pirata con colores negro, dorado y plateado

## Tecnologías utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React para iconos

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/pirate-paradise.git
cd pirate-paradise
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura del proyecto

- `/src/app`: Páginas y componentes principales
- `/src/components`: Componentes reutilizables
- `/src/components/layout`: Componentes de layout (Header, Footer)
- `/public`: Archivos estáticos (imágenes, videos, fuentes)

## Personalización

### Fuentes
La fuente pirata se encuentra en `/public/fonts/pirate-font.woff2`. Puedes reemplazarla con otra fuente pirata de tu elección.

### Colores
Los colores principales se definen en `src/app/globals.css`:
- Negro: #000000
- Dorado: #D4AF37
- Plateado: #C0C0C0

### Contenido
Actualiza el contenido en los componentes correspondientes:
- Hero: `src/app/home/Hero.tsx`
- Ubicación: `src/app/home/Ubication.tsx`

## Licencia

MIT
