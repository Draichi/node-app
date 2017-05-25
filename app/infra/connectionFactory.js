var mysql = require('mysql');

module.exports = function () {
	//wrapper
	return createDBConnection;
}

function createDBConnection() {
	if (!process.env.NODE_ENV){
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '0000',
			database: 'casadocodigo_nodejs'
		});
	}
	if (process.env.NODE_ENV == 'test'){
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '0000',
			database: 'casadocodigo_nodejs_test'
		});
	}
	if (process.env.NODE_ENV == 'production'){
		return mysql.createConnection({
			host: 'us-cdbr-iron-east-03.cleardb.net',
			user: 'b50ac1a094b160',
			password: 'b613f940',
			database: 'heroku_662f199990be4d6'
		});
	}
}
