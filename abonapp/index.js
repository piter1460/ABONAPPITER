'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 8080



app.listen(port, ()=>{
    console.log("conectado"+ port)
});
