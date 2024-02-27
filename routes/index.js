const express = require('express');
const indexRoute = express.Router();

indexRoute.route('/').get((req, res)=>res.render('views/index.ejs'));

module.exports = indexRoute;