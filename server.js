const express = require('express');

// setting envar for port in case one is set; if not then use 3001
const PORT = process.env.PORT || 3001;
// instantiate the server
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// middleware that directs server where to find the public files. Means that all the front-end code 
// can now be accessed (in public folder) without having a specific server endpoint created for it
app.use(express.static('public'));

// Tell the server any time a client navigates to <ourhost>/api, the app will use the router we set up in apiRoutes. 
// If '/' is the endpoint, then the router will serve back our HTML routes.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// chain the listen() method onto our new server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

