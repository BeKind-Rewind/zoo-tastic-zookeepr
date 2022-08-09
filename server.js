const express = require('express');
const fs = require('fs');
const path = require('path');
// create a route that the front-end can request data from
const { animals } = require('./data/animals');

// setting envar for port in case one is set; if not then use 3001
const PORT = process.env.PORT || 3001;

// instantiate the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// middleware that directs server where to find the public files. Means that all the front-end code 
// can now be accessed (in public folder) without having a specific server endpoint created for it
app.use(express.static('public'));





// chain the listen() method onto our new server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

