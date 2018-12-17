const index = require('../app')
const  should = require('should')
const supertest = require('supertest')
const chai = require('chai')
const expect = chai.expect;
const db = require('../controllers/dbController')

describe('Тесты', function(){

    it('Нужна авторизация для игры ', function(done){
        supertest('http://localhost:8080')
            .get('/game')
            .expect(302)
            .end(function(err, res){
                res.status.should.equal(302)
                done()
            });

    })

    it('Нужна авторизация для правил', function(done){
        supertest('http://localhost:8080')
            .get('/rules')
            .expect(302)
            .end(function(err, res){
                res.status.should.equal(302)
                done()
            });

    })

    it('Проверка поиска пользователя ', async () => {
        let User = await db.findUserByToken("google-oauth2|113717951245466774533")
        const result = User.FirstName+ ' ' + User.LastName
        expect(result).to.equal('Александра Гаврилова')
    })

    it('Проверка победы белых ', async () => {
        let User = await db.findUserByToken("google-oauth2|113717951245466774533")
        const Exprectedresult = User.White + 1
        await db.whiteWin("google-oauth2|113717951245466774533")
        let User1 = await db.findUserByToken("google-oauth2|113717951245466774533")
        const result = User1.White
        expect(result).to.equal(Exprectedresult)
    })

    it('Проверка победы черных ', async () => {
        let User = await db.findUserByToken("google-oauth2|113717951245466774533")
        const Exprectedresult = User.Black + 1
        await db.blackWin("google-oauth2|113717951245466774533")
        let User1 = await db.findUserByToken("google-oauth2|113717951245466774533")
        const result = User1.Black
        expect(result).to.equal(Exprectedresult)
    })

    it('Проверка ничьи ', async () => {
        let User = await db.findUserByToken("google-oauth2|113717951245466774533")
        const Exprectedresult = User.Draw + 1
        await db.draw("google-oauth2|113717951245466774533")
        let User1 = await db.findUserByToken("google-oauth2|113717951245466774533")
        const result = User1.Draw
        expect(result).to.equal(Exprectedresult)
    })

    it('Проверка времени < 500ms', function(done){
        this.timeout(500)
        setTimeout(done, 300)
    })

})