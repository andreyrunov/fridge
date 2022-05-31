require('dotenv').config();
const bcrypt = require('bcrypt');
const router = require('express').Router();
const { User } = require('../db/models');

router.route('/')
  .get((req, res) => {
    res.render('auth');
  });

router.route('/authorize')
  .post(async (req, res) => {
    try {
      const { login } = req.body;
      const { pass } = req.body;
      const authUser = await User.findOne({ where: { login } });
      if (authUser) {
        const encryptPass = await bcrypt.compare(pass, authUser.pass);
        if (encryptPass) {
          req.session.userName = authUser.name;
          req.session.userEmail = authUser.login;
          req.session.userId = authUser.id;
          req.session.isAdmin = authUser.isAdmin;
          res.sendStatus(200);
        } else {
          res.sendStatus(201);
        }
      } else {
        res.sendStatus(201);
      }
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router;


