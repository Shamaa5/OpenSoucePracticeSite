const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;
require('dotenv').config();
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.REACT_APP_GIHUB_CLIENT_ID,
      clientSecret: process.env.REACT_APP_GIHUB_CLIENT_SECRET,
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
