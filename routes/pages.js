const express = require('express')
const router = express.Router()
const passport = require('passport')



// Perform the login, after login Auth0 will redirect to callback
router.get('/login', passport.authenticate('auth0', {
    scope: 'openid email profile'
}), function (req, res) {
    res.redirect('/game')
});

// Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/callback', function (req, res, next) {
    passport.authenticate('auth0', function (err, user, info) {
        if (err) { return next(err) }
        if (!user) { return res.redirect('/login') }
        req.logIn(user, function (err) {
            if (err) { return next(err) }
            const returnTo = req.session.returnTo
            delete req.session.returnTo
            res.redirect(returnTo || '/')
        });
    })(req, res, next)
})


const auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    }
    else {
        return res.redirect('/login')
    }
}


// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/game')
})

router.get('/',auth, function (req,res) {
    res.redirect('/game')

})
router.get('/game',auth,(req,res)=>{
    res.sendFile('D://Checkers//checkers.html')

})

router.get('/rules',auth, (req,res)=>{
    res.sendFile('D://Checkers//rules.html')
})

router.get('/*', (req,res)=>{
    res.send('Страница не найдена')
})


module.exports = router
