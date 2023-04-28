const path = require('path');

const express = require('express');
// const bodyParser = require('body-parser');

const mainPage = require('./routes/main');
const usersPage = require('./routes/users')

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainPage);
app.use(usersPage);

app.listen(3000);