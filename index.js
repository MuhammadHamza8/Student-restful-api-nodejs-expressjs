const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();
app.use(express.json());

//database connection 
require('./env/connection');




app.use('/api', routes);


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})