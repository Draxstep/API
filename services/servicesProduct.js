const faker = require('faker');

// eslint-disable-next-line no-unused-vars
const getAllProducts = (req, res) => {
  const {size} = req.query;
  const limit = size || 5;
  const products = [];
  for(let i = 0; i < limit; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }
  return products;
}

const getProductById = (req, res) => {
  const {id} = req.params;
  res.json({
    'id': id,
    'name': 'Teclado',
    'price': 2000,
    'category': 'technology'
  });
}

const createNewProduct = (req, res) => {
  const body = req.body;
  res.json({
    ok: true,
    data: body
  });
}

const deleteProduct = (req, res) => {
  const {id} = req.params;

  res.json({
    'message': 'Eliminación exitosa.',
    id
  });
}

const updateProduct = (req, res) => {
  const {id} = req.params;
  const product = req.body;

  res.json({
    'state': true,
    'id': id,
    'product': product
  });
}

module.exports = {
  getAllProducts,
  createNewProduct,
  getProductById,
  deleteProduct,
  updateProduct
}
