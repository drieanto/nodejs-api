nodejs-api
==========

Building Rest API Using NodeJS

Install
-------
```sh
npm install
```

Run
---
```sh
node app.js
```

Route
-----
```sh
router.route('/takjil')
	.get(takjil.findAll) // get all data
	.post(takjil.addTakjil); // create new takjil

router.route('/takjil/:id')
	.get(takjil.findById) // get a takjil
	.put(takjil.updateTakjil) // update data a takjil
	.delete(takjil.deleteTakjil); // delete a takjil
```