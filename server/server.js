const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

const PORT = 3434;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

// serve the index.html file when you go to http://localhost:3434/ in the browser 
// to do this, use express.static and the dirname, going into the views folder 
app.use(express.static(path.join(__dirname, '../views')));

// serve the entire folder assets folder to serve both CSS and JS files
app.use(express.static(path.join(__dirname, '../assets')));

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;