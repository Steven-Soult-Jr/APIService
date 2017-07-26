const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require ('body-parser');
const Promise = require('bluebird');
var db = new sqlite3.Database('./database.sqlite');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.listen(port, () => {
		console.log('Listening on port ' + port);
})
	
	
require('./app/routes')(app, db);