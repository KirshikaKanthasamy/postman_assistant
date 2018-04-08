/**
 * Created by User on 02-Mar-18.
 */
const express=require('express');
const path =require('path');
const bodyParser=require('body-parser');
const cors = require('cors');
const passport=require('passport');
const mongoose = require('mongoose');
const config=require('./configuration/databaseConnection');

require('./configuration/passport')(passport);

const app = express();
//database connection
mongoose.connect(config.database);

//check connection
//if connected
mongoose.connection.on('connected',function () {
    console.log('Database is connected');
});

//if connection fails or error
mongoose.connection.on('error',function (err) {
    console.log('Database is not connected. Database error: '+err);
});

const users=require('./routes/users');

//port
const port=3000;

//middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use('/users',users);

//static folder
app.use(express.static(path.join(__dirname,'public')));

//index route
app.get('/', function (req,res) {
    res.send("Hello world")
});

app.listen(3000);
console.log("Server is running");
