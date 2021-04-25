const Ingredient = require("../Models/ingredients");
const fs = require("fs");
const data = fs.readFileSync("./ingredient.txt", {
  encoding: "utf-8",
});
async function seedfile() {
  const ingredients = data.trim().split("\n");
  try {
    for (let ingredient of ingredients) {
      await Ingredient.create({ Ingridents: ingredient });
    }
  } catch (error) {
    console.log(error);
  }
}
seedfile();

