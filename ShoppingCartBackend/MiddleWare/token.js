var jwt = require('jsonwebtoken');
exports.generateToken = (payload) => {
    const tok = jwt.sign({ payload }, "vikas", { expiresIn: '365d' });
    return tok;
}


exports.verifyToken = (req, res, next) => {
    console.log("in verify token is",req.body);    
    console.log("in verify token is ",req.headers.token);    
    jwt.verify(req.headers.token, "vikas", function (err, result) {
        if (err) res.status(400).send(err);
        else {
            console.log(result);
            req.decoded = result;
            next();
        }
    });
}  