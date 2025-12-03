const express = require('express');
const productServices = require('../services/servicesProduct');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const products = await productServices.getAllProducts(req, res);
    res.json(products);
  } catch (error) {
      next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newProduct = await productServices.createNewProduct(req, res);
    return newProduct;
  } catch (error) {
      next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const modifiedProduct = await productServices.updateProduct(req, res);
    return modifiedProduct;
  } catch (error) {
      next(error);
  }
});

router.delete('/:id', async (req, res, next) =>{
  try {
    const deletedProduct = await productServices.deleteProduct(req, res);
    return deletedProduct;
  } catch (error) {
      next(error);
  }
});

router.get('/:id', async (req, res, next) =>{
  try {
    const product = await productServices.getProductById(req, res);
    return product;
  } catch (error) {
      next(error);
  }
});

module.exports = router;
