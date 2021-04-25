const { Router } = require("express");
const router = new Router();

const RecipeController = require("../Controllers/RecipeController");
const Auth = require("../Middelwares/auth");
router.post("/", Auth.user, RecipeController.create);
router.get("/", Auth.user , RecipeController.getAllRecipes);
router.get('/:id', RecipeController.getOneRecipe)
router.patch('/:id', RecipeController.updateRecipe)
// router.delete('/:id', RecipeController.delete)
// router.get('/me', Auth.user, UserController.me)

module.exports = router;
