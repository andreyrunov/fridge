require('dotenv').config();
const { User } = require('../db/models');
const router = require('express').Router();

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
    await User.create({
      name, login, pass, isAdmin: false,
    });
    res.sendStatus(200);

    // console.log(name, login, pass, isAdmin);
    /* console.log(users);
    console.log(login); */
  });

module.exports = router;
