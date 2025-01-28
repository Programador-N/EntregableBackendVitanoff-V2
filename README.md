# Endpoints

## GET /api/books
Obtiene todos los libros.

## GET /api/books/:id
Obtiene un libro por su ID.

## POST /api/books
Crea un nuevo libro.

### Body:
```json
{
  "id": 1,
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "year": 2008
}









public/                    -> Archivos estáticos
README                     -> Documentación del proyecto
src/
├── controllers/           -> Controladores (lógica de negocio)
│   ├── products.controller.js
│   └── users.controller.js
├── data/                  -> Datos estáticos o persistentes
├── fs/                    -> Operaciones con archivos (JSON)
├── memory/                -> Persistencia en memoria
├── middlewares/           -> Middlewares (validaciones, errores, etc.)
│   ├── errorHandler.mid.js
│   ├── pathHandler.mid.js
│   ├── validate.products.js
│   └── validate.users.js
├── routers/               -> Rutas de la API
│   ├── api/
│   │   ├── index.api.js
│   │   ├── products.api.js
│   │   └── users.api.js
│   └── index.router.js
.gitignore                 -> Ignorar node_modules y archivos innecesarios
index.js                   -> Punto de entrada del servidor
package.json               -> Dependencias y scripts del proyecto
utils.js                   -> Funciones auxiliares
