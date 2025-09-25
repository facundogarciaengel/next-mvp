
# next-mvp

Proyecto Next.js mínimo (MVP) con Leaflet y TailwindCSS — plantilla pequeña para mostrar un feed y un mapa.

Descripción
-----------

Este repositorio contiene una aplicación Next.js (React) de ejemplo que usa:

- Next.js
- React
- Leaflet + react-leaflet (mapas)
- TailwindCSS (configurado vía PostCSS)

Objetivo: servir como punto de partida rápido para una interfaz con feed de posts y un mapa interactivo.

Estado
------

El archivo `package.json` indica las versiones usadas en este proyecto:

- `next` 15.5.4
- `react` / `react-dom` 19.1.0
- `leaflet` ^1.9.4
- `react-leaflet` ^5.0.0
- `tailwindcss` ^4 (devDependency)

Instalación y ejecución (local)
-------------------------------

Requisitos recomendados:

- Node.js 18 o superior (recomendado: 18.x/20.x)
- npm (v9+ incluido con Node moderno) o pnpm/yarn si prefieres

Pasos rápidos:

```bash
# desde la raíz del proyecto
cd /tu-proyecto
npm install
npm run dev
```

Scripts disponibles
-------------------

- `npm run dev` — ejecuta Next.js en modo desarrollo (http://localhost:3000 por defecto)
- `npm run build` — construye la app para producción
- `npm run start` — inicia la app ya construida (usualmente tras `npm run build`)

Estructura principal del proyecto
--------------------------------

- `pages/` — rutas de Next.js (ej.: `index.js`, `feed.js`, `login.js`, `api/hello.js`)
- `components/` — componentes reutilizables (ej.: `MapLeaflet.js`, `PostCard.js`)
- `public/` — activos estáticos (imágenes, íconos)
- `styles/` — estilos globales (ej.: `globals.css`)
- `next.config.mjs`, `postcss.config.mjs`, `jsconfig.json` — configuración del proyecto

Notas importantes / trucos
--------------------------

- Leaflet requiere que cargues su CSS para que el mapa y los marcadores se vean correctamente. Si no ves los estilos del mapa, asegúrate de importar la hoja de estilos de Leaflet en `pages/_app.js` o en tu componente `MapLeaflet.js`:

```js
import 'leaflet/dist/leaflet.css'
```

- Si usas Tailwind, confirma que tengas el archivo `tailwind.config.js` o la configuración correcta en `postcss.config.mjs`. En este repositorio hay dependencias de Tailwind en `devDependencies`; si no estás usando utilidades Tailwind todavía, puedes eliminar/añadir configuración según necesites.

- Next 15 y React 19 introducen cambios respecto a versiones anteriores. Si encuentras errores de compatibilidad, revisa las notas de migración de Next.js/React o fija una versión más conservadora temporalmente.

Problemas comunes y soluciones rápidas
------------------------------------

- Error: "window is not defined" al usar Leaflet en SSR — asegúrate de que el componente del mapa se monte solo en el cliente (por ejemplo, con check `typeof window !== 'undefined'` o usando dynamic import con `ssr: false`).

- Si `npm run dev` se queda en otro puerto, verifica variables de entorno o si otro proceso ya usa el puerto 3000.

Agregar variables de entorno
---------------------------

Si tu app necesitará claves o configuraciones, añade un archivo `.env.local` en la raíz y referencia con `process.env.MI_VARIABLE` en el código. No subas `.env.local` al repositorio.

Siguientes pasos sugeridos
-------------------------

- Completar `tailwind.config.js` y utilizar utilidades de Tailwind en `styles/globals.css` si quieres diseño rápido.
- Añadir tests básicos y un script `lint` si vas a escalar el proyecto.
- Si quieres, puedo:
	- Generar/rellenar `tailwind.config.js` y ejemplo de uso.
	- Añadir la importación de `leaflet.css` en `_app.js` y asegurar que `MapLeaflet.js` solo se renderice en cliente.

Contacto
--------


