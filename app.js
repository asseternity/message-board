// imports
const express = require('express');
const path = require("node:path");
const indexRoute = require('./routes/indexRoute');
const newRoute = require('./routes/newRoute');

// create app
const app = express();

// setting up ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// path for serving static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// app level Express middleware called express.urlencoded() to parse the form data into req.body
app.use(express.urlencoded({ extended: true }));

// final error collector
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).send(err.message);
});

// mount routes
app.use('/', indexRoute);
app.use('/new', newRoute);

// activating the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Message board active and listening on port: ${PORT}!`) });

// testing non-db
app.get('/', (req, res) => {
    res.render('test');
})

// testing db
// const db = require('./db/queries');
// async function testDB() {
//     const messages = await db.getAllMessages();
//     console.log(messages);
// }

// testDB();