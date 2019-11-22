const express=require('express');
const router=express.Router();
const productVerify=require('../MiddleWare/token')
const productController=require('../Controller/productController')
router.post('/image-upload',productVerify.verifyToken,productController.addProduct);
module.exports=router;