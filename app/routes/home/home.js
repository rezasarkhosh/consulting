const express = require('express');
const router = express.Router();
const home = require('../../controller/home');
const login = require('../../controller/login');
const acessLevel = require('../../middleware/acessLevel');
const addUser = require('../../controller/adUser');
const advisor = require('../../controller/advisro');



router.get('/register', acessLevel.isUser, addUser.register);


router.get('/loginAdvisor', acessLevel.isUser, advisor.Render);

router.get('/login', acessLevel.isUser, login.login);


//ok
router.get('/', home.Render);
//ok



router.get('/logout', (req, res) => {
    req.logout();
    res.clearCookie()
    res.redirect('/');
});

//ok
router.post('/advisorLoginProccess', advisor.LogIn);
router.post('/addUser', addUser.addUserProcess);
router.post('/login', login.LogIn);

module.exports = router;
