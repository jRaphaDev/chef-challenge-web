var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('User');

	api.lista = (req, res)=>{

		model.find()
		.then((users)=> {
			res.json(users);
		}, (error) => {
			console.log(error);
			res.sendStatus(500);
		});

	};
    api.adiciona = (req, res) =>{

		model.create(req.body)
		.then((user) =>{
			res.json(user);
		}, (error)=> {
			console.log('não conseguiu');
			console.log(error);
			res.sendStatus(500);
		});
	};
	return api;
};