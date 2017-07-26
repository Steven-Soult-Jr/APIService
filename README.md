# APIService

This is a simple twitter-like service, prototyped with Node.js and an SQLite3 database. It should run on any machine with [node.js](https://nodejs.org/en/) installed (tested on windows). Both of the following commands should work from inside the unzipped folder (dev uses nodemon):
  ```
  npm run dev
  
  npm run start
  ```
  
I used [Postman](https://www.getpostman.com/) to test the API. The services runs on localhost:8000 by default, this can be changed in [index.js](index.js), line 9.

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
