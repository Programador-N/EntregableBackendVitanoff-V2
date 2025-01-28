const pathHandler = (req, res, next) => {
    res.status(404).send('Ruta no encontrada');
  };
  
  module.exports = pathHandler;