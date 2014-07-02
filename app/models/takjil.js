var mongo = require('mongoskin');
var BSON = mongo.BSONPure;
var db = mongo.db('mongodb://127.0.0.1:27017/apidb');

db.bind('takjil');

exports.findById = function(req, res) {
	var id = req.params.id;
	db.takjil.findOne({
		'_id' : new BSON.ObjectID(id)
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
	var id = req.params.id;
	db.takjil.update({
		'_id': new BSON.ObjectID(id)
	},{
		$set:data
	}, function(err){
		if(err)
			res.send(err);
		res.send({message:"takjil updated"});
	})
}

exports.deleteTakjil = function(req, res) {
	var id = req.params.id;
	db.takjil.remove({
		'_id': new BSON.ObjectID(id)
	}, function(err){
		if(err)
			res.send(err);
		res.send({message:"takjil deleted"});
	})
}