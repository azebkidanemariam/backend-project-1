const { NotValid } = require("../Errors");
const Ingredients = require("../Models/ingredients");

module.exports = {
  async GetAllIngredients(req, res, next) {
    try {
      const page = +req.params.page || 0;
      const { Ingridents, id } = req.body;
      if ((!Ingridents, id)) {
        throw new NotValid("Ingridents");
      }
      const ingredients = await Ingredients.findAll({
        limit: 5,
        offset: (page - 1) * 5,
        attributes: ["Ingridents", "id"],
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
