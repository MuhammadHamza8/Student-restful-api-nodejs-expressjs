const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const teachers = require('./routes/teachers');
const subjects = require('./routes/subjects');

const app = express();
app.use(express.json());

//database connection 
require('./env/connection');



//routes 
app.use('/api', routes);
app.use('/api/teacher', teachers);
app.use('/api/subjects', subjects);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})