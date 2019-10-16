const express =  require ('express');
const router = express.Router();
const User = require('../models/User');
router.get('/login', (req,res)=>res.render('login'));
router.get('/register', (req,res)=>res.render('register'));
router.get('/final', (req,res)=>res.render('final'));
router.post('/login', (req,res) => {
    
    res.render('home');
});
router.post('/register', (req,res) => {
    
    res.render('login');
});

module.exports = router;