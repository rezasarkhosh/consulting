const express = require('express');
const router = express.Router();
const userpanel = require('../../controller/userpanel');
const multer = require('../../multer/uploadImage');
router.all('*', (req, res, next) => {
    req.app.locals.layout = 'userpanel';
    next();
});

router.get('/userPanel', userpanel.RenderuserPanel);

router.get('/userPanel/request', userpanel.Renderrequest);

router.get('/userPanel/Receive', userpanel.RenderReceive);

router.post('/userPanel/request', multer.single("userrequest"), userpanel.createRequest);

module.exports = router;