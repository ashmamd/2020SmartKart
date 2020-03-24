const mysql = require('mysql');

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