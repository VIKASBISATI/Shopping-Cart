const services = require('../Service/userService')
// console.log("in controller user")
const tokenObject=require('../MiddleWare/token')
exports.login = (req, res) => {
    try {
        console.log("in controolert",req.body)
        //checking the format of the request by the user
        req.checkBody('email', 'Invalid Email').isEmail();
        req.checkBody('password', 'Invalid Password').isLength({
            min: 5
        });
        var Errors = req.validationErrors();
        var responseResult = {}
        if (Errors) {
            //if any errors are there it the requrest considered as a unprocessable entity
            responseResult.error = Errors;
            responseResult.status = false;
            return res.status(422).send(responseResult);
        }
        else {
            var responseResult = {}
            services.login(req, (err, result) => {
                if (err) {
                    console.log(res);
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(404).send(responseResult);
                }
                else {
                    console.log("token in user controller",result.id);
                    responseResult.token=tokenObject.generateToken(result.id);
                    responseResult.msg = "login success";
                    responseResult.result = result;
                    res.status(200).send(responseResult);
                }
            });
        }
    } catch (err) {
        console.log("error in catch:,",err);
        
        res.send(err);
    }
}
exports.register = (req, res) => {
    console.log("in note controller  ", req.body);
    try {
        req.checkBody('firstName', 'Invalid First Name').notEmpty().isAlpha();
        req.checkBody('lastName', 'Invalid Last Name').notEmpty().isAlpha();
        req.checkBody('email', 'Invalid Email').isEmail();
        req.checkBody('password', 'Invalid Password').len(5, 20).notEmpty();
        valErrors = req.validationErrors();
        var responseResult = {}
        if (valErrors) {
            //if any errors are there it the requrest considered as a unprocessable entity
            responseResult.error = valErrors;
            responseResult.success = false;
            console.log(responseResult)
            return res.status(422).send(responseResult);
        }
        else {
            services.register(req, (err, result) => {
                if (err) {
                    res.status(404).send(err);
                }
                else {
                    res.status(200).send(result);
                }
            });
        }
    } catch (err) {
        console.log("in catch");
    }
}
