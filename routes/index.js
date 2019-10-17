const express = require ('express');
const router = express.Router();

router.get('/', (req,res)=>res.render('home'));
router.post('/', (req,res) => {
    console.log(req.body);
    res.render('final');
});

router.post('/', function(request, response){
    console.log(request.body.user.sadd);
    console.log(request.body.user.dadd);
    console.log(request.body.user.date);
});

module.exports = router;
