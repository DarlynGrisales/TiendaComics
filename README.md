# Tienda de Cómics API

API REST con Express y MongoDB para administrar autores y cómics.

## Requisitos

- Node.js
- Una instancia de MongoDB, local o en Atlas

## Configuración

1. Instala las dependencias con `npm install`.
2. Copia `.env.example` a `.env` y configura `MONGODB_URI` con tu conexión a MongoDB.
3. Opcionalmente, cambia `PORT` (por defecto, `3000`).

## Ejecución

- `npm run dev`: inicia el servidor en modo desarrollo.
- `npm start`: inicia el servidor.
- `npm run seed`: reemplaza los datos actuales de autores y cómics con los ejemplos de `data/`.

El seed elimina los documentos existentes de las colecciones `comics` y `autores` antes de insertar los datos de ejemplo.

## Rutas

- `GET /`: estado de la API.
- `GET /api/autores`: lista autores.
- `GET /api/autores/:id`: consulta un autor.
- `POST /api/autores`: crea un autor.
- `GET /api/comics`: lista cómics; acepta filtros opcionales `editorial` y `autor`.
- `GET /api/comics/:id`: consulta un cómic.
- `POST /api/comics`: crea un cómic asociado a un autor existente.

Las rutas `POST` reciben y devuelven JSON.
