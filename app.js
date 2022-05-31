require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const adminRouter = require('./routes/adminRouter');
const checkSession = require('./middlewares/checkSession');
const indexRouter = require('./routes/indexRouter');
const authRouter = require('./routes/authRouter');
const registerRouter = require('./routes/registerRouter');
const registerSuccessRouter = require('./routes/registerSuccessRouter');
const logoutRouter = require('./routes/logoutRouter');

const PORT = process.env.PORT ?? 3000;

const app = express();
hbs.registerPartials(path.join(process.env.PWD, '/views/partials'));
hbs.registerHelper('checkAdmin', (role) => (role === true));
app.set('view engine', 'hbs');

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  name: 'sessionID',
  store: new FileStore({}),
  secret: process.env.SESSION,
  resave: true,
  saveUninitialized: false,
}));
app.use(checkSession);
app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);
app.use('/register', registerRouter);
app.use('/registerSuccess', registerSuccessRouter);
app.use('/logout', logoutRouter);

app.listen(PORT, () => {
  console.log('Server start on port', PORT);
});
