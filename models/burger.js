// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// Export the database functions for the controller (burgersController.js).
module.exports = {
  selectAll: (cb) => {
    orm.selectAll("burgers", (err, data) => cb(err,data));
  },
  // The variables cols and vals are arrays.
  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, (err, result) => cb(err, result));
  },
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, (err, result) => cb(err, result));
  }
};