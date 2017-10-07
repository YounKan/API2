module.exports = {
        mongoUri: 'mongodb://admin:pass@localhost:27017/testdb1',
       debug: true,
       sessionSecret: 'dev_secret_key',
       google: {
              clientID: '566294729586-4ujns7cvbvr6i765eitgme1u0m9dp4jm.apps.googleusercontent.com',
              clientSecret: 'c6S7Ohy_7t79LSNn4iZBMgAf',
              callbackURL: 'http://localhost:3000/oauth/google/callback'
       }

}
