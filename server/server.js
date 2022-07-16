const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());


var router = require('./routes.js');
// routing
app.use('/snuggie', router);

app.listen(process.env.PORT);
console.log(`You are listening to ${process.env.PORT}`);