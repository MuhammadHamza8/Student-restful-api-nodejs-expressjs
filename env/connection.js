// To connect with your mongoDB database
const mongoose = require('mongoose');
// Connecting to database
mongoose.connect(
    "mongodb://localhost:27017/",
    {
      dbName: "student",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) =>
      err ? console.log(err) : console.log(
        "Connected to yourDB-name database")
  );