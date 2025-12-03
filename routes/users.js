const express = require('express');
const router = express.Router();
const userServices = require('../services/servicesUser');

router.get('/', async (req, res) =>{
  const getUsers = await userServices.getAllUsers(req, res);
  return getUsers;
});

module.exports = router;
