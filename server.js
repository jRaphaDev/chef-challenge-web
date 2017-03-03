var http = require('http');
var app = require('./config/express');
require('./config/database')('mongodb://localhost/chef-challenge');

http.createServer(app)
.listen(3000, ()=> {
	console.log('Servidor iniciado');
});
