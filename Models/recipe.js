const db = require("../database/connection");
const { DataTypes } = require("sequelize");

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
  module.exports = Recipe