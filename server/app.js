const express = require("express");
const app = express();


app.use(express.json());
app.use('/api/users',require('./routes/api/users'));
app.use('/api/soldiers',require('./routes/api/soldiers'));
app.use('/api/platoons', require('./routes/api/platoons'));
app.use('/api/classes', require('./routes/api/classes'));

module.exports = app ;