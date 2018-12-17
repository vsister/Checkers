const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const db = require('../controllers/dbController')

const strategy = new Auth0Strategy(
    {
        domain: 'gorgeous.eu.auth0.com',
        clientID: 'XCwsmaw0cW9c8sdK1yAVFXPK1pKPiTk3',
        clientSecret: 'wcEsE438CjfSFHWnL8gqQ7q9EV5MSBGZzBRAbPX7_DGVuQ66u3MJbK3zGPQkp9O0',
        callbackURL:
            process.env.AUTH0_CALLBACK_URL || '/callback'
    },
    async function (accessToken, refreshToken, extraParams, profile, done) {
        // accessToken is the token to call Auth0 API (not needed in the most cases)
        // extraParams.id_token has the JSON Web Token
        // profile has all the information from the user
        if(!await db.isUser(profile.id)){
            await db.createUser({Token: profile.id, FirstName : profile.name.givenName, LastName: profile.name.familyName,  Total: 0,  White:0, Black:0, Draw:0})
        }
        return done(null, profile)
    }
)

passport.use(strategy)

passport.serializeUser(function (user, done) {
    done(null, user)
})

passport.deserializeUser(function (user, done) {
    done(null, user)
})

module.exports = passport