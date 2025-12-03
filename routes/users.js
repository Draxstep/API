const express = require('express');
const router = express.Router();
const userServices = require('../services/servicesUser');

router.get('/', async (req, res, next) =>{
  try {
    const getUsers = await userServices.getAllUsers(req, res);
    return getUsers;
  } catch (error) {
      next(error);
  }
});

module.exports = router;
