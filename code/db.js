const mysql = require('mysql');
//const util = require('util');

// replace user and password with yours
const con = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'ashma',
  password: 'password123',
  database: 'smartkart'
});

con.getConnection((err) => {
  if(err){
    console.log('Error');
    return;
  }
  console.log('Connected to db!');
});

/*
username = 'tomHolland';
con.query(
    'SELECT username, password FROM customer WHERE username = ?',
    [username],
    (err, rows) => {
      if(err) throw err;
      console.log(rows);
    }
  );
  
con.end((err) => {});
*/