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
          const deleteButton = document.createElement('button');
          // setAttributes of button ('class', 'del') and textContent of 'Delete'
          deleteButton.setAttribute('class', 'del');
          deleteButton.textContent = 'Delete';
          // append the deleteButton to the listItem and the listItem to the messageList
          listItem.appendChild(deleteButton);
          messageList.appendChild(listItem);
          // add deleteButton eventListener functionality ( on click)
          deleteButton.addEventListener('click', async () => {
            // console log 'delete button clicked for id: ', message._id for testing
            console.log('delete button clicked for id: ', message._id);
            // invoke deleteMessage, passing in the id 
            deleteMessage(message._id);
            // assign listItem to the getElementById method, passing in message._id
            const listItem = document.getElementById(message._id);
            // if the listItem exists,
            if (listItem) {
              // remove it
              listItem.remove();
              // log 'list item removed from the DOM'
              console.log('list item removed from the DOM.');
            }
          });
        }
      });
  
    // within the catch block...
    } catch (err) {
      // log 'error occurred in getMessages' and the error 
      console.log('error occurred in getMessages', err);
    }
  };

  // declare a const saveButton assigned to using querySelector to find the id of save 
  const saveButton = document.querySelector('#save');
  // add an event listener to the saveButton functionality (on click)
  saveButton.addEventListener('click', async(e) => {
    // add in e.preventDefault() - look up what this does 
    e.preventDefault();
    // declare a const password assigned to using querySelector to find the id of pass and its value
    const password = document.querySelector('#pass').value;
    // declare a const newMessage assigned to using querySelector to find the id of desc and its value 
    const newMessage = document.querySelector('#desc').value;
    // if either the password or newMessage are empty fields, return 
    if (password === '' || newMessage === '') return;
    // declare a const msg assigned to passing in message and password 
    const msg = { message: newMessage, password: password };
    // use a try/catch block to save the message 
    try {
      // declare a const response assigned to awaiting the fetch to /messages
      const response = await fetch('/messages', {
        // method is POST request
        method: 'POST',
        // headers are Content-type. application/json
        headers: {
          'Content-Type': 'application/json',
        },
        // body is JSON.stringify the msg 
        body: JSON.stringify(msg),
      });
      // declare a const data assigned to awaiting the response converted to json 
      const data = await response.json();
      // invoke getMessages 
      getMessages();
      // reassign values of pass and desc to empty strings 
      document.querySelector('#pass').value = '';
      document.querySelector('#desc').value = '';
      // in the catch block...
    } catch (err) {
      // console log the error 
      console.log('error in save message functionality', err);
    }
  });
  // declare an async function deleteMessage that takes the id 
  const deleteMessage = async (id) => {
    // log 'invoking deleteMessage function with id:', id 
    console.log('invoking deleteMessage function with id:', id);
    // try catch block
    try {
      // declare a const response assigned to awaiting a fetch to /messages/${id}
      const response = await fetch(`/messages/${id}`, {
        // method is 'DELETE'
        method: 'DELETE',
        // headers are Content-type application/json
        headers: {
          'Content-Type': 'application/json',
        }
      });
      // if the response is ok, invoke getMessages 
      if (response.ok) getMessages();
    } catch (err) {
      // log the error 
      console.log('error in deleteMessage functionality', err);
    }
  };

  // invoke getMessages
  getMessages();
  // declare a setInterval, passing in getMessages and 2000 for every 2 seconds 
  setInterval(async () => {
    await getMessages();
  }, 2000);
});