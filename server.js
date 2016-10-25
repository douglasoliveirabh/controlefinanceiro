var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var cors = require('cors');


var app = express();

//Console logs
//var morgan = require('morgan');

//config file
//VERIFICAR DEPOIS PQ NÃO ESTÁ CRIANDO A VARIAVEL DE AMBIENTE
var config = require('./config/env/' + (process.env.NODE_ENV || 'development'));
//var config = require('./config/env/development');

// Routes
var index = require("./routes/index");
var users = require("./routes/users");
var auth = require("./routes/auth")(app, config);

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.db);


//secret variable
app.set('superSecret', config.secret);
//app.set('config', config);

//app.use(morgan('dev'));
require("./config/middlewares/logging")(app, config.logging);

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

//enable cors
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'client')));

// Set body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Set routes
app.use('/', index);
app.use('/api/users', users);
app.use('/api/auth', auth);
//app.use('/api/customers', customers)


app.listen(config.port, function(){
    console.log('Server started on port: ' +  config.port)
})