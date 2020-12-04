const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
path = require('path');
require('dotenv').config();

const app = express();

const indexRoute = require('./router/rout')

mongoose
    .connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

});

mongoose.connection
    .on('open', () => {
    console.log('Mongoose connection open');
 })
 .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
 });

 
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

//middleware setting
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', indexRoute);

//creates a server
app.listen(3000, () => console.log('listening on port 3000'));