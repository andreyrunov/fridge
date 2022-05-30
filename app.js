require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');
const indexRouter = require('./routes/indexRouter');
const authRouter = require('./routes/authRouter');
const registerRouter = require('./routes/registerRouter');

const PORT = process.env.PORT ?? 3000;

const app = express();
hbs.registerPartials(path.join(process.env.PWD, '/views/partials'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/register', registerRouter);

app.listen(PORT, () => {
  console.log('Server start on port', PORT);
});
