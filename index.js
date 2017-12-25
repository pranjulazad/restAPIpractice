const express = require('express');
const  bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const app = express();

mongoose.connect('mongodb://localhost/prosGo');
mongoose.Promise = global.Promise; 

//app.use(express.static('public'));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(flash());
require('./passport')(passport);
app.use('/api',require('./routes/api'));
app.use(function(err,req,res,next){
    res.status(422).send({error : err._message});
})

app.listen(process.env.port || 4000, function(){
    console.log('Now Listening for Requests : ');
})