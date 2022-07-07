require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

var router = require('./routes.js');
// routing
// app.use('/snuggie', router);

app.listen(process.env.PORT);
console.log(`You are listening to ${process.env.PORT}`);