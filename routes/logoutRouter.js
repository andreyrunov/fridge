require('dotenv').config();
const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('autorization');
    res.redirect('/auth');
  });

module.exports = router;
