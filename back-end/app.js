const express = require('express');
const fs = require('fs');
let db = require('./models');
const app = express();

PORT = process.env.PORT || 8080;

app.use(express.static('../front-end/build'));
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.listen(PORT, (req, res) => {
    console.log(`server started on port ${PORT} ...`);
});
