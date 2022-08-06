const express = require('express');
// create a route that the front-end can request data from
const { animals } = require('./data/animals');

// instantiate the server
const app = express();


// to ADD the route referenced above:
app.get('/api/animals', (req, res) => {
    res.send('Hello!');
});

// chain the listen() method onto our new server
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });

