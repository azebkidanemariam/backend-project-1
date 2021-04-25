// const Recipe = require("../Models/recipe");
const { NotValid, RecipeNotFound } = require("../Errors");
const Recipe = require("../Models/recipe");
module.exports = {
  async create(req, res, next) {
    try {
      const { title, ingridents, Instruction } = req.body;
      if (!title || !ingridents || !Instruction) {
        throw new NotValid(["title", "ingridents", "Instruction"]);
      }
      const UserId = req.user.id;
      const recipe = await Recipe.create({
        title,
        ingridents,
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
    let pageSize = +req.params.pageSize || 10;
    pageSize = pageSize > 10 ? 10 : pageSize;
    pageSize = pageSize < 1 ? 1 : pageSize;

    const UserId = req.user.id;
    const recipes = await Recipe.findAll({
      limit: pageSize,
      offset: page * pageSize,
      where: { UserId },
    });
    res.json({ recipes });
  },

  async getAllRecipesByUser(req, res, next) {
    const { page, pageSize } = parseQuery(req.query);
    const UserId = req.params.id;

    const recipes = await Recipe.findAll({
      limit: pageSize,
      offset: {page_1}  * pageSize,
      where: { UserId },
    });
    res.json({ recipes });
  },

  async getOneRecipe(req, res , next){
      const { id } = req.params
      const recipe = await Recipe.findOne({where:{id}})
      if (!recipe){ throw new RecipeNotFound(id)}
      res.json({recipe})
  }};
