import { config } from "dotenv";
import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import mongoose from 'mongoose';

// Config used to pick variables from .env file
config();

const User = mongoose.model('users');

// serializing user which is authenticated
// putting the data to be used for authentication in the req.session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// de-serializing the user
// taking the data out from req.session to use for authentication
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // The URL to return to after the user allows permission
    callbackURL: "/auth/google/callback",
    proxy: true,
  }, (req, accessToken, refreshToken, profile, done) => {
    User.findOne({
      googleId: profile.id
    }).then(existingUser => {
      if (!existingUser) {
        new User({
          googleId: profile.id
        }).save().then(user => done(null, user))
      } else {
        done(null, existingUser);
      }
    });
  }));