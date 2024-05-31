const { Router } = require('express');
const {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updatedUser,
  insertMany,
} = require('../controllers/user.controllers');
const router = Router();

router.route('/insert').post(insertMany);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').delete(deleteUser).patch(updatedUser).get(getSingleUser);

module.exports = router;
