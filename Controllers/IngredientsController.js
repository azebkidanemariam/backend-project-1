const { NotValid } = require("../Errors");
const Ingredients = require("../Models/ingredients");

module.exports = {
  async GetAllIngredients(req, res, next) {
    try {
      const { Ingridents, id } = req.body;
      if ((!Ingridents, id)) {
        throw new NotValid("Ingridents");
      }
      const ingredients = await Ingredients.findAll({
        attributes: ["Ingridents"],
      });
      res.json({ ingredients });
    } catch (error) {
      next(error);
    }
  },

  async GetOneIngredient(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) {
        throw new NotValid("id");
      }
      const ingredients = await Ingredients.findOne({
        where: { id: id },
      }).then((ingredients) => {
        res.json({ ingredients });
      });
    } catch (error) {
      next(error);
    }
  },
};
