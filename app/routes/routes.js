module.exports = function(app, db) {
	app.post('/user', (req, res) => {
		if(req.body.username && req.body.lastName && req.body.firstName) {
			db.run("INSERT INTO Users (username, firstName, lastName) VALUES (?, ?, ?)", [req.body.username, req.body.firstName, req.body.lastName]);
			res.send(req.body.firstName + ' ' + req.body.lastName + ' added as a user.')
		} else {
			res.send('Error with POST')
		}
	});
	
	app.post('/user/follow', (req, res) => {
		if(req.body.username && req.body.followname) {
			db.run("INSERT INTO Followers (username, followname) VALUES ($user, $follow)", {$user: req.body.username, $follow: req.body.followname});
			res.send(req.body.username + ' is now following ' + req.body.followname)
		} else {
			res.send('Error with POST')
		}
	});
	
	app.get('/user/followers', (req, res) => {
		if(req.query.username) {
			db.all("SELECT DISTINCT followname FROM Followers WHERE username = ? LIMIT 10", [req.query.username], function(err, results) {
				if(err)
					console.log(err);
				var list = [];
				results.forEach(function(element) {
					list.push(element.followname);
				});
				list = JSON.stringify(list);
				res.send(list);
			});
		} else {
			res.send('Error with GET')
		}
	});
	
	app.post('/user/tweet', (req, res) => {
		if(req.body.username && req.body.message) {
			db.run("INSERT INTO Tweets (username, message) VALUES ($user, $message)", {$user: req.body.username, $message: req.body.message});
			res.send(req.body.username + ' tweeted ' + req.body.message)
		} else {
			res.send('Error with POST')
		}
	});
	
	app.get('/user/tweets', (req, res) => {
		if(req.query.username) {
			db.all("SELECT DISTINCT message FROM Tweets WHERE username = ? LIMIT 10", [req.query.username], function(err, results) {
				if(err)
					console.log(err);
				var list = [];
				results.forEach(function(element) {
					list.push(element.message);
				});
				list = JSON.stringify(list);
				res.send(list);
			});
		} else {
			res.send('Error with GET')
		}
	});
};