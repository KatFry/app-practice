// require the message model from the correct file
const Message = require('../models/messageModel.js');


// create these middleware functions as async functions using try and catch blocks!

module.exports = {
  // add postMessage middleware to create a new item in the database
  postMessage: async (req, res, next) => {
    // within the try block...
    try {
      // destructure the req.body to be the message and the password based on the model 
      const { message, password } = req.body;
      // declare a const createdMessage assigned to using the .create method on Message
      const createdMessage = await Message.create({ message, password });
      // assign a property createdMessage to res.locals 
      res.locals.createdMessage = createdMessage;
      // invoke and return next before moving to the next middleware function 
      return next();
    // within the catch block...
    } catch {
      // invoke the global error handler with log, status and message properties
      return next({
        log: 'Error occurred in messageController.postMessage middlware',
        status: 500,
        message: { err: 'unable to create message' },
      });
    }
  },

  // add getMessages middleware to retrieve all items from the database and send them back as JSON
  getMessages: async (req, res, next) => {
    // within the try block...
    try {
      // use .find method on Message to retrieve all the messages from the database 
      // the .find part can be empty because you're retrieving all the messages, not just one
      const messages = await Message.find({});
      // assign messages as a property on res.locals
      res.locals.messages = messages;
      // invoke and return next
      return next();
    // within the catch block...
    } catch {
      // invoke the global error handler with log, status and message properties 
      return next({
        log: 'Error occurred in messageController.getMessages middleware',
        status: 400,
        message: { err: 'An error occurred while trying to get messages' },
      });
    }
  },

  // add deleteMessage middleware to find items in database based on ID number and delete message if it exists
  deleteMessage: async (req, res, next) => {
    // declare const {id} assigned to req.params (this would look like localhost:3000/messages/123 (id at the end))
    const { id } = req.params;
    // within the try block...
    try {
      // declare a const deletedMessage assigned to await findByIdAndDelete, passing in id 
      const deletedMessage = await Message.findByIdAndDelete(id);
      // assign the deleted message as a propety on res.locals (messageDeleted: true and the message)
      res.locals.deletedMessage = {
        messageDeleted: true,
        thisIsDeletedMessage: deletedMessage,
      };
      // invoke and return next 
      return next();
    // within the catch block...
    } catch {
      // invoke the global error handler with log, status and message properties 
      return next({
        log: 'Error occurred in messageController.deleteMessage middleware',
        status: 400,
        message: { err: 'An error occurred while trying to delete a message' },
      });
    }
  },
};
