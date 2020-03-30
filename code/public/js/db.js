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

var tables = ['Admin', 'Customer', 'CustomerService'];
//checks from all the tables
router.post('/login', (req, res, next) => {
  for(var i = 0; i < tables.length; i++){
    var iterations = tables[i];
    //console.log(iterations);
    con.query('SELECT email AS userEmail, password AS pass FROM ?? ', [iterations], function (error, results, fields) {
      if (error) throw error;
      console.log('inside con.query... ');
      console.log(iterations);
      var userInput = req.body.email;
      console.log('user input: ' + userInput);
      var passwordInput = req.body.password;
      console.log('password input by user: ' + passwordInput);
      for(var a = 0; a < results.length; a++){
        if(userInput == results[a].userEmail && passwordInput == results[a].pass){
          console.log('you entered the right credentials');
          if (iterations == 'Admin'){
            res.redirect('AdminPage.html');
            res.end();
          }else if (iterations == 'CustomerService'){
            res.redirect('customerServiceEng.html');
            res.end();
          }else if (iterations == 'Customer'){
            res.redirect('mainPageUserEng.html');
            res.end();
          }
        }
       //res.end();
      }
    });
  }
});

module.exports = router;