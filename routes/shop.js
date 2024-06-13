//const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');//not require as we are adding controllers
//const adminData = require('./admin');

const productsController=require('../controllers/products.js');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
