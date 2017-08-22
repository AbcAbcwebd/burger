//mysql://b05906cd406f22:09943536@us-cdbr-iron-east-05.cleardb.net/heroku_4fce34ca6fbe329?reconnect=true

var mysql = require('mysql');

var connection;

if (process.env.CLEARDB_DATABASE_URL) {
	connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'burgers_db'
	})
};

connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

module.exports = connection;