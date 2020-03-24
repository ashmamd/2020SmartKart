const express = require('express');
const router = express.Router();
const Customer = require('../database/customer');

const customer = new Customer();

//sends to index.html page in the beginning
router.get('/', (req, res, next) => {
    res.render('');
})

router.get('/home', (req, res, next) => {
    res.send('This is the home page');
})

//user login
router.post('/login', (req, res, next) => {
    customer.login(req.body.username, req.body.password, function(result) {
        if(result) {
            //req.session.customer = result;
            res.send(req.body);
            //req.session.opp = 1;
            //window.location.href = "mainPageEng.html";
        }else {
            res.send('Username/Password incorrect!');
        }
    })

});


//user create account
router.post('/createAccount', (req, res, next) => {
    res.send(req.body);
})
module.exports = router;
