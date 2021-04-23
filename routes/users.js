const {Router} = require('express');
const router = new Router();

const UserController = require('../Controllers/UserController')
const Auth = require('../Middelwares/auth')
router.post('/register', UserController.register)
router.post('/auth', UserController.login)
router.get('/me', Auth.user, UserController.me)


module.exports = router;
