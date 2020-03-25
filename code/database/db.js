const mysql = require('mysql');
const express = require('express');
const router = express.Router();

// replace user and password with yours
const con = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'ashma', //change this
  password: 'password123', //change this
  database: 'smartkart' //make sure your sql database name is this or change it
});

con.getConnection((err) => {
  if(err){
    console.log('Error');
    return;
  }
  console.log('Connected to db!');
});

router.get('/', (req, res, next) => {
  res.render('');
})

//checks from Customer table
con.query('SELECT username AS user, password AS pass FROM Customer', function (error, results, fields) {
  if (error) throw error;
  else{
  router.post('/login', (req, res, next) => {
    console.log('checking Customer db');
    //console.log('The correct username and password is: ', results[0].user, ', ' ,results[0].pass);
    console.log('before checking');
    var usernameInput = req.body.username;
    console.log('user input: ' + usernameInput);
    var passwordInput = req.body.password;
    console.log('password input by user: ' + passwordInput);
    for(var b = 0; b < results.length; b++){
      if(usernameInput == results[b].user && passwordInput == results[b].pass){
        console.log('you entered the right credentials');
        res.send("you've logged in successfully!");
      } 
    }
    res.send("error - annot find user in Customer db");
    res.end();
    });
  }
});

//var tables = ['Admin', 'CustomerService', 'Customer'];
//console.log(tables[0]);

//checks from Admin table
//for(var i = 0; i < tables.length; i++){
  //console.log('SELECT username AS user, password AS pass FROM ' + tables[i]);
con.query('SELECT username AS user, password AS pass FROM Admin', function (error, results, fields) {
  if (error) throw error;
  router.post('/login', (req, res, next) => {
    console.log('checking Admin db');
    //console.log('The correct username and password is: ', results[0].user, ', ' ,results[0].pass);
    console.log('before checking');
    var usernameInput = req.body.username;
    console.log('user input: ' + usernameInput);
    var passwordInput = req.body.password;
    console.log('password input by user: ' + passwordInput);
    for(var a = 0; a < results.length; a++){
      if(usernameInput == results[a].user && passwordInput == results[a].pass){
          console.log('you entered the right credentials');
          //window.location.href = "AdminPage.html";
          res.send("you've logged in as Admin!");
          }
      }
      res.send('error - cannot find user in Admin db');
      res.end();
  });
});

////checks from CustomerService table
con.query('SELECT username AS user, password AS pass FROM CustomerService', function (error, results, fields) {
  if (error) throw error;
  router.post('/login', (req, res, next) => {
    console.log('before checking');
    var usernameInput = req.body.username;
    console.log('user input: ' + usernameInput);
    var passwordInput = req.body.password;
    console.log('password input by user: ' + passwordInput);
    for(var i = 0; i < results.length; i++){
      //console.log('The correct username and password is: ', results[i].user, ', ' ,results[i].pass);
      if(usernameInput == results[i].user && passwordInput == results[i].pass){
          console.log('you entered the right credentials');
          res.send("you've logged in successfully!");
          }
      }
      res.send("error - annot find user in CustomerService db");
      res.end();
    });
});


module.exports = router;

/*

username = 'tomHolland';
con.query(
    'SELECT username, password FROM customer WHERE username = ?',
    [username],
    (err, rows) => {
      if(err) throw err;
      console.log(rows[0]);
    }
  );

con.end((err) => {});
*/