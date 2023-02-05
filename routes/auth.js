import passport from "passport";

/* GET /auth/google/accounts.google.com
 *
 * This route redirects the user to Google, where they will authenticate.
 *
 * Signing in with Google is implemented using OAuth 2.0.  This route initiates
 * an OAuth 2.0 flow by redirecting the user to Google's identity server at
 * 'https://accounts.google.com'.  Once there, Google will authenticate the user
 * and obtain their consent to release identity information to this app.
 *
 * Once Google has completed their interaction with the user, the user will be
 * redirected back to the app at `GET /auth/google/callback/accounts.google.com`.
 */

const authRoutes = (app) => {
    app.use("/auth/google", passport.authenticate("google"))
    
    app.get('/auth/google/callback', passport.authenticate('google', {
        successReturnToOrRedirect: '/',
        failureRedirect: '/login'
    }));
};

export default authRoutes;