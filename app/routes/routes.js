module.exports = function(app, db) {
	
	/* This function handles POST requests for adding a new user.
	* input: username, lastName, and firstName as part of the POST.
	* output: A confirmation string.
	*/
	app.post('/user', (req, res) => {
		if(req.body.username && req.body.lastName && req.body.firstName) {
			// This code is executed if the proper values were sent through POST.
			// A new user is inserted into the table using the information provided. If the username exists, the command is just ignored.
			db.run("INSERT OR IGNORE INTO Users (username, firstName, lastName) VALUES ($user, $first, $last)", {$user: req.body.username, $first: req.body.firstName, $last: req.body.lastName});
			res.send(req.body.firstName + ' ' + req.body.lastName + ' added as a user.') //This line is optional, just gives a confirmation.
		} else {
			// If the needed values are not present, an error is returned.
			res.send('Error with POST')
		}
	});
	
	/* This function handles POST requests for following users.
	* input: username and followname as part of the POST.
	* output: A confirmation string.
	*/
	app.post('/user/follow', (req, res) => {
		if(req.body.username && req.body.followname) {
			// If the entry already exists, the command is just ignored.
			db.run("INSERT OR IGNORE INTO Followers (username, followname) VALUES ($user, $follow)", {$user: req.body.username, $follow: req.body.followname});
			res.send(req.body.username + ' is now following ' + req.body.followname) //This line is optional, just gives a confirmation.
		} else {
			res.send('Error with POST')
		}
	});
	
	/* This function handles GET requests for a user's followers.
	* input: username as part of the GET.
	* output: An array of usernames.
	*/
	app.get('/user/followers', (req, res) => {
		if(req.query.username) {
			db.all("SELECT DISTINCT username FROM Followers WHERE followname = ? LIMIT 10", [req.query.username], function(err, results) {
				if(err)
					console.log(err);
				
				// This turns the results into an array of usernames, removing the extra parts.
				var list = [];
				results.forEach(function(element) {
					list.push(element.username);
				});
				list = JSON.stringify(list);
				
				// The array of usernames is sent back.
				res.send(list);
			});
		} else {
			res.send('Error with GET')
		}
	});
	
	/* This function handles POST requests for sending 'tweets'.
	* input: username and message as part of the POST.
	* output: A confirmation string.
	*/
	app.post('/user/tweet', (req, res) => {
		if(req.body.username && req.body.message) {
			// A new tweet is added into the database
			db.run("INSERT INTO Tweets (username, message) VALUES ($user, $message)", {$user: req.body.username, $message: req.body.message});
			res.send(req.body.username + ' tweeted ' + req.body.message) //This line is optional, just gives a confirmation.
		} else {
			res.send('Error with POST')
		}
	});
	
	/* This function handles GET requests for a user's 'tweets'.
	* input: username as part of the GET.
	* output: An array of tweets.
	*/
	app.get('/user/tweets', (req, res) => {
		if(req.query.username) {
			// Up to 10 tweets are retrieved from the database sent by the given user. Modify LIMIT 10 to change how many are gotten.
			db.all("SELECT DISTINCT message FROM Tweets WHERE username = ? LIMIT 10", [req.query.username], function(err, results) {
				if(err)
					console.log(err);
				
				// This turns the results into an array of messages, removing the extra parts.
				var list = [];
				results.forEach(function(element) {
					list.push(element.message);
				});
				list = JSON.stringify(list);
				
				// The array of tweets is sent back.
				res.send(list);
			});
		} else {
			res.send('Error with GET')
		}
	});
};