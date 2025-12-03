const express = require('express');
const productServices = require('../services/servicesProduct');
const router = express.Router();

router.get('/', async (req, res) => {
  const products = await productServices.getAllProducts(req, res);
  res.json(products);
});

router.post('/', async (req, res) => {
  const newProduct = await productServices.createNewProduct(req, res);
  return newProduct;
});

router.patch('/:id', async (req, res) => {
  const modifiedProduct = await productServices.updateProduct(req, res);
  return modifiedProduct;
});

router.delete('/:id', async (req, res) =>{
  const deletedProduct = await productServices.deleteProduct(req, res);
  return deletedProduct;
});

router.get('/:id', async (req, res) =>{
  const product = await productServices.getProductById(req, res);
  return product;
});

module.exports = router;
