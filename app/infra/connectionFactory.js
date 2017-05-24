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
}
