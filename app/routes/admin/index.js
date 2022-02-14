const express = require('express');
const router = express.Router();
const admin = require('../../controller/admin');
router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
})
router.get('/users', admin.RenderAdminUsers);

router.get('/', admin.Renderpishkhan);



module.exports = router;