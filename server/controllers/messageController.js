// require the message model from the correct file
const Message = require('../models/messageModel.js');


// create these middleware functions as async functions using try and catch blocks!

module.exports = {
  // add postMessage middleware to create a new item in the database
  postMessage: async (req, res, next) => {
    // within the try block...

      // destructure the req.body to be the message and the password based on the model 

      // declare a const createdMessage assigned to using the .create method on Message

      // assign a property createdMessage to res.locals 

      // invoke and return next before moving to the next middleware function 
    
    // within the catch block...

      // invoke the global error handler

  },

  // add getMessages middleware to retrieve all items from the database and send them back as JSON
  getMessages: async (req, res, next) => {
    // within the try block...

    
  },

  // add deleteMessage middleware to find items in database based on ID number and delete message if it exists
  deleteMessage: async (req, res, next) => {

  },
};
