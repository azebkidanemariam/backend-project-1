const Recipe = require("../Models/recipe");
const Ingredients = require("../Models/ingredients");
const IngredientRecipe = require("../Models/ingredientRecipe");

const {
  NotValid,
  RecipeNotFound,
  RecipeError,
  NotAuthorized,
} = require("../Errors");

module.exports = {
  async create(req, res, next) {
    try {
      const { title, Instruction } = req.body;
      if (!title || !Instruction) {
        throw new NotValid(["title", "Instruction"]);
      }

      const UserId = req.user.id;
      const recipe = await Recipe.create({
        title,
        Instruction,
        UserId,
      });
      res.json({ recipe });
    } catch (error) {
      next(error);
    }
  },

  async getAllRecipes(req, res, next) {
    const page = +req.params.page || 0;
    const UserId = req.user.id;
    const recipes = await Recipe.findAll({
      limit: 2,
      offset: (page - 1) * 2,
      where: { UserId },
    });
    res.json({ recipes });
  },

  async getAllRecipesByUser(req, res, next) {
    const { page, pageSize } = parseQuery(req.query);
    const UserId = req.params.id;

    const recipes = await Recipe.findAll({
      limit: pageSize,
      offset: { page_1 } * pageSize,
      where: { UserId },
    });
    res.json({ recipes });
  },

  async getOneRecipe(req, res, next) {
    const { id } = req.params;
    const recipe = await Recipe.findOne({ where: { id } });
    if (!recipe) {
      throw new RecipeNotFound(id);
    }
    res.json({ recipe });
  },

  async updateRecipe(req, res, next) {
    try {
      const { id } = req.params;
      const { title, ingridents, Instruction } = req.body;
      const fields = {};
      if (title) fields.title = title;
      if (ingridents) fields.ingridents = ingridents;
      if (Instruction) fields.Instruction = Instruction;
      const recipe = await Recipe.findOne({ where: { id } });
      if (!recipe) {
        throw new RecipeNotFound(id);
      }
      if (recipe.UserId != req.user.id) {
        throw new NotAuthorized();
      }
      const result = await Recipe.update(fields, { where: { id } });
      res.json({ message: "post updated" });
    } catch (error) {
      next(error);
    }
  },

  async deleteRecipe(req, res, next) {
    try {
      const { id } = req.params;
      const recipe = await Recipe.findOne({ where: { id } });
      if (recipe.UserId != req.user.id) {
        throw new NotAuthorized();
      }
      await recipe.destroy();
      res.json({ message: "Post annihilated" });
    } catch (error) {
      next(error);
    }
  },

  async addIngredientsToRecipe(req, res, next) {
    try {
      const { IngredientId, RecipeId, amount, measure } = req.body;
      if (!amount || !measure || !IngredientId || !RecipeId) {
        throw new NotValid(["amount"]);
      }

      const data = await IngredientRecipe.create({
        amount,
        unit,
        IngredientId,
        RecipeId,
      });
      console.log(data);

      res.json({ message: `New Ingredient added to recipe no ${RecipeId}!` });
    } catch (error) {
      next(error);
    }
  },
};
