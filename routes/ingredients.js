const { Router } = require("express");
const router = new Router();


const IngredientsController = require("../Controllers/IngredientsController");
const Auth = require("../Middelwares/auth");
router.get(
  "/GetAllIngredients",
  Auth.user,
  IngredientsController.GetAllIngredients
);

module.exports = router;

