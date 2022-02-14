const passport = require('passport');
module.exports = new class {
    login(req, res) {
        req.app.locals.layout = '';
        res.render('home/login', { message: req.flash("message") });
    }
    LogIn(req, res, next) {
        passport.authenticate('login', {
            successRedirect: "/",
            failureRedirect: "/login",
            failureFlash: true,
            successFlash: true
        }
        )(req, res, next);
    }
}