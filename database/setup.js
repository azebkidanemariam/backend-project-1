const db = require("./connection");
const User = require("../Models/User");
const Recipe = require("../Models/recipe");
const Ingredients = require("../Models/ingredients");
const IngredientRecipe = require("../Models/ingredientRecipe");
db.sync();
