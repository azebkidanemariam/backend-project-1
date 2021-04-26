const db = require("../database/connection");
const { DataTypes } = require("sequelize");
const User = require("./User");

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
});

User.hasMany(Recipe);
Recipe.belongsTo(User);

module.exports = Recipe;
