const db = require("../database/connection");
const { DataTypes } = require("sequelize");
const User = require("./User");
// const Ingredients = require("./ingredients");

const Recipe = db.define("Recipe", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "Email already exists!",
    },
  },
  Instruction: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ingridents: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Recipe);
Recipe.belongsTo(User);
// Recipe.hasMany(Ingredients);
// Ingredients.belongsToMany(Recipe);

module.exports = Recipe;
