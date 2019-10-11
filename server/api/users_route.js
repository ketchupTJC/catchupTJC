const router = require('express').Router();
const { User } = require('../db/models');
module.exports = router;

router.get('/', () => async (req, res, next) => {
  try {
    const users = await User.findAll({});
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// router.post('/', async (req, res, next) => {
//   try {
//     const user = await User.create({
//       email: req.body.email,
//     });
//     res.send(user);
//   } catch (err) {
//     next(err);
//   }
// });
