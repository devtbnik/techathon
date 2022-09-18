require("dotenv").config();
require("./config/connection");
var usersRouter = require('./routes/users');
const path = require('path');
const express = require("express");

const app = express();
const cors = require("cors");

const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));

app.use('/public', express.static(path.resolve(__dirname, './public')));

app.use('/api', usersRouter);
// Logic goes here


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile({"message":"Please enter a valid path."});
})

module.exports = app;