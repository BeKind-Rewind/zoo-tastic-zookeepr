const path = require('path');
const router = require('express').Router();

// serve the index.html
router.get('/', (req, res) => {    
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// serve the animals.html
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

// serve the zookeepers.html
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

// adding a catch-all for non-existent page requests
router.get('*', (req, res) => {
    // Order of routes matters: the * route should always come last, otherwise, will take precedence over named routes
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;