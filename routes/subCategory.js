const express = require('express');
const subCategoryController = require('../controllers/subCategoy/subCategoryController');

const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/',checkAuthMiddleware.checkAuth, subCategoryController.simpan);
router.patch('/:id',checkAuthMiddleware.checkAuth, subCategoryController.updated);
router.delete('/:id',checkAuthMiddleware.checkAuth, subCategoryController.deletes);

module.exports = router;