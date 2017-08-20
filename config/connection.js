// export the mySQL connection
module.exports = require("mysql").createConnection({
  user: "root",
  password: "root",
  database: "burgers_db"
});
