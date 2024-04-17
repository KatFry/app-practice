// declare a const authController assigned to an empty object 
const authController = {};
// require Message from the messageModel 
const Message = require('../models/messageModel.js');

// implement setCookie middleware that comes after a successful post request 
authController.setCookie = async (req, res,  next) => {
  // destructure the password as the req.body

  // within the try block....
  try {
    // assign the cookie a key of pass and a value of the passed-in password 

    // invoke and return next

  // within the catch block...
  } catch {
    // invoke the global error handler, with log, status and message properties 

  }
};



// export the authController
module.exports = authController;