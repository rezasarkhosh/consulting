const passport = require('passport');
const request = require('../models/requests');
const answer = require('../models/answer');
const freeReq = require('../models/freeReq');
module.exports = new class {
    Render(req, res) {
        req.app.locals.layout = '';
        res.render('home/adlogin', { message: req.flash("message") });
    }

    LogIn(req, res, next) {
        passport.authenticate('adlogin', {
            successRedirect: '/advisorpanel',
            failureRedirect: '/loginAdvisor',
            failureFlash: true
        }
        )(req, res, next);
    }

    async RenderRequest(req, res) {
        const requests = await request.find({ advisor: req.user._id });
        req.app.locals.layout = 'advisorpanel';

        if (requests.advisor == req.user.id) {
            return res.render('advisorpanel/request', { requests });
        } else return res.render('advisorpanel/request');
    }
    //
    // async renderfreeReq(req, res) {
    //     const freeReqs = await freeReq.find({});
    //     req.app.locals.layout = 'advisor';
    //     return console.log(req.body);
    //     return res.render('home/index', { freeReqs });
    // }

    async createAnswer(req, res) {
        const { code, ids, title, phone,  ask, name } = req.body;
        const user = req.user._id;
        console.log(user);
        const newAnswer = new answer({
            ids,
            user,
            code,
            title,
            phone,
            name,
            ask
        });
        await newAnswer.save();
        return res.redirect('/advisorpanel');
    }

    async freeReq(req, res) {
        const { ask, answer} = req.body;
        const newfreeReq = new freeReq({
            ask,
            answer,
        });
        await newfreeReq.save();
        return res.redirect('/');
    }
}