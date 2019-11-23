const productService = require('../Service/productService');
const upload = require('../MiddleWare/multer');
const singleUpload = upload.single('image');
exports.addProduct = (req, res) => {
    singleUpload(req, res, (err) => {
        console.log("req.file", req.file);
        console.log("req", req.body.productName);
        req.checkBody('productName', 'productName is invalid').notEmpty();
        req.checkBody('price', 'Invalid price details').notEmpty();
        req.checkBody('type', 'Type should not be empty').notEmpty();
        req.checkBody('color', 'productName is invalid').notEmpty();
        req.checkBody('brand', 'brand cant be empty').notEmpty();
        req.checkBody('description', 'description cant be empty').notEmpty();
        var response = {};
        var errors = req.validationErrors();
        if (errors) {
            response.success = false;
            response.data = null;
            response.err = errors
            res.status(422).send(response);
        } else {
            productService.addProduct(req, req.file.location)
                .then((data) => {
                    response.data = data;
                    res.status(200).send(response)
                })
                .catch((err) => {
                    res.status(404).send(err);
                })
        }
        imageURL = req.file.location;
    });
    console.log("req.body in", req.body);
}

exports.addToCart = (req, res) => {
    req.checkBody('addToCart', 'add to cart is cabbt be empty').notEmpty();
    var response = {};
    var errors = req.validationErrors();
    if (errors) {
        response.success = false;
        response.data = null;
        response.err = errors
        res.status(422).send(response);
    } else {
        productService.addToCart(req)
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }
}

exports.getAllProducts = (req, res) => {
    console.log("get all products");

    var response = {};
    var errors = req.validationErrors();
    if (errors) {
        response.success = false;
        response.data = null;
        response.err = errors
        res.status(422).send(response);
    } else {
        productService.getAllProducts(req)
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }
}

exports.updateProduct = (req, res) => {
    req.checkBody('id', 'id is invalid').notEmpty();
    req.checkBody('productName', 'productName is invalid').notEmpty();
    req.checkBody('price', 'Invalid price details').notEmpty();
    req.checkBody('type', 'Type should not be empty').notEmpty();
    req.checkBody('color', 'productName is invalid').notEmpty();
    req.checkBody('brand', 'brand cant be empty').notEmpty();
    req.checkBody('addToCart', 'addtocart cant be empty').notEmpty();
    req.checkBody('count', 'count cant be empty').notEmpty();
    var response = {};
    var errors = req.validationErrors();
    if (errors) {
        response.success = false;
        response.data = null;
        response.err = errors
        res.status(422).send(response);
    } else {
        productService.updateProduct(req)
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }
}

exports.placeOrder = (req, res) => {
    console.log("controller",req.body);
    req.checkBody('id', 'id is invalid').notEmpty();
    req.checkBody('firstName', 'productName is invalid').notEmpty();
    req.checkBody('lastName', 'Invalid price details').notEmpty();
    req.checkBody('mobileNumber', 'Type should not be empty').notEmpty();
    req.checkBody('address', 'productName is invalid').notEmpty();
    var response = {};
    var errors = req.validationErrors();
    if (errors) {
        response.success = false;
        response.data = null;
        response.err = errors
        res.status(422).send(response);
    } else {
        productService.placeOrder(req)
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }
}