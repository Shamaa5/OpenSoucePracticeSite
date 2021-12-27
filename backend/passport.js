const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;

passport.use(
  new GithubStrategy(
    {
      clientID: '94e7ef77a0fdf11674ae',
      clientSecret: '071e4807e2172a0690fa03813682620ab0fe730f',
      callbackURL: '/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    },
  ),
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
