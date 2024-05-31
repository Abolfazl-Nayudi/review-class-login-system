const { Router } = require('express');
const {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
  getSinglePorduct,
  insertMany,
} = require('../controllers/product.controllers');
const router = Router();

router.route('/insert').post(insertMany);
router.route('/').get(getAllProducts).post(createProduct);
router
  .route('/:id')
  .delete(deleteProduct)
  .patch(updateProduct)
  .get(getSinglePorduct);

module.exports = router;
