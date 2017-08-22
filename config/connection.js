// export the mySQL connection
module.exports = require("mysql").createConnection({
  host     : 'us-cdbr-iron-east-05.cleardb.net',
  user     : 'b05906cd406f22',
  password : '09943536',
  database : 'heroku_4fce34ca6fbe329'
});

//mysql://b05906cd406f22:09943536@us-cdbr-iron-east-05.cleardb.net/heroku_4fce34ca6fbe329?reconnect=true