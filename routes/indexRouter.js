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

router.route('/addItem')
  .post(async (req, res) => {
    const {
      name, photo,
    } = req.body;
    const item = await Item.create({
      name, img: photo, user_id: userId,
    });
    // console.log('------------------>', item);
    res.json(item);
  });

/* router.route('/delete/:id')
  .get(async (req, res) => {
    const result = req.params;
    console.log(result);
    const
  }); */

router.route('/delete/:id')
  .delete(async (req, res) => {
    await Item.destroy({ where: { id: req.params.id } });
    res.sendStatus('200');
  });

module.exports = router;
