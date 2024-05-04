const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test', {
  useNewUrlParser: true,
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'connection error:'));

// Bind connection to open event (to get notification of connection success)
db.once('open', function() {
  console.log("Connected to MongoDB database");
});
