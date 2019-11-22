const userModel=require('../App/Model/userModel');
console.log("in service user");

exports.login = (data, callback) => {
    userModel.login(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    })
}
exports.register = (data, callback) => {
    userModel.register(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    })
}
