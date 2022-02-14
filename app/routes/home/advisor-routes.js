const express = require('express');
const router = express.Router();
const advisor = require('../../controller/advisro');
const isAuthenticated = require('../../middleware/isAuthenticated');

router.get('/adlogin', isAuthenticated.handle, advisor.Render)

router.post('/adlogin', advisor.LogIn);



module.exports = router;
