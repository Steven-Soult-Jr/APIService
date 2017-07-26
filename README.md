# APIService

This is a simple twitter-like service, prototyped with Node.js and an SQLite3 database. It should run on any machine with [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed. npm might need to install the following dependencies:
  ```
	npm install nodemon node-pre-gyp sqlite3
  ```
  The service can be started with 
  ```
  npm run start
  ```
  Or, if working on development, you can use 
  ```
  npm run dev
  ```
  to start the service with nodemon, which will automatically restart the service if changes are made to the source files on disk.
  
I used [Postman](https://www.getpostman.com/) to test the API. The services runs on localhost:8000 by default, this can be changed in [index.js](index.js), line 9. [Here is an example test](http://i.imgur.com/GHFVdVr.png).

The majority of the code can be found in [routes.js](/app/routes/routes.js)

## APIs:

### Create user
Create user john@marketo.com:
```
POST /user/
  
request body: { "username": "john@marketo.com", "firstName": "John", "lastName": "Doe" }
```
### Follow User
John follows Jane (jane@marketo.com):
```
POST /user/follow

request body: { "username": "john@marketo.com", "followname": "jane@marketo.com" }
```
*Note*
Since I am creating a login-free API, I included the username of the follower, in addition to the followee.

### Get Followers
Get Jane's Followers (Up to 10):
```
GET /user/followers?username=jane@marketo.com

example response body: { "john@marketo.com", "bob@marketo.com", "bill@marketo.com" }
```
### Post tweet
John post tweet:
```
POST /user/tweet

request body: { "username": "john@marketo.com", "message": "hi followers, check this out www.marketo.com!"}
```
### Get user tweets
Get John's tweets (Up to 10):
 ```
GET /user/tweets?username=john@marketo.com

example response body: { "good morning everyone!", "today i'm going to the beach", "a random useless life observation" } 
```


#### Files in [node_modules](/node_modules) are owned by their respective creators, all license information is located within.
