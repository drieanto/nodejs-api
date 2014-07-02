var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// configure app
app.use(bodyParser());

var takjil = require('./app/models/takjil');

var port     = process.env.PORT || 8080; // set our port

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'hae beb' });	
});

router.route('/takjil')
	.get(takjil.findAll)
	.post(takjil.addTakjil);

router.route('/takjil/:id')
	.get(takjil.findById)
	.put(takjil.updateTakjil)
	.delete(takjil.deleteTakjil);

// register route
app.use('/api', router);

app.listen(port);
console.log('Hae on port ' + port);
