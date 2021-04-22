// const sqlite = require("sqlite3");
// const db = new sqlite.Database("cwc.sqlite3");

// db.serialize(() => {
//   db.run("DROP TABLE IF EXISTS recipe_lists");
//   db.run("DROP TABLE IF EXISTS recipes");

//   db.run(`CREATE TABLE "Ingredients" (
// 	"ingredientsid"	INTEGER,
// 	"ingredientsName"	INTEGER NOT NULL,
// 	PRIMARY KEY("ingredientsid")`);
//   db.run(`CREATE TABLE "Instruction" (
//         "instructionID"	INTEGER,
//         "recipeid"	INTEGER,
//         PRIMARY KEY("instructionID"),
//         FOREIGN KEY("recipeid") REFERENCES "Recipe"("recipeid")
//     )`);
//   db.run(`CREATE TABLE "Recipe" (
//         "recipeid"	INTEGER,
//         "ownerid"	INTEGER NOT NULL,
//         "instructionList"	TEXT NOT NULL,
//         "Guide"	TEXT NOT NULL,
//         PRIMARY KEY("recipeid" AUTOINCREMENT),
//         FOREIGN KEY("ownerid") REFERENCES "owner"("ownerid")
//     )`);
//   db.run(`CREATE TABLE "Recipe ingredients" (
//         "recipeid"	INTEGER NOT NULL,
//         "ingredienstid"	INTEGER NOT NULL,
//         FOREIGN KEY("ingredienstid") REFERENCES "Ingredients"("ingredientsid"),
//         FOREIGN KEY("recipeid") REFERENCES "Recipe"("recipeid")
//     )`);
//   db.run(`CREATE TABLE "owner" (
//         "ownerid"	INTEGER,
//         "name"	TEXT NOT NULL,
//         "password"	INTEGER UNIQUE,
//         PRIMARY KEY("ownerid" AUTOINCREMENT)
//     )`);
//   db.get("PRAGMA foreign_keys = ON"); // Enable SQL error on foreign key constraints
// });

// module.exports = db;
