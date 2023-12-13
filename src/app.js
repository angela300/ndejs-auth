//MongoDb
require("./config/db")

const express = require("express")

//BodyParser will enable us supply json values to our server requests
const bodyParser = express.json;

//Cors will enable us make requests to the api from external applications
const cors = require ("cors")

//create server app
const app = express();

//app and cors passed as middleware
app.use(cors())
app.use(bodyParser());

module.exports = app;