const express =  require ('express');
const router = express.Router();
const User = require('../models/User');
router.get('/login', (req,res)=>res.render('login'));
router.get('/register', (req,res)=>res.render('register'));
router.post('/login', (req,res) => {
    console.log(req.body);
    res.send('hello');
});
module.exports = router;
