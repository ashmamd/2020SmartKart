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

//user login
con.query('SELECT username AS user, password AS pass FROM Customer', function (error, results, fields) {
  if (error) throw error;
  console.log('The username and password is: ', results[1].user, ', ' ,results[1].pass);
  router.post('/login', (req, res, next) => {
    console.log('before checking');
    var usernameInput = req.body.username;
    console.log('user input: ' + usernameInput);
    var passwordInput = req.body.password;
    console.log('password input by user: ' + passwordInput);
    if(usernameInput == results[1].user && passwordInput == results[1].pass)
      console.log('you entered the right credentials');
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