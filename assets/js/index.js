// add an eventListener for after the DOM content loads 
document.addEventListener('DOMContentLoaded', () => {
  // declare getMessages as an async function using try and catch blocks and fetch 
  const getMessages = async () => {
    // within the try block...
    try {
      // declare a const response assigned to awaiting fetch to /messages (default is GET request)
      const response = await fetch('/messages');
      // declare a const receivedMessages assigned to awaiting the response converted to json
      const receivedMessages = await response.json();
      // if the response is not ok, throw a new Error 'response error'
      if (!response.ok) throw new Error('response error in getMessages');
      // declare a const messageList assigned to using the querySelector method on the document for message-list id
      const messageList = document.querySelector('#message-list');
      // loop over the receivedMessages using a forEach 
      receivedMessages.forEach((message) => {
        // if there is NOT an HTML element withthe _id prop on message
        if (!document.getElementById(message._id)) {
          // if not, create a 'li' item for that message (assigned to const listItem)
          const listItem = document.createElement('li');
          // assign textContent in each listItem to the message (use message.message)
          listItem.textContent = message.message;
          // give each listItem an id property assigned to message id 
          listItem.id = message._id;

          // add a deleteButton property assigned to creating a 'button' element 
          
          // setAttributes of button ('class', 'del') and textContent of 'Delete'

          // append the deleteButtonto the listItem and the listItem to the messageList

          // add deleteButton eventListener functionality ( on click)

            // console log 'delete button clicked for id: ', message._id for testing

            // invoke deleteMessage, passing in the id 

            // assign listItem to the getElementById method, passing in message._id

            // if the listItem exists,

              // remove it

              // log 'list item removed from the DOM'
        }
        
      })
        
    // within the catch block...
    } catch (err) {
      // log 'error occurred in getMessages' and the error 
    }

    // declare a const saveButton assigned to using querySelector to find the id of save 

    // add an event listener to the saveButton functionality (on click)

      // add in e.preventDefault() - look up what this does 

      // declare a const password assigned to using querySelector to find the id of pass and its value

      // declare a const newMessage assigned to using querySelector to find the id of desc and its value 

      // if either the password or newMessage are empty fields, return 

      // declare a const msg assigned to passing in message and password 

      // use a try/catch block to save the message 

        // declare a const response assigned to awaiting the fetch to /messages

          // method is POST request

          // headers are Content-type. application/json

          // body is JSON.stringify the msg 

        // declare a const data assigned to awaiting the response converted to json 

        // invoke getMessages 

        // reassign values of pass and desc to empty strings 
      
      // in the catch block...

        // console log the error 

    // declare an async function deleteMessage that takes the id 

      // log 'invoking deleteMessage function with id:', id 

      // try catch block

        // declare a const response assigned to awaiting a fetch to /messages/${id}

          // method is 'DELETE'

          // headers are Content-type application/json

        // if the response is ok, invoke getMessages 

      // catch the error

        // log the error 
  
  };
  
  // invoke getMessages

  // declare a setInterval, passing in getMessages and 2000 for every 2 seconds 

});