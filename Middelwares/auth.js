const { NotAuthorized } = require("../Errors");
const User = require("../Models/User");
const Recipe = require("../Models/Recipe");
const Ingredients = require("../Models/Ingredients");
module.exports = {
  user: (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new NotAuthorized();
    }
    const token = authorization.replace("Bearer ", "");
    const user = User.validateToken(token);
    req.user = user;
    next()
  },
  Recipe, Ingredients
};
