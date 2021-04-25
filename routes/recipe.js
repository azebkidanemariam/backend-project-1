const {Router} = require('express');
const router = new Router();

const RecipeController = require('../Controllers/RecipeController')
const Auth = require('../Middelwares/auth')
router.post('/', Auth.user ,RecipeController.create)
// router.get('/', RecipeController.getAll)
// router.get('/:id', RecipeController.getOne)
// router.patch('/:id', RecipeController.update)
// router.delete('/:id', RecipeController.delete)
// router.get('/me', Auth.user, UserController.me)


module.exports = router;