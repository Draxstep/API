const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
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

  res.json(products);
});

router.post('/', (req, res) => {
  const body = req.body;

  res.json({
    ok: true,
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const product = req.body;

  res.json({
    'state': true,
    'id': id,
    'product': product
  });
});

router.delete('/:id', (req, res) =>{
  const {id} = req.params;

  res.json({
    'message': 'Eliminación exitosa.',
    id
  });
});

router.get('/:id', (req, res) =>{
  const {id} = req.params;
  res.json({
    'id': id,
    'name': 'Teclado',
    'price': 2000,
    'category': 'technology'
  });
});

module.exports = router;
