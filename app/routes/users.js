module.exports = function(app) {
	
	var api = app.api.users;

	app.route('/v1/users')
		.get(api.lista)
        .post(api.adiciona);

};