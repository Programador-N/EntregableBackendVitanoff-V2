const express = require('express');
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// Rutas
const productRouter = require('./src/routers/product.router');
app.use('/api', productRouter);

// Manejadores de errores
const errorHandler = require('./src/middlewares/errorHandler');
app.use(errorHandler);

// Manejador para rutas no encontradas
const pathHandler = require('./src/middlewares/pathHandler');
app.use(pathHandler);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});