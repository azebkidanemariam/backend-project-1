const { NotValid } = require("../Errors");
const Ingredients = require("../Models/ingredients");
// const { Op } = require("sequelize");

module.exports = {
  async GetAllIngredients(req, res, next) {
    try {
      const { Ingridents, id } = req.body;
      if ((!Ingridents, id)) {
        throw new NotValid("Ingridents");
      }
      const ingredients = await Ingredients.findAll({
       attributes:['Ingridents']
      });
      res.json({ ingredients });
    } catch (error) {
      next(error);
    }
  },
};


