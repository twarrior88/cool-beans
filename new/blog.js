var connect = require('connect'),
	http = require('http'),
	serveStatic = require('serve-static'),
	express = require('express'),
	errorhandler = require('errorhandler');
connect()
	.use(express.static(__dirname + '/_site'))
	.use(errorhandler())
	.listen(1180);
