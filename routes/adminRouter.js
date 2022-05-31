require('dotenv').config();
const router = require('express').Router();
const { Item } = require('../db/models');
const checkAuth = require('../middlewares/checkAuth');

router.route('/')
  .get(checkAuth, async (req, res) => {
    if (req.session.isAdmin) {
      const { userId } = req.session;
      const { userName } = req.session;
      const { isAdmin } = req.session;

      const allItems = await Item.findAll({ where: { user_id: userId }, raw: true });
      // console.log(allItems);
      res.render('admin', { allItems, userName, isAdmin });
    } else {
      res.redirect('/');
    }
  });

router.route('/addItem')
  .post(async (req, res) => {
    const { userId } = req.session;
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

router.route('/update/:id')
  .put(async (req, res) => {
    const resp = req.body;
    console.log(resp);
    console.log(req.params.id);

    await Item.update({ name: req.body.name, img: req.body.photo }, { where: { id: req.params.id } });
    res.sendStatus(200);
  });

module.exports = router;
