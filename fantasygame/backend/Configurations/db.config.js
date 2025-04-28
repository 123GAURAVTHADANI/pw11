var mongoose = require("mongoose");
function dbConfig() {
  try {
    let mongo_url = process.env.MONGO_DB_CONNECTION_STRING;
    if (!mongo_url) {
      throw new Error("Mongo_db_url is missing");
    } else {
      mongoose
        .connect(mongo_url)
        .then(() => {
          console.log("Connected to the database");
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { dbConfig };
