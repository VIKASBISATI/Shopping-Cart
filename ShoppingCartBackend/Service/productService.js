const productSchema = require('../App/Model/productModel');
const upload=require('../MiddleWare/multer');
const singleUpload=upload.single('image');
exports.addProduct = (req,file) => {
    console.log("add file", file);
    try {
        console.log(req.body);
        var imageURL=''
        return new Promise((resolve, reject) => {
            var productData = new productSchema.product({
                "userId": req.decoded.payload,
                "productName": req.body.productName,
                "price": req.body.price,
                "type": req.body.type,
                "color": req.body.color,
                "brand": req.body.brand,
                "imageUrl":file
            });
            console.log("add to cart", req.body.addToCart);
            productData.save((err, data) => {
                if (err) {
                    console.log("yes ");
                    console.log("err in product data save",err);
                    reject(err)
                } else {
                    resolve(data);
                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}

exports.addToCart = (req) => {
    try {
        console.log(req.body);
        return new Promise((resolve, reject) => {
            productSchema.product.findOne({ "_id": req.body.id }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    productSchema.product.updateOne({ "_id": req.body.id }, { "addToCart": true }, (err, data) => {
                        if (err) {
                            reject(err);
                        } else {
                            singleUpload(req,res,(err)=>{
                                console.log("req",req.body.productName);
                                imageURL=req.file.location;
                            });
                            resolve(data);
                        }
                    })
                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}



exports.getAllProducts = (req) => {
    try {
        console.log(req.body);
        return new Promise((resolve, reject) => {
            productSchema.product.find({ "_id": req.body.id }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    productSchema.product.find({}, (err, data) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(data);
                        }
                    })
                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}

exports.updateProduct = (req) => {
    try {
        console.log(req.body);
        return new Promise((resolve, reject) => {
            productSchema.product.findOne({ "_id": req.body.id }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    let info = {
                        "productName": req.body.productName,
                        "price": req.body.price,
                        "type": req.body.type,
                        "color": req.body.color,
                        "brand": req.body.brand,
                        "addToCart": req.body.addToCart,
                        "count": req.body.count
                    }
                    productSchema.product.update({ "_id": req.body.id }, info, (err, data) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(data);
                        }
                    })
                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}
