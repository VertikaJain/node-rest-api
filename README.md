# Vanilla NodeJS REST API

- REST APIs functionality using Vanilla NodeJS (without the easier option - Express)
- Since we cannot use `req.body` like in case of Express, I have used `req.on()` and `req.end()` events.
- Use of Regular Expressions and split() to detect type of method to be used from the URL.
- DB functionalities done using array built-in methods:
        1. find()
        2. push()
        3. findIndex()
        4. filter()
- Utility file for updating DB (json file in this project) using fs.writeFileSync().

## Status Codes
- 200 is for OK
- 201 is for Create
- 300 is for Redirect
- 400 is Bad Request
- 404 is Not Found
- 500 is for Server Errors

## HTTP Methods used
- GET
- POST
- PUT
- DELETE

## 3rd Party Libraries
- nodemon
- uuid
