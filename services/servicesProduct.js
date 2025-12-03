const faker = require('faker');
const boom = require('@hapi/boom');

// eslint-disable-next-line no-unused-vars
const getAllProducts = (req, res) => {
  try {
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
  } catch (error) {
      console.log(error);
  }
}

const getProductById = (req, res) => {
  try {
    const {id} = req.params;
    res.json({
      'id': id,
      'name': 'Teclado',
      'price': 2000,
      'category': 'technology'
    });
  } catch (error) {
      console.log(error);
  }
}

const createNewProduct = (req, res) => {
  try {
    const body = req.body;
    res.json({
      ok: true,
      data: body
    });
  } catch (error) {
      console.log(error);
  }
}

const deleteProduct = (req, res) => {
  try {
    const {id} = req.params;

    res.json({
      'message': 'Eliminación exitosa.',
      id
    });
  } catch (error) {
      console.log(error);
  }
}

const updateProduct = (req, res) => {
  try {
    const {id} = req.params;
    if(id != 1){
      throw boom.notFound('Product not found!');
    }
    const product = req.body;

    res.json({
      'state': true,
      'id': id,
      'product': product
    });
  } catch (error) {
      console.log(error);
  }
}

module.exports = {
  getAllProducts,
  createNewProduct,
  getProductById,
  deleteProduct,
  updateProduct
}
