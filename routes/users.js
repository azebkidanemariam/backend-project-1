const {Router} = require('express');
const router = new Router();

const UserController = require('../Controllers/UserController')
router.post('/register', UserController.register)
router.post('/auth', UserController.login)
// router.get('/me', UserController.me)


module.exports = router;
