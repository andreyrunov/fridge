require('dotenv').config();
const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.render('register');
  });

module.exports = router;
