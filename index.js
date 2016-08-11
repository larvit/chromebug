'use strict';

var http = require('http');
var fs = require('fs');

// Create server
var server = http.createServer(function onRequest (req, res) {

	if (req.url === '/css/test.css') {
		fs.readFile(__dirname + '/test.css', function(err, data) {
			res.setHeader('content-type', 'text/css');
			res.end(data);
		});
	} else if (req.url === '/html/nonworking.html') {
		fs.readFile(__dirname + '/nonworking.html', function(err, data) {
			res.setHeader('content-type', 'text/html');
			res.end(data);
		});
	}	else if (req.url === '/html/working1.html') {
		fs.readFile(__dirname + '/working1.html', function(err, data) {
			res.setHeader('content-type', 'text/html');
			res.end(data);
		});
	} else if (req.url === '/html/working2.html') {
		fs.readFile(__dirname + '/working2.html', function(err, data) {
			res.setHeader('content-type', 'text/html');
			res.end(data);
		});
	} else {
		res.statusCode = 404;
		res.end();
	}
});

// Listen
server.listen(3000)
