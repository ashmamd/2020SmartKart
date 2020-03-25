/*

const express = require('express');
const router = express.Router();
//const Customer = require('../database/customer');

//const customer = new Customer();

/*
//sends to index.html page in the beginning??
router.get('/', (req, res, next) => {
    res.render('');
})

router.get('/home', (req, res, next) => {
    res.send('This is the home page');
})
/*
//user create account
router.post('/createAccount', (req, res, next) => {
    res.send(req.body);
})



//user login
con.query('SELECT username AS user, password AS pass FROM Customer', function (error, results, fields) {
    if (error) throw error;
    console.log('The username and password is: ', results[1].user, ', ' ,results[1].pass);
    router.post('/login', (req, res, next) => {
      //console.log('before checking');
      if((res.send(req.body.username) = results[1].user) && (res.send(req.body.password) = results[1].pass))
        console.log('you entered the right credentials');
      });
    
  });

  router.post('/login', (req, res, next) => {
    if((res.send(req.body.username) == results[1].user) && (res.send(req.body.password) == results[1].pass))
      console.log('you entered the right credentials');
    });
    //res.send(req.body.username);
*/

//module.exports = router;
