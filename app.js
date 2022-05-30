require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');
const authRouter = require('./routes/authRouter');

const PORT = process.env.PORT ?? 3000;

const app = express();
hbs.registerPartials(path.join(process.env.PWD, '/views/partials'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log('Server start on port', PORT);
});
