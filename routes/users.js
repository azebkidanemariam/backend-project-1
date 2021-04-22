const {Router} = require('express');
const router = new Router();

const UserController = require('../Controllers/UserController')
router.post('/register', UserController.register)

module.exports = router;
