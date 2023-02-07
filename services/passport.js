import { config } from "dotenv";
import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import mongoose from 'mongoose';

// Config used to pick variables from .env file
config();

const User = mongoose.model('users');

passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // The URL to return to after the user allows permission
    callbackURL: "http://localhost:3000/auth/google/callback",
    scope: [ 'profile', 'email' ],
    passReqToCallback: true,
  }, (req, accessToken, refreshToken, profile, done) => {
    new User({
      googleId: profile.id
    }).save();
  } ))