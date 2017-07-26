# Simple Twitter Service

Build a simple twitter like service, that exposes the APIs listed below.

Provide a link to github that includes your solution's source code and a README explaining how to run the service locally. 

If possible, also host your service (AWS, DigitalOcean, OPenShift, etc) so we can query the API from anywhere. 

## APIs:

### Create user
Create user john@marketo.com
    
      POST /user/

      request body: { "username": "john@marketo.com", "firstName": "john", "lastName": "doe" }

### Follow User
John follows Jane (jane@marketo.com)

      POST /user/follow

      request body: { "username":"jane@marketo.com" }

### Get Followers
Get Jane Followers

      GET /user/followers?username=jane@marketo.com

      example response body: { "john@marketo.com", "bob@marketo.com", "bill@marketo.com" }

### Post tweet
John post tweet:

      POST /user/tweet

      request body: { "username": "john@marketo.com", "message": "hi followers, check this out www.marketo.com!"}

### Get user tweets
Get John tweets:
 
      GET /user/tweets?username=john@marketo.com

      example response body: { "good morning everyone!" "today i'm going to the beach" "a random useless life observation" } 
