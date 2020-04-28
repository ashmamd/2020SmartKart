const mysql = require('mysql');
const express = require('express');
const router = express.Router();
let loggedIn;
// replace user and password with yours
const con = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'ashma', //change this
  password: 'password123', //change this
  database: 'smartkart' //make sure your sql database name is this or change it
});

// const con = mysql.createPool({
//   connectionLimit: 10,
//   host: 'localhost',
//   user: 'root', //change this
//   password: 'root', //change this
//   database: 'smartkart' //make sure your sql database name is this or change it
// });

con.getConnection((err) => {
  if(err){
    console.log('Error', err);
    return;
  }
  console.log('Connected to db!');
});

router.get('/', (req, res, next) => {
  res.render('');
})

function createAcc(body, callback){
  var bind = [];
  console.log('inside createAcc func');
  for(prop in body){
    bind.push(body[prop]);
  }
  var sql = 'INSERT INTO Customer(FName, LName, email, pass) VALUES (?, ?, ?, ?)';
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
      pass: req.body.psw,
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

var tables = ['Admin', 'Customer', 'CustomerService'];
//checks from all the tables
router.post('/login', (req, res, next) => {
    //console.log(iterations);
    //con.query('SELECT * FROM Customer WHERE email = ' + con.escape(req.body.email) + ' UNION SELECT * FROM CustomerService WHERE email = ' + con.escape(req.body.email) + ' UNION SELECT * FROM Admin WHERE email = ' + con.escape(req.body.email), function (error, results, fields){
    //con.query('SELECT * FROM Admin, Customer, CustomerService WHERE Admin.email = ' + con.escape(req.body.email) + ' OR Customer.email = ' + con.escape(req.body.email) + ' OR CustomerService.email = ' + con.escape(req.body.email), function (error, results, fields){
      con.query('SELECT org, email, pass FROM Admin UNION SELECT org, email, pass FROM CustomerService UNION SELECT org, email, pass FROM Customer', function (error, results, fields){
      console.log("results:", results);
        if (error) throw error;
      if (results.length) {
        const person = results.filter(user => {
          if (req.body.email === user.email) {
            return user;
          }
        })[0];
        if (person) {
      console.log("person: ", person);
      console.log("person org: ", person.org);
      var iterations = person.org;
      console.log('inside con.query... ');
      console.log(iterations);
      var userInput = req.body.email;
      console.log('user input: ' + userInput);
      var passwordInput = req.body.password;
      console.log('password input by user: ' + passwordInput);  
      //for(var a = 0; a < results.length; a++){
        if(userInput == person.email && passwordInput == person.pass){
          console.log('you entered the right credentials');
          if (iterations == 'admin'){
            loggedIn = true;
            res.status(200).redirect('AdminPage.html');
          }else if (iterations == 'customerservice'){
            loggedIn = true;
            res.status(200).redirect('customerServiceEng.html');
          }else if (iterations == 'customer'){
            loggedIn = true;
            res.status(200).redirect('mainPageUserEng.html');
          }
        }
        else {
          loggedIn = false;
          console.log("Invalid Credentials!");
          res.status(404).redirect('customerProfileEng.html');
        }
      }else {
        loggedIn = false;
        res.status(404).redirect('customerProfileEng.html');
      }
    }
    else {
      loggedIn = false;
      console.log("Invalid Credentials!");
      res.status(404).redirect('customerProfileEng.html');
    }
    });
});

router.get("/data", (req, res, next) => {
  if (loggedIn === false){
  res.json({loggedIn})
  loggedIn = true;
  }
});

module.exports = router;