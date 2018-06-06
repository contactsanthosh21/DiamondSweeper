/*
 * File Name: start.js
 * Description: Module handles the app running.
 *----------*
 * node  |  * licensed under the MIT license. | https://raw.githubusercontent.com/nodejs/node/master/LICENSE
 *----------*
 * Copyright (c) 2018: 
 * Authors: Santhosh S
 * Creation Date: 05 June, 2018
 */
const express = require('express');
const app = express();

app.set("view engine", "ejs"); 

app.use(express.static('public')) ;

app.get('/home', function (req, res) {
  res.render("home/index")
});

app.listen(3000, function () {
  console.log('Diamond Sweeper app listening on port 3000!')
});
