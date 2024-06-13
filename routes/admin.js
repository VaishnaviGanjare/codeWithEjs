//const path = require('path');

const express = require('express');

//rootDir form by utility folder will not use now after we create contoller hence we can comment it.
//const rootDir = require('../util/path');
//path for controller
const productsController=require('../controllers/products.js');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);//we dont add here () after getAddProduct becoz we are sending referecnce of function to execute and not execute function.

// /admin/add-product => POST
router.post('/add-product',productsController.postAddProduct);

module.exports=router;
//exports.routes = router;
//exports.products = products;
