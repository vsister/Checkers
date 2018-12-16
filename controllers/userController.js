const db = require('./dbController')

exports.getUser =  async function (req,res){
    let User = await db.findUserByToken(req.user.id)
    res.send(User)
}

exports.reset = async function(req,res) {
    await db.reset(req.user.id)
    res.redirect('/game')
}

exports.blackWin = async function(req,res) {
    await db.blackWin(req.user.id)
    res.redirect('/game')
}

exports.whiteWin = async function(req,res) {
    await db.whiteWin(req.user.id)
    res.redirect('/game')
}

exports.draw = async function(req,res) {
    await db.draw(req.user.id)
    res.redirect('/game')
}
