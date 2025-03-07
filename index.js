const express = require("express");

require("dotenv").config();

const app = express();
const { errorHandler } = require("./Middelwares/errorHandler");

const userRoutes = require("./routes/users.js");
const ingredientsRoutes = require("./routes/ingredients.js");
const recipeRoutes = require("./routes/recipe.js");

const db = require("./database/setup");

app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1/", ingredientsRoutes);
app.use("/api/v1/recipes", recipeRoutes);

const PORT = process.env.PORT || 8000;

app.use(errorHandler);

app.listen(PORT, () => console.log("Running on port " + PORT));
