/* This file redirects the requests to routes.js
* This is an unneccesary step currently, but allows for splitting the code
* among multiple files later if the project grows.
*/
const routes = require('./routes');

module.exports = function(app, db) {
	routes(app, db);
};