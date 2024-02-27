require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const PORT = process.env.PORT || 4000;
const expressLayouts = require('express-ejs-layouts');
const indexRoute = require('./routes');

app.set('view engine', 'ejs');
app.set('views', __dirname, '/views')
app.use(express.static('public'))
app.set('layout', 'views/layouts/layout.ejs')
app.use(expressLayouts);
app.use('/', indexRoute);
mongoose.connect(process.env.DATABASE_URI);
const db = mongoose.connection;
db.on('error', (error)=>console.log(`Error: ${error}`));
db.once('open', ()=>console.log(`Connected to MongoDB`));
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

