const express = require('express');
//const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname+'css'));
app.use(express.static(__dirname+'node_modules'));
// DB Config
const db = require('./config/keys').MongoURI;
// Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true })
 .then(() => console.log('MongoDB connected...'))
 .catch(err => console.log(err));
 //EJS
app.set('view engine', 'ejs');
//BodyParser
app.use(express.urlencoded({extended : false}));

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;

app.listen (PORT, console.log(`Server started on port ${PORT}`));
