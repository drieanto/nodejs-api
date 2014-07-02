var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// configure app
app.use(bodyParser());

var takjil = require('./app/models/takjil');

var port     = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});
// on routes that end in /bears
// ----------------------------------------------------
router.route('/takjil')
	.get(takjil.findAll)
	.post(takjil.addTakjil);

router.route('/takjil/:id')
	.get(takjil.findById)
	.put(takjil.updateTakjil)
	.delete(takjil.deleteTakjil);

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

app.listen(port);
console.log('Hae on port ' + port);
