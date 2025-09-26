const categoryController = require('../controllers/categoryController');
const express = require('express');
const router = express.Router();

router.post('/creete', categoryController.createCategory);

module.exports = router;