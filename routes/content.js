const express = require('express');
const contenController = require('../controllers/content/contentController');

const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/',checkAuthMiddleware.checkAuth, contenController.simpan);
// router.get('/', categoryController.index);
router.patch('/:id',checkAuthMiddleware.checkAuth, contenController.updated);
router.delete('/:id',checkAuthMiddleware.checkAuth, contenController.deletes);

module.exports = router;