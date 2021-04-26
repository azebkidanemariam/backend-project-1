const db = require("../database/connection");
const { DataTypes } = require("sequelize");
const Recipe = require("./recipe");
const  Ingredients  = require("./ingredients");

const IngredientRecipe = db.define("IngredientRecipe", {
  Amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = IngredientRecipe;

Recipe.belongsToMany(Ingredients,{ through: IngredientRecipe });
Ingredients.belongsToMany(Recipe,{ through: IngredientRecipe });
