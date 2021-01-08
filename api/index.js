const express = require('express'),
 app = express(),
 cors = require('cors'),
 morgan = require('morgan'),
 router = require('./routes/rutas'),
 port = process.env.PORT || 5000;
 
 //middleware
 app.use(morgan('dev'));
 app.use(cors());
 app.use(express.json());
 
 //routes
 app.use(router);

 //start server
app.listen(port, ()=> console.log('Backend server live on ' + port));