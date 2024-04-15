// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI = 'mongodb+srv://katgfry:GN5wDLrRPtOTNkGI@cluster0.pi0wg1d.mongodb.net/';

// UNCOMMENT THE LINE BELOW IF USING MONGO
const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// const URI = process.env.PG_URI || myURI;

// require mongoose, assign schema, and connect to database 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose
  .connect(myURI)
  .then(() => console.log('connected to db'))
  .catch((err) => console.log('error connecting to db', err)); 

const messagesSchema = new Schema({
  // properties are message, password, and created_at
  message: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  }
});

// export the model below
module.exports = mongoose.model('Message', messagesSchema); // <-- export your model
