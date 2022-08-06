const express = require('express');
// create a route that the front-end can request data from
const { animals } = require('./data/animals');

// instantiate the server
const app = express();

function filterByQuery(query, animalsArray) {
    let filteredResults = animalsArray;
    if (query.diet) {
      filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
      filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
      filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
  }


// to ADD the route referenced above:
app.get('/api/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
        res.json(results);
});

// chain the listen() method onto our new server
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });

