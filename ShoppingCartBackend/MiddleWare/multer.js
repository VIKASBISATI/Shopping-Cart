require('dotenv').config();
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
var accessKeyId = process.env.AWS_ACCESS_KEY;
var secretAccessKey = process.env.AWS_SECRET_KEY;
var Bucket = process.env.BUCKET_NAME;

AWS.config.update({
    accessKeyId:accessKeyId,
    secretAccessKey: secretAccessKey,
    Bucket: Bucket
})
var s3=new AWS.S3();
var upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'bridgelabz-shopping-cart',
      // acl: 'public-read',
      metadata: function (req, file, cb) {
        console.log("req in multer",file);
        // console.log("req for file",req.file.location);
        cb(null, {fieldName: 'Products'});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })
  module.exports=upload;