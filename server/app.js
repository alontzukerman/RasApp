const express = require("express");
const app = express();


app.use(express.json());
app.use('/api/users',require('./routes/api/users'));
app.use('/api/soldiers',require('./routes/api/soldiers'));
app.use('/api/platoons', require('./routes/api/platoons'));
app.use('/api/classes', require('./routes/api/classes'));
app.use('/api/certifications', require('./routes/api/certifications'));
app.use('/api/exams', require('./routes/api/exams'));
app.use('/api/ptors', require('./routes/api/ptors'));
app.use('/api/classes', require('./routes/api/classes'));
app.use('/api/notes', require('./routes/api/notes'));




module.exports = app ;