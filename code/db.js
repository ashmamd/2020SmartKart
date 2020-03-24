const mysql = require('mysql');

// replace user and password with yours
const con = mysql.createConnection({
  host: 'localhost',
  user: 'ashma',
  password: 'password123',
  database: 'smartkart'
});

con.connect((err) => {
  if(err){
    console.log('Error');
    return;
  }
  console.log('Connected!');
});

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

