const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.get('/create', usersController.createUser );
router.post('/login', usersController.validateUser );
router.get('/getAllUsers', usersController.getAllUsers );
router.get('/getUserById', usersController.getUserById );
router.get('/getUserByUsername', usersController.getUserByUsername );
router.get('/getUserByEmail', usersController.getUserByEmail );
router.put('/updateUser', usersController.updateUser );
router.delete('/deleteUser', usersController.deleteUser );
module.exports = router;