const { Router } = require("express");
const router = new Router();

const RecipeController = require("../Controllers/RecipeController");
const Auth = require("../Middelwares/auth");
router.post("/", Auth.user, RecipeController.create);
router.get("/", Auth.user , RecipeController.getAllRecipes);
router.get('/:id', RecipeController.getOneRecipe)
router.patch('/:id',Auth.user, RecipeController.updateRecipe)
router.delete('/:id',Auth.user, RecipeController.deleteRecipe)


module.exports = router;
