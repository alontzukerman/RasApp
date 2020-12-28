const express = require("express");
const app = express();
const {authenticateToken} = require("./authFunction");
// const jwt = require("jsonwebtoken");
let proxy = require('http-proxy-middleware');
const path = require('path');

// app.use(proxy('/login', {target: 'http://localhost:4000/login'}))
app.use(express.static("../client/build"))
app.use(express.json());
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/users',authenticateToken, require('./routes/api/users'));
app.use('/api/soldiers',authenticateToken,require('./routes/api/soldiers'));
app.use('/api/platoons',authenticateToken,require('./routes/api/platoons'));
app.use('/api/classes',authenticateToken, require('./routes/api/classes'));
app.use('/api/certifications',authenticateToken, require('./routes/api/certifications'));
app.use('/api/exams',authenticateToken, require('./routes/api/exams'));
app.use('/api/ptors',authenticateToken, require('./routes/api/ptors'));
app.use('/api/classes',authenticateToken, require('./routes/api/classes'));
app.use('/api/notes',authenticateToken, require('./routes/api/notes'));
app.use('/api/missings',authenticateToken, require('./routes/api/missings'));
app.use('/api/equipments',authenticateToken, require('./routes/api/equipments'));
app.use('/api/calendar',authenticateToken, require('./routes/api/calendar'));
app.use('/api/calendar',authenticateToken, require('./routes/api/calendar'));
app.use('/api/ranks',authenticateToken, require('./routes/api/ranks'));
app.use('/api/pakals',authenticateToken, require('./routes/api/pakals'));

app.get("*",(req, res) => {
    res.sendFile(path.resolve(__dirname,"../client/build","index.html"))
})


module.exports = app ;