const uniqString = require('uniq-string');
const requestModel = require('../models/requests')
const Advisor = require("../models/advisor");
const answer = require("../models/answer");
const fs = require('fs');

module.exports = new class {
    RenderuserPanel(req, res) {
        return res.render('userpanel/userpanel');
    }
    RenderReceive(req, res) {
        return res.render('userpanel/receive');
    }

    async RenderReceive(req, res) {
        const answers = await answer.find({ ids: req.user._id });
        req.app.locals.layout = 'userpanel';

        if (answers.ids == req.user.id) {
            return res.render('userpanel/receive', { answers });
        } else return res.render('userpanel/receive');

    }


    async Renderrequest(req, res) {
        const string = uniqString(32, 'abcdef123456').slice(0, 7);
        const advisor = await Advisor.find({});
        return res.render('userpanel/request/index', { string, advisor });
    }
    async createRequest(req, res) {
        const { code, advisor, title, phone, email, pay, chat, file, ask } = req.body;
        let fishvariz;
        if (!req.file) {
            req.file = undefined;
        } else {
            fishvariz = req.file.path.slice(26);
        }
        const user = req.user._id;
        const newRequest = new requestModel({
            advisor,
            user,
            code,
            title,
            phone,
            email,
            pay,
            chat,
            file,
            ask,
            fishvariz
        });
        await newRequest.save();
        return res.redirect('/user/userPanel');
    }

}