//ok
const express = require('express');
const router = express.Router();
const users = require('../../models/requests');
const bcrypt = require('bcryptjs');
router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'userpanel';
    next();
});

router.post('/', (req, res) => {

    const newUser = users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
    });
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save().then(SaveUser => {
                res.redirect('/login');
            }).catch(err => {
                res.send(err);
            })
        });
    });


});

module.exports = router;