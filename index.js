const express = require("express");

require("dotenv").config();

const app = express();

// const reciperoutes = require("./routes/routes");
// const logger = require("./middleware/logger");
// const headers = require("./middleware/headers");
const userRoutes = require ('./routes/users.js')

app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ message: "hello there" });
// });
app.use('/api/v1', userRoutes)


const PORT = process.env.PORT || 8000;

// app.use(logger);

// app.use(headers);

// app.use(reciperoutes);

app.listen(PORT, () => console.log("Running on port " + PORT));
