const Advisor = require('../models/advisor');
const bcrypt = require('bcrypt');
module.exports.advisorAuth = async (req, email, password, done) => {
    const advisor = await Advisor.findOne({ email });
    if (!advisor || !bcrypt.compareSync(password, advisor.password)) return done(null, false, req.flash("message", 'Incorrect password or username'));
    return done(null, advisor);
}


module.exports.StrategyName = "adlogin"

module.exports.option = {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}
