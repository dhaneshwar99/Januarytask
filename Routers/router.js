const express = require('express')
const router = express.Router();
const UserController = require("../Controllers/userController");
const { isAuthUser } = require('../Middleware/auth')
const authController = require('../Controllers/authController')
const productController = require('../Controllers/productController')


// user router

router.post('/user/new', UserController.newUser)
router.put('/user/:id', isAuthUser, UserController.updateUser)


router.post("/login", authController.login);
router.post('/logout', isAuthUser, authController.logout)


// product router
router.get('/product/', isAuthUser, productController.getProductList);
router.get('/product/:id', isAuthUser, productController.getSingleProduct)
router.post('/product/new', isAuthUser, productController.newProduct)
router.put('/product/:id', isAuthUser, productController.updateProduct)
router.delete('/product/:id', isAuthUser, productController.deleteProduct)


module.exports = router;