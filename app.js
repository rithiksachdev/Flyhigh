var express=require('express');

var app=express();

app.set('view engine','ejs');

app.use(require('body-parser').urlencoded({extended : true}));

app.set('port',process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));


app.get('/',function(req,res){
    res.render('home');
});

app.get('/login',function(req,res){
  res.render('login');
});

app.get('/register',function(req,res){
  res.render('register');
});

app.use(function(req,res,next){
    console.log("looking for url"+ req.url);
});


app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + ' press Ctrl-C to terminate');
});

