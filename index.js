/* These are the dependencies for this program.
	Express is a javascript framework.
	sqlite3 handles the database in a file named database.sqlite
	bodyparser helps with URL encoding.
*/
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require ('body-parser');
var db = new sqlite3.Database('./database.sqlite');

const app = express();

// This chooses which port to listen on, change if needed.
const port = 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.listen(port, () => {
		console.log('Listening on port ' + port);
})
	
// Most of the code is in ./app/routes/route.js
require('./app/routes')(app, db);