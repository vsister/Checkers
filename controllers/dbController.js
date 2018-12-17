const UserModel = require('../models/user.js')

exports.findUserById = function (id) {
    return UserModel.findById(id)
}

exports.createUser = function(User){
    return UserModel.create(User)
}


exports.isUser = function(token){
    return UserModel.findOne({Token: token},function(err, user){
        if(err)
            return res.send('Error')

        if(!user){
            return false
        }

        return true
    })
}

exports.reset = function(token){
    return UserModel.findOneAndUpdate({Token: token},{$set: {Total:0,White: 0,Black:0,Draw:0}})
}
exports.whiteWin = function(token){
    return UserModel.findOneAndUpdate({Token: token},{$inc: {Total: 1,White: 1}})
}

exports.blackWin = function(token){
    return UserModel.findOneAndUpdate({Token: token},{$inc: {Total: 1,Black: 1}})
}

exports.draw= function(token){
    return UserModel.findOneAndUpdate({Token: token},{$inc: {Total: 1,Draw: 1}})
}

exports.findUserByToken= function (token) {
    return UserModel.findOne({Token: token})
}
