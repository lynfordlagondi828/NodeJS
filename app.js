//import database models
require('./models/db');

const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars'); 
const bodyParser = require('body-parser');
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

app.set('views', path.join(__dirname, '/views/'));


app.engine('hbs',expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars),
  extname: 'hbs', defaultLayout: 'mainLayout',layoutsDir:__dirname + '/views/layouts/'
}));
app.set('view engine', 'hbs');


app.listen(3000,()=>{
  console.log('Express Server start at PORT 3000 ');
});

app.use('/employee', employeeController);
