const db = require('./dbController')

exports.changeTotal =  async function (req,res){
    await db.whiteWin(req.user.id)
    res.send('Какашка')
}