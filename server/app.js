const express = require("express");
const app = express();


app.use(express.json());
app.use('/api/users',require('./routes/api/users'));
app.use('/api/soldiers',require('./routes/api/soldiers'));
app.use('/api/platoon', require('./routes/api/platoon'));
app.use('/api/class', require('./routes/api/class'));

module.exports = app ;