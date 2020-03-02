# API Test Framework

### Description

This framework it was develop to validate request and contracts. 

### Prerequisite

- Install Node.js
- Install npm

### Project Source Three 

```
├── cypress
│   ├── fixtures
│   ├── integration
│   │   ├── pokemon
│   │   ├── reqres
│   │   ├── schema
│   ├── plugins
│   ├── support
│   │   ├── config
├── node_modules
├── .gitignore
├── cypress.json
├── package.json
├── README.md


```

### Runner Test

First of all, you need to give this command line, for install all necessary packages

```
    npm install 
```
In the root folder, set this command to open cypress and run test.

```
    npx cypress open
```

### Write script 

For write another script do you need to do that inside of integration folder, because cypress run test inside that. 


### References

- Validate Schema https://github.com/thlorenz/spok

### Envolve

Priscila de Araujo Caimi - paraujocaimi@gmail.com
