const express = require('express');
const productServices = require('../services/servicesProduct');
const router = express.Router();

router.get('/', (req, res) => {
  const products = productServices.getAllProducts(req, res);
  res.json(products);
});

router.post('/', (req, res) => {
  productServices.createNewProduct(req, res);
});

router.patch('/:id', (req, res) => {
  productServices.updateProduct(req, res);
});

router.delete('/:id', (req, res) =>{
  productServices.deleteProduct(req, res);
});

router.get('/:id', (req, res) =>{
  productServices.getProductById(req, res);
});

module.exports = router;
