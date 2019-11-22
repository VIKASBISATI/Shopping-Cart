var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var userScehma = new mongoose.Schema({
    "firstName":
    {
        type: String,
        required: true
    },
    "lastName":
    {
        type: String,
        required: true
    },
    "email":
    {
        type: String,
        required: true,
    },
    "password":
    {
        type: String,
        required: true,
    }
})
var user = mongoose.model('fundooUsers', userScehma)
//method for login api
exports.login = (req, callback) => {
    console.log('yes', req.body)
    //if the email of the user is present in database then return err else true
    user.findOne(
        { "email": req.body.email }, (error, result) => {
            if (error) {
                callback("Email Dosesn't Exists");
            }
            else {
                //bcrypt.compare is used for the given password which was encrypted while registering is correct or not
                bcrypt.compare(req.body.password, result.password, (err, sucess) => {
                    console.log(err)
                    if (sucess) {
                        callback(null, result)
                    }
                    else {
                        callback("password mismatch")
                    }
                })
            }
        })
}
exports.register = (req, callback) => {
    // console.log("data regeister", req.body.password);
    //checking for the existing users and registering the users which are not present in the database
    user.findOne({
        "email": req.body.email
    }, (err, data) => {
        if (data) callback("user already exists");
        else {
            //bcryt.hash function is used to encrypt the password and it takes another parameter as salt rounds for encryption
            //and finally it returns the encrypted password
            bcrypt.hash(req.body.password, 10, (err, encrypted) => {
                var userDetails = new user({
                    "firstName": req.body.firstName,
                    "lastName": req.body.lastName,
                    "email": req.body.email,
                    "password": encrypted
                })

                userDetails.save((err, data) => {
                    //finally saving the registered user in the database
                    if (err) { callback(err); console.log("ddfdfdfffdffdffferrr", err) }
                    else {
                        console.log("in save", data)
                        callback(null, data);
                    }
                })
            })
        }
    })
}