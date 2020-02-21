API Test Framework 

## Pre requisitos 

- Install Node.js
- Install npm
- Install json-server 



## Setting up the Project 

First of all, do you need to install json-server 

```
    npm install -g json-server
```

After that need to create ```db.json``` for initialize the date, like the exemple file. 

Now in file ```cypress.json```, is necessary put the localhost for start the server , and after that use the command line to up the server

To start **JSON server**, use the command line 

```
    json-server --watch db.json
```


## Runner Test

Inside of the cypress folder, run this command line

```
    npx cypress open
```

## Routes

 ### Home

 ```
   http://localhost:3000
```

 ### Resources

```
    http://localhost:3000/characters
    http://localhost:3000/students
    http://localhost:3000/staff
    http://localhost:3000/gryffindor
```

## References

The Api data was take for https://hp-api.herokuapp.com/ 

Any other exemples can acess the reference page https://github.com/typicode/json-server 