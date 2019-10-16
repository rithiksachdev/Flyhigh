const express = require('express');
//const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();
app.use(express.static(__dirname + '/public'));
// DB Config
const db = require('./config/keys').MongoURI;
// Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true })
 .then(() => console.log('MongoDB connected...'))                                                                                                                                                   
 .catch(err => console.log(err));
 //EJS
 //app.use(expressLayouts);
 //app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//BodyParser
app.use(express.urlencoded({ extended: true }));
//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

/*app.get('/users/login',function(req,res){
    res.render('login');
});
*/
const PORT = process.env.PORT || 3000;


app.use(function(req,res){
    console.log("looking for"+req.url);
});

app.listen (PORT, console.log(`Server started on port ${PORT}`));

