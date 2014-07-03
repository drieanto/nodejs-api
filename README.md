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
	.get(takjil.findAll)
	.post(takjil.addTakjil);

router.route('/takjil/:id')
	.get(takjil.findById)
	.put(takjil.updateTakjil)
	.delete(takjil.deleteTakjil);
```