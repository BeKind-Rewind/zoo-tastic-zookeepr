const router = require('express').Router();
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals');

// to ADD the route referenced above:
router.get('/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
        res.json(results);
});

router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result);
      } else {
        res.send(404);
      }
  });

// req.query is multifaceted, often combining multiple parameters, whereas req.
// param is specific to a single property, often intended to retrieve a single record.



router.post('/api/animals', (req, res) => {
    // req.body is where our incoming content will be
    // generate the id value on the server (the server can see all of the data so there are no duplicates)
    // in this case, we are telling to generate +1 to the highest id since the array is marked in order
    req.body.id = animals.length.toString();
    // warning: this method works unless data is removed from the array

    // if any data is req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    } else {
        // add animal to json file and animals array in this function
        const animal = createNewAnimal(req.body, animals);
        res.json(animal);
    }
  });

module.exports  = router;