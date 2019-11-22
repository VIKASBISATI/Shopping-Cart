const mongoose = require('mongoose');
const schema = mongoose.Schema;
const productSchema = new schema({
    "userId": {
        type: String,
        required: true
    },
    "productName": {
        type: String,
        required: true
    },
    "price": {
        type: String,
        required: true
    },
    "type": {
        type: String,
        required: true
    },
    "color": {
        type: String,
        required: true
    },
    "brand": {
        type: String,
        required: true
    },
    "addToCart": {
        type: String,
        default: false
    },
    "count": {
        type: String,
        default:0
    },
    "imageUrl":{
        type:String,
        default:''
    }
}, {
    timestamps: true
})

exports.product = mongoose.model('productDetails', productSchema);