//Author :-sai venkata vikas bisati
const express=require('express')
const router=express.Router();
const productController=require('../Controller/productController');
const productVerify=require('../MiddleWare/token')
router.post('/addToCart',productVerify.verifyToken,productController.addToCart)
router.get('/getProducts',productVerify.verifyToken,productController.getAllProducts);
router.put('/updateProduct',productVerify.verifyToken,productController.updateProduct);
router.post('/placeOrder',productVerify.verifyToken,productController.placeOrder);
module.exports=router;