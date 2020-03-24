const express = require('express');
const path = require('path');
const app = express();
const pageRouter = require('./routes/pages');


app.use(express.urlencoded( { extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.static(__dirname, 'public'));


app.listen(3000, () =>{
  console.log("running on local host port 3000");
});


app.use('/', pageRouter);
