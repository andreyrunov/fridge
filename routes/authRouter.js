require('dotenv').config();
const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.render('auth');
  });

module.exports = router;
