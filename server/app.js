const express = require("express");
const app = express();


app.use(express.json());
app.use('/api/users',require('./routes/api/users'));
app.use('/api/soldiers',require('./routes/api/soldiers'));

module.exports = app ;