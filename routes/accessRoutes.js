const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.post('/create', usersController.createUser );
router.post('/login', usersController.validateUser );

module.exports = router;