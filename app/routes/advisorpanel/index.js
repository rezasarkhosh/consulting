const express = require('express');
const router = express.Router();
const advisor = require('../../controller/advisro');
router.all('*', (req, res, next) => {
    req.app.locals.layout = 'advisorpanel';
    next();
});


router.get('/',  (req, res) => {
    res.render('advisorpanel/advisorpanel');
});


router.get('/requests', advisor.RenderRequest);

router.get('/answer',  (req, res) => {
    res.render('advisorpanel/answer');
});

router.get('/freeReq',  (req, res) => {
    res.render('advisorpanel/free');
});

// router.post('/answer', (req, res) => {
//
//     const newUser = users({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         number: req.body.number,
//     });
//     newUser.save().then(SaveUser => {
//         res.redirect('/login');
//     }).catch(err => {
//         res.send(err);
//     })
//
//
// });

router.post('/answer', advisor.createAnswer );
router.post('/freeReq', advisor.freeReq );
module.exports = router;