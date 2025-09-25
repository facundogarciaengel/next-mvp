# next-mvp

Proyecto mínimo (MVP) en Next.js con un feed sencillo y un mapa con Leaflet.

Descripción
-----------
Aplicación de ejemplo que muestra:
- Login ficticio (sin autenticación real).
- Feed con 3 publicaciones de ejemplo (datos locales en `pages/feed.js`).
- Mapa interactivo con Leaflet y un marcador en una ubicación de ejemplo (componente cliente).

Estado actual / notas importantes
---------------------------------
- Next.js (v15.5.4) + React (v19.1.0).
- Leaflet y react-leaflet instalados; la hoja de estilos de Leaflet se importa globalmente en `pages/_app.js` (`import "leaflet/dist/leaflet.css";`).
- TailwindCSS está presente como dependencia v4. En este proyecto se usa la forma de importación actual: `@import "tailwindcss";` en `styles/globals.css`. Si prefieres el formato con `@tailwind base; @tailwind components; @tailwind utilities;` puedes migrarlo, pero con la configuración actual funciona con Tailwind v4.
- El componente del mapa está configurado para renderizarse solo en cliente (dynamic import con `ssr: false`) para evitar errores SSR.
- Los posts ya no se obtienen por fetch; se usan como un array local dentro de `pages/feed.js` (MVP simple).

Instalación y ejecución (local)
-------------------------------
Requisitos mínimos: Node.js 18+ (preferible 18.x/20.x), npm.

Desde la raíz del proyecto:
```bash
npm install
npm run dev
# abrir http://localhost:3000
```

Rutas principales
-----------------
- /login — formulario de login ficticio (redirige al feed).
- /feed — lista las 3 publicaciones de ejemplo y muestra el mapa.

Estructura relevante
--------------------
- pages/_app.js — importa `styles/globals.css` y `leaflet/dist/leaflet.css`.
- pages/feed.js — feed con array local de posts y render del componente de mapa.
- components/MapLeaflet.js — wrapper dinámico que carga el map component en cliente.
- styles/globals.css — estilos globales; contiene `@import "tailwindcss";` y reglas globales personalizadas.



