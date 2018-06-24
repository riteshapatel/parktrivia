/**
 * Express server 
 * @author ritesh.patel
 */
const express = require('express'),
    app = express(),
    serverPort = 3008,
    routes = require('./routes.js'),
    bodyParser = require('body-parser');

let server;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// set cross origin headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");    
    next();
})

server = require('http').Server(app); 

/**
 * Configures routes and turns on Express server on port 3003
 * @param {*} onData 
 * @param {*} onErr 
 */
const configureServer = (onData, onErr) => {
    // routes
    app.get('/handshake', routes.handShake);
    app.get('/questions', routes.getQuestions);

    // start server
    server.listen (serverPort, function () {
		console.log('Express listening on port ', serverPort);
	});    
}

// configure server
configureServer();

module.exports = server;