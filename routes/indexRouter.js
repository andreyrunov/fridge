require('dotenv').config();
const router = require('express').Router();
const { Item } = require('../db/models');

const userId = 1;

router.route('/')
  .get(async (req, res) => {
    const allItems = await Item.findAll({ where: { user_id: userId }, raw: true });
    // console.log(allItems);

    res.render('index', { allItems });
  });

module.exports = router;
