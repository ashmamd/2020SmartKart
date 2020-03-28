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
con.query('SELECT email AS user, password AS pass FROM Customer', function (error, results, fields) {
  if (error) throw error;
  else{
  router.post('/login', (req, res, next) => {
    console.log('checking Customer db');
    //console.log('The correct username and password is: ', results[0].user, ', ' ,results[0].pass);
    console.log('before checking');
    var emailInput = req.body.username;
    console.log('user input: ' + emailInput);
    var passwordInput = req.body.password;
    console.log('password input by user: ' + passwordInput);
    for(var b = 0; b < results.length; b++){
      if(emailInput == results[b].user && passwordInput == results[b].pass){
        console.log('you entered the right credentials');
        res.redirect('mainPageUserEng.html');
      } 
    }
    res.send("error - cannot find user in Customer db");
    res.end();
    });
  }
});

function createAcc(body, callback){
  var bind = [];
  console.log('inside createAcc func');
  for(prop in body){
    bind.push(body[prop]);
  }
  var sql = 'INSERT INTO Customer(FName, LName, email, password) VALUES (?, ?, ?, ?)';
  con.query(sql, bind, function(err, result) {
      if(err) throw err;
      // return last inserted id
      callback(result.insertId);
  });
}

router.post('/sign-in', (req, res, next) => {
  //console.log('inside sign in router post');
  let userInput = {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: req.body.psw,
  };
  createAcc(userInput, function(lastId) {
      if(lastId) {
        //once created an account, redirecting to profile login page
        res.redirect('customerProfileEng.html');
        //checking if new user is inserted in the database
        con.query(
          'SELECT * FROM customer',
          (err, rows) => {
          if(err) throw err;
          console.log(rows);
          }
        );
        console.log('')
      }else {
          console.log('Error creating a new user ...');
      }
  });

});

/*

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
      res.send("error - cannot find user in CustomerService db");
      res.end();
    });
});

*/

module.exports = router;