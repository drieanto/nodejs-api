var mongo = require('mongoskin');

var db = mongo.db('mongodb://127.0.0.1:27017/apidb');

db.bind('takjil');

exports.findById = function(req, res) {
	var id = parseInt(req.params.id);
	db.takjil.findOne({
		'id' : id
	},function(err, result){
		if(err)
			res.send(err);
		res.send(result);
	})
}

exports.findAll = function(req, res) {
	db.takjil.find().toArray(function(err, result){
		if(err)
			res.send(err);
		res.send(result);
	});
};

exports.addTakjil = function(req, res) {
	var data = req.body;
	db.takjil.insert(data, function(err){
		if(err)
			res.send(err);
		res.send({message:'Takjil created'});
	});
}


exports.updateTakjil = function(req, res) {
	var data = req.body;
	var id = parseInt(req.params.id);
	db.takjil.update({'id':id},{$set:data}, function(err){
		if(err)
			res.send(err);
		res.send({message:"takjil updated"});
	})
}

exports.deleteTakjil = function(req, res) {
	var id = parseInt(req.params.id);
	db.takjil.remove({'id':id}, function(err){
		if(err)
			res.send(err);
		res.send({message:"takjil deleted"});
	})
}