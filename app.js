// imports
const express = require('express');
const path = require("node:path");
const indexRoute = require('./routes/indexRoute')

// create app
const app = express();

// setting up ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// mount route
app.use('/', indexRoute);

// activating the server
const PORT = 3000;
app.listen(PORT, () => { console.log(`Message board active and listening on port: ${PORT}!`) });