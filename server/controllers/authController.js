// declare a const authController assigned to an empty object 
const authController = {};
// require Message from the messageModel 
const Message = require('../models/messageModel.js');

// implement setCookie middleware that comes after a successful post request 
authController.setCookie = async (req, res,  next) => {
  // destructure the password as the req.body
  const { password } = req.body;
  // within the try block....
  try {
    // assign the cookie a key of pass and a value of the passed-in password 
    res.cookie('pass', password);
    // invoke and return next
    return next();
  // within the catch block...
  } catch {
    // invoke the global error handler, with log, status and message properties 
    return next({
      log: 'An error occurred in authController.setCookie middleware',
      status: 400,
      message: { err: 'An error occurred during authentication' },
    });
  }
};

// implement checkCookie middleware that comes after a user deletes a message
authController.setCookie = async (req, res, next) => {
  // destructure password to be req.cookies and id to be req.params

  // if no password is given, return a 400 error and 'password required' message

  // within try block...
  try {
    // declare a const message assigned to awaiting finding the message by its id 

    // if the message's password doesn't match passed-in password, return an error 'invalid credentials'

    // invoke and return next otherwise 

  } catch {
    // 
  }
};



// export the authController
module.exports = authController;