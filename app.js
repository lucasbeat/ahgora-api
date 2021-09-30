const express = require('express');
const Server = require('./bin/server');
const { saveInterval } = require
const app = express();

app.use(express.json());
app.use('/pausas', mongodb);

app.listen(port, console.log(`Running on: ${port}`));

const mongoose = require('mongoose');
require('dotenv').config();

Server.connectDatabase();