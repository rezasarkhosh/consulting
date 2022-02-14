const User = require('../models/user');
const passport = require('passport');
module.exports = new class {
    register(req, res) {
        req.app.locals.layout = '';
        res.render('admin/users/addUser');
    }

    addUserProcess(req, res, next) {
        passport.authenticate('register', {
            successRedirect: "/login",
            failureRedirect: "/register",
            failureFlash: true,
            successFlash: true
        }
        )(req, res, next);
    }


}