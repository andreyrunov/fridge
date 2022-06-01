require('dotenv').config();
const router = require('express').Router();
const { Item } = require('../db/models');
const checkAuth = require('../middlewares/checkAuth');

router.route('/')
  .get(checkAuth, async (req, res) => {
    const { userId } = req.session;
    const { userName } = req.session;
    const { isAdmin } = req.session;
    // const allItems = await Item.findAll({ where: { user_id: userId }, raw: true });
    const allItems = await Item.findAll({ raw: true });
    // console.log(allItems);

    res.render('index', { allItems, userName, isAdmin });
  });

module.exports = router;
