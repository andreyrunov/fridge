require('dotenv').config();
// const { User } = require('../db/models');
const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.render('registerSuccess');
  });

module.exports = router;
