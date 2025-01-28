const getProducts = (req, res) => {
    res.send('Lista de productos');
  };
  
  const createProduct = (req, res) => {
    res.send('Crear un nuevo producto');
  };
  
  module.exports = {
    getProducts,
    createProduct,
  };