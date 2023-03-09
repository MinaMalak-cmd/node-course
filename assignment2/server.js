const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("Hello from first page!");
  next(); // next function allows running next middleware
});
app.use((req, res, next) => {
    console.log("Hello from secondcd  page!");
    next(); // next function allows running next middleware
});
app.use('/users',(req, res, next) => {
  res.end('<h1>Hello from users page</h1>');
});
app.use('/',(req, res, next) => {
  res.end('<h1>Hello from normal page</h1>');
});
app.listen(3006); 