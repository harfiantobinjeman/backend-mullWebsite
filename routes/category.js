const express = require('express');
const categoryController = require('../controllers/categoryController');

const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/',checkAuthMiddleware.checkAuth, categoryController.save);
router.get('/', categoryController.index);
router.patch('/:id',checkAuthMiddleware.checkAuth, categoryController.updated);
router.delete('/:id',checkAuthMiddleware.checkAuth, categoryController.destroy);

module.exports = router;