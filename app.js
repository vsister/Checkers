const express = require('express')
const session = require('express-session')
const passport = require('./config/passport')

const sess = {
    secret: 'SPASIBOSASHEZAPOBEDU',
    cookie: {},
    resave: false,
    saveUninitialized: true
}

const app = express()

if (app.get('env') === 'production') {
    sess.cookie.secure = true; // serve secure cookies, requires https
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname))
app.use(session(sess))
app.use(passport.initialize())
app.use(passport.session())


const apiRoutes = require('./routes/api.js')
const pagesRoutes = require('./routes/pages.js')


app.use('/', apiRoutes)
app.use('/', pagesRoutes)


app.listen(8080, ()=>{console.log('Слушаем 8080 порт')})