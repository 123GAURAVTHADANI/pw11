var express = require("express");
var app = express();
var dotenv = require("dotenv");
const { dbConfig } = require("./Configurations/db.config");
dotenv.config();
var PORT = process.env.PORT || 3000;
// Middleware

app.use(express.json());
app.listen(PORT, async () => {
  await dbConfig();
  console.log(`listening over port ${PORT}`);
});
