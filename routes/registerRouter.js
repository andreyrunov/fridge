require('dotenv').config();
const bcrypt = require('bcrypt');
const router = require('express').Router();
const { User } = require('../db/models');

const saltRounds = 5;

router.route('/')
  .get((req, res) => {
    res.render('register');
  });
/* .post(async (req, res) => {
    const { name, mail, pass } = req.body;
    await User.create({ name, mail, pass });
    return res.sendStatus(200);
  }); */

router.route('/addNewUser')
  .post(async (req, res) => {
    const {
      name, login, pass,
    } = req.body;
    const user = await User.findOne({ where: { login } });
    if (user) {
      return res.sendStatus(201);
    }
    try {
      const encryptPass = bcrypt.hashSync(pass, saltRounds);

      await User.create({
        name, login, pass: encryptPass, isAdmin: false,
      });
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
    }

    // console.log(name, login, pass, isAdmin);
    /* console.log(users);
    console.log(login); */
  });

module.exports = router;
