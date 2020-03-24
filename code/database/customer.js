const db = require('./db');
const bcrypt = require('bcrypt');

function Customer(){};

Customer.prototype = {
    // finding if user exists in database when logging in
    login : function(username, password, callback){
        this.find(username, function(user) {
            if(user) { //if the user exists
                //checking password with user input
                if(bcrypt.compareSync(password, user.password)) {
                    callback(user);
                    return;
                }  
            }
            // if the username/password is wrong then null
            callback(null);
        });
    },
    //creating INSERT query
    create : function(body, callback) 
    {
        var pwd = body.password;
        // Hashing password
        body.password = bcrypt.hashSync(pwd,10);
        var bind = []; //???
        for(prop in body){
            bind.push(body[prop]);
        }
        let sql = 'INSERT INTO Customer(CustomerID, FName, LName, username, password, email, phoneNumber, address, zipCode) VALUES (?,?,?,?,?,?,?,?,?)';
        pool.query(sql, bind, function(err, result) {
            if(err) throw err;
            // return the last id
            callback(result.insertId);
        });
    }
}
module.exports = Customer;
