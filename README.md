## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. with nodemon so any changes in project can directly reflect just by saving the file. -Server Stated-, localhost:1337

### `end points`

[GET] localhost:1337/smallbusiness/ping to test if api is up and running [GET] localhost:1337/smallbusiness/getallproduct get the list of products [POST] localhost:1337/smallbusiness/saveorder save
order

### `project details`

node base rest api to serve smallbusiness webapp. for now this is not connecting to any data base to store and retrieve and data. instead, its using json file to serve "get products listing" requests.
save order is also validating backend business logic but and saving object actually. Although Services are there in the project where database related work will be done

### `improvements`

DB implementation Auth implementation for secure api request compression and caching many more...
