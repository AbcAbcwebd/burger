// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// This helper function creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function addMarks(num) {
  return new Array(num).fill('?').toString()
}

// check for properties declared directly on calling context
// i.e. false for properties from the prototype chain
function isDirectPropery(key) {
  return Object.prototype.hasOwnProperty.call(this, key);
}

// if value is a string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
function quoteSpaces(value) {
  return (
    typeof value === "string" && value.indexOf(' ') >= 0 ?
    `'${value}'`:
    value
  );
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(obj) {
  const arr = [];

  // loop through the keys and push the key/value as a string into arr
  for (let key in obj) {
    if (isDirectPropery.call(obj, key)) {
      arr.push(`${key}=${quoteSpaces(obj[key])}`);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Export the orm object for the model (cat.js).
module.exports = {
  selectAll: (tName, cb) => {
    connection.query(`SELECT * FROM ${tName};`, 
                     (err, result) => cb(err,result));
  },
  insertOne: (table, cols, vals, cb) => {
    const sql = `INSERT INTO ${table} (${cols.toString()}) 
    VALUES (${addMarks(vals.length)});`;
    console.log(sql);
    connection.query(sql, vals, (err, result) => cb(err,result));
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: (table, objColVals, condition, cb) => {
    const sql = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
    console.log(sql);
    connection.query(sql, (err, result) => cb(err,result));
  }
};
